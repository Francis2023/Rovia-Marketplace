import React from 'react';
import { Route, useHistory, Switch} from 'react-router-dom';
import { HomePage } from './components/Home';
import { LoginPage } from './components/Login';
import { CartPage } from './components/Cart';
import { ProductPage } from './components/Product';
import { CreateProduct } from './components/CreateProduct';
import { SellerPage } from './components/Seller';
import { WishlistPage } from './components/Wishlist';
import { PurchaseHistory } from './components/PurchaseHistory';


export default function App() {

  //const history = useHistory();
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" exact component={() => <HomePage />} />
      <Route
        path="/rovia/cart"
        exact
        component={() => <CartPage />}
      />
      <Route
        path="/rovia/item/:id"
        exact
        component={() => <ProductPage />}
      />
      <Route
        path="/rovia/create"
        exact
        component={() => <CreateProduct />}
      />
      <Route
        path="/rovia/wishlist"
        exact
        component={() => <WishlistPage />}
      />
      <Route
        path="/rovia/seller/:name"
        exact
        component={() => <SellerPage />}
      />
      <Route
        path="/rovia/buyer/history"
        exact
        component={() => <PurchaseHistory />}
      />
    </Switch>
    
  );
}


