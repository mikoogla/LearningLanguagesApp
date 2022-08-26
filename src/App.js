import "./App.css";
import { useEffect } from "react";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import DictionarySync from "./sync/DictionarySync";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setState } from "./store/index";
import NotesSync from "./sync/NotesSync";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.logic.state);
  const location = useLocation().pathname.replace(/[/]/g, "");
  useEffect(() => {
    if (
      location === "dictionary" ||
      location === "notes" ||
      location === "hide"
    ) {
      dispatch(setState(location));
    }
  }, []);
  return (
    <div className={styles.main}>
      <Switch>
        <Route path="/">
          <Redirect to={`/${state}`} />
          <header>
            <Navbar />
            <DictionarySync />
            <NotesSync />
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
