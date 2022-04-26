import "../App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Vehicle } from "../components/VehicleComponent";
import { Component } from "react";
import { VEHICLES } from "../shared/vehicles";
import { Provider } from "react-redux";
import { store } from "../redux/configureStore";
import { getByDriver, fetchVehicles } from "../redux/ActionCreator";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getByDriver: (search) =>
    dispatch(fetchVehicles({ page: 1, limit: 20, search: search })),
  fecthVehicles: ({ page, limit }) => dispatch(fetchVehicles({ page, limit })),
});

class Main extends Component {
  componentDidMount() {
    this.props.fecthVehicles({ page: 1, limit: 20 });
  }

  constructor(props) {
    super(props);
    this.state = {
      vehicles: VEHICLES,
    };
  }

  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Shippify</NavbarBrand>
            </div>
          </Navbar>

          <Vehicle
            vehicles={this.props.vehicles.vehicles}
            getByDriver={this.props.getByDriver}
          />
        </div>
      </Provider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
