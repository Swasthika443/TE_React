import Navbar from "./Components/Navbar";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from "./Components/Carousel";
import Icons from "./Components/Icons";
function App() {
  return (
    <div style={{padding:"20px"}} >
      <Navbar/>
      <Carousel/>
      <Icons/>
    </div>
  );
}

export default App;
