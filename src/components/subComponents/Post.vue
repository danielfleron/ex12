<template>
    <div class="element card">
        <div class="card-body">
            <p>{{details.message}}</p>
        </div>
        <div class="action-bar">
            <button class="btn like" :class="isLiked" @click="likeButton(true)">Like</button>
            <button class="btn btn-secondary dislike"
                    :class="{'btn-danger':details.like === false,'btn-secondary':details.like}"
                    @click="likeButton(false)">Dislike
            </button>
            <button class="btn btn-secondary comment" @click="toggleComments">Comment</button>
        </div>
            <template v-if="isCommentsDisplayed">
                <input class="comment-bar" type="text" placeholder="Write something here..." v-model="inputHandler" @keyup.enter="submitComment">
            </template>
        <PostCommentsList v-if="isCommentsDisplayed" :comments="details.comments"></PostCommentsList>
        </div>
</template>

<script>
    import PostCommentsList from "./PostCommentsList"
    //import {bus} from "@/bus"
    export default {
        props: {
            details: Object
        },
        data() {
            return {
                isCommentsDisplayed: false,
                inputHandler:""
            }
        },
        computed: {
            isLiked() {
                return {
                    'btn-info': this.details.like,
                    'btn-secondary': !this.details.like
                }
            }
        },
        methods: {
            toggleComments() {
                this.isCommentsDisplayed = !this.isCommentsDisplayed
            },
            likeButton(status) {
                this.details.like = (this.details.like === status) ? null : status
            },
            submitComment(){
                let currentDate = new Date();
                this.details.comments.unshift({
                    message:this.inputHandler,
                    date: currentDate.getDate() + "/"+ (parseInt(currentDate.getMonth())+1) + "/"+ currentDate.getFullYear()
                })
                this.inputHandler = ""
                console.log(this.details)
            }
        },
        name: "postForm",
        components: {
            PostCommentsList
        }
    }
</script>

<style scoped>

</style>