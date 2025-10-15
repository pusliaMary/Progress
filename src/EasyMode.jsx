import { useRef, useState } from "react";
import EasyModeDone from "./EasyModeDone";
import EasyModeList from "./EasyModeList";
import { v4 as uuid } from 'uuid';




const EasyMode = () => {

    const [input, setInput] = useState('')
  
    const [easyList, setEasyList] = useState([])

    const [inputSubmited,setInputSubmited] = useState('')

    const [doneList, setDoneList] = useState([])

    const handleInput =(e) => {
        setInput(e.target.value)
        
    }

    const addTask = () => {
        const newTask = {
            text: input, 
            id: uuid()
        }
        setEasyList([...easyList, newTask])
        handleReset()
        
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
    }

    const doneTask = (chosenTask) => {
            //находим кликнутую таску по id с помощью find
        const foundTask = easyList.find((item)=> item.id !== chosenTask)
        
        console.log(foundTask)
        
        setDoneList(prev => {
            //проверяем, есть ли уже такая таска в doneList c помощью some
            const alreadyExists = prev.some(item => item.id === chosenTask)
            if (alreadyExists) {
                //если есть, то удаляем ее с помощью filter
                return prev.filter(item => item.id !== chosenTask)
            }
                //если нет, то добавляем в doneList, prev это предыдущий стейт doneList
            return [...prev, foundTask] 
        })

        const newTasks = easyList.filter((item)=> item !== foundTask)

        setEasyList(newTasks)
        
        
                            
    }

            
    return (
        <div className="flex-center">
            <h1>To-do list</h1>
            <form onSubmit={finalSubmit} className="flex-center">
                <input ref={inputRef} type='text' placeholder='Add task...' onChange={handleInput} />
                <button className="btn" onClick={addTask}>Add task</button>
            </form>

            
            <EasyModeList input={input} doneTask={doneTask} easyList={easyList} setEasyList={setEasyList}  className="block todo"/>
                    
            <EasyModeDone doneList={doneList} setDoneList={setDoneList} className="block"/>
            
            
                
            
        </div>
    )
}

export default EasyMode;