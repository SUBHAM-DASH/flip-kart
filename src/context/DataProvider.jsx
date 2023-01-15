import React, { createContext, useState } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
    const [auth, setAuth] = useState('');
    return (
        <div>
            <DataContext.Provider value={{
                auth,
                setAuth
            }}>
                {children}
            </DataContext.Provider>
        </div>
    )
}

export default DataProvider;
