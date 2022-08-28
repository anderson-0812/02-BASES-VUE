console.log( Vue );

const app = Vue.createApp({
    
    // este metodo genera rendering en el uso de option api en vue 
    // message o mas opciones podran ser usadas como variables desde el html
    data() {
        return {
            message: 'Soy Batman',
            author: 'Burce way'
        }
    }
})


// montamos el contenido de este componente dentro del id del div
// 
app.mount('#myApp')