import Profile from './profile/Profile';
import './App.css';

function App() { 
  
  
  const name = "Mathlouthi Sirine";
   const bio = "Mastére en finance"; 
   const profession = "étudiante"

    return ( 
    
    <div className="App">
      <header className="App-header"> 


        <Profile fullName={name} bio={bio} profession={profession} />

 
      </header> 
  </div>
 
);
} 


export default App;