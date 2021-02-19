// import {
//     useHistory
// } from "react-router-dom";
import './signup.css';



function Signup() {

    // var history = useHistory();
    // function handleClick() {
    //     history.push("/login"); 
        
        // docs: 
        // https://stackoverflow.com/a/42121109/4378475
        // https://reactrouter.com/web/api/history
    

    return (
       
        <div>
                
                    <fieldset className="frm">
                    <legend>Sign Up</legend>
                    <label>User Name :</label>
                    <br/>
                    <input type="text" className="input" name="aName" id="aName" required placeholder="User Name..." />
                    <br/>
                    <label>Email :</label>
                    <br/>
                    <input type="email"className="input" name="Email" id="Email" required placeholder="Email Adress..."/>
                    <br/>
                    <label>Password :</label>
                    <br/>
                    <input type="password" className="input" name="Password" id="Password" required
                        placeholder="Password..."/>
                    <br/>
                    <label>Phone :</label>
                    <br/>
                    <input type="number" className="input" name="Number" id="Number" required placeholder="Phone Number..."/>
                    <br/>
                    <label> Nationalty:</label><br/>
                    <select className="input" id="nationalty">
                        <option value="Pakistan">Pakistan</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Balgium">Balgium</option>
                        <option value="Canada">Canada</option>
                        <option value="Iran">Iran</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>
                        <option value="America">America</option>
                        <option value="Englend">Englend</option>
                    </select><br/>
                    <label>Gender :</label>
                    <br/>
                    <select name="Gender" className="input" id="gender" required>
                        <option value="Male" className="input">Male</option>
                        <option value="Female" className="input">Female</option>
                    </select>
                    <br/><br/>
                    <input type="checkbox" required />i Accept The All Trums And
                        policy
                    <br/><br/>
                    <button className="btn">Submit</button>
                
                    <div className="login">Have An Account?Login Here</div>
                    </fieldset>
               
            
        
    </div>

    )
}
export default Signup;
