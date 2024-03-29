import { useState } from 'react';

export default function App04() {
    // const [obj, setObj] = useState({msg:'입력', msg2:'DO'});

    // const inputId = (e) => {
    //     setObj({...obj, msg:e.target.value});
    // }

    // const inputPw = (e) => {
    //     setObj({...obj, msg2:e.target.value});
    // }

    const [msg, setMsg] = useState('');
    const [msg2, setMsg2] = useState('');
    const [chk, setChk] = useState(false);

    const inputId = (e) => {
        setMsg(e.target.value);
    };

    const inputPw = (e) => {
        setMsg2(e.target.value);
    }

    const inputHander = (e) => {
        console.log(e.target.value);
        setChk(!chk);
    }

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.id.value, e.target.pw.value);
    // }

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(msg, msg2);
    }

    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={formSubmit}>
                <label>id :
                    <input name="id" onChange={inputId}/>
                </label>
                <label>pw :
                    <input name="pw" onChange={inputPw}/>
                </label>
                <label>
                    <input type="checkbox" onChange={inputHander} value={chk} checked={chk}/>
                </label>
                <div>
                    <input type='submit' value='전달' />
                </div>
            </form>
        </>
    );
}