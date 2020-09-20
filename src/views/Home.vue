<template>
    <div class="home">
        <all-inputs/>
    </div>
</template>

<script>
    import AllInputs from "../components/AllInputs"

    export default {
        name: 'Home',
        components: {
            AllInputs
        },
        data() {
            return {}
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Scheherazade:wght@700&display=swap');
    /*@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap');*/
    /*@import url('https://fonts.googleapis.com/css2?family=Lateef&display=swap');*/
    * {
        /*font-family: 'Lateef', cursive;*/

        font-size: 20px;
        font-family: 'Scheherazade', serif;
        /*font-family: 'Amiri', serif;*/
    }

</style>
