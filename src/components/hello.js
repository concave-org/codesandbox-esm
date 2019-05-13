import { createComponent, html } from "https://unpkg.com/@concave/concave@1.4.0/dist/concave.esm.js";

const render = (state, props) => ({
  h: html`
    <section id="${props.componentID}">
      <p id="dynamic">${state.text}</p>
    </section>
  `,
  attrs: { dynamic: { onclick: event => console.log(event) } }
});

const props = { componentID: "hello-world" };

export default createComponent(render, props);