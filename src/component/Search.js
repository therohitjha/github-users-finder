import React, {useState} from 'react'

const Search=({setAlert,searchUsers})=>{
const [text,setText]=useState('')
   
const onSubmit=(e)=>{
    e.preventDefault()
    if(text===''){
setAlert('Please Enter User Name!','light')
    }else{
       searchUsers(text)
        setText('')
    }
}

 const onChange=(e)=>{
    
    setText(e.target.value)
}


        return (
            <div>
              <form onSubmit={onSubmit} className='form'>
                  <input type='text' name='text' placeholder='Search Users' value={text} onChange={onChange}/>
                  <input type='submit' value='Search' className='btn btn-dark btn-block' />
              </form>  
            </div>
        )
    }


export default Search
