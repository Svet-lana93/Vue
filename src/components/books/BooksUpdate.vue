<template>
  <div class="container">
    <h2>Update</h2>

    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>

    <form v-on:submit.prevent="saveBook">
      <div class="mb-3">
        <label for="user" class="form-label">Choose a user</label><br>
        <select id="id" name="user_id" v-model="book.user_id">
          <option :value="user.id" v-for="user in users" >{{ user.firstname }} {{ user.lastname }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" name="title" v-model="book.title" placeholder="title">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" name="description" v-model="book.description" placeholder="description">
      </div>
      <input type="submit" class="btn btn-success" value="Update">
    </form>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import useBooks from "../../composables/books";

export default {
  name: "BooksUpdate",
  props: {
    id: {
      type: String,
      required: true,
    }
  },

  setup(props) {

    const { errors, users, updateBook, getUsers, book, getBook } = useBooks()

    const initData = async () => {
      await getUsers();
      await getBook(props.id);
    }

    console.log(book.user_id);

    const saveBook = async () => {
      await updateBook(props.id)
    }

    onMounted(initData);

    return {
      errors,
      users,
      saveBook,
      book
    }
  }
}
</script>

<style scoped>

</style>