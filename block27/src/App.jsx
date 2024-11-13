import './App.css'import SignupForm from './components/SignUpForm';


import Authenticate from ".authenticate";
import signupform from ".signup";
const [token, setToken] = useState(null);

export default function App () {
 
 return(
<>
<Authenticate/>
<Authenticate token={token} setToken={setToken} />


<SignupForm />
<SignUpForm token={token} setToken={setToken} />
            
</>

 );

}
