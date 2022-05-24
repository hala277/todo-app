import React from 'react';
import ToDo from './components/todo/todo';
import SettingsProvider from './context/settings/context';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import LogInPreovider from './context/auth/context';
import Login from './context/auth/login';
import Auth from './context/auth/auth';

export default function App () {
  
    return (
    
      <>
      <LogInPreovider>

        
        <Login/>
        {/* <Auth actions='user'> */}
        <SettingsProvider>
          <ToDo />
          
        </SettingsProvider>
        {/* </Auth> */}
        </LogInPreovider>
      </>
    );
      
}