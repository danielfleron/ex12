<template>
    <div class="comments">
        <PostComment v-for="(comment,index) in comments" :key="index">
            <template slot="message">{{comment.message}}</template>
            <span slot="date">{{comment.date}}</span>

        </PostComment>
    </div>
</template>

<script>
    import PostComment from "./PostComment"
    export default {
        props:["comments"],
        name: "postForm",
        components:{
            PostComment
        }
    }
</script>

<style scoped>

</style>