import React from 'react';
import ToDo from './components/todo/todo';
import SettingsProvider from './context/settings/context';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

export default function App () {
  
    return (
    
      <>
        <SettingsProvider>
          <ToDo />
          
        </SettingsProvider>
      </>
    );
      
}