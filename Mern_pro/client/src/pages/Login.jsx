import { useState } from "react";

export const Login = () => {
const [user , setUser] = useState({
    email:"",
    password:"",
})

const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
        ...user,
        [name]:value,
    });
};

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
};

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid  grid-two-cols">
                        <div className="registration-image">
                            <img src="/images/login.png" alt="Trying to login" width="500" height="500" />
                        </div>

                        {/* lets tackle login page */}
                        <div className="registration-form">
                            <h1 className=" main-heading mb-3">login form</h1>
                            <br />
                            <form >
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
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder=" enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value = {user.password}
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