<script>

  import { tab } from './AddBookPage.vue';
  import BookItem from '../components/BookItem.vue';

  export default {
    name: 'HomePage',
    data() {
      return {
        books: tab,
        text: '',
      };
    },
    computed: {
      booksfiltered() {
        return this.books.filter((book) => {
          return book.bookName.toUpperCase().includes(this.text.toUpperCase());
        });
      },
    },
    components: { BookItem },
  };

</script>

<template>

  <div class="container">
    <input v-model="text" placeholder="search" class="search-bar" />
    <br>
    <br>
    <br>
  </div>

  <div>
    
    <div v-if="booksfiltered.length === 0 && text !== ''">
      No books match the search.
    </div>

    <div v-for="book in booksfiltered" :key="book.id">
      <ul>
        <li>
          <BookItem :book="book"/>
          <RouterLink :to="{ name: 'BookPage', params:{id: book.id}}"><button id="+">+</button></RouterLink>
        </li>
      </ul>
    </div>   

  </div>
</template>
 
<style>

  div{
    text-align: center;
  }

  .container{
    justify-content: space-between;
    row-gap: 2rem;
  }
  
  .search-bar{
    border: solid #ccc;
    border-radius: 5px;
  }
  
</style>
