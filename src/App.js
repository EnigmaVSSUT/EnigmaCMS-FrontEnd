import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Events from "./components/Events";
import EventDetails from "./components/Events/EventDetails";
import ProjectDetails from "./components/Project/ProjectDetails";
import Scroll from "./components/Scroll/Scroll";

const Home = lazy(() => import("./components/Home/Home"));
const Objective = lazy(() => import("./components/Home/sections/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Auth = lazy(() => import("./components/Auth/Auth"));
const Team = lazy(() => import("./components/Team/Team"));
const Alumni = lazy(() => import("./components/Team/Alumni"));
const Project = lazy(() => import("./components/Project/Project"));
const AboutUs = lazy(() => import("./components/About/AboutUs"));
const Colab = lazy(() => import("./components/About/components/Colab"));



function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Preloader />}>
            {/* <Route
              path="/project/:cardId"
              render={(props) => <Project {...props} />}
              exact
            /> */}
            <Route exact path='/aboutus' component={AboutUs} />
            <Route exact path='/colab' component={Colab} />
            <Route path="/projects" component={Project} exact />
            <Route path="/objective" component={Objective} exact />
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/auth" component={Auth} exact />
            <Route path="/team" component={Team} exact />
            <Route exact path='/team/alumni' component={Alumni}/>
            <Route path="/events" component={Events} exact />
            <Route path="/events/:slug" component={EventDetails} exact />
            <Route path="/projects/:slug" component={ProjectDetails} exact />
          </Suspense>
        </Switch>
      </BrowserRouter>
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
