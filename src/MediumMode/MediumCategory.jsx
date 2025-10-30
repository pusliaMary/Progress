import { useRef, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2';

import MediumMode from './MediumMode'


const MediumCategory = () => {

    const [inputCategory, setInputCategory] = useState('')
    const [mediumCategory, setMediumCategory] = useState(localStorage.mediumCategory ? JSON.parse(localStorage.mediumCategory) : [])
    const [inputSubmitedCat,setInputSubmitedCat] = useState('')

    
        useEffect(()=> {
            localStorage.setItem('mediumCategory', JSON.stringify(mediumCategory))
        }, [mediumCategory])
    

    const handleInputCat = (e) => {
        setInputCategory(e.target.value)
        
    }

    const finalSubmitCat = (e) => {
      e.preventDefault()
      setInputSubmitedCat(inputSubmitedCat)
    }

    const inputRefCat = useRef(null)

    const handleReset = () => {
        if (inputRefCat.current) {
            inputRefCat.current.value = ''
        }
        setInputCategory('')
        
    }

    const addCategory = () => {
        const newCategory = {
            text: inputCategory, 
            id: uuid()
        }

        if (inputCategory==='') { 
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please write the category",
            })
            return;
        
        }
         
        setMediumCategory([...mediumCategory, newCategory])
        handleReset()
               
    }

    return (
        <div>
            <h1>Life balance progress</h1>
            
            <form onSubmit={finalSubmitCat} className="flex-right">
                    <input ref={inputRefCat} type='text' placeholder='Add life area (work, learning, sports...)' onChange={handleInputCat} className="btnCategory"/>
                    <button className="btn buttonAdd btnCategory" onClick={addCategory}>Add</button>
            </form>
            <div className="categoryContainer">
            {mediumCategory.map(category => {
                return (
                    <div key={category.id} className="categoryBlock">
                        <h2 className='categoryHeading'>{category.text}</h2>
                            <MediumMode 
                                setMediumCategory={setMediumCategory}
                                index={category.id}
                                mediumCategory={mediumCategory}

                            
                            />
                        </div>
                    )
                    
            })}
            </div>

            
        </div>
    )
}

export default MediumCategory