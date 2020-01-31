/*import React,{useState} from "react";
const Counter=()=>{
    const [value, setValue]=useState(0);
    return(
        <div>
            <p>현재 카운터 값은 <b>{value}</b></p>
            <button onClick={()=>setValue(value+1)}>증가</button>
            <button onClick={()=>setValue(value-1)}>감소</button>
        </div>
    );
};*/

import React, {useReducer} from "react";

function reducer(state, action) {

    /*액션의 종류 즉  버튼에서 해야할 행위들을 미리 정의 함 */
    switch (action.type) {
        case 'INCREMENT'://숫자를 증가하는 역할의 버튼을 눌렀을떄
            return {value: state.value + 1};
        case 'DECREMENT'://숫자가 감소하는 역할의 버튼을 눌렀을떄
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = () => {
    /*
    * 디스트럭처링(비구조화 할당)
    * const arr = [1, 2, 3];
    * 배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
    * 변수 one, two, three가 선언되고 arr(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
    * const [one, two, three] = arr;
    * 디스트럭처링을 사용할 때는 반드시 initializer(초기화자)를 할당해야 한다.
    * const [one, two, three]; // SyntaxError: Missing initializer in destructuring declaration
    * console.log(one, two, three);
    *let x, y, z;
    * [x, y] = [1, 2];
    * console.log(x, y); // 1 2
    * [x, y] = [1];
    * console.log(x, y); // 1 undefined
    * [x, y] = [1, 2, 3];
    * console.log(x, y); // 1 2
    * [x, , z] = [1, 2, 3];
    * console.log(x, z); // 1 3
    * 기본값
    * [x, y, z = 3] = [1, 2];
    * console.log(x, y, z); // 1 2 3
    * [x, y = 10, z = 3] = [1, 2];
    * console.log(x, y, z); // 1 2 3
    * // spread 문법
    * [x, ...y] = [1, 2, 3];
    * console.log(x, y); // 1 [ 2, 3 ]
    * 프로퍼티 키가 prop1인 프로퍼티의 값을 변수 p1에 할당
    * 프로퍼티 키가 prop2인 프로퍼티의 값을 변수 p2에 할당
    * const { prop1: p1, prop2: p2 } = { prop1: 'a', prop2: 'b' };
    * console.log(p1, p2); // 'a' 'b'
    * console.log({ prop1: p1, prop2: p2 }); // { prop1: 'a', prop2: 'b' }
    * // 아래는 위의 축약형이다
    * const { prop1, prop2 } = { prop1: 'a', prop2: 'b' };
    * console.log({ prop1, prop2 }); // { prop1: 'a', prop2: 'b' }
    * // default value
    * const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
    * console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }
    *객체 디스트럭처링은 객체에서 프로퍼티 이름(키)으로 필요한 프로퍼티 값만을 추출할 수 있다. 아래의 코드를 살펴보자.
    *const todos = [  { id: 1, content: 'HTML', completed: true },  { id: 2, content: 'CSS', completed: false },  { id: 3, content: 'JS', completed: false }];
    * // todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
    * const completedTodos = todos.filter(({ completed }) => completed);
    * console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
    * */
    const [state, dispatch] = useReducer(reducer, {value: 0});
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    )
}
export default Counter;