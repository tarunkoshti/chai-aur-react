import React from 'react'

const Card = (props) => {
    // console.log(props) you will get object
  return (
    <>
      <div className='h-80 w-full bg-zinc-300 rounded-lg relative mt-4 '>
        <h2 className='absolute font-bold p-5'>{props.username}</h2>
              <img className='h-full w-full object-cover rounded-lg' src="https://images.pexels.com/photos/19686433/pexels-photo-19686433/free-photo-of-side-view-of-a-young-woman-in-a-white-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <button className='absolute bottom-2 translate-x-20'>{props.btntext} → </button>
      </div>
    </>
  )
}

export default Card
