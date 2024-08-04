import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Detailedblog from "./components/Detailedblog";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-blog" element={<Post />} />
          <Route path="/blog/:id" element={<Detailedblog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
