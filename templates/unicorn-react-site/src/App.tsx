import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Card } from "@test-lib/library-react";
import "@test-lib/library-react/css/stylex.css";
import "@test-lib/library-react/css/style.css";
import NewComponent from "./NewComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NewComponent></NewComponent>
        <Button>Test</Button>
        <Card>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis esse
          maxime voluptatem libero iusto, atque unde architecto dolorum
          explicabo, totam consectetur, odio est laudantium voluptate officia
          iste minus facere repudiandae! Aspernatur nihil a, aliquid placeat
          sint neque sequi iste delectus dolorum inventore ratione? Praesentium
          impedit saepe harum magni dolorum maiores nobis! Atque, assumenda
          recusandae. Velit voluptatem fugit veniam asperiores quas.
        </Card>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
