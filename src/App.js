import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import DictionarySync from "./sync/DictionarySync";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.logic.state);
  return (
    <div className={styles.main}>
      <Switch>
        <Route path={`/`}>
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
