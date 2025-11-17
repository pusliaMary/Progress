import { useRef, useState, useEffect } from "react";
import EasyModeDone from "./EasyModeDone";
import EasyModeList from "./EasyModeList";
import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2';



const EasyMode = () => {

    const [input, setInput] = useState('')
  
    const [easyList, setEasyList] = useState(localStorage.easyList ? JSON.parse(localStorage.easyList) : [])

    const [inputSubmited,setInputSubmited] = useState('')

    const [doneList, setDoneList] = useState(localStorage.doneList ? JSON.parse(localStorage.doneList) : [])

    useEffect(()=> {
        localStorage.setItem('easyList', JSON.stringify(easyList))
    }, [easyList])

    useEffect(()=> {
        localStorage.setItem('doneList', JSON.stringify(doneList))
    }, [doneList])

    const handleInput = (e) => {
        setInput(e.target.value)
        
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
            return 
            
                                
        }
         
        setEasyList([...easyList, newTask])
        handleReset()
               
    }

          
    const finalSubmit = (e) => {
      e.preventDefault()
      setInputSubmited(inputSubmited)
    }

    

    const doneTask = (chosenTask) => {
            
        const foundTask = easyList.find((item)=> item.id === chosenTask)
               
        setDoneList(prev => {
            
            const alreadyExists = prev.some(item => item.id === chosenTask)
            if (alreadyExists) {
                
                return prev.filter(item => item.id !== chosenTask)
            }
                
            return [...prev, foundTask] 
        })
        
        const newTasks = easyList.filter((item)=> item !== foundTask)

        setEasyList(newTasks)

                            
    }

    const deleteAllTasks = () => {
        setEasyList([])
        localStorage.removeItem('easyList')
    }

    const deleteAllDone = () => {
        setDoneList([])
        localStorage.removeItem('doneList')
    }

            
    return (
        <div className="flex-center">
            <div className="todo">
                <h1>To-do list</h1>
                <form onSubmit={finalSubmit} className="flex-center">
                    <input ref={inputRef}  type='text' placeholder='Add task...' onChange={handleInput} />
                    <button className="btn buttonAdd" onClick={addTask}>Add task</button>
                    
                </form>
                <h2>WORK TO DO<img width="30" height="34" src="https://img.icons8.com/?size=100&id=40886&format=png&color=000000" alt="check-mark-button-emoji"/></h2>
                
                
                <EasyModeList input={input} doneTask={doneTask} easyList={easyList} setEasyList={setEasyList} />
                <button className="btn deleteBtn" onClick={deleteAllTasks}>Delete all</button>
            </div>
                    
            <EasyModeDone doneList={doneList} setDoneList={setDoneList} deleteAllDone={deleteAllDone}/>
            
            
                
            
        </div>
    )
}

export default EasyMode;