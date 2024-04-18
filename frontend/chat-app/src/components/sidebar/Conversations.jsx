import useGetConversation from "../../hooks/useGetConveration";
import Conversation from "./Conversation";


const Conversations = () => {
	const {loading, conversations} = useGetConversation();
	

	const convo = conversations.map(item=>{
		return (
			
					<Conversation 
					key={item._id}
					conversation={item}
					/>
				
		)
	})
	return (
		<div>
			{loading ? "Loding" : convo}
		</div>
	);
};
export default Conversations;