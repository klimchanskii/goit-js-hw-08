import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state"

const refs = {
    form: document.querySelector(".feedback-form"),
    textArea: document.querySelector(".feedback-form textarea"),
    input: document.querySelector(".feedback-form input")
}

let formData = {};

populateTextarea()

refs.form.addEventListener("submit", onSubmitForm)
refs.form.addEventListener("input", throttle(onInputForm, 500))

function onInputForm(e){
   
    formData[e.target.name] = e.target.value;
    const savedInput = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY,savedInput);
};

function onSubmitForm(e){
    e.preventDefault()
    if(refs.textArea.value && refs.input.value){
     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY))); 
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
    // console.log(formData);
    // formData ={};
    return;
    }
    alert("Please input a Value");
    return "";
}


function populateTextarea() {
      const savedMessage = localStorage.getItem(STORAGE_KEY);
     
    
      if (savedMessage) {
        const objectMassege = JSON.parse(savedMessage)
        formData = objectMassege
        console.log(objectMassege)
        refs.textArea.value = objectMassege.message ? objectMassege.message : "";
        refs.input.value = objectMassege.email ? objectMassege.email: "";
      }
    }
