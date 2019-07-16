import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import '../CSS/todo.css';
import $ from 'jquery'
import { deleteToDo,updateStatusToDo} from '../Actions/actionCreators';
import {connect} from 'react-redux';
import AddModal from './AddModal';
import Icon from '@material-ui/core/Icon'

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state ={
            showState : "",
            completed : this.props.item.completed,
            editModal : false
        }
        this.handleTodoDone = this.handleTodoDone.bind(this);
        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
        this.handleEditToDo = this.handleEditToDo.bind(this)
    }
  
    async handleTodoDone(event){
        event.preventDefault();
        if (this.state.completed === false){
            $(event.target).parents('.todo').addClass('todo-done')
            event.target.textContent = "Mark as not Done"
           await this.setState({completed:true})
        }
        else{
            $(event.target).parents('.todo').removeClass('todo-done')
            event.target.textContent = "Mark as Done"
            await this.setState({completed:false })
        }
        this.props.updateStatusToDo(this.props.item._id,this.state.completed)
    }

    handleDeleteToDo(id){
        this.props.deleteToDo(id);
    }

    handleEditToDo(){
        this.state.editModal ? this.setState({editModal:false}): this.setState({editModal:true})
    }

    render() {

    let randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    let name = this.props.item.name.substring(0,10)
    let description = this.props.item.description.substring(0,20);
    let targetdate  = this.props.item.targetdate.substring(0,10)
    return (
      <div className="todo-body">
        <Card className={this.props.item.completed ?"todo todo-done":"todo"}>
        <div className="todo-strip" style={{height:"5px",backgroundColor: randomColor}}></div>
            <CardContent>
                <h4 className="todo-head">{name}
                <DeleteIcon className="dlt-icon hide" style={{float:"right"}} fontSize="small" onClick={() => this.handleDeleteToDo(this.props.item._id)}></DeleteIcon> 
                <EditIcon   className="edit-icon hide" style={{float:"right"}} fontSize="small" onClick={this.handleEditToDo}></EditIcon>
                </h4> 
                <Typography paragraph className="todo-main">
                   {description}...
                </Typography>
                <div>
                    <i><p className="todo-end">Target Date: {targetdate}</p></i>
                </div>
                <div>
                    <Button className="btn-todo-done" size= "small" variant= "outlined" color="secondary"  onClick={this.handleTodoDone}>
                    {this.state.completed ? "Mark as not Done":"Mark as Done"} 
                    </Button>
                    <Icon fontSize="small" className="show-icon hide" onClick={this.handleEditToDo}>visibility</Icon>
                </div>
            </CardContent>
        </Card>
        {this.state.editModal ? <AddModal handleToggleModal={this.handleEditToDo} showModalOpen={true} item={this.props.item} showState="show" />:""}
      </div>
    );
  }

  componentDidMount(){
      $(document).ready(function(){
          $('.todo').hover(function(){
              $(this).find('.dlt-icon').removeClass("hide")
              $(this).find('.edit-icon').removeClass("hide")
              $(this).find('.show-icon').removeClass("hide")
          })

          $('.todo').mouseleave(function(){
            $(this).find('.edit-icon').addClass('hide')
            $(this).find('.dlt-icon').addClass('hide')
            $(this).find('.show-icon').addClass("hide")
          })

      })
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deleteToDo : (id) => dispatch(deleteToDo(id)),
        updateStatusToDo:(id,completed) => dispatch(updateStatusToDo(id,completed))
    }
}

export default connect(null,mapDispatchToProps)(ToDo);