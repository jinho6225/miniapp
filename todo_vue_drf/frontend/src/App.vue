<template>
  <div id="app">
    <div class="container">
      <header className="header">
        <h2>Todo List</h2>
        <h4>(Django RESTful api + Vue.js)</h4>
      </header>
      <div class="inputBox">
            <form class="inputForm" v-on:submit.prevent="addTask">
            <input 
                type="text" 
                placeholder="Add task" 
                class="inputField" 
                v-model="title"/>
            <button 
                type="submit" 
                class="submitBtn"
                >
                Submit</button>
            </form>
        </div>
      <div class="list-container">
        <ul class="unorder-list" v-for="(todo) in todoList" :key="todo.id">
          <li class="task-list">
            <span>{{ todo.title }}// {{todo.id}}</span>
            <span class="icon">
                <i class="far fa-edit"></i>
                <i class="far fa-trash-alt" @click="deleteTask(`${todo.id}`)"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

export default {
  name: "app",
  data() {
    return {
      todoList: [],
      title: "",
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      let URL = `http://127.0.0.1:8000/api/task-list`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => (this.todoList = data));
    },
    addTask() {
      if (this.title) {
          const csrftoken = getCookie('csrftoken');
          let URL = "http://127.0.0.1:8000/api/task-create/"
          fetch(URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({ title: this.title }),
          })
          .then(res => res.json())
          .then(data => {
            let newTask = {
              id: data.id,
              title: data.title,
              completed: data.completed
            }
            this.todoList.push(newTask)
            this.title = ''
          })
          .catch((err) => console.log(err))
      }
    },
    deleteTask(id) {
        const csrftoken = getCookie('csrftoken');
        let URL = `http://127.0.0.1:8000/api/task-delete/${id}`
        fetch(URL, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
        })
        .then(res => {
          if (res.status === 204) {
            this.getTasks()
          }
        })
          
      }
  },
  component: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style: none;
}

* {
  font-family: "Montserrat", sans-serif;
}
:root {
  --lightgray-color: #fbe9e7;
  --white-color: #f3e5f5;
  --shadow-color: #777;

  --padding: 8px;

  --micro-font: 10px;
  --small-font: 12px;
  --normal-font: 16px;
  --large-font: 20px;
}
body {
  background: #e1bee7;
  background: linear-gradient(90deg, #e1bee7 0%, #fff1ff 50%, #e1bee7 100%);
}
.container {
  margin-top: 5%;
}
.header {
  text-align: center;
  padding: var(--padding);
}
.inputBox {
  padding: calc(var(--padding) * 2) calc(var(--padding) * 3);
  background-color: var(--white-color);
  box-shadow: 0 10px 6px -6px var(--shadow-color);
}

.inputForm {
  width: 100%;
  display: flex;
}
.inputField {
  flex-grow: 7;
  border: 1px solid var(--lightgray-color);
  padding: var(--padding);
  width: 80%;
}
.submitBtn {
  font-size: var(--normal-font);
  flex-grow: 1;
  background-color: #e1bee7;
  border: 0;
  width: 15%;
}
.list-container {
  margin-top: calc(var(--padding) * 2);
}
.unorder-list {
  list-style: none;
  padding: 0;
}
.task-list {
  margin: 1% 0;
  padding: var(--padding) calc(var(--padding) * 4);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--white-color);
  box-shadow: 0 5px 3px -3px var(--lightgray-color);
  width: 100%;
}

.content {
  flex-grow: 7;
  padding: var(--padding);
  width: 80%;
  cursor: pointer;
}

.content.active {
  text-decoration: line-through;
  color: darkgrey;
}

.icon {
  flex-grow: 1;
  font-size: var(--large-font);
  padding: 0 var(--padding);
  text-align: center;
  display: flex;
  align-items: center;
  width: 15%;
  cursor: pointer;
  transition: all 1s;
}
.icon :hover {
  cursor: pointer;
  transform: scale(1.1);
}
.far {
  padding: var(--padding);
}

@media screen and (max-width: 500px) {
  .submitBtn {
    font-size: var(--micro-font);
  }
}
</style>
