import React from 'react'

const SideBarButton = (props) => {
    const {name, logo} =props
  return (
    <div className='rounded-md flex justify-between m-2 pt-3 p-2 hover:bg-gray-200 h-14 w-52'>
      <div className='text-xl text-blue-950 '>
        {name}
      </div>
      <div className='text-xl text-blue-950'>
        {logo}
      </div>
    </div>
  )
}

export default SideBarButton
