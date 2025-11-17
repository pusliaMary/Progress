import MediumTask from "./MediumTask"


const MediumModeList = ({mediumList, doneTask, deleteAllTasks, index, mediumCategory, setMediumCategory}) => {
    
    const deleteCategory = ({index}) => {
        const newCategoryList = mediumCategory.filter(item=>item.id !==index)
        setMediumCategory(newCategoryList)
        localStorage.removeItem('mediumCategory')
    }
     
       
    return (
        <div className="tasksCont">
            <div className="flex-center">
                <div className="column">
                    <p className="hidden">Click to mark as done</p>
                    <p className="hidden">Double click to remove</p>
                </div>
                {mediumList.map((item)=> {
                    return (
                        <MediumTask
                            key={item.id} 
                            doneTask={doneTask} 
                            item={item} />
                    )
                })}
            </div>
            <div className="flex-between">
                <button className="deleteCategory" onClick={()=> deleteCategory({index})}>Remove category</button>
                <button className="deleteBtn btn" onClick={deleteAllTasks}>Delete all</button>
            </div>
        </div>)
       
}

export default MediumModeList