import { Routes, Route, Link } from 'react-router-dom';
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home'; 


function App() {
  const [count, setCount] = useState(0)
}
  return (
    <div id="container">
    <h1>Hello React Router!</h1>
    <div id="navbar">
 <Link to="/blue">Blue</Link>  {/* Link to the "/blue" route */}
        <Link to="/red">Red</Link>    {/* Link to the "/red" route */}
        <Link to="/">Home</Link>  {/* Link to "/" (Home) route */}
 </div>
 <div id="main-section">
    <Routes>
    <Route path="/blue" element={<h1>Blue</h1>} />  {/* Route for "/blue" */}
          <Route path="/red" element={<h1>Red</h1>} />    {/* Route for "/red" */}
          <Route path="/" element={<Home />} />  {/* Default Home route */}
        </Routes>

      </div>
    </div>
  );
        

export default App
