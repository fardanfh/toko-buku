import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Beranda from "./pages/Beranda";
import Lifestyle from "./pages/Lifestyle";
import Tentang from "./pages/Tentang";
import Checkout from "./pages/Checkout";
import FashionAksesoris from "./pages/FashionAksesoris";
import Technology from "./pages/Technology";
import Bisnis from "./pages/Business";
import Novel from "./pages/Novel";
import ProductDetail from "./pages/ProductDetail";
import DetailPengiriman from "./pages/DetailPengiriman";



import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact component={Beranda} />
            <Route path="/tentang" component={Tentang} />
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/lifestyle" component={Lifestyle} />
            <Route exact path="/fashion-accessories" component={FashionAksesoris} />
            <Route exact path="/technology" component={Technology} />
            <Route exact path="/business" component={Bisnis} />
            <Route exact path="/novel" component={Novel} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/detail-pengiriman" component={DetailPengiriman}/>
           
            
            
        
        
        
       
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
