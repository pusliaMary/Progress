import EasyTaskDone from "./EasyTaskDone"

const EasyModeDone = ({doneList, deleteAllDone}) => {
    
    
    return (
        <div className="flex-center block grey">
            <h2>DONE<img width="30" height="30" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check-mark-button-emoji"/></h2>
            <div className="items-done">
            {doneList.map((item)=> {
                    return(
                        <div key={item.id}>
                            <EasyTaskDone item={item} />
                        </div>
            )})}
            
            </div>
            <button className="btn" onClick={deleteAllDone}>Delete all</button>
                    
        </div>
        )
    
    }


 

export default EasyModeDone