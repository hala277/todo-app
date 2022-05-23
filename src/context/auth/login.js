
import { useContext, useState } from "react";
import { When } from "react-if";
import { AuthContext } from "./context";

import { Button, Card, Elevation, InputGroup } from "@blueprintjs/core";

export default function Login(props) {

    // to signup 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    // to login
    const [userName, setUserName] = useState('');
    const [password1, setPassword1] = useState('');

    const [signupPage, setSignupPage] = useState(true);

    const context = useContext(AuthContext);

    const loginHandller = (e) => {
        e.preventDefault();
        context.login(userName, password1);
    }

    const signupHandller = (e) => {
        e.preventDefault();
        context.signup(username, password, role);
    }

    return (
        <>
            {
                signupPage ?
                    <When condition={!context.logIn}>
                        <Card interactive elevation={Elevation.FOUR} style={{ width: '40%', height: '50%', margin: 'auto', marginLeft: 'auto', marginTop: '100px' }}>
                            <h1>Login</h1>
                            <form onSubmit={loginHandller}>
                                <label>
                                    <span>username</span>
                                    <InputGroup onChange={(e) => setUserName(e.target.value)} placeholder="username" type="text" name="userName" />
                                </label>

                                <label>
                                    <span>password</span>
                                    <InputGroup onChange={(e) => setPassword1(e.target.value)} placeholder="password" type="password" name="password1" />
                                </label>

                                <label>
                                    <Button type="submit" style={{ marginTop: '10px' }}>login</Button>
                                </label>

                                <label>
                                    <Button style={{ marginTop: '10px' }} type="button" onClick={() => setSignupPage(false)}>signup</Button>
                                </label>
                            </form>

                        </Card>

                    </When>
                    :
                    <Card style={{ width: '40%', height: '50%', margin: 'auto', marginLeft: 'auto', marginTop: '100px' }} interactive elevation={Elevation.FOUR}>
                        <h1>signup</h1>
                        <form onSubmit={signupHandller}>
                            <label>
                                <span>username</span>
                                <InputGroup onChange={(e) => setUsername(e.target.value)} placeholder="username" type="text" name="username" />
                            </label>
                            <br></br>
                          
                                <label>
                                    <span>password</span>
                                    <InputGroup onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" name="password" />
                                </label>
                                <br></br>
                           <label>
                           <span>role</span>
                         <InputGroup onChange={(e) => setRole(e.target.value)} placeholder="role = [admin,user,writer,editor]" type="text" name="role" />
                           </label>
                           <br></br>

                           <label>
                           <Button type="submit">signup</Button>
                           </label>
                         
                           <label>
                               <Button type="button" onClick={() => setSignupPage(true)}>signin</Button>
                           </label>
                        </form>
                    </Card>
            }
        </>
    );
}