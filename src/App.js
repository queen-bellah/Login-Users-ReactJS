import { Routes , Route, Link} from 'react-router-dom'
import Login from "./Login"
import Users from "./Users";
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
      <h1>My app</h1>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
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