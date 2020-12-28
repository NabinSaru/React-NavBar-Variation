import { Fakemessage } from './fakemessage';


export const fakeConvo = (setMessages) => {
    Fakemessage({setMessages,message:'Nothing special',from:'me',timeout:100})
    Fakemessage({setMessages,message:'Hello from Other Side',timeout:1000});
    Fakemessage({setMessages,message:'Whats up?',from:'me',timeout:2000})
    Fakemessage({setMessages,message:'How was your day?',timeout:3000})
    Fakemessage({setMessages,message:'Cool What about you?',from:'me',timeout:4000})
    Fakemessage({setMessages,message:'I Love You',timeout:5000})
    Fakemessage({setMessages,message:'Really?',from:'me',timeout:7000})
    Fakemessage({setMessages,message:'Yes, since the time we first met',timeout:9000})
    Fakemessage({setMessages,message:'Lemme think about it.',from:'me',timeout:11000})
    Fakemessage({setMessages,message:'.....',from:'me',timeout:13000})
    Fakemessage({setMessages,message:`What's your answer then?`,timeout:15000})
    Fakemessage({setMessages,message:`Meet me at the cafe. I'll tell you there`,from:'me',timeout:18000})
    Fakemessage({setMessages,message:'Okay will be there by 6',timeout:20000})
    Fakemessage({setMessages,message:'Okay then',from:'me',timeout:21000})
}
