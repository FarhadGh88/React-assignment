import React, { useState } from 'react'
import '../Contacts/message.css'



const Message = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventdefault ()

        const contactform = {name, email, message}
        const json = JSON.stringify(contactform)

        const result = await fetch ('https://win23-assignment.azurewebsites.net/api/contactform', {

            method: 'post',
            headers: {'content-type' : 'aplication/json'},
            body: json
        })

        switch (result.status) {
            case 200:
                console.log ('Rätt Infomation, TACK!')
                break
            case 400:
                console.log ('Nångonting är fel!')
                break

            default:   
                console.log ('TACK!')
 

        }


    }


  return (
<section  className="message" >
            <div className="container" onSubmit={handleSubmit} method='post'>
                <div className="content">
                    <h2>Leave us a message for any information.</h2>

                    <form method="post" id='messageForm' >
                        <div>
                            <input id='name' type="text" value={name} name="name" onChange={(e) => {setName(e.target.value)}} placeholder="name*"/>
                        </div>
                        <div>
                            <input id='email' type="email" value={email}name="Email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email*"/>
                        </div>
                        <div >
                            <textarea id="your-message" type="text" value={message} name="message" onChange={(e) => {setMessage(e.target.value)}} placeholder="Your Message*"></textarea>
                        </div>       
                    </form>
                    <div className="send-btn">
                        <button className="btn-yellow" type="submit" >Send Message <i className="fa-solid fa-arrow-up-right-dots"></i></button>
                    </div>
                </div>   
            </div>

        </section> 
          )
}

export default Message