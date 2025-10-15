import { useRef } from "react";
import EasyModeDone from "./EasyModeDone";
import EasyModeList from "./EasyModeList";
import { v4 as uuid } from 'uuid';




const EasyMode = ({input, setInput, easyList, setEasyList, setInputSubmited, doneList, setDoneList}) => {

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
      setInputSubmited(input)
    }

    const inputRef = useRef(null)

    const handleReset = () => {
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    const doneTask = (chosenTask) => {
        const newList = easyList.filter((item)=> item.id !== chosenTask)
        console.log(newList)
        setDoneList([newList])
        
        
        
                            
    }

            
    return (
        <div className="flex-center">
            <h1>To-do list</h1>
            <form onSubmit={finalSubmit} className="flex-center">
                <input ref={inputRef} type='text' placeholder='Add task...' onChange={handleInput} />
                <button className="btn" onClick={addTask}>Add task</button>
            </form>

            
            <EasyModeList input={input} doneTask={doneTask} easyList={easyList} setEasyList={setEasyList}  className="block todo"/>
                    
            <EasyModeDone doneList={doneList} setDoneList={setDoneList}  className="block"/>
            
            
                
            
        </div>
    )
}

export default EasyMode;