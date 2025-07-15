import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./ContextAPI.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartContext>
      <App />
    </CartContext>
  </BrowserRouter>
);
