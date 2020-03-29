import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Category from './Components/Category/Category';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CategoryDinner from './Components/CategoryDinner/CategoryDinner';
import CategoryLunch from './Components/CategoryLunch/CategoryLunch';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div >
     <Header></Header>
     
     <Router>
       <Switch>
       <Route exact path="/breakfast">
            <Category></Category>
        </Route>
        <Route exact path="/dinner">
            <CategoryDinner></CategoryDinner>
        </Route>
        <Route exact path="/lunch">
            <CategoryLunch></CategoryLunch>
        </Route>
        <Route exact path="/">
            <Category></Category>
        </Route>
        <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>
        </Route>
        <Route path="/Login">
            <Login></Login>
        </Route>
        <Route path="/SignUp">
            <SignUp></SignUp>
        </Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
