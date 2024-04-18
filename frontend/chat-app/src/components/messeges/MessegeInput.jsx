import { useState } from "react";
import useSendMessege from "../../hooks/useSendMessege";

const MessageInput = () => {
	const [msg, setMsg] = useState("");
	const {loading , sendMessege} = useSendMessege();

	const handleFormSubmit = async (e)=>{
		e.preventDefault();
		if(msg === "") return;
		await sendMessege(msg)
		setMsg("");
	}
	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<input
					type='text'
					placeholder='Send a message'
					value={msg}
					onChange={(e)=> setMsg(e.target.value)}
				/>
				<button type='submit'>
					{loading? "Sending.." : "send"}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;