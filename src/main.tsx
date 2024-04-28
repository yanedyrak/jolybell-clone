import ReactDOM from "react-dom/client";
import "./main.scss";
import Header from "./UI/Header/Header.tsx";
import Footer from "./UI/Footer/Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./pages/faq/Faq.tsx";
import Message from "../src/components/Message/Message.tsx";
import Sweatshirts from "./pages/sweatshirts/Sweatshirts.tsx";
import Hoodies from "./pages/hoodies/Hoodies.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/sweatshirts" element={<Sweatshirts />} />
        <Route path="/hoodies" element={<Hoodies />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
