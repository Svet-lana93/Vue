<template>
  <div class="container">
    <h2>Books</h2>
    <hr>

    <div class="content-actions">
      <router-link :to="{ name: 'books.create' }">
        Create book
      </router-link>
    </div>

    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>

  <table class="table table-striped">
    <thead>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th></th>
    </thead>
    <tbody>
      <template v-for="book in books">
        <tr>
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.description }}</td>
          <td>
            <router-link :to="{ name: 'books.details', params: { id: book.id} }">View</router-link>
            <a href="#" @click.prevent="deleteBook(book.id)">Delete</a>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
import useBooks from '../../composables/books'
import { onMounted } from 'vue'

export default {
  name: "BooksIndex",
  setup() {
    const { errors, books, getBooks, destroyBook } = useBooks()

    const deleteBook = async (id) => {
      if (!window.confirm('You sure?')) {
        return
      }
      await destroyBook(id)
      await getBooks()
    }
    onMounted(getBooks)

    return {
      errors,
      books,
      deleteBook
    }
  }
}

</script>

<style scoped>

</style>