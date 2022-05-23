import React from 'react';
import { useState, useEffect } from 'react';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import superagent from 'superagent';

export const AuthContext = React.createContext();

const API = 'https://halaauth-api.herokuapp.com';

export default function LogInPreovider(props) {
    const [logIn, setLogIn] = useState(false);
    const [user, setUser] = useState({});

    const login = async (username, password) => {
        const encodePassword = base64.encode(`${username}:${password}`);
        const response = await superagent.post(`${API}/signin`).set('authorization', `Basic ${encodePassword}`);

        validateUser(response.body.token);
    }

    const signup = async (username, password, role) => {

        let userData = {
            username: username,
            password: password,
            role: role
        }

        console.log(userData);

        const response = await superagent.post(`${API}/signup`, userData);
        validateUser(response.body.token);
    }

    const validateUser = (token) => {
        if (token) {
            const user = jwt.decode(token);
            loginState(true, user);
            cookie.save('token', token)
        }
        else {
            loginState(false, {});
        }
    }

    const loginState = (login, user) => {
        setLogIn(login);
        setUser(user);
    }

    const logOut = () => {
        loginState(false, {});
        cookie.remove('token')
    }

    useEffect(() => {
        const userInfo = cookie.load('token');
        validateUser(userInfo);
    }, []);

    const canDo = (capability) => {
        return user?.actions?.includes(capability);
    }

    const state = {
        logIn,
        user,
        login,
        signup,
        logOut,
        canDo
    }

    return(
        <AuthContext.Provider value={state}>
           {props.children}
        </AuthContext.Provider>
    )
}