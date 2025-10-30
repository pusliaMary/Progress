import { useState } from "react"

const EasyTask = ({item, doneTask}) => {

    const [crossedOut, setCrossedOut] = useState(true)

    const toCrossOut = () => {
        setCrossedOut(!crossedOut)
        
    }

    
  
    return (
           <div className='row tasks'>
                <p 
                    onClick={toCrossOut} 
                    onDoubleClick={()=>doneTask(item.id)} 
                    className={crossedOut ? 'task' : 'task crossedOut'} >
                    {item.text}
                </p>
                
                <div className="column">
                    <p className="hidden">Click to mark as done</p>
                    <p className="hidden">Double click to remove</p>
                </div>
            </div>     

    )
}

export default EasyTask