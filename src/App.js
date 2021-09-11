import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from  'react'
import { Message } from './components/Message';

function App() {
  const [messageList, setMessageList] = useState([]);
  useEffect( () => {
      if (messageList[messageList.length - 1]?.author != "Robot") {
        setTimeout(
          () => setMessageList((prevState) => [
            ...prevState,
            {author: `Robot`, text: `Hi there. Humanitarian`},
          ]),
          1500
        );
      }
    }, [messageList]
  )


  const [textInputed, setTextInputed] = useState("");

  function textHandler(event) {
    setTextInputed(event.target.value)
  }
  function addMessageHandler() {
    setMessageList((prevState) => [
        ...prevState,
        {author: `Human`, text: `${textInputed}`},
    ]);
  }

  return (
    <div className="App">
      <div className="messages">
        {messageList.map((message, i ) => {
          return <Message key={i} author={message.author} text={message.text} />;
        })}
     </div>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={textInputed} onChange={textHandler} />
        <button onClick={addMessageHandler}>Add comment</button>
      </form>
    </div>

  )
}


export default App;
