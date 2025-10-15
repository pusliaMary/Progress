import { useState } from "react"

const EasyTaskDone = ({item, id}) => {

    
    

    return (
           <div key={id} className="test">
                <p>{item[id].text}</p>
            </div>   

    )
}

export default EasyTaskDone