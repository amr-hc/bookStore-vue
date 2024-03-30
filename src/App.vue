<template>
            <div>
                <headerr/>

                <RouterView></RouterView>
          
            </div>
            
</template>

<script>

import {datastore} from "./mystore.js"

import headerr from "./components/header.vue"


export default {
        name: 'App',
         created(){
            this.datastore.created
        },
        data:()=>({
                datastore:datastore()     
        }),
        components:{
            headerr
        }
}
</script>

<style>

</style>
