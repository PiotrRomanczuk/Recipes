import React from "react";

export default function Instructions({ title, steps }) {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((step, instruct) => (
        <p key={instruct}>{step}</p>
      ))}
    </section>
  );
}
