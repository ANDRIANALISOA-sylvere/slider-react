import "./assets/custom.css";
import "./assets/bootstrap-icons/bootstrap-icons.css";
import Cart from "./Components/Cart.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div class="text-light">
        <h2 class="text-center mt-5">SLIDER</h2>
        <hr />
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
