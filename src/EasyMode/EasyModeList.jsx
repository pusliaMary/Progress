import EasyTask from "./EasyTask"


const EasyModeList = ({easyList, doneTask, deleteAllTasks}) => {
    
     
       
    return (
        <div className="flex-center block">
        {easyList.map((item)=> {
                    return (
                        <EasyTask
                            key={item.id} 
                            doneTask={doneTask} 
                            item={item} />
                    )
            })}
        <button className="btn" onClick={deleteAllTasks}>Delete all</button>
        </div>)
       
}

export default EasyModeList