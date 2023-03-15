import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header/Header";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-10 min-h-screen text-gray-500 sm:gap-16">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
