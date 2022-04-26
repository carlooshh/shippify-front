import logo from "./logo.svg";
import "./App.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import { Vehicle } from "./components/VehicleComponent";
import { Component } from "react";
import { VEHICLES } from "./shared/vehicles";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: VEHICLES,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Shippify</NavbarBrand>
            </div>
          </Navbar>

          <Vehicle vehicles={this.state.vehicles} />
        </div>
      </Provider>
    );
  }
}

export default App;
