import React, { lazy, Suspense } from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";

const Auth = lazy(() => import("./components/Auth/Auth"));
const MainComponent = lazy(() => import("./components/Main/MainComponent"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading Page...</div>}>
          {" "}
          {/*prelaoder here in fallback*/}
          <Route path="/main" component={MainComponent}></Route>
          <Route path="/auth" component={Auth}></Route>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
