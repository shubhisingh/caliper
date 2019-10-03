import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';
import { employeeActions } from '../../store/actions';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.tableHead = ['Name', 'Age', 'Gender', 'Email', 'Phone'];
    }

    componentDidMount() {
      this.props.fetchEmployees();
    }

    render() {
      console.log(this.props);
      const tableData = this.props.employees.map((row) => [row.name, row.age, row.gender, row.email, row.phoneNo]);
      return (
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
            <Row data={this.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={tableData} textStyle={styles.text}/>
          </Table>
        </View>
      );
    }
}

const mapStateToProps = (state) => ({...state.employeeReducers});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(employeeActions.fetchEmployees())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff' 
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },
    text: { 
        margin: 6 
    }
});
