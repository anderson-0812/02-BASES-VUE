console.log( Vue );

// todo lo que esta en app es un component 
const app = Vue.createApp({
    
    // este metodo genera rendering en el uso de option api en vue 
    // message o mas opciones podran ser usadas como variables desde el html
    data() {
        return {
            message: 'Soy Batman',
            author: 'Burce way'
        }
    },

    // uso de metodos
    methods:{
        changeQuote( event ){
            console.log("hola desde metodo", event);
            // con this hacemos referencia a nuestras variables y metodos
            this.author = 'Anderson Jimenez'
            this.message = 'Yo soy Ironman'

            this.capitalizar()

        },
        capitalizar() {
            this.message = this.message.toUpperCase()
        }
    }
})


// montamos el contenido de este componente dentro del id del div
// 
app.mount('#myApp')