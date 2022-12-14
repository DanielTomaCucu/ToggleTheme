import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

function App() {
  const [theme, setTheme] = useState("ligth-theme");
  const toggleTheme = () => {
    if (theme === "ligth-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("ligth-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
