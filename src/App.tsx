import styles from "./App.module.scss";
import Faq from "./pages/faq/Faq.tsx";
import Message from "./shared/UI/Message/Message.tsx";
import Sweatshirts from "./pages/sweatshirts/Sweatshirts.tsx";
import Hoodies from "./pages/hoodies/Hoodies.tsx";
import Header from "./shared/UI/Header/Header.tsx";
import Footer from "./shared/UI/Footer/Footer.tsx";
import { Routes, Route } from "react-router-dom";
import Shirts from "./pages/shirts/Shirts.tsx";
function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Routes>
          <Route path="/" element={<Message />} />
          <Route path="/t-shirts" element={<Shirts />} />
          <Route path="/sweatshirts" element={<Sweatshirts />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
