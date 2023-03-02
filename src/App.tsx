import "./App.css";

import { Header } from "./components/header/Header";
import { InfoList } from "./components/main/InfoList";

function App() {
  return (
    <div className="min-h-screen text-[#778a99]">
      <Header />
      <InfoList />
    </div>
  );
}

export default App;
