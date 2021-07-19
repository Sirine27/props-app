
import React from 'react';
import PropTypes from 'prop-types';

const styleInline = {
    fontSize: 24,
    paddingTop: "100px",
    color: "#961596",
}


const Profile = ({fullName, bio, profession,children}) =>{

    const handleName = () => {
       alert (`Hi! My name is ${fullName}`)
    }
    
return (

<div>
<h1 style = {styleInline}>{fullName}</h1>
<button onClick={handleName}> Who are You! </button>
<h1 style = {styleInline}>{bio}</h1>
<h1 style = {styleInline}>{profession}</h1>



<img src="/pic.jpg" style = {{height: "200px", width: "210px"}} alt="pic" />{children}



</div>



)
}
 
export default Profile;

Profile.defaultProps = {
    fullName: "Write Your Name PLEASE!",
    bio: "A short bio for your profile :)",
    profession: "Your Profession!"
   }


   Profile.propTypes = {
       fullName:PropTypes.string,
       bio:PropTypes.string,
       profession:PropTypes.string,
   };

