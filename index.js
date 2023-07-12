let input = document.getElementById('input')
let button = document.getElementById("button")
let ul = document.getElementById('todo-list')

button.addEventListener('click',() =>{
  const li = document.createElement('li')
  const liValue= document.createTextNode(input.value)

  li.appendChild(liValue)

  ul.appendChild(li)

  input.value = ''
})

button.addEventListener('keypress',(event)=>{
  if (event.key === 13){
    const li = document.createElement('li')
  const liValue= document.createTextNode(input.value)

  li.appendChild(liValue)

  ul.appendChild(li)

  input.value = ''
}
}
)
