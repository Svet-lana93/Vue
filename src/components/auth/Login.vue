<template>
  <div class="container">
    <h2>Login</h2>

    <div class="alert alert-danger" role="alert" v-if="errors.length !== 0">
      <ul>
        <li v-for="error in errors">
          {{ error }}
        </li>
      </ul>
    </div>

    <form v-on:submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="text" class="form-control" name="email" v-model="form.email" placeholder="Email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" name="password" v-model="form.password" placeholder="Password">
      </div>
      <input type="submit" class="btn btn-success" value="Login">
    </form>
  </div>
</template>

<script>
import {reactive} from "vue";
import useLogin from "../../composables/auth";

export default {
  name: "Login",

  setup() {
    const form = reactive({
      email: "",
      password: ""
    })

    const { errors, loginUser } = useLogin()

    const login = async () => {
      await loginUser(form);
    }

    return {
      errors,
      form,
      login
    }
  }
}
</script>

<style scoped>

</style>