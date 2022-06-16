
import { useEffect, useState } from 'react';

export default function App06(props) {
    console.log('loading....');
    const [msg, setMsg] = useState(1);
    const [msg2, setMsg2] = useState("second");
    
    useEffect(function(){
        setTimeout(() => {
            setMsg(msg + 1);
        }, 3000);
    }, [msg, msg2]);

    const btnHandler = () => {
        setMsg(2);
    };

    const btnHandler2 = () => {
        setMsg2('이벤트 발생');
    };

    return (
        <div>
            <h1>{msg} - {msg2}</h1>
            <button onClick={btnHandler}>버튼</button>
            <button onClick={btnHandler2}>버튼</button>
            {console.log('after evnet...')}
        </div>
    );
}