import React, { useContext, useState } from 'react'
import { DBContext } from '../contexts/db_context';

function EntryForm() {
    const [query,setQuery] = useState("")
    const { dbData, setDbData } = useContext(DBContext);
    const [date,setDate] = useState(new Date())
    const handleFormSubmit = (event) => {
        event.preventDefault();
        let note = event.target.querySelector('#entry-note').value;
        setDbData([...dbData,{note}])
    }
    
  return (
    <form className="entry-form" onSubmit={handleFormSubmit}>
      <input type="datetime-local" name="" id="" />
        <input type="text" name="entry-note" id="entry-note" placeholder="enter note" />
        <input type="submit" value="Submit" onChange={(e)=>{setQuery(e.target.value)}}/>
    </form>
  )
}

export default EntryForm