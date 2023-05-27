import React from "react";

function Table({ tableFor, qty, AllQty }) {
  return (
    <div>
      <p>
        Стол для <span>{tableFor}</span> персон
      </p>
      <p>
        Всего столов <span>{AllQty}</span>
      </p>
      <p>
        Доступно столов <span>{qty}</span>
      </p>
    </div>
  );
}

export default Table;
