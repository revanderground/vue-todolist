const app = new Vue (
    {
        el: '#root',
        data: {
            hide: false,
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

            Hidden: function(){
                this.list-item=='';
                this.todo.text=='';
            }

        }
    }        
);