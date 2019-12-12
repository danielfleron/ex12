
<template>
    <div>
        <Connexion></Connexion>
        <Client></Client>
    </div>
</template>

<script>
    import Connexion from "@/components/Connexion"
    import Client from "@/components/Client"

    export default {
        name: 'App',	// nom parent
        components:{
            Connexion,
            Client,
        }
    }
</script>

<style>

</style>
