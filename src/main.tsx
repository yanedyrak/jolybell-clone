import ReactDOM from "react-dom/client";
import "./main.scss";
import Header from "./UI/Header/Header.tsx";
import Footer from "./UI/Footer/Footer.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./UI/Item/Item.tsx";
import Message from "../src/components/Message/Message.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/sweatshirts" element={<Item price={47} title="4" />} />
        <Route path="/2" element={2} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
