<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {

    async login() {
      try {
        const res = await axios.post("http://localhost:3000/api/users/login", {
          email: this.email,
          password: this.password
        });

        alert(res.data.message);
        localStorage.setItem("loggedIn", "true");
        this.$router.push("/");

      } catch (err) {
        alert(err.response?.data?.message || "Login failed");
      }
    },

    loginGoogle(){
      window.location.href = "http://localhost:3000/api/users/auth/google";
    }

  }
};
</script>

<template>
<div class="page">
  <h4>Đăng nhập</h4>

  <div class="form-group">
    <input v-model="email" class="form-control" placeholder="Email">
  </div>

  <div class="form-group mt-2">
    <input v-model="password" type="password" class="form-control" placeholder="Password">
  </div>

  <button class="btn btn-primary mt-3" @click="login">
    Đăng nhập
  </button>

  <router-link to="/register">
    <button class="btn btn-secondary mt-2">
      Đăng ký
    </button>
  </router-link>

  <button class="btn btn-danger mt-2" @click="loginGoogle">
    Đăng nhập Google
  </button>

</div>
</template>