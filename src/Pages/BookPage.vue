<script>
    import { tab } from './AddBookPage.vue';
    import BookItem from '../components/BookItem.vue';
    import BookForm from '../components/BookForm.vue';

    export default
    {
        name:"AddBookPage",
        data(){
            return{
                showForm: false,
                currentBook: tab.find(book => book.id === Number(this.$route.params.id)) 
            }
        },
        components: {
            BookForm,
            BookItem
        },
        methods: {
            modify(book){

                if (book.bookName && book.authorName && book.pageCount >= 1 ) {

                    for (let index = 0; index < tab.length; index++) {
                        if((tab[index].bookName ===  book.bookName)&&(tab[index].authorName === book.authorName))
                        {

                            alert("This book is already in your list ");
                            book.bookName = ''
                            book.authorName = ''
                            book.pageCount = ''
                            return;
                        }
                        else if (tab[index].id == this.$route.params.id)
                        {
                            const newBook = {
                            id: Number(this.$route.params.id),
                            bookName: book.bookName,
                            authorName: book.authorName,
                            pageCount: book.pageCount
                            };

                            this.currentBook = newBook;
                            tab[index] = newBook;

                        }
                    }
                
                    book.bookName = ''
                    book.authorName = ''
                    book.pageCount = ''

                    this.showForm = false
                    console.log(tab);
                }
                else {
                    alert('Please fill out all fields');
                }
            },

            deleteBook(){
                const index = tab.findIndex(book => book.id == this.$route.params.id)

                if(index !== -1)
                {
                    tab.splice(index,1)
                }
                console.log(tab)
            
                alert("Your book has been delete !")
            }
        }
    }

</script>

<template>
    <BookItem :book="currentBook" />
    <div class="btnP">
        <button type="button" @click="showForm = !showForm" id="modifB">modify</button>
        <RouterLink to="/">
            <button type="button" @click="deleteBook" id="deletB">delete</button>
        </RouterLink>
    </div>
    <br>
    <br>
    <div v-if="showForm">
        <BookForm :addBook=modify buttonText="Save"/>
    </div>
</template>


<style>
.btnP {
    margin-top: 15px;
}

#modifB {
    margin: 15px;
    padding: 1px;
}


</style>