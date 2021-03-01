import React, {Component} from 'react';
import UserView from './UserView.js'


class DisplayList extends Component{
  
  render(){
    console.log(this.props.users)
    const{profiles, users, movies} = this.props;
    return(
    <div>
      <ul>
     
      {
        profiles.map((profile)=>(
        <UserView  key={profile.id} profile={profile} users={users} movies={movies}/> 

        ))
    
      }
</ul>
		
     </div> 
    
    )
  }
  
}

export default DisplayList