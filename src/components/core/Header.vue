<template>
    <header class="container">
        <div class="logo">
            <img src="@/assets/logo.png" alt="Logo">
        </div>
        <nav>
            <ul>
                <li>
                    <button class="btn btn-primary" @click="randomPost">+ random post</button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
    import {bus} from "@/bus"
    export default {
        name: "Header.vue",
        methods:{
            randomPost(){
                bus.$emit("createPost")
            }
        }
    }
</script>

<style>

</style>