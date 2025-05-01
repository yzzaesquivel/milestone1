import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ProductList from './components/ProductList'; // Import the ProductList component

const App = () => {
  return (
    <Router>
      <div>
        <Signup />
        <hr />
        <Login />
        <hr />
        <nav>
          <Link to="/products">Go to Product List</Link>
        </nav>
        <hr />
        {/* Add a route for the Product List */}
        <Routes>
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
