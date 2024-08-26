import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <section className="wrapper">
        <Header />
        <Main />
        <Footer />
      </section>
    </>
  );
}

export default App;
