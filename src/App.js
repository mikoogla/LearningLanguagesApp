import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import DictionarySync from "./sync/DictionarySync";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setState } from "./store/index";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.logic.state);
  const location = useLocation().pathname.replace(/[/]/g, "");
  if (
    location === "dictionary" ||
    location === "notes" ||
    location === "hide"
  ) {
    dispatch(setState(location));
  }
  return (
    <div className={styles.main}>
      <Switch>
        <Route path="/">
          <Redirect to={`/${state}`} />
          <header>
            <Navbar />
            <DictionarySync />
          </header>
          <main>
            <Content />
          </main>
          <footer>
            <Footer />
          </footer>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
