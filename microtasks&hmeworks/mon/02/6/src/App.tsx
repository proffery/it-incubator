
import { useState } from 'react';
import './App.css';
//import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';

function App() {
    const [message, setMessage] = useState([
          {message: 'message1'},
          {message: 'message2'},
          {message: 'message3'},
          {message: 'message4'},
          {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState('')

    const addMessage = (input:string) => {
      const newMessage = {message: input}
      setMessage([newMessage, ...message])
    }
    
    const callbackButtonHandler = () => {
      addMessage(title)
      setTitle('')
    }

    return (
        <div className="App">
          <Input title={title} setTitle={setTitle}/>
          <Button name={'+'} callback={callbackButtonHandler} />
          {/* <FullInput addMessage={addMessage}/> */}
          {message.map((el, index) => {
            return (
                <div key={index}>{el.message}</div>
            )
          })}
        </div>
    );
  }

export default App;
