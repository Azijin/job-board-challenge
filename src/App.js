import React from "react";
import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header className="header" name="The Job Board"></Header>
      <main>
        <Jobs className="container" />
      </main>

      <Footer className="footer" />
    </div>
  );
}
export default App;
