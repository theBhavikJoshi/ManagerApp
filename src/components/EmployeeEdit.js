import _ from "lodash";
import React, { Component } from "react";
import { Picker, Text, View } from "react-native";
import { connect } from "react-redux";
import Communications from "react-native-communications";
import { Card, CardSection, Input, Button, Confirm } from "./common";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  state = { showModal: false };
  componentWillMount() {
    _.each(this.props.employee, (val, prop) => {
      this.props.employeeUpdate({ prop, val });
    });
  }

  onButtonPress() {
    const { name, shift, phone } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    console.log(this.props);
    const { phone, shift } = this.props.employee;

    Communications.text(phone, `Your upcoming Shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.employeeForm);
  const { name, shift, phone } = state.employeeForm;
  return { name, shift, phone };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
