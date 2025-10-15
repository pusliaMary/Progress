import EasyTaskDone from "./EasyTaskDone"

const EasyModeDone = ({doneList}) => {
    
    
    return (
        <div>
            <h2>DONE<img width="30" height="30" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check-mark-button-emoji"/></h2>
            {doneList.map((item, index)=> {
                    return(
                        <div key={index}>
                            <EasyTaskDone item={item} id={index}/>
                        </div>
            )})}
            
                    
        </div>
        )
    
    }


 

export default EasyModeDone