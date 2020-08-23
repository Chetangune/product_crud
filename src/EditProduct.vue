<template>
     <div>
        <h2 class="text-center">Edit Product</h2>
        <div class="mt-3">
            <div class="d-flex">
                <div class="col-lg-6 col-md-6 col-ms-12">
                    <div class="form-group">
                        <label for="exampleFormControlInput1" style="color:#0d84f2">Product Name*</label>
                        <input type="text" class="form-control" placeholder="Product Name" v-model="createJson.name">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-ms-12">
                    <div class="form-group">
                        <label for="exampleFormControlInput1" style="color:#0d84f2">Product Price*</label>
                        <input type="text" class="form-control" v-on:keypress="isNumber($event)" placeholder="Product Price" v-model.number="createJson.price" >
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="col-lg-6 col-md-6 col-ms-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" style="color:#0d84f2">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="createJson.description"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-danger btn-smm" @click="cancel">Cancel</button>
            <router-link type="button" class="btn btn-primary btn-smm" :to="{ name: 'ProductDetails', params: { newId: createJson,key:key } }">Save</router-link>
        </div>
    </div>
</template>
<script>
import { EventBus } from './eventBus/nav-bar-event'
export default {
    data(){
        return{
            createJson:{
                name:'',
                price:null,
                description:''
            },
            key:null
        }
    },
    methods:{
        isNumber: function(evt, index) {
            evt = evt ? evt : window.event
            var charCode = evt.which ? evt.which : evt.keyCode
            if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
                evt.preventDefault()
            } else {
                return true
            }
        },
        cancel(){
            this.$router.push({
                path:'/',
            })
        }
    },
    mounted(){
        this.createJson = this.$route.params.id
        this.key = this.$route.params.unique
    },
}
</script>
<style scoped>

</style>