import React from 'react';
import './App.css';
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterFive from "./components/HookCounterFive";
import ComponentC from "./components/contexthooks/componentc";

export const UserContext = React.createContext()

function App() {
    return (
        <div className="App">

            <UserContext.Provider value={'nandika sois'}>
                <ComponentC/>
            </UserContext.Provider>

        </div>
    );
}

export default App;
