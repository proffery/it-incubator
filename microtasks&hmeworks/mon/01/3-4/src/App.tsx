import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {

    let [number, setNumber] = useState(1)

    const Button1Foo = (subscriber:string, age:number) => {
        console.log(subscriber)
    }
    
    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }
    
    const Button3Foo = () => {
        console.log('Im strupid Button')
    }


    const increaseHandler = () => {
        setNumber(++number)
    }
    
    const toNullHandler = () => {
        setNumber(0)
    }

    return (
        <div className="App">
            <h1>{number}</h1>
            <Button name={'Button-1'} callBack={() => Button1Foo('Im Ivan', 21)}/>
            <Button name={'Button-2'} callBack={() => Button2Foo('Im Vasya')}/>
            <Button name={'Button-3'} callBack={Button3Foo}/>
            <Button name='increase' callBack={increaseHandler}/>
            <Button name='increase' callBack={toNullHandler}/>
        </div>
    );
}

export default App;
