import './App.css';
import { Greeting } from './componants/Greeting';
import { Message } from './componants/Message';

const name = "Привіт, Юрій!";
const text = "react - це круто!"

function App() {
  return (
    <>
        <Greeting name={name}/>
        <Message text={text}/>
    </>
  )
}

export default App
