let todoList = [
 {
  item:'Buy Milk',
  dueDate: '4/10/2023'
},
 {
  item:'Go to college',
   dueDate: '4/10/2023'
  }
];
displayItems();// call kiya jab page load ho rha hai tabhi

function addTodo(){
  let inputElement = document.querySelector
  ('#todo-input');
  let dateElement = document.querySelector
  ('#todo-date');
  let todoItem = inputElement.value;// andar ki valu niklegi
  let todoDate = dateElement.value

  // console.log(todoItem);
  todoList.push({item: todoItem,dueDate: todoDate});
  inputElement.value = '';  // add karne ke bad input todo empty
  dateElement.value = '';
  displayItems(); // jab bhi nya item add tab call kiya
}
// in this method will use  to show the item
 function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';

  for(let i=0; i<todoList.length; i++){
    //let item = todoList[i].item;
    //let dueDate = todoList[i].dueDate;
    let{item,dueDate} = todoList[i];
    newHtml += `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i},1);
    displayItems();">Delete</button>
    
    `;
    
  }
  containerElement.innerHTML = newHtml;
 }
