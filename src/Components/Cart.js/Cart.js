import React from "react";
import Total from "./Total";
import Items from "./Items";

export default function Cart({ selected }) {
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      <Items selected={selected} />
      <Total selected={selected} />
    </section>
  );
}