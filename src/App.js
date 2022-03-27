import "./App.css";
import Header from "./components/Header";
import Place from "./components/Place";
import data from "./components/PlaceData";
import Footer from "./components/footer";

function App() {
  const placeElements = data.map((item) => {
    return <Place key={item.id} item={item} />;
  });
  return (
    <>
      <Header />
      {placeElements}
      <Footer />
    </>
  );
}

export default App;
