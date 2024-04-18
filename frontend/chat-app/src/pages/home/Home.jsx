import React from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messeges/MessegeContainer'

const Home = () => {
  return (
    <div style={{display: 'flex', overflow:"auto", height:'100vh',
     gap: "10%",width:"80%",
     justifyContent:"center",
     marginTop:"16vh"}}>
			<Sidebar style={{width:"50%"}}/>
			<MessageContainer style={{width:"50%"}}/>
	</div>
  )
}

export default Home