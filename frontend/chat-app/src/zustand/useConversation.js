import { create }from 'zustand'

const useConversation = create((set)=>({
    selectedConversation : null,
    setSelectedConverstion : (selectedConversation)=> set({selectedConversation}),
    messeges : [],
    setMesseges : (messeges)=> set({messeges})  
}))

export default useConversation;