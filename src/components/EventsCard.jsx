import React from 'react'

const EventsCard = (props) => {
    const {time,meeting,title}=props
  return (
    <div className='flex justify-start p-2 shadow-md driver-x'>
      <div className='p-2'>
        <p className='font-semibold'>{time}</p>
        <p className='text-xs'>{time}</p>
      </div>
     <div className='flex flex-col p-2'>
     <div className='flex' >
        <div className='p-1'>{meeting ? "Live" : "Upcoming"}</div>
       <div className='p-1 pt-2'>
       {meeting ? 
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 fill-red-500 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        </div>

        :
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 fill-blue-600 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        </div>
}
       </div>
    
      </div>
      <div>{title}</div>
     </div>
    </div>
  )
}

export default EventsCard
