console.log( Vue );

const app = Vue.createApp({
    template: `
        <h1>Hola mundo Vue</h1>
        <p>Desde app.js</p>
    `
})


// montamos el contenido de este componente dentro del id del div
// 
app.mount('#myApp')