const app = new Vue (
    {
        el: '#root',
        data: {

           
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

          


          }

        }
    }        
);