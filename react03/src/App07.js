import { useState, createContext, useContext, useEffect } from "react";

var UserContext;
function App777({setMsg1}) {
    const msg1 = useContext(UserContext);
    const btnHandler = () => {
        setMsg1('ABCD');
    }

    return (
        <div>
            <h1>{msg1}</h1>
            <button onClick={btnHandler}>btn</button>
        </div>
    );
}

function App77({setMsg1}) {

    useEffect(function() {
        setMsg1('ABCD');
    }, []);

    return (
        <div>
            <App777 setMsg1={setMsg1}/>
        </div>
    );
}

export default function App07() {
    UserContext = createContext();
    const [msg1, setMsg1] = useState('abc');

    return (
        <div>
            <UserContext.Provider value={msg1}>
                <App77 setMsg1={setMsg1}/>
            </UserContext.Provider>
        </div>
    );
}