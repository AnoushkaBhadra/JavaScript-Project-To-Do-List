document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.todolist');
    
    const addTask = (text = '') => {
        // Create a new div
        const item = document.createElement('div');
        item.classList.add('item');

        // Create a new checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkBox');

        // Create a text input
        const task = document.createElement('input');
        task.type = 'text';
        task.placeholder = 'Enter a new task';
        task.classList.add('textBox');
        task.value = text;

        // Adding an event listener for checkbox
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                task.disabled = true;
            } else {
                task.disabled = false;
            }
        });

        // Adding an event listener for text input
        task.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                const text = task.value.trim();
                if (text !== '') {
                    addTask();
                }
            }
        });

        // Adding elements to the item
        item.appendChild(checkbox);
        item.appendChild(task);

        // Append the item to the container
        container.appendChild(item);

        // Focus on the new task input
        task.focus();
    };

    // Initialize the first task input
    addTask();
});
