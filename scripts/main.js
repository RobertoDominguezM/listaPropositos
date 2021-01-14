const titulo = Vue.createApp({
    data(){
        return {
            mensaje: "Propósitos de año nuevo:"
        }
    }
});

const app = Vue.createApp({
   data() {
        return {
            nuevoProp: "",
            propositos: [{
                texto: "Hacer deporte",
                hecho: false
            }, 
            {
                texto: "Comer más sano",
                hecho: false
            }, 
            {
                texto: "Viajar más",
                hecho: true
            }],
            noPropositos: "La lista de propósitos está vacía"
        };
    },
    methods: {
        eliminarPropositos(indice, num) {
            this.propositos.splice(indice, num);
        }
    }
});