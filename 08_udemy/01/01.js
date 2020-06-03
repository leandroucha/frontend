const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',               //variable
        frutas: ['Manzanas', 'Peras', 'Bananas'],   //array
        verduras: [                                 //array de objetos
            {nombre: 'lechuga', cantidad:10},
            {nombre: 'rucula', cantidad:0},
            {nombre: 'ajo', cantidad:11}
        ],
        nuevaVerdura: '',
        nuevaCantidadVerdura: 0,
        total: 0
    },
    methods:{
        agregarVerdura (){
            this.verduras.push({
                nombre: this.nuevaVerdura, 
                cantidad: this.nuevaCantidadVerdura
            });
            this.nuevaVerdura="";
            this.nuevaCantidadVerdura="";
        }
    },
    computed:{
        sumarVerduras(){
            this.total = 0;
            for(verdura of this.verduras){
                this.total = this.total + verdura.cantidad;
            }
            return this.total;
        }
    }
})