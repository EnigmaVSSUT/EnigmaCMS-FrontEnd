import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/navbar";

const Home = lazy(() => import("./components/Home/Home"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Auth = lazy(() => import("./components/Auth/Auth"));
const Team = lazy(() => import("./components/Team/Team"));

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Preloader />}>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/auth" component={Auth} exact />
            <Route path="/team" component={Team} exact />
          </Suspense>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
