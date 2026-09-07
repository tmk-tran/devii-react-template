import "./App.css";
import deviiLogo from "./assets/devii-logo500.png";

function App() {
  return (
    <main style={{ textAlign: "center" }}>
      <img src={deviiLogo} alt="Devii" className="app-logo" />

      <h1>Devii React Template</h1>

      <p>Connect your Devii account to start querying your GraphQL API.</p>
    </main>
  );
}

export default App;
