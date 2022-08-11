<template>
  <div class="container">
    <h2>Create</h2>

    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>

    <form v-on:submit.prevent="saveBook">
      <div class="mb-3">
        <label for="user_id" class="form-label">Choose a user</label><br>
        <select name="user_id" v-model="form.user_id">
          <option v-bind:value="user.id" v-for="user in users">{{ user.firstname }} {{ user.lastname }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input type="text" class="form-control" name="title" v-model="form.title" placeholder="Title">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input type="text" class="form-control" name="description" v-model="form.description" placeholder="Description">
      </div>
      <input type="submit" class="btn btn-success" value="Create">
    </form>
  </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import useBooks from "../../composables/books";

export default {
  name: "BooksCreate",
  setup() {
    const form = reactive({
      user_id: "",
      title: "",
      description: ""
    })

    const { errors, createBook, users, getUsers } = useBooks()

    const saveBook = async () => {
      await createBook(form)
    }

    onMounted(getUsers);

    return {
      errors,
      form,
      saveBook,
      users
    }
  }
}
</script>

<style scoped>

</style>