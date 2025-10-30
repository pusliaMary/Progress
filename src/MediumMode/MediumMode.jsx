import { useRef, useState, useEffect } from "react";
import MediumModeDone from './MediumModeDone'
import MediumModeList from "./MediumModeList";
import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2';



const MediumMode = ({setMediumCategory, mediumCategory, index }) => {

    const [input, setInput] = useState('')
  
    const [mediumList, setMediumList] = useState(localStorage.mediumList ? JSON.parse(localStorage.mediumList) : [])

    const [inputSubmited,setInputSubmited] = useState('')

    const [doneList, setDoneList] = useState(localStorage.doneList ? JSON.parse(localStorage.doneList) : [])

    useEffect(()=> {
        localStorage.setItem('mediumList', JSON.stringify(mediumList))
    }, [mediumList])

    useEffect(()=> {
        localStorage.setItem('doneList', JSON.stringify(doneList))
    }, [doneList])

    const handleInput = (e) => {
        setInput(e.target.value)
        
    }
        

    const finalSubmit = (e) => {
      e.preventDefault()
      setInputSubmited(inputSubmited)
      
    }

    const inputRef = useRef(null)
    
        const handleReset = () => {
            if (inputRef.current) {
                inputRef.current.value = ''
            }
            setInput('')
    }
       

    const addTask = () => {
        const newTask = {
            text: input, 
            id: uuid()
        }

        if (input==='') { 
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please write the task",
            })
            return;
        
        }
         
        setMediumList([...mediumList, newTask])
        
        handleReset()
               
    }

       
    const doneTask = (chosenTask) => {
            
        const foundTask = mediumList.find((item)=> item.id === chosenTask)
               
        setDoneList(prev => {
            
            const alreadyExists = prev.some(item => item.id === chosenTask)
            if (alreadyExists) {
                
                return prev.filter(item => item.id !== chosenTask)
            }
                
            return [...prev, foundTask] 
        })
        
        const newTasks = mediumList.filter((item)=> item !== foundTask)

        setMediumList(newTasks)

                            
    }

    const deleteAllTasks = () => {
        setMediumList([])
        localStorage.removeItem('mediumList')
    }

    const deleteAllDone = () => {
        setDoneList([])
        localStorage.removeItem('doneList')
    }

    const deleteCategory = ({index}) => {
        const newCategoryList = mediumCategory.filter(item=>item.id !==index)
        setMediumCategory(newCategoryList)
        localStorage.removeItem('mediumCategory')
    }

            
    return (
        <div className="flex-center">
            <div className="flex-center todo">
                <form onSubmit={finalSubmit} className="flex-center">
                    <div className="flexEnd">
                        <input ref={inputRef} type='text' placeholder='Add task...' onChange={handleInput} />
                        <button className="deleteCategory" onClick={()=> deleteCategory({index})}>Remove category</button>
                    </div>
                    <button className="btn buttonAdd" onClick={addTask}>Add task</button>
                    
                </form>

                
                <MediumModeList input={input} doneTask={doneTask} mediumList={mediumList} setMediumList={setMediumList} deleteAllTasks={deleteAllTasks}/>
            </div>
                    
            <MediumModeDone doneList={doneList} setDoneList={setDoneList} deleteAllDone={deleteAllDone}/>
            
            
                
            
        </div>
    )
}

export default MediumMode;