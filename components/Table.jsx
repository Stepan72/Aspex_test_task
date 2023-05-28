import React from "react";

function Table({ tableFor, qty, AllQty, index, activePin }) {
  return (
    <div className="w-[280px] h-[300px] flex flex-col justify-between rounded-[30px] border-solid border-1">
      <img
        src={`assets/table-${index}.jpg`}
        className={` object-cover w-[280px] h-[300px] absolute rounded-[30px] z-0 ${
          activePin === index ? "opacity-1" : "opacity-[0.5]"
        }`}
        alt="table-img"
      />
      <h2 className="mt-[10px] text-[18px] font-bold z-10 border-solid border-2 rounded-lg mb-[10px] mx-[35px] bg-zinc-100">
        Стол для <span>{tableFor}</span> персон
      </h2>
      <div className="mb-[10px] mx-[25px] border-solid border-2 rounded-lg z-10 bg-zinc-100">
        <p className="text-rose-500 font-bold">
          Всего столов <span>{AllQty}</span>
        </p>
        <p className="text-green-500 font-bold">
          Доступно столов <span>{qty}</span>
        </p>
      </div>
    </div>
  );
}

export default Table;
