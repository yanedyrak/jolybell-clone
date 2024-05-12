import Header from "../widgets/Header/Header.tsx";
import Footer from "../widgets/Footer/Footer.tsx";
import ItemsPage from "../widgets/ItemsPage/ItemsPage.tsx";
import "../main.scss";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <ItemsPage />
      <Footer />
    </div>
  );
}

export default App;
