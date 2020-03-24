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

function App() {
  return (
    <div >
     <Header></Header>
    
     
     <Router>
       <Switch>
       <Route path="/breakfast">
            <Category></Category>
        </Route>
        <Route path="/dinner">
            <CategoryDinner></CategoryDinner>
        </Route>
        <Route path="/lunch">
            <CategoryLunch></CategoryLunch>
        </Route>
        <Route path="/">
            <Category></Category>
        </Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
