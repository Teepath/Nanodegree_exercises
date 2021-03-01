import React, {Component} from "react";


class UserView extends Component {
  
 render(){
 	const{profile, users, movies} = this.props;
  
   let move =movies[profile.favoriteMovieID];
   
   console.log(move.name)
 return(
 	<div className="display">
  <li className="list-item"> {`${users[profile.userID].name}'s favorite movie is ${movies[profile.favoriteMovieID].name}.`}</li>
   
   </div>
 )
 } 
  
  
}

export default UserView;