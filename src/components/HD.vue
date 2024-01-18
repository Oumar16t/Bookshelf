<script>
</script>

<template>
  <header>
    <br>
    <div class="logo-container">
      <img src="../assets/img/Vue.png" alt="logo" id="logo">
      <p id="title">Bookshelf</p>
    </div>
      <nav class="navbar">
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/books/add">AddBook</RouterLink>
          </li>
        </ul>
        </nav>
  </header>
</template>

<style>

  header {
    width: 100%;
    text-align: center;
  }

  #title {
    font-size: 3rem;
  }
  .navbar {
    font-size: large;
  }

  #logo 
  {
    width: 75px;
    height: auto;
  }

  ul {
    padding: 0%;
  }

  li {
    list-style-type: none;
  }
</style>
