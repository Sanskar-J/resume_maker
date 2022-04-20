// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agartha from './components/Agartha';
import Form from './components/Form';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Form />} />
        <Route path="/agartha" element={<Agartha />} />
      </Routes>
      </Router>
    // <div>
    //   {/* <Form />
    //   <Agartha/> */}
    // </div>
  );
}

export default App;
