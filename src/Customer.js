import React from 'react'
import { useSelector } from 'react-redux'
import { ascending } from './actions/action'
import { descending } from './actions/action'
import { useDispatch } from 'react-redux'



const Customer = () => {
    const count = useSelector(state => state.counter);
    const isL = useSelector(state => state.isLogged);

    const dispatch = useDispatch();
    const dispatch_incriment = ()=>dispatch(ascending(5));
    const dispatch_decrement = () => dispatch(descending());
    console.log(isL);
    return (
        <div>
            Hello Mr Customer:<br />
            the count: {count}
            {isL ? <p>Hey Bro your logged in</p> : <p>Please login</p>}

            <button onClick={dispatch_incriment}>+</button>
            <button onClick={dispatch_decrement}>-</button>
        </div>
    )
}

export default Customer