import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
          <Route path="/Download" exact component={() => <Download />} />
          <Route path="/Contact" exact component={() => <Contact />} />
          <Route path="/PrivacyPolicy" exact component={() => <Privacy />} />
          <Route path="/Terms" exact component={() => <Terms />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
