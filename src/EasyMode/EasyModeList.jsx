import EasyTask from "./EasyTask"


const EasyModeList = ({easyList, doneTask, deleteAllTasks}) => {
    
     
       
    return (
        <div className="flex-center block">
        <div>
            {easyList.map((item)=> {
                        return (
                            <EasyTask
                                key={item.id} 
                                doneTask={doneTask} 
                                item={item} />
                        )
                })}
        </div>

        <button className="btn deleteBtn" onClick={deleteAllTasks}>Delete all</button>
        </div>)
       
}

export default EasyModeList