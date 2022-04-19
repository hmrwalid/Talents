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
    <div>
        {!sent ? (
				<form onSubmit={handleSend}>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)} />

					<button type="submit">Send Email</button>
				</form>
			) : (
				alert("email sent")
			)}
    </div>
  )
}

export default Email