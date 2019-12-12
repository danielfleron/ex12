<template>
    <div>
        <Post v-for="(post,index) in posts" :key="index" :details="post" :index="index"></Post>
    </div>
</template>

<script>
    import Post from "../subComponents/Post"
    export default {
        props:["posts"],
        name: "postForm",
        components:{
            Post
        }
    }
</script>

<style scoped>

</style>