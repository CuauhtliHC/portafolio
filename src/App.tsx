import React, { Fragment } from "react";
import Home from "./components/home/Home";
import NavBar from "./components/nabvar/NavBar";

function App(): JSX.Element {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
}

export default App;
