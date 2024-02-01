
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';  
import Alert from './components/Alert';
function App(){
  const[mode, setMode]=useState('light');
  const toggleMode=()=>{
      if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='#343a40';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled","success");
      document.title="TextUtils-Dark Mode ";
     }
     else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been enabled","success");
      document.title="TextUtils-Light Mode";
     }
  }

  const[alert,setAlert]=useState();
  const showAlert=(message, type)=>{
       setAlert({
        msg:message,
        type:type
       })
  }
  return(
    <>
    <Navbar title="TextCount" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert Alert={alert} />
    <div className="container"> 
    <Text here="Enter your Text" h1="Analyze your text" mode={mode} />
    </div>
    </>
  )
}


export default App;
