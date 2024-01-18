<script>
export default{
    name: "BookForm",
    data(){
        return{
            bookData: {
                bookName: '',
                authorName: '',
                pageCount: ''
            }
        }
    },
    props: {
        addBook: Function,
        buttonText : String
       }
}
</script>


<template>
    <section class="form">
        <h1>Add your Book !</h1>
        <form @submit.prevent="submitForm">
            <label id="bookName">Book Name</label>
            <input type='text' v-model="bookData.bookName"/>

            <label id="authorName">Author name</label>
            <input type='text' v-model="bookData.authorName"/>

            <label id="pageCount" >Page Count</label>
            <input type="number" min="1" v-model="bookData.pageCount"/>

            <button className='btn' @click="addBook(bookData)"  type="button">{{ buttonText }}</button>
        </form>
    </section>
</template>

<style>

    .form{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 1rem;
        padding: 3rem;
    }

    form{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
    }

    .form btn{
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        background-color: #ccc;
    }

    .form input{
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
    }

</style>
