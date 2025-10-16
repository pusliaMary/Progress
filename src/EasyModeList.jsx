import EasyTask from "./EasyTask"


const EasyModeList = ({easyList, doneTask}) => {
    
     
       
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
        
        </div>)
       
}

export default EasyModeList