<template>
    <div class="element card">
        <div class="card-body">
            <p>Ceci est un message</p>
        </div>
        <div class="action-bar">
            <button class="btn btn-secondary like">Like</button>
            <button class="btn btn-secondary dislike">Dislike</button>
            <button class="btn btn-secondary comment">Comment</button>
            <input class="comment-bar" type="text" placeholder="Write something here...">
        </div>
    </div>
</template>

<script>
    export default {
        name: "postForm"
    }
</script>

<style scoped>

</style>