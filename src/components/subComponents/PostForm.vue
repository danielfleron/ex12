<template>
    <form class="element card">
        <textarea class="content-to-post" v-model="inputContent"></textarea>
        <button class="btn btn-primary" @click.prevent="sendPost">Poster</button>
    </form>
</template>

<script>
    import {bus} from "@/bus.js"
    export default {
        name: "postForm",
        data(){
            return{
                inputContent:""
            }
        },
        methods:{
            sendPost(){
                bus.$emit("addPost",this.inputContent)
                this.inputContent = ""
            }
        }
    }
</script>

<style scoped>

</style>