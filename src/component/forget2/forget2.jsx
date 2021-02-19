import './forget2.css';

function Forget2() {
    return(
        <div>
              
<fieldset className="frm">
<legend>New Password</legend>
<label>Email</label>
<input type="email" className="input" id="email2" required placeholder="New password"/>
<label>ENTER OPT</label>
<input type="number" className="input" id="otp" placeholder="Enter OTP"/>
<label>New Password</label>
<input type="password" className="input" id="password2" required placeholder="New Password"/>
<button className="btn1" type="submit">Sumbit</button>
</fieldset>
        </div>

    )
    
}
export default Forget2;