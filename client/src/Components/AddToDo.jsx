import React, { Component } from 'react';
import AddIcon from  '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AddModal from './AddModal';

const addStyles = {
  button:{
    width:'100%',
    margin:'0 20px 20px 20px',
    position:'fixed',
    bottom:0
  }
  }

class AddToDo extends Component {
  
  constructor(props){
    super(props);
     
    this.state = {
      showModal : false
    }
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal = () => {
    this.state.showModal ? this.setState({showModal:false}) : this.setState({showModal:true})
  }

  render() {
    return (
      <div className="AddToDo-body">
        <Button  variant="contained" color="primary"  style={addStyles.button} onClick={this.handleToggleModal}>
          Add ToDo
          <AddIcon/>
        </Button>
        {
          this.state.showModal ? <AddModal showModalOpen={true} handleToggleModal = {this.handleToggleModal} /> : ""
        }
      </div>
    );
  }
}

export default AddToDo;