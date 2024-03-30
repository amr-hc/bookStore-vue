<template>
<div class="alert alert-success text-center d-flex justify-content-evenly">

    <template>{{ getBookData($route.params.id) }}</template>
    <img style="width:15%" :src="srcphoto" class="card-img-top" alt="...">
    <div class="d-flex flex-column justify-content-between">     
    <p class="alert alert-primary">Book Id : {{ bid }}</p>
    <p class="alert alert-primary">Book Name : {{ bName }}</p>
    <p class="alert alert-primary">Category : {{ bcategory }}</p>
    <p class="alert alert-primary">Price : {{ bPrice }}</p>
</div>

</div>
</template>

<script>
export default {
    data:()=>({
        bid:"",
        bName:"",
        bPrice:"",
        bcategory:"",
        srcphoto:""
    }),
   methods:{
    async getBookData(id){
        let data = await fetch(`http://localhost:5000/books/${id}`)
        let book= await data.json()
        
        this.bid=book.id;
        this.bName=book.name;
        this.bPrice=book.price;
        this.bcategory=book.category;
        this.srcphoto="../"+book.photoSrc;

    }
   }
}
</script>

<style>

</style>