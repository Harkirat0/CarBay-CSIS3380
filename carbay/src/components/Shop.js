import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Cars from "./Cars";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, cars: action.payload, loading: false };
    case "FETCH_FAILED":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Shop() {
  const [{ loading, error, cars }, dispatch] = useReducer(reducer, {
    cars: [],
    loading: true,
    error: "",
  });

  const [wheels, setWheels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/cars")
        setWheels(result.data.cars);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        console.log(result);
      } catch (err) {
        dispatch({ type: "FETCH_FAILED", payload: err.message });
      }
    };
    fetchData();
  }, []);


  return (
    <section>
      <h2 className="m-8 lg:mb-12 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
        Shop All Cars
      </h2>
      <div className="grid gap-2 lg:grid-cols-3 m-10">
        {loading ? (
          <div>Loading cars...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
            wheels.map((car) => <Cars car={car}></Cars>)
        )}
      </div>
    </section>
  );
}

export default Shop;
