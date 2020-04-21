import React, {Suspense, lazy} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ErrorBoudaries from "./components/ErrorBoundary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <NavBar />
      <ErrorBoudaries>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoudaries>
      <Footer />
    </Router>
  );
}

export default App;
