import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Info from "./Info";
import Counter from "./Counter";
import Average from "./Average";

const App = () => {
    /*const [visible, setVisible] = useState(false);
    return ( <Counter/>
        <div>
            <button onClick=
                        {() => {
                            setVisible(!visible);
                        }}>
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr/>
            {visible && <Info/>}
        </div>
    );*/
  /*  return(<Counter/>)*/
    /*return <Info/>*/
    return <Average/>
};
export default App;
