import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            bpm: "0"
        }
    )
    // LUUURE LITT PÅ OM DEN HER KUN SJEKKE SÅNN CHECKBOXA OG KAN FJERNES MEN LA STÅ I TILFELLE
    function handleChange(event) {
        const {name, value, type} = event.target
        setFormData(prevFormData => {
            return {
				//Trenger ikke ...prevFormData om det bare er ett felt
                // ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault() /*hindrer automatisk refresh av siden og sending av data som URL*/
        // submitToApi(formData) /*Bruker denne isteden for URL og håndterer data i backend.*/
        console.log(formData)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="BPM"
                onChange={handleChange} 
                name="bpm" 
                value={formData.bpm} 
            />
            <button>Submit</button>
        </form>
    )
}