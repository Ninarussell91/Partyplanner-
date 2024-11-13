export default function Authenticate({ token }) {
export default function SignupForm() {
  import (useState)

        const [successMessage, setSuccessMessage] = useState(null);
        const [error, setError] = useState(null);
      
    <input value={username} onChange={(e) => setUsername(e.target.value)} /> 
    }
function App() {
  const [token, setToken] = useState(null);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handlesubmit (event) {setToken(result.token);
    event.preventDefault();
    console.log (Hello);
    try {
    } catch (error) {
      setError(error.message);

    }
    async function handleClick() {
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    }   
                   }
                );
          
                const result = await response.json();
                setSuccessMessage(result.message);
        } catch (error) {
          setError(error.message);
        }
      }
  }

    
 }
return( <h2> Sign Up!</h2>)
    <div>
    {error, && <p> error</p>}
<form>
<form onSubmit={handleSubmit}></form>

<h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
    

    
<label>
    Username: <input/>

    value={username}
    onChange={(e) => setUsername(e.target.value)}

 </label>    
<label>

Password: <input

 type="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
/>
</label>

<button> submit</button>

            
        
                

</form>


</div>    

;

}    
    