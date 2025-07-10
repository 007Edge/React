import React from 'react'

function Card({userName, age='idk'}) {    
    // NOTE: basic js-> if age is empty idk will be used
    // Card(props) => when we use this syntax, in all code we have to use props.obj 
    // but if we use Card({objectNmae})

    // console.log("props", props);
    
    return (
        <div className='bg-green-500 p-10 border border-indigo-600 m-1'>
            <p className='text-white'>Hello my name is {userName} and my age {age}</p>
        </div>
    )
}

export default Card