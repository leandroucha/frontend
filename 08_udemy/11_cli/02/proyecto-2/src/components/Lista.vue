<template>
    <div>
        <ul class="list-group">
            <li v-for="(item, index) of frutasOrdenadas" :key="item.id" @click="aumentar(index)"  
            class="list-group-item d-flex justify-content-between align-items-center"> <!--este index se pasa al metodo de abajo -->
                {{index}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block" @click="reset">Reset</button>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Lista',
        computed:{
            ...mapState(['frutas']), // aca traigo las frutas que seteamos en el index.js del store
            frutasOrdenadas(){
                return this.frutas.sort((a , b) => b.cantidad - a.cantidad)
            }
        },
        methods:{
            ...mapMutations(['aumentar','reset']) //este metodo llama al mutation del store (index.js)

        }
    }
</script>