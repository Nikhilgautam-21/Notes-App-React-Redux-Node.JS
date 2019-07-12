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

class ToDo extends Component {
    constructor(props){
        super(props);
        this.state ={
            completed : this.props.item.completed
        }
        this.handleTodoDone = this.handleTodoDone.bind(this);
        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
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

    handleDeleteToDo(){

    }

    render() {

    var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
    console.log(this.props.item.description.toString,"f")
    return (
      <div className="todo-body">
        <Card className={this.props.item.completed ?"todo todo-done":"todo"}>
        <div className="todo-strip" style={{height:"5px",backgroundColor: randomColor}}></div>
            <CardContent>
                <h4 className="todo-head">{this.props.item.name}
                <DeleteIcon className="dlt-icon" style={{float:"right"}} fontSize="small" onClick={this.handleDeleteToDo}></DeleteIcon> 
                <EditIcon   className="edit-icon" style={{float:"right"}} fontSize="small"onClick={this.handleEditToDo}></EditIcon>
                </h4> 
                <Typography paragraph className="todo-main">
                   {this.props.item.description}...
                </Typography>
                <div>
                    <i><p className="todo-end">Target Date: {this.props.item.targetdate}</p></i>
                </div>
                
                <Button className="btn-todo-done" size= "small" variant= "outlined" color="secondary" onClick={this.handleTodoDone}>
                   {this.state.doneStatus ? "Mark as not Done":"Mark as Done"} 
                </Button>

            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
      </div>
    );
  }

  componentDidMount(){
    //   $(document).ready(function(){
    //       $('.todo').hover(function(){
    //           $(this).find('.dlt-icon').css('display',"")
    //           $(this).find('.edit-icon').css('display',"")
    //           $(this).find('.btn-todo-done').css('display',"");
    //       })

    //       $('.todo').mouseleave(function(){
    //         $(this).find('.edit-icon').css('display',"none")
    //         $(this).find('.dlt-icon').css('display',"none")
    //         $(this).find('.btn-todo-done').css('display',"none")
    //       })

    //   })
  }
}

export default ToDo;
