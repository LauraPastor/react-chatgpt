const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>one</li>
        </ul>
        <nav>
          <p>Made by a cyborg called Laura</p>
        </nav>
      </section>
      <section className="main">
        <h1>LauraGPT</h1>
        <ul className="feed">{/* <li></li> */}</ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➢</div>
          </div>
          <p className="info">
            Free Research Preview. ChatGPT may produce inaccurate information
            about people, places, or facts. ChatGPT May 24 Version
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
