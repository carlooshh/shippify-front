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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

export class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVehicle: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.props.getByDriver(event.search);
    event.preventDefault();
  }

  handleUpdate(event) {
    console.log(event);
    // this.setState({
    //   selectedVehicle: event.id,
    // });
    // this.props.update(event);
  }

  render() {
    const seach = (
      <div className="col-12 mt-5 " md={{ size: 8, offset: 2 }}>
        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
          <Row className="form-group">
            <Col md={12}>
              <Control.text
                model=".search"
                id="search"
                name="search"
                placeholder="Search by driver's name, phone number, or email"
                className="form-control "
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

    const vehicleDetail = <span>{this.selectedVehicle}</span>;

    const menu = this.props.vehicles.map((vehicle) => {
      return (
        <Card key={vehicle.creation_date} className="col-12 mt-5">
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
              driver`s name:
              <span> {vehicle.first_name} </span>
            </CardTitle>
            <CardTitle>
              Driver`s phone:
              <span> {vehicle.phone} </span>
            </CardTitle>
            <CardTitle>
              Driver`s email:
              <span> {vehicle.email} </span>
            </CardTitle>
            <div className="row">
              <Button onClick={this.handleUpdate(vehicle)}>Update</Button>
              <Button>Delete</Button>
            </div>
          </CardBody>
        </Card>
      );
    });

    const dialog = (
      <Modal toggle={function noRefCheck() {}}>
        <ModalHeader
          close={
            <button className="close" onClick={function noRefCheck() {}}>
              ×
            </button>
          }
          toggle={function noRefCheck() {}}
        >
          Modal title
        </ModalHeader>
        <ModalBody></ModalBody>
        <LocalForm onSubmit={(values) => this.handleUpdate(values)}>
          <Row className="form-group">
            <Col md={12}>
              <Control.text
                model=".id"
                id="id"
                name="id"
                placeholder="id"
                className="form-control "
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={12}>
              <Control.text
                model=".model"
                id="model"
                name="model"
                placeholder="model"
                className="form-control "
              />
            </Col>
          </Row>
        </LocalForm>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Atualizar
          </Button>{" "}
          <Button onClick={function noRefCheck() {}}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );

    return (
      <div className="container">
        <div className="row">{seach}</div>
        <div className="row">{vehicleDetail}</div>
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Vehicle;
