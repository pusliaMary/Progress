import MediumTask from "./MediumTask"


const MediumModeList = ({mediumList, doneTask, deleteAllTasks}) => {
    
     
       
    return (
        <div className="tasksCont">
            <div>
                {mediumList.map((item)=> {
                    return (
                        <MediumTask
                            key={item.id} 
                            doneTask={doneTask} 
                            item={item} />
                    )
                })}
            </div>
            <button className="deleteBtn btn" onClick={deleteAllTasks}>Delete all</button>
        </div>)
       
}

export default MediumModeList