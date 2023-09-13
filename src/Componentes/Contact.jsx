import "../CSS/Contact.css";


const Contact = () => {
  return (
    <div className="wrapper">
    <div className="container main">
        <div className="row">
            <div className="col-md-6 side-image">
                       
             
                
                <img src="images/white.png" alt="" />
                <div className="text">
                    <p>Join the community of developers <i>- ludiflex</i></p>
                </div>
                
            </div>
            <div className="col-md-6 right">
                
                <div className="input-box">
                   
                   <header>Create account</header>
                   <div className="input-field">
                        <input type="text" className="input" id="email" required="" autoComplete='off'/>
                        <label form="email">Email</label> 
                    </div> 
                   <div className="input-field">
                        <input type="password" className="input" id="pass" required=""/>
                        <label form="pass">Password</label>
                    </div> 
                   <div className="input-field">
                        
                        <input type="submit" className="submit" value="Sign Up"/>
                   </div> 
                   <div className="signin">
                    <span>Already have an account? <a href="#">Log in here</a></span>
                   </div>
                </div>  
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact