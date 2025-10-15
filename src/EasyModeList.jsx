import EasyTask from "./EasyTask"


const EasyModeList = ({easyList, doneTask, setEasyList}) => {
    
     
       
    return (
        <div >
        {easyList.map((item, index)=> {
                    return (
                        <EasyTask doneTask={doneTask} item={item} key={index} />
                    )
            })}
        
        </div>)
       
}

export default EasyModeList