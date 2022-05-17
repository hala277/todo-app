import React from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const state = {
        displayPerScreen: 3,
        displayItem: true,
    }

    return (
        <SettingsContext.Provider value={{state}}>
            {props.children}
        </SettingsContext.Provider>
    )

}