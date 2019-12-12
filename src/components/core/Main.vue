<template>
    <div>
        <div class="wrapper">
            <PostForm></PostForm>
            <PostList :posts="posts"></PostList>
        </div>
        <footer>
            <small>This is a very small footer</small>
        </footer>
    </div>
</template>

<script>
    import PostList from "../subComponents/PostList"
    import PostForm from "../subComponents/PostForm"
    import {bus} from "@/bus"

    export default {
        name: "Header.vue",
        components: {
            PostForm,
            PostList
        },
        data() {
            return {
                posts: []
            }
        },
        created() {
            bus.$on("createPost",()=>{
                this.posts.unshift({
                    message: "This is a new post",
                    like: (Math.random() > 0.5) ? (Math.random() > 0.5 ? true : false) : null,
                    comments: [{
                        date:"6/10/19",
                        message:"C'est super !"
                    }]
                })
            })
            bus.$on("addPost", payload => {
                this.posts.unshift({
                    message: payload,
                    like: null,
                    comments: []
                })
            })
        }
    }
</script>

<style scoped>

</style>