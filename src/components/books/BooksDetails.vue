<template>
  <div class="container">
    <h2>Book details</h2>
  </div>

  <table class="table table-striped">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><b>ID:</b> {{ book.id }}</li>
      <li class="list-group-item"><b>Author:</b> {{ book.user.firstname }} {{ book.user.lastname }}</li>
      <li class="list-group-item"><b>Title:</b> {{ book.title }}</li>
      <li class="list-group-item"><b>Description:</b> {{ book.description }}</li>
    </ul>
  </table>
</template>

<script>
import useBooks from "../../composables/books";
import { onMounted } from 'vue'

export default {
  name: "BooksDetails",
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const { errors, book, getBook } = useBooks()

    onMounted(getBook(props.id))

    return {
      errors,
      book,
      getBook
    }
  }
}
</script>

<style scoped>

</style>