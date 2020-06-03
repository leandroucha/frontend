Vue.component('hijo',{
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
        <button @click="numero++">+</button>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'ignacio'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }
})