import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'

export const Sidebar = () => {
  return (
		<div style={{height: '100vh', overflow:"auto"}}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutBtn />
		</div>
  )
}
