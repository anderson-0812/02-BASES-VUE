console.log( Vue );

const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes);

// todo lo que esta en app es un component 
const app = Vue.createApp({
    
    // este metodo genera rendering en el uso de option api en vue 
    // message o mas opciones podran ser usadas como variables desde el html
    data() {
        return {
            quotes,
            newQuote: 'Hola mundo'
        }
    },
    methods:{
        addQuote() {
            console.log(this.newQuote);
            this.quotes.unshift(
                {
                    quote: this.newQuote,
                    // author: this.newAuthor
                    // author: 'Anderson'
                    
                }
            );

            console.log(quotes);
           
        }
    }

})


// montamos el contenido de este componente dentro del id del div
// 
app.mount('#myApp')