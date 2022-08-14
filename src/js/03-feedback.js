import throttle from "lodash.throttle";
const STORAGE_KEY = "feedback-form-state"

const refs = {
    form: document.querySelector(".feedback-form"),
    textArea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector(".feedback-form input")
}

formData = {};

populateTextarea()

refs.form.addEventListener("submit", onSubmitForm)
refs.form.addEventListener("input", throttle(onInputForm, 500))

function onInputForm(e){
   
    formData[e.target.name] = e.target.value;
    console.log(formData);
    let savedInput = JSON.stringify(formData)
    localStorage.setItem(STORAGE_KEY,savedInput)
}

function onSubmitForm(e){
    e.preventDefault()
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}


function populateTextarea() {
      const savedMessage = localStorage.getItem(STORAGE_KEY);
     
    
      if (savedMessage) {
        const objectMassege = JSON.parse(savedMessage)
        console.log(objectMassege)
        refs.textArea.value = objectMassege.message;
        refs.input.value = objectMassege.email;
      }
    }
