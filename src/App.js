import "./App.css";
import {Routes,Route} from "react-router-dom";
import {Navbar,Footer} from "./components";
import {Login,SignUp} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
