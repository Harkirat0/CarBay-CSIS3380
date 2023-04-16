import react from "react";

export default function SideBar() {
  return (
    <div className="bg-slate-700 w-60 p-3 flex flex-col text-gray-200">
      <div className="flex items-center gap-2 px-1">
        <span className="text-neutral-100 text-lg">CarBay.</span>
      </div>
      <div>Bottom part</div>
    </div>
  );
}
