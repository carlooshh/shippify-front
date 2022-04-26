/* eslint-disable react/jsx-pascal-case */
import { React, Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
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

export class Vehicle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    const seach = (
      <div className="col-12 mt-5">
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Col md={10}>
              <Control.text
                model=".search"
                id="search"
                name="search"
                placeholder="Search by driver's name, phone number, or email"
                className="form-control"
              />
            </Col>
          </Row>
          <Row className="form-group mt-2">
            <Col md={{ size: 8, offset: 2 }}>
              <Button type="submit" color="primary">
                Search
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </div>
    );

    const menu = this.props.vehicles.map((vehicle) => {
      return (
        <Card key={vehicle.id} className="col-12 mt-5">
          <CardBody className="text-right">
            <CardTitle tag="h5">{vehicle.type}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {vehicle.plate}
            </CardSubtitle>
            <CardTitle>
              Model:
              <span> {vehicle.model} </span>
            </CardTitle>
            <CardTitle>
              Capacity:
              <span> {vehicle.capacity} </span>
            </CardTitle>
            <CardTitle>
              Created At:
              <span> {vehicle.creation_date.toISOString()} </span>
            </CardTitle>
            <div className="row">
              <Button>Update</Button>
              <Button>Delete</Button>
            </div>
          </CardBody>
        </Card>
      );
    });

    return (
      <div className="container">
        <div className="row">{seach}</div>
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
