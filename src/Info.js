/*import React,{useState,useEffect} from "react";
const Info=()=>{
    const [name,setName]=useState('');
    const [nickname,setNickname]=useState('');
    /!*useEffect(()=>{
        console.log('마운트될떄만 실행');
    },[]);*!/
    useEffect(()=>{
        console.log(name);
    },[name]);
    const onChangeName=e=>{setName(e.target.value);};
    const onChangeNickName=e=>{setNickname(e.target.value);};
    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>
        <div    >
            <b>이름:</b>{name}
        </div>
            <div>
                <b>닉네임:</b>{nickname}
            </div>
        </div>
    );
};*/
import React,{useReducer} from "react";
function reducer(state,action) {
    return{
        ...state,
        [action.name]:action.value
    };
}
const Info=()=>{
    const[state,dispatch]=useReducer(reducer,{name:'',nickname:''});
    const {name,nickname}=state;
    const onChange=e=> {
        dispatch(e.target);
    };
    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <p>이름:{name}</p>
            </div>
            <div>
                <p>닉네임:{nickname}</p>
            </div>
        </div>

    );
};
export  default  Info;