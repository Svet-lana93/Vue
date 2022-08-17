<template>
  <main class="d-flex flex-nowrap">
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 280px;">
      <span class="fs-4">Client App</span>
      <hr>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'dashboard' }" class="nav-link text-white">Dashboard</router-link>
        </li>
        <li v-if="tokenExists()" class="nav-item">
          <router-link :to="{ name: 'books.index' }" class="nav-link text-white">Books</router-link>
        </li>
        <li v-if="!tokenExists()" class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link text-white">Login</router-link>
        </li>
        <li v-if="tokenExists()" class="nav-item">
          <a href="#" @click.prevent="logout" class="nav-link text-white">Logout</a>
        </li>
      </ul>
    </div>
  </main>

  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import useLogin from "./composables/auth";

export default {
  name: "BaseComponent",
  components: {},
  setup() {
    const { isLogin, logoutUser } = useLogin()

    const tokenExists = () => {
      return isLogin();
    }

    const logout = () => {
      return logoutUser();
    }

    return {
      tokenExists,
      logout
    }
  }

}
</script>

<style>
  #app { height: 100vh }
  h2 { margin-top: 14px}
  .content-actions { margin: 15px 0; }
  ul {margin-bottom: 0;}
</style>