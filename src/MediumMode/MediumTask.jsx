import { useState } from "react"

const MediumTask = ({item, doneTask}) => {

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
                
                
            </div>     

    )
}

export default MediumTask