import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeView, CartView } from "../pages";
import "./App.css";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/cart" element={<CartView />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
