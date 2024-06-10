
function Login(){
    return(
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', backgroundColor:'black', height:'100vh', color:'white'}}>
        <h1>Login</h1>
        <div className="mb-3" style={{width: '30%'}}>
  <label htmlFor="email" className="form-label">Email</label>
  <input type="email" className="form-control" id="email" placeholder="enter your email" />
</div>
<div className="mb-3" style={{width: '30%'}}>
  <label htmlFor="password" className="form-label">Password</label>
  <input type="password" className="form-control" id="email" placeholder="enter your password" />
</div>
<button style={{marginLeft:'20rem', padding:'5px 10px', borderRadius:'10px'}}>login</button>
        </div>
</>
    )
}

export default Login;