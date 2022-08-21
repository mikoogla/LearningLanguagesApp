import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.main}>
      <header>
        <Navbar />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
