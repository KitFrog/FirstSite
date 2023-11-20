// scripts/todo-manager.js

document.addEventListener("DOMContentLoaded", function () {
    // Создаем объект для управления задачами
    var todoManager = {
        tasks: [],

        init: function () {
            // Находим элементы
            var createButton = document.querySelector('.btn');
            var deleteAllButton = document.querySelector('.btn_delete');
            var taskList = document.getElementById('taskList');
            var sortSelect = document.getElementById('sorts')

            // Назначаем обработчики событий
            sortSelect.addEventListener('change', this.sortTasks.bind(this));
            createButton.addEventListener('click', this.createTask.bind(this));
            deleteAllButton.addEventListener('click', this.deleteAllTasks.bind(this));
            taskList.addEventListener('change', this.updateTaskStatus.bind(this));
            taskList.addEventListener('click', this.deleteTask.bind(this));

            // Загружаем задачи из хранилища
            this.loadTasks();

            if (this.tasks.length === 0){
                this.addInitialTasks();
                this.saveTasks();
                this.renderTasks();
            }

            // Обновляем статистику
            this.updateStatistics();
        },

        addInitialTasks: function(){
            this.tasks.push({text: "Почесать кошку", completed:false});
            this.tasks.push({text: "Полить картошку", completed:false});
            this.tasks.push({text: "Сложить в лукошко", completed:false});
            this.renderTasks();
        },

        sortTasks: function(){
            var sortSelect = document.getElementById('sorts');
            var selectedSort = sortSelect.value;

            switch (selectedSort){
                case 'first-second':
                    this.tasks.sort(function(a,b){
                        return a.text.localeCompare(b.text);
                    });
                    break;
                case 'second-firsts':
                    this.tasks.sort(function(a,b){
                        return b.text.localeCompare(a.text);
                    });
                    break;
            }
            this.renderTasks();
        },

        createTask: function () {
            // Получаем значение из поля ввода
            var inputBox = document.querySelector('.inputBox');
            var inputValue = inputBox.value.trim();

            if (inputValue !== '') {
                // Создаем новую задачу
                var newTask = {
                    text: inputValue,
                    completed: false
                };

                // Добавляем задачу в массив
                this.tasks.push(newTask);

                // Очищаем поле ввода
                inputBox.value = '';

                // Обновляем список задач
                this.renderTasks();
                // Обновляем статистику
                this.updateStatistics();
                // Сохраняем задачи в хранилище
                this.saveTasks();
            }
        },

        renderTasks: function () {
            var taskList = document.getElementById('taskList');
            taskList.innerHTML = '';

            // Проходим по всем задачам и добавляем их в список
            this.tasks.forEach(function (task, index) {
                var listItem = document.createElement('li');
                listItem.classList.add('task-item');

                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.completed;

                // Используем data-index для хранения индекса задачи в массиве
                checkbox.setAttribute('data-index', index);

                var taskText = document.createElement('b');
                taskText.textContent = task.text;

                var deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-btn');
                deleteButton.innerHTML = '&#10060;';

                listItem.appendChild(checkbox);
                listItem.appendChild(taskText);
                listItem.appendChild(deleteButton);

                taskList.appendChild(listItem);
            });
        },

        updateTaskStatus: function (event) {
            if (event.target.type === 'checkbox') {
                var index = event.target.getAttribute('data-index');
                this.tasks[index].completed = event.target.checked;
                this.updateStatistics();
                this.saveTasks();
            }
        },

        deleteTask: function (event) {
            if (event.target.classList.contains('delete-btn')) {
                var index = event.target.parentElement.querySelector('input[type="checkbox"]').getAttribute('data-index');
                this.tasks.splice(index, 1);
                this.renderTasks();
                this.updateStatistics();
                this.saveTasks();
            }
        },

        deleteAllTasks: function () {
            this.tasks = [];
            this.renderTasks();
            this.updateStatistics();
            this.saveTasks();
        },

        updateStatistics: function () {
            var completedTasks = this.tasks.filter(function (task) {
                return task.completed;
            }).length;

            var totalTasks = this.tasks.length;
            var incompleteTasks = totalTasks - completedTasks;

            var completedLabel = document.getElementById('completed-label');
            var incompleteLabel = document.getElementById('incomplete-label');
            var totalLabel = document.getElementById('total-label');

            completedLabel.textContent = 'Выполнено: ' + completedTasks;
            incompleteLabel.textContent = 'Не выполнено: ' + incompleteTasks;
            totalLabel.textContent = 'Всего: ' + totalTasks;
        },

        saveTasks: function () {
            // Преобразуем массив задач в строку JSON и сохраняем в localStorage
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },

        loadTasks: function () {
            // Получаем задачи из localStorage и преобразуем их из строки JSON
            var savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                this.tasks = JSON.parse(savedTasks);
                this.renderTasks();
            }
        }
    };

    // Инициализируем объект для управления задачами
    todoManager.init();
});
