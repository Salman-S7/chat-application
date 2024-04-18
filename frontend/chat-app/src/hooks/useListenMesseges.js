import { useEffect } from "react";

import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";


const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messeges, setMesseges } = useConversation();
	useEffect(() => {
		socket?.on("newMessege", (newMessege) => {			
			setMesseges([...messeges, newMessege]);
		});
        console.log(messeges);
		return () => socket?.off("newMessege");
	}, [socket, setMesseges, messeges]);
};
export default useListenMessages;