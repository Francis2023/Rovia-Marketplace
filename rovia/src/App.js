import React from 'react';
import { Route, useHistory, Switch} from 'react-router-dom';
import { HomePage } from './components/Home';
import { LoginPage } from './components/Login';
import { CartPage } from './components/Cart';
import { ProductPage } from './components/Product';
import { CreateProduct } from './components/CreateProduct';
import { SellerPage } from './components/Seller';
import { WishlistPage } from './components/Wishlist';
import './App.css';

export default function App() {

  const history = useHistory();
  return (
    <Route path="/login" component={LoginPage} />

    <Route
      path="/rovia/cart"
      exact
      component={() => <CartPage />}
    />
  );
}


