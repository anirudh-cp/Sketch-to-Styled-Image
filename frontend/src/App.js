import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import NoPage from './components/common/NoPage';

import Home from "./pages/Home";

import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
