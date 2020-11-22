// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter task event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if(taskInput.value === ''){
    alert('Add a task');
    return
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add an icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append the link to the li
  li.appendChild(link);

  // Append the li to the ul
  taskList.appendChild(li);

  // Clear the input
  taskInput.value = ''; 


  e.preventDefault();
}

// Remove Task
function removeTask(e){
  if(e.target.parentElement.className.includes('delete-item')){
    if(confirm('Are you sure?')) { 
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear tasks
function clearTasks(e) {
  taskList.innerHTML = '';
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;

    if(item.toLowerCase().includes(text)) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}