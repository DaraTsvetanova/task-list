// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadAllEvenetListeners();

// Load all event listeners
function loadAllEvenetListeners() {
// Add task event
form.addEventListener('submit', addTask);
}

// Add Task
function addTask (e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create  text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append the link to the li
  li.appendChild(link);
  // Apend the li to the ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value === ''; 

  e.preventDefault();
}
