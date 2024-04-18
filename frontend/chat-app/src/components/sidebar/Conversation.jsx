import useConversation from "../../zustand/useConversation";


const Conversation = ({conversation}) => {
	const {selectedConversation, setSelectedConverstion } = useConversation()

	let isSelected = selectedConversation?._id === conversation._id;
	
	return (
		<div onClick={()=>setSelectedConverstion(conversation)} 
		style={isSelected ? {background : '#000'} : {background:""}}>
			<div style={{display:'flex', }}>
					<div>
						<div>
							<img
								src={conversation.profilePic}
								alt="avatar"
								height={64}
								width={64}
							/>
						</div>
					</div>

					<div style={{display:'flex'}}>
						<div style={{display:'flex', gap:40, alignItems:'center'}}>
							<p>{conversation.fullName}</p>
							<span>🎃</span>
						</div>
					</div>
				</div>

			<div/>
		</div>
	);
};
export default Conversation;