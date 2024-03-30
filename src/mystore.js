import {defineStore} from 'pinia';

export const datastore = defineStore("mydataid",{
    
    state:()=>({
        counter:20,
        books:[],
        cart:{
                items:[]
             }
    }),
    actions:{
        formatmoney(value){
            return Intl.NumberFormat("ar-SA",{style:"currency",currency:"SAR",minimumFractionDigits:0}).format(value);
        }
    },
    getters:{
        async created(){
            let data=await fetch("http://localhost:5000/books/")
            this.books= await data.json();

            let cartdata=await fetch("http://localhost:5000/cart/")
            this.cart.items= await cartdata.json();

        }
    }

})


