import React, { Component } from "react";
import Home from "../../Pages/HomePage";
import Header from "../Header";
import Footer from "../Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import {NewArrivals, BestSeller, SpecialOffer, Featured} from '../../Components/HomeNested'
import Grid from "../../Components/GridDefault";
import { Container } from "reactstrap";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home}>
            <Route path="arrivals" element={<NewArrivals />} />
            <Route path="bestSeller" element={<BestSeller />} />
            <Route path="featured" element={<Featured />} />
            <Route path="specialOffer" element={<SpecialOffer />} />
          </Route>
          <Route path="/grid" component={Grid} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
