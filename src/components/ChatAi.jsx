import React, {useState, useEffect} from 'react';
import {user, bot} from '../assets';
import axios from 'axios';
const ChaiAi = () => {
    let form = document.querySelector("form")
    const chatContainer = document.getElementById('chatcontainer')
    const [prompt, setPrompt] = useState('Hello nice to meet you')
    
    var text 
    const [past_user_inputs, setPastUserInputs] = useState([])
    const [generated_responses, setGeneratedResponses] = useState([])
    
    let loadInterval
    const loader = (element) =>  {
        element.textContent = ''
    
        loadInterval = setInterval(() => {
            // Update the text content of the loading indicator
            element.textContent += '.';
    
            // If the loading indicator has reached three dots, reset it
            if (element.textContent === '....') {
                element.textContent = '';
            }
        }, 300);
    }
    const typeText = (element, text) => {
        let index = 0

        let interval = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text.charAt(index)
                index++
            } else {
                clearInterval(interval)
            }
        }, 20)
    }
    const generateUniqueId = () => {
        const timestamp = Date.now();
        const randomNumber = Math.random();
        const hexadecimalString = randomNumber.toString(16);
        return `id-${timestamp}-${hexadecimalString}`;
    }
    const onChange = (event) => {
        setPrompt(event.target.value);
    }
    const chatStripe = (isAi, value, uniqueId) => {
        return (
        ` 
                <div class="${isAi? "bg-primary" : "bg-tertiary"} ${isAi? "flex-row": "flex-row-reverse"} flex flex-row gap-[15px] p-3">
                    <div class="flex-shrink-0">
                        <img 
                        src=${isAi ? bot : user} 
                        alt="${isAi ? 'bot' : 'user'}" 
                        class="w-6 h-6"
                        />
                    </div>
                    <div id=${uniqueId}>${value}</div>
                </div>
            
        `
        )
    }
    
    const onSubmit = (e) =>  {
    e.preventDefault();
    form.reset()
    chatContainer.innerHTML += chatStripe(false, prompt)
    const uniqueId = generateUniqueId()
    chatContainer.innerHTML += chatStripe(true, "", uniqueId)
    chatContainer.scrollTop = chatContainer.scrollHeight;
    const messageDiv = document.getElementById(uniqueId)
    loader(messageDiv)
    text = prompt
    setPastUserInputs([...past_user_inputs, prompt])
    
    const payload = {
        "inputs": {
        "past_user_inputs": past_user_inputs,
		"generated_responses": generated_responses,
		"text": text
	}}
     axios.post('http://localhost:8080/chatai', payload).then(response => { 
     
        const output = response.data['generated_text']
        setGeneratedResponses([...generated_responses, output])
        // console.log(output)
        clearInterval(loadInterval)
        messageDiv.innerHTML = " "
        typeText(messageDiv, response.data["generated_text"])
    })
   
}
    
  return (
    <div className="relative h-screen w-full mx-auto ">
        <div className="absolute top-[100px] inset-0 mx-auto mb-8 w-full h-9/10 flex flex-col items-center justify-center gap-5" >
                <div id="chatcontainer" className="bg-tertiary p-2 flex-1 w-full sm:w-1/2 overflow-y-scroll scroll-smooth flex flex-col"></div>
                <form onSubmit={onSubmit} className="w-full sm:w-1/2 flex flex-row">
                    <input name="prompt" rows="1" cols="1" placeholder="Ask me..." className="w-full bg-transparent outline-none"onChange={onChange}></input>
                    <button type="submit">
                        <svg className="w-6 h-6 hover:stroke-pink" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </button>
                </form>

        </div>  
    </div>
  )
}

export default ChaiAi;