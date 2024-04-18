import { useState } from "react";
import MessageInput from "./MessegeInput";
import Messages from "./Messeges";
import useConversation from "../../zustand/useConversation";
import useGetMesseges from "../../hooks/useGetMesseges";

const MessageContainer = () => {
	const {selectedConversation} = useConversation();
    
	const { loading } = useGetMesseges();

	return (
		<div style={{display: "flex", flexDirection:"column", gap:"20px", marginBottom:"32px"}}>
			{selectedConversation ? 
            (<>
				{/* Header */}
				<div>
					<span>{selectedConversation.fullName}</span>
				</div>

				<Messages />
				<MessageInput />
			</>)
            : 
            (
                <>
                    Write messeges to anybody you want
                </>
            )}
		</div>
	);
};




export default MessageContainer;
