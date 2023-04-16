import { AiFillCar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cars(props) {
  const { car } = props;

  return (
    <div className="m-4 mb-0 group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] font-rubik">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        to={`/shop/${car.slug}`}
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={car.image1}
          alt="Cards"
        />
        <img
          className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0"
          src={car.image2}
          alt="Cards"
        />
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to={`/shop/${car.slug}`}>
          <h5 className="text-xl tracking-tight text-white">
            {car.make + " " + car.model + " " + car.year}
          </h5>
          <h6>{car.kilometers + " kms"}</h6>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-white">
              {"$" + car.price}
            </span>
          </p>
        </div>
        <a
          href="/#"
          className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-red-600 hover:bg-green-600 px-5 py-2.5 text-center text-sm font-medium text-white"
        >
          <AiFillCar className="mr-2 h-6 w-6" />
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Cars;
