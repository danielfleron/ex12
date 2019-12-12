
<template>

    <div>
        <Header></Header>
        <Main></Main>
    </div>
</template>

<script>
    // Transformer le code pour utiliser un store centraliser pour stocker toutes les données "générales"
    import Main from "./components/core/Main"
    import Header from "./components/core/Header"
    export default {
        components:{
            Header,
            Main
        }
    }

</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        margin: 20px auto;
    }

    .logo img {
        max-height: 50px;
    }

    ul {
        list-style: none;
    }

    .wrapper {
        width: 600px;
        margin: 0 auto;
    }

    .card {
        margin-bottom: 50px;
        padding: 10px;
    }

    .comment-bar {
        border: 0;
        border-top: 1px solid #e2e2e2
    }

    .action-bar {
        flex-basis: 100%;
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
    }

    .action-bar .btn {
        width: 30%;
        flex-basis: 30%;
    }

    .comment-bar {
        flex-basis: 100%;
        margin-top: 10px;
        padding: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #e2e2e2;
    }

    .comments {
        background: #f2f2f2;
    }

    .comments div {
        display: flex;
        padding: 10px;
        justify-content: space-between;
    }

    footer {
        text-align: center;
        margin-bottom: 20px;
    }

    .content-to-post {
        border: 0;
        resize: none;
        background: #eeeeee;
        margin-bottom: 10px;
        outline: none;
        padding: 10px;
    }
</style>
