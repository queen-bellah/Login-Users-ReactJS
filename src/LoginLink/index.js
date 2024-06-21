 import './index.css';
 import {Link} from 'react-router-dom'

 function LoginLink(){
    return(
       <div>
      <nav>
        <h1>My app</h1>
      <h1>Click Me To Login</h1>
      <button type='submit'><Link to="/login">Login</Link></button>
      </nav>
        </div>
    )
 }
 export default LoginLink;