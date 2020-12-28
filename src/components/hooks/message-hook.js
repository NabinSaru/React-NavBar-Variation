import React,{useState} from 'react';
import Message from './message';
import {Input} from './Input';
import { fakeConvo } from './fakeConvo';
import {useScrollToBottom} from './useScrollToBottom';

const initialMessage = [
    {
        id:1,content:'Hello there', from:'me'
    },
    {
        id:2,content:'Hi, how are you', from:'Alice'
    },
    {
        id:3,content:'I am fine, how about u?', from:'me'
    },
    {
        id:4,content:'Great', from:'Alice'
    },
    {
        id:5,content:`What's your plan for this weekend?`, from:'Alice'
    }
]

const MessageHook = () => {
    let [messages,setMessages] = useState(initialMessage);
    let [currentMessage,setCurrentMessage] = useState('');

    fakeConvo(setMessages);
    let scrollRef = useScrollToBottom(messages);
    return (
        <div style={styles.wrapper}>
            <div style={styles.container} ref={(ref)=>(scrollRef.current = ref)}> 
                {messages.map((message)=>(
                    <Message key={message.id} message={message}/>
                ))}
            </div>
            <Input value={currentMessage} contentChange={(content)=>{setCurrentMessage(content)}} onEnter={(content)=>{
                setCurrentMessage('');
                setMessages([
                    ...messages,
                    {
                        id:messages.length+1,content,from:'me'
                    }
                ])
            }}/>
        </div>
    )
}
const styles ={
    wrapper:{
        display:'flex',
        height:'100%',
        flexDirection:'column',
        justifyContent:'flex-end',
    },
    container:{
        display:'flex',
        overflow:'scroll',
        height:'max-content',
        flexDirection:'column',
    }

}
export default MessageHook;
