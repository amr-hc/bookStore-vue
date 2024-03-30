<template>
    <div class="d-flex bg-danger justify-content-between  p-3" >
        <router-link to="/" class="btn btn-primary ">productions</router-link>
        <p class="fw-bolder m-2" > You have in your card {{datastore.cart.items.length}} <span v-if="datastore.cart.items.length==0">item</span> <span v-else>items</span></p>
        <!-- <button  class="btn btn-primary ">Show Card</button> -->
        <router-link to="/cart" class="btn btn-primary ">Show Card</router-link>
    </div>
</template>

<script>

import {datastore} from "../mystore"


export default {
    data:()=>({
        datastore:datastore()
    }),
    methods:{
        
    }
}
</script>

<style>

</style>