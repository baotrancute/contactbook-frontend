<script>
import axios from "axios";

export default {

data(){
return{
username:"",
email:"",
password:""
}
},

methods:{

async register(){

await axios.post("http://localhost:3000/api/users/register",{

username:this.username,
email:this.email,
password:this.password

});

alert("Đăng ký thành công");

this.$router.push("/login");

}

}

}
</script>

<template>

<div class="page">

<h3>Đăng ký</h3>

<input v-model="username" placeholder="Username" class="form-control"/>

<input v-model="email" placeholder="Email" class="form-control mt-2"/>

<input v-model="password" type="password" placeholder="Password" class="form-control mt-2"/>

<button class="btn btn-primary mt-3" @click="register">
Đăng ký
</button>

</div>

</template>