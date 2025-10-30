import MediumTask from "./MediumTask"


const MediumModeList = ({mediumList, doneTask, deleteAllTasks}) => {
    
     
       
    return (
        <div className="flex-center block">
        {mediumList.map((item)=> {
                    return (
                        <MediumTask
                            key={item.id} 
                            doneTask={doneTask} 
                            item={item} />
                    )
            })}
        <button className="btn deleteBtn" onClick={deleteAllTasks}>Delete all</button>
        </div>)
       
}

export default MediumModeList