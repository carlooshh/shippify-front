import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Vehicle } from "../components/VehicleComponent";
import { Component } from "react";
import { VEHICLES } from "../shared/vehicles";
import { Provider } from "react-redux";
import { store } from "../redux/configureStore";
import { getByDriver } from "../redux/ActionCreator";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getByDriver: (search) => dispatch(getByDriver(search)),
});

class Main extends Component {
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

          <Vehicle
            vehicles={this.state.vehicles}
            getByDriver={this.props.getByDriver}
          />
        </div>
      </Provider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
