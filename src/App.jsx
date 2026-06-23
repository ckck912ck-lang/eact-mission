import "./App.css";
import Card from "./components/Card";

function App() {
  const product = {
    name: "무선 키보드",
    price: 39000,
    brand: `EZTECH`,
  };
  return (
    <div>
      <Card name={product.name} price={product.price} brand={product.brand} />
    </div>
  );
}

export default App;
