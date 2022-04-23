import axios from 'axios'
import React, { useState } from 'react'

const Email = () => {
  const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState("")
	const handleSend = async (e) => {
		setSent(true)
		try {
			await axios.post("http://localhost:5000/send_mail", {
				text
			})
		} catch (error) {
			console.error(error)
		}
	}
  return (
    <div className='email'>
		<p className='pEmail'>Sign up to hear from us about our special events and programs.</p>
        {!sent ? (
				<form onSubmit={handleSend} className = "form">
					<textarea type="text" value={text} onChange={(e) => setText(e.target.value)} />

					<button className='btEmail' type="submit">Send Email</button>
				</form>
			) : (
				alert("email sent")
			)}
    </div>
  )
}

export default Email