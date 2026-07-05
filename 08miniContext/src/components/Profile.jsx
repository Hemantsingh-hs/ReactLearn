import react, { useContext } from 'react'

import UserContext from '../context/UserContext';
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <p>Please log in to view your profile.</p>

  
  return <div>Welcome, {user.username}!</div>
}
export default Profile