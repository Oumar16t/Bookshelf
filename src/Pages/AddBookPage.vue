<script>
    import BookForm from '../components/BookForm.vue';
    
    let tab = []
    let id = 1

    export default
    {
        name: "AddBookPage",
        components: {
            BookForm
        },
        methods: {
            saveBook(t){
                if (t.bookName && t.authorName && t.pageCount > 0){
                    for (let index = 0; index < tab.length; index++) {
                        if((tab[index].bookName ===  t.bookName)&&(tab[index].authorName === t.authorName))
                        {

                            alert("This book is already in your list ");
                            t.bookName= '',
                            t.authorName= '',
                            t.pageCount= ''
                            return;
                        }
                    }

                    const newBook = {
                    id: id, 
                    bookName: t.bookName, 
                    authorName: t.authorName, 
                    pageCount: t.pageCount
                    }; 

                    id++
                    tab.push(newBook);
                    console.log(tab)

                    t.bookName= '',
                    t.authorName= '',
                    t.pageCount= ''
                }
                else {
                    alert('Please fill out all fields');
                    }
            }
        }
    }

    console.log(tab)
    export {tab};

  
</script>

<template>
    <BookForm buttonText="Add" :addBook=saveBook />
</template>

<style>
</style>