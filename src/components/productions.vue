<template>
    <div class="d-flex justify-content-between flex-wrap">
        <div  v-for="book in datastore.books" class="card m-2 " style="width: 18rem;" :key="book.id">
            <router-link :to="/book/+book.id">
            <img :src="book.photoSrc" class="card-img-top" alt="...">
            </router-link>
            <div class="card-body">
            <h5 class="card-title">{{book.name}}</h5>
            </div>
            <ul class="list-group list-group-flush d-flex  flex-row flex-wrap ">
            <li class="list-group-item w-50">{{book.category}}</li>
            <li class="list-group-item w-50">{{book.author}}</li>
            <li v-bind:class="book.pages < 300? 'red list-group-item w-50':'green list-group-item w-50'" >{{book.pages}}</li>
            <li class="list-group-item w-50">{{datastore.formatmoney(book.price)}}</li>
            <li class="list-group-item w-50">{{book.isbn}}</li>
            <button href="#" v-on:click="addtocard(book)" class="btn btn-primary w-50" :disabled="havebook(book)!==-1" >Add to list</button>
            </ul>
       
    </div>
    </div>
</template>

<script>

import {datastore} from "../mystore"


export default {
    data:()=>({
        datastore:datastore()
    }),
    methods:{
        async addtocard(book){
            this.datastore.cart.items.push(book);
            await fetch("http://localhost:5000/cart/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(book)});
        },
        havebook(book){
                return this.datastore.cart.items.findIndex(itemm=>itemm.id==book.id);
            }

    }
}
</script>

<style scoped>
.red{
    color: red;
}
.green{
    color: green;
}
</style>