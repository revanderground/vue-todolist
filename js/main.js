const app = new Vue (
    {
        el: '#root',
        data: {

            newTodos:[],
           
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

          addToList: function(currentToDoEl){
            if (currentToDoEl==''){
                console.warn('stai provando ad inserire un elemento todo vuoto');
            } else{
                this.todos.push(currentToDoEl);
                this.newTodos = '';
            }

           }

        }
    }       
);