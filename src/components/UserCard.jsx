import React from 'react'
import photo from '../assets/pic.jpeg'

const UserCard = (props) => {
    const{userName,email,phoneNo,location} =props
  return (
    <div className='flex flex-col p-2 pt-5 items-center '>
    <div className=''><img src={photo} className='rounded-lg h-24 w-24 '></img></div>
    <div>{userName}</div>
    <div>{email}</div>
    <div>{phoneNo}</div>
    <div>{location}</div>
  </div>
  )
}

export default UserCard
