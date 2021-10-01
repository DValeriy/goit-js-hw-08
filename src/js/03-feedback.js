import throttle from "lodash.throttle";
const formNode = document.querySelector(".feedback-form")
const emailInputNode = document.querySelector(".feedback-form input")
const messageInputNode = document.querySelector(".feedback-form textarea")

const handleInput = e => {
  const { email, message } = formNode.elements
  let objToLS = {
    email:email.value,
    message:message.value
  }
  localStorage.setItem("feedback-form-state",JSON.stringify(objToLS))
}
formNode.addEventListener("input",throttle(handleInput,500))

const checkForm = ()=> {
  let status = localStorage.getItem("feedback-form-state") 
  if (status ) {
    emailInputNode.value = JSON.parse(status).email;
    messageInputNode.value = JSON.parse(status).message;  
  }
}
checkForm()

const handleSubmit = e => {
  e.preventDefault()
  if (!(emailInputNode.value && messageInputNode.value))
    return alert(`Fill the fields`)    
  let  objToLS = {
    email:emailInputNode.value,
    message:messageInputNode.value
  }
  emailInputNode.value=''
  messageInputNode.value=''
  localStorage.clear()
  console.log(objToLS)
}
formNode.addEventListener("submit", handleSubmit);