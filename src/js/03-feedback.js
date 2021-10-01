import fnLodTrot from "lodash.throttle";
const formNode = document.querySelector(".feedback-form")
const emailInputNode = document.querySelector(".feedback-form input")
const messageInputNode = document.querySelector(".feedback-form textarea")
let objToLS = {}

const handleInput = e => {
  const { email, message } = formNode.elements
  objToLS = {
    email:email.value,
    message:message.value
  }
  localStorage.setItem("feedback-form-state",JSON.stringify(objToLS))
}
formNode.addEventListener("input",fnLodTrot(handleInput,500))

const checkForm = ()=> {
  let status = localStorage.getItem("feedback-form-state") 
  if (status ) {
    emailInputNode.value = JSON.parse(status).email;
    messageInputNode.value = JSON.parse(status).message;
    objToLS = {
    email:emailInputNode.value,
    message:messageInputNode.value
  }
  }
}
checkForm()

const handleSubmit = e => {
  e.preventDefault()
  emailInputNode.value=''
  messageInputNode.value=''
  localStorage.clear()
  console.log(objToLS)
}
formNode.addEventListener("submit", handleSubmit);