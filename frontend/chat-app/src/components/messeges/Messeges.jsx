import useListenMessages from "../../hooks/useListenMesseges";
import useConversation from "../../zustand/useConversation";
import Messege from "./Messege";


const Messeges = () => {
	const { messeges } = useConversation();
	useListenMessages();
	return (
		<div>
			{!messeges || messeges.length === 0 && <h1>Start Conversation</h1>}
			{messeges.map(msg=>{
				return <Messege key={msg._id} msg={msg}/>
			})}
		</div>
	);
};
export default Messeges;