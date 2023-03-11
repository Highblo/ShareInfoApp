import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header/Header";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen text-[#778a99]">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
