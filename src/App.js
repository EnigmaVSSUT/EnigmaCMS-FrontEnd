import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer.js";
import Preloader from "./components/Preloader/preloader.jsx";
import Navbar from "./components/Navbar/navbar.jsx";

const Home = lazy(() => import("./components/Home/Home.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact.js"));
const Auth = lazy(() => import("./components/Auth/Auth.jsx"));
const Team = lazy(() => import("./components/Team/Team.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Suspense fallback={<Preloader />}>
          <Route path="/" component={Home} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/auth" component={Auth} exact />
          <Route path="/team" component={Team} exact />
        </Suspense>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
