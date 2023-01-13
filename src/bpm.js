import React from "react"

export default function Bpm(){
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
            console.log('bpm changed: ', formData.bpm);
        }
        
        function handleSubmit(event) {
            event.preventDefault() /*hindrer automatisk refresh av siden og sending av data som URL*/
            // submitToApi(formData) /*Bruker denne isteden for URL og håndterer data i backend.*/
            console.log(formData)
        }

        function tap(parameter){
            console.log("TAP!")
        }

    return (
        <>
            <div className="bpm_container">
                <h1>156 BPM</h1>
            </div>
            <div className="tap_button" onClick={() => tap()}>
                <h2>TAP</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Eller skriv inn bpm"
                    onChange={handleChange} 
                            name="bpm" 
                       value={formData.bpm} 
                />
                
            </form>
        </>
    )
}