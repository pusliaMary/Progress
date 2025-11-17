import EasyTask from "./EasyTask"


const EasyModeList = ({easyList, doneTask }) => {
    
     
       
    return (
        <div className="block">
        
            <div className="column">
                    <p className="hidden">Click to mark as done</p>
                    <p className="hidden">Double click to remove</p>
                </div>
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