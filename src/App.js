import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vitamins from './pages/Vitamins/Vitamins'


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";




function App() {
  return (
    <Router>
      <div>
        <Navbar />
       

        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/vitamins" component={Vitamins} />
        
          
         
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
