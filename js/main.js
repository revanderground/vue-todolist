const app = new Vue (
    {
        el: '#root',
        data: {

            currentTodoField:'',
           
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }

            ]

           
        },
        methods:{

          remove: function(indice){
            this.todos.splice(indice,1);
          },

          addToList: function(ToDoElementText){
            if (ToDoElementText!=''){
                const todoElement = {
                    text: ToDoElementText,
                    done: false,
                }
                this.todos.push(todoElement);
                this.currentTodoField = '';
            } else{    
                    console.warn('stai provando ad inserire un elemento todo vuoto');
            }

            },

            
            updateDoneStatus: function (todoIndex){
                this.todos[todoIndex].done = !this.todos[todoIndex].done;
            }    
            

           },

        }
           
);