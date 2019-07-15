import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../CSS/todo.css';
import $ from 'jquery'
import { deleteToDo } from '../Actions/actionCreators';
import {connect} from 'react-redux';
import AddModal from './AddModal';

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state ={
            completed : this.props.item.completed,
            showModal : false
        }
        this.handleTodoDone = this.handleTodoDone.bind(this);
        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
        this.handleEditToDo = this.handleEditToDo.bind(this)
    }
  
    handleTodoDone(event){
        event.preventDefault();
        if (this.state.completed === false){
            $(event.target).parents('.todo').addClass('todo-done')
            event.target.textContent = "Mark as not Done"
            this.setState({completed:true})
        }
        else{
            $(event.target).parents('.todo').removeClass('todo-done')
            event.target.textContent = "Mark as Done"
            this.setState({completed:false })
        }
    }

    handleDeleteToDo(id){
        this.props.deleteToDo(id);
    }

    handleEditToDo(){
        this.state.showModal ? this.setState({showModal:false}): this.setState({showModal:true})
        console.log(this.state.showModal)
    }

    render() {

    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);

    return (
      <div className="todo-body">
        <Card className={this.props.item.completed ?"todo todo-done":"todo"}>
        <div className="todo-strip" style={{height:"5px",backgroundColor: randomColor}}></div>
            <CardContent>
                <h4 className="todo-head">{this.props.item.name}
                <DeleteIcon className="dlt-icon hide" style={{float:"right"}} fontSize="small" onClick={() => this.handleDeleteToDo(this.props.item._id)}></DeleteIcon> 
                <EditIcon   className="edit-icon hide" style={{float:"right"}} fontSize="small" onClick={this.handleEditToDo}></EditIcon>
                </h4> 
                <Typography paragraph className="todo-main">
                   {this.props.item.description}...
                </Typography>
                <div>
                    <i><p className="todo-end">Target Date: {this.props.item.targetdate}</p></i>
                </div>
                
                <Button className="btn-todo-done" size= "small" variant= "outlined" color="secondary" onClick={this.handleTodoDone}>

                   {this.state.completed ? "Mark as not Done":"Mark as Done"} 
                </Button>

            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
        {this.state.showModal ? <AddModal handleToggleModal={this.handleEditToDo} showModalOpen={true} item={this.props.item} />:""}
      </div>
    );
  }

  componentDidMount(){
      $(document).ready(function(){
          $('.todo').hover(function(){
              $(this).find('.dlt-icon').removeClass("hide")
              $(this).find('.edit-icon').removeClass("hide")
          })

          $('.todo').mouseleave(function(){
            $(this).find('.edit-icon').addClass('hide')
            $(this).find('.dlt-icon').addClass('hide')
          })

      })
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteToDo : (id) => dispatch(deleteToDo(id))
    }
}

export default connect(null,mapDispatchToProps)(ToDo);