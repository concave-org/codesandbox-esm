import {
  runPipeline,
  createStore,
  createRouter,
  createRenderer,
  createPipeline
} from "https://unpkg.com/@concave/concave@1.3.0/dist/concave.esm.js";

import * as helloPipe from "/src/pipelines/hello.js";

const appStore = createStore((state, action, dispatch) => {
  switch (
    action.type
    // ...dispatch state here with new state
  ) {
  }
  return action;
});

const routes = [
  { path: "/", pipe: helloPipe },
  { path: "/hello", pipe: helloPipe },
  { fallback: "/" }
];

const appRouter = createRouter(routes);

const appRender = createRenderer(document.getElementById("app"));

const logger = (action, dispatch) => {
  console.log(action);
  return action;
};

const corePipe = createPipeline(logger, appStore, appRouter, appRender);

const initialState = {
  text: "Hello World"
};

runPipeline(corePipe)(initialState);
