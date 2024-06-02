
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import { ProductProvider } from './context/ProductContext';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={AllProducts} />
            <Route path="/product/:productId" component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
