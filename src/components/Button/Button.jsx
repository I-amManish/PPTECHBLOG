import React from 'react'

function Button({
    children,
     type='button',
    className='',
    ...props

}) {
  return (
<button
  className={`w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer`} {...props}>
  {children}
</button>

  )
}

export default Button