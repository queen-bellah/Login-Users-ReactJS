import { Routes , Route, Link} from 'react-router-dom'
import Login from "./Login"
import Users from "./Users";
import LoginLink from "./LoginLink"
import { login } from './Login/utils';


export function Introduction(){
  return(
    
    <h1>
      {/* We are Adalab */}
    </h1>
  )
}





function App(){
  return (

    <div>
        <LoginLink/>
        
      <Routes>
        <Route path='/login' element={<Login />}/>
      {/* <Login/> */}
      {/* </Route> */}
      <Route path='/users' element={<Users/>}/>
      {/* <Users/> */}
      {/* </Route> */}
      </Routes>
    </div>
  )
}

export default App;