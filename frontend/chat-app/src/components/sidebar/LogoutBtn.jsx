import React from 'react'
import useLogout from '../../hooks/useLogout'

const LogoutBtn = () => {
  const {loading , logout } = useLogout();

  return (
    <div>
      <button onClick={logout}>{loading ? "Loading"  : "Logout"}</button>
    </div>
  )
}

export default LogoutBtn