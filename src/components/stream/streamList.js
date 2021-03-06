import React from 'react';
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions';

class streamList extends React.Component{

  componentDidMount(){
    this.props.fetchStreams();
  }

  renderList = () =>{
    return this.props.streams.map(stream =>{
      return (
        <div className = "item" key={stream.id} >
          {this.renderAdmin(stream)}
        <i className="large middle iconed camera"/>
        <div className="content">
          {stream.title}
        </div>
        <div className="description">
        {stream.description}
        </div>
      
        </div>
      )
    })
  }


  renderAdmin(stream){
    if(stream.userId === this.props.userId){
      return (<div className="right floated content">
      <button className="ui button primary">
       Edit
      </button>
      <button className="ui button negative">
        Delete
      </button>
      </div>)
    }
  }
  render()
  {
    console.log(this.props.streams,"streams")
    return(
      <div>
       
         <h2> Stream ListS</h2>
         <div className="ui celled list">
         {this.renderList()}
         </div>
      </div>
    )
  }

}

const mapStatetoProps = (state) =>{
  return {
    streams : Object.values(state.streams),
    currentUserId: state.auth.userId}

}
export default connect(mapStatetoProps, {fetchStreams})(streamList);