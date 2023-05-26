import React from "react";

function Table({ tableFor, qty }) {
  return (
    <div>
      <p>
        Стол для <span>{tableFor}</span> персон
      </p>
      <p>
        Всего столов <span>{qty}</span>
      </p>
      <p>
        Доступно столов <span>{qty}</span>
      </p>
    </div>
  );
}

export default Table;
