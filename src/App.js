import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Events from "./components/Events";

const Home = lazy(() => import("./components/Home/Home"));
const Objective = lazy(() => import("./components/Home/sections/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Auth = lazy(() => import("./components/Auth/Auth"));
const Team = lazy(() => import("./components/Team/Team"));
const Alumin = lazy(() => import("./components/Team/Alumin"));
const Project = lazy(() => import("./components/Project/Project"));
const AboutUs = lazy(() => import("./components/About/AboutUs"));

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Preloader />}>
            <Route
              path="/project/:cardId"
              render={(props) => <Project {...props} />}
              exact
            />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route path="/projects" component={Project} exact />
            <Route path="/objective" component={Objective} exact />
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/auth" component={Auth} exact />
            <Route path="/team" component={Team} exact />
            <Route exact path='/team/alumnai' component={Alumin}/>
            <Route path="/events" component={Events} exact />
          </Suspense>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
