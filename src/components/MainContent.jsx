import React from 'react'
import UserCard from './UserCard'
import EventsCard from './EventsCard'


const MainContent = (props) => {

  const events=[{
    time:"11:30 AM",
    meeting:true,
    title:"UX webinar"
  },
  {
    time:"01:30 PM",
    meeting:false,
    title:"Important Webinar"
  },
  {
    time:"03:30 PM",
    meeting:false,
    title:"Project Webinar"
  },
  {
    time:"05:00 PM",
    meeting:false,
    title:" Webinar II"
  },
]

  const {userName}=props
  return (
   <div className='w-full'>
    <div className='  bg-black bg-cover bg-center  w-full h-0 sm:h-28'>

    </div>
     <div className='grid grid-cols-10 p-4'>
      <div className='col-span-2 hidden sm:block bg-white rounded-md shadow-md  h-72 -translate-y-9 m-2'>
          <UserCard userName="Chandhan" email="chandhan@gmail.com" phoneNo="87992165xx" location="Banglore"/> 
      </div>
      <div className='col-span-8 '>
      <div className='w-full h-20 bg-white p-4  rounded-md shadow-sm'>
           <div> My calendar</div>
           <div className='font-semibold text-xl'>Good Morining, Chandhan</div>
      </div>
      <div className=' grid grid-cols-10  m-4'>
        <div className='sm:col-span-7 col-span-10 h-auto sm:h-auto rounded-md shadow-md bg-white'>
          <div className='flex justify-between bg-slate-100'>
            <div className='flex p-2 '>
              <div className='p-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>  
              </div>  
              
              <div className='p-1 '>Friday,15-Nov-2024 </div> 
              </div>
              <div className='p-2 flex '>
                  <div className='p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg></div>
              <div className='p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              </div>
              </div>

          </div>
          {
            events.map((eachItem) =>{
             return(
              <EventsCard time={eachItem.time} meeting={eachItem.meeting} title={eachItem.title}/>
             )
            })
          }
          

        </div>
        <div className=' grid grid-cols-4  text-center sm:col-span-3 col-span-10 h-52 sm:h-52 pl-4  p-2rounded-md shadow-md bg-white m-4'>
          
            <div className=' col-span-4 sm:col-span-2 h-auto w-auto rounded-md pt-2  pl-2 text-center'>
            <div className='flex bg-teal-500 items-center pl-1 rounded-sm h-8 w-8'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg></div>
              <p className='font-semibold text-left pr-1'>Calendar</p>
            </div>
            <div className=' col-span-4 sm:col-span-2  h-auto w-auto rounded-md pt-2  text-center'>
            <div className='flex bg-teal-500 items-center pl-1 rounded-sm h-8 w-8'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg></div>
              <p className='font-semibold text-left pr-1'>Join </p>
            </div>
            <div className='col-span-4 sm:col-span-2  h-auto w-auto rounded-md pt-2  text-center'>
            <div className='flex bg-teal-500 items-center pl-1 rounded-sm h-8 w-8'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-black">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg></div>
              <p className='font-semibold text-left pr-1'>Webinar</p>
            </div>
          

        </div>

      </div> 
        
      </div>
    </div>
   </div>
  )
}

export default MainContent
