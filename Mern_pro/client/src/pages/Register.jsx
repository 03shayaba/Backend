import { useState } from "react";
export const Register = () => {
 const [user , setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",

 });
// handling the input value
const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setUser({
        ...user,
       [ name]:value,
    })
};

// handling the form submission
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    // alert(user);
}

    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid  grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/register.png" alt="Trying to fill the registration form" width="500" height="500" />
                    </div>

                    {/* let tackle registration form */}
                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration form</h1>
                        <br />

                        <form onSubmit ={handleSubmit} >
                            <div>
                                <label htmlFor="username">username</label>
                                <input 
                                type="text"
                                 name="username"
                                 placeholder="username"
                                id="username"
                                required
                                autoComplete="off"
                                value={user.username}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                type="email"
                                 name="email"
                                 placeholder=" enter your email"
                                id="email"
                                required
                                autoComplete="off"
                                value = {user.email}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">phone</label>
                                <input 
                                type="number"
                                 name="phone"
                                 placeholder="phone"
                                id="phone"
                                required
                                autoComplete="off"
                                value = {user.phone}
                                onChange={handleInput}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">password</label>
                                <input 
                                type="text"
                                 name="password"
                                 placeholder="password"
                                id="password"
                                required
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Register Now</button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </section>
    </>
};