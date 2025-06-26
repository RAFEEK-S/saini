import React, { useState } from 'react'

function UserProfile() {

    const [userProfile, setUserProfile] = useState(true)
        const showProfile = () =>{
            setUserProfile(!userProfile);
        }

  return (
    <div>
       {userProfile ? <button onClick={showProfile}>ShowDetails</button> : <button onClick={showProfile}>hideDetails</button>}

       {userProfile === !true && <p>hello this is my user profile!!!! Thank you</p>}
    </div>
  )
}

export default UserProfile;