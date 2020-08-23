<template>
    <div>
        <h2 class="text-center">Product Details</h2>
        <div class="d-flex justify-content-end">
            <router-link class="btn btn-primary btn-smm" to="/create">+ Add Prodcut</router-link>
        </div>
        <div class="d-flex justify-content-between pt-4 mr-6 align-items-center mb-3">
            <div class="col-lg-8 col-md-8 col-sm-8">
                <div class="ml-7 mt-1" style="width:100%">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search By Product Name"
                        autocomplete="off"
                        v-model="search_key"
                        @input="searchByName"
                    />
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center" v-if="filter_details.length == 0">
            <div class="col-lg-4 col-md-4 col-ms-4">
                <span v-if="search_key.length == 0">No Products Found</span>
                <span v-else>No Search Result Found</span>
            </div>
        </div>
        <div class="d-flex flex-wrap" v-else>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="(product,index) in filter_details" :key="index">
                <div class="card p-3 cardNew pointer">
                    <div class="d-flex justify-content-end">
                        <span @click="removeProduct(index)" class="pointer" style="color:#0d84f2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </span>
                        <router-link class="pointer" :to="{ name: 'EditProduct', params: { id: product,unique:index } }" >
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
                                <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Product Name</span>
                        <span>{{product.name || '-'}}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Price</span>
                        <span>{{product.price || '-'}}</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span>Description</span>
                        <span>{{product.description || '-'}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { EventBus } from './eventBus/nav-bar-event'
export default {
    data () {
        return {
            search_key:'',
            details:[
                {
                    name:'ABC',
                    description:'Veg Meals',
                    price:100
                },
                {
                    name:'ABC1',
                    description:'Non-Veg Meals',
                    price:200
                },
                {
                    name:'ABC2',
                    description:'Pescetarian Meals',
                    price:300
                },
                {
                    name:'ABC3',
                    description:'Veg Meals',
                    price:400
                },
                {
                    name:'ABC3',
                    description:'Non-Veg Meals',
                    price:500
                }
            ],
            filter_details:[
                {
                    name:'ABC',
                    description:'Veg Meals',
                    price:100
                },
                {
                    name:'ABC1',
                    description:'Non-Veg Meals',
                    price:200
                },
                {
                    name:'ABC2',
                    description:'Pescetarian Meals',
                    price:300
                },
                {
                    name:'ABC3',
                    description:'Veg Meals',
                    price:400
                },
                {
                    name:'ABC3',
                    description:'Non-Veg Meals',
                    price:500
                }
            ],
            newData:{},
            editedData:{},
        }
    },
    methods:{
        removeProduct(index){
            this.details.splice(index,1)
            this.filter_details.splice(index,1)
        },
        searchByName(){
            this.filter_details = []
            for (var i = 0; i <= this.details.length; i++) {
                if (
                    this.details[i] &&
                    this.details[i].name.match(
                        new RegExp(this.search_key.trim(), 'gi')
                    )
                ) {
                    this.filter_details.push(this.details[i])
                }
            }
            if (this.search_key.trim().length == 0)
                this.filter_details = this.details
        }
    },
    mounted(){
        if(this.$route.params && this.$route.params.id){
            this.newData = this.$route.params.id
            this.filter_details.push(this.newData)
            this.filter_details.push(this.newData)
        }
        if(this.$route.params && this.$route.params.newId){
            this.editedData = this.$route.params.newId
            let key = this.$route.params.key
            this.details.forEach((el,index)=>{
                this.details[key] = this.editedData
                this.$forceUpdate()
            })
            this.filter_details.forEach((el,index)=>{
                this.filter_details[key] = this.editedData
                this.$forceUpdate()
            })
        }
    },
}
</script>
<style scoped>
.pointer{
    cursor: pointer;
}
</style>