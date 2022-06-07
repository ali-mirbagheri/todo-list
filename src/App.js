import "./App.css";
import Header from "./components/Header";
import Middle from "./components/Middle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Middle />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
