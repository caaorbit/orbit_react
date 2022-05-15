import './App.css'
import { useSelector } from 'react-redux';
const Hello = ({ name, age }) => {
    const count = useSelector(state => state.counter)
    const clickme = () => {
        console.log('hello am being clicked');
    }
    return (
        <div className="hello">
            Hello my Bro {name} and my age is {age}
            <button onClick={clickme}>Hello click me!!!</button>
            <div>Counter value here: {count}</div>
        </div>
    )
}

export default Hello