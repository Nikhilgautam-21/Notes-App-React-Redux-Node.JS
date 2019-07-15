import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import '../CSS/ShowModal.css';
import {FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {addToDo} from '../Actions/actionCreators';

class AddModal extends Component {

  constructor(props){
    super(props);
    console.log(this.props,"AddModal")
    this.state ={
        open : this.props.showModalOpen,
        selectedDate : new Date('2014-08-18T21:11:54'),
        name: this.props.item && this.props.item.name ||'',
        description:this.props.item && this.props.item.description ||'',
        targetdate:this.props.item && this.props.item.targetdate || '',
    }
    this.handleClose = this.handleClose.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleClose(){
      this.setState({open:false})
      this.props.handleToggleModal();
  }

  handleChangeInput =(event) =>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleAddToDo =(event)=>{
    event.preventDefault();
    const todo ={
      name : this.state.name,
      description: this.state.description,
      targetdate: this.state.targetdate,
      completed: false
    }
    this.props.addToDo(todo);
    this.setState({name:'',description:'',targetdate: new Date('2014-08-18T21:11:54')})
    this.handleClose();
  } 

  render() {
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open = {this.state.open}
            onClose={this.handleClose}
            >
                <div className="show-modal-body">
                  <form className="Form-Main" onChange={this.handleChangeInput}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="name">Name</InputLabel>
                                <Input id="name"  name="name" value={this.state.name||""} autoComplete="name" type="text" autoFocus/>
                            </FormControl>
        
                            <TextField
                                id="standard-multiline-static"
                                name="description"
                                label="Description"
                                rows="5"
                                placeholder = "Buy Groceries !!"
                                className="description"
                                margin="normal"
                                multiline
                                fullWidth
                                value = {this.state.description || ''}
                              />

                            <TextField
                                    id="date"
                                    name="targetdate"
                                    label="Target Date"
                                    type="date"
                                    className= "target-date"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    width ={1/2}
                                    value ={this.state.targetdate || new Date('2014-08-18T21:11:54')}
                                  />
                    </form>
                    <div className= "modal-btn-grp">
                       <Button variant= "contained" color="primary" size = "small" className="btn-add-todo"  onClick={this.handleAddToDo}>Add</Button>
                       <Button variant= "outlined"  color="secondary" size = "small" className="btn-cancel-modal" onClick={this.handleClose}>Close</Button>
                      </div>
                </div>
        </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    addToDo: (todo) => dispatch(addToDo(todo)),
  }
}

export default connect(null,mapDispatchToProps)(AddModal);
