import React from 'react'
import "./styles.css";

function User(props: any) {
    const { imageUrl, fullName , email,onLogout } = props;
  return (
      <div className='loggedInUserInformation'>
          <ul>
              <li>
                  <img src={imageUrl} alt="" />
              </li>
              <li>{fullName}</li>
              <li>{email}</li>
              <li onClick={onLogout}>logout</li>
      </ul>
    </div>
  )
}

export default User