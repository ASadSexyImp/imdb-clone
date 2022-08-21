import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <Routes>
                <Route index element={<h2>hello world</h2>}></Route>
                <Route path="movie/:id" element={<h2>hello world</h2>}></Route>
                <Route path="movies/:type" element={<h2>hello world</h2>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;