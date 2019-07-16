import React, { Component } from 'react';
import '../CSS/ShowTODos.css';
import ToDo from './ToDo';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {getToDo} from '../Actions/actionCreators'

class ShowToDos extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos :this.props.todos ? this.props.todos: [] 
    }
  }

  componentWillReceiveProps(nextprops){
    this.setState({todos:nextprops.todos})
  }

  componentDidMount(){
    this.props.getToDo();
  }

  render() {
    return (
        <div className="show-todos-body">
           <Grid container direction="row" alignItems="center" justify="center">
              {this.state.todos.map((item,index)=>{
                return <ToDo key={index} item ={item}/>
              })}
           </Grid>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getToDo: () => dispatch(getToDo()),
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowToDos);
