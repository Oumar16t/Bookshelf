<script>
    export default {
        name: 'BookItem',
        props:{
            book: Object
        }

    }
</script>

<template>
    <div v-if="book" class="containerB">
        <h2><strong>{{ book.bookName }}</strong></h2>
        Author : {{ book.authorName }}
        <br>
        Number of pages : {{ book.pageCount }}
        <br>
    </div>
</template>

<style>
    .containerB {
        text-align: center;
        border: solid;
        margin-top: 50px;
    }

    h2{
        text-decoration: underline;
    }

</style>
