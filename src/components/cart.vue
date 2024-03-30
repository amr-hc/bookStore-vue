<template>
                <div class="text-center">
                    
                    <div v-if="datastore.cart.items.length==0" class="alert alert-warning" role="alert">Your Cart is Empty</div>
                    <div v-else>
                        <table class="table table-success">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                    
                                <tr v-for="item in datastore.cart.items" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.name}}</td>
                                    <td>{{datastore.formatmoney(item.price)}}</td>
                                    <td><button @click="removeitem(item)" class="btn btn-danger mx-1">-</button></td>
                    
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="2">Total cost</td>
                                    <td colspan="2">{{datastore.formatmoney(gettotalcost)}}</td>
                    
                                </tr>
                            </tfoot>
                        </table>
                        
                        
                    </div>
                </div>
</template>

<script>

import {datastore} from "../mystore"


export default {
    data:()=>({datastore:datastore()}),
    methods:{
        async removeitem(book){
            this.datastore.cart.items.splice(this.datastore.cart.items.findIndex(itemm=>itemm.id==book.id),1);
            await fetch(`http://localhost:5000/cart/${book.id}`,{method:"DELETE"});
        }
       

    },
    computed:{
        gettotalcost(){
            let totalCost=0;
            let i = 0;
            while (i < this.datastore.cart.items.length) {
                totalCost += this.datastore.cart.items[i].price;
                i++;
            }

            return totalCost;
        }
    }
}
</script>

<style>

</style>