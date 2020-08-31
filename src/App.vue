<template>
  <div class="container">
	<h1>Chatbot Helper</h1>
	<div id="app">
    <div>
      <input
        class="form-input"
        type="text"
        placeholder="Username"
        v-model="username"
      />
    </div>
    <div>
      <input
        class="form-input"
        type="password"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <div>
      <button class="register-btn" v-on:click="login()">Login</button>
    </div>
  </div>
</div>
</template>

<script>
import liff from 'liff-v2-sdk';
export default {
  name: 'App',
   data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    register() {
      alert('login');
      liff.getProfile().then(profile => {
        // const userProfile = profile.userId;
        const displayName = profile.displayName;
        // const statusMessage = profile.statusMessage;
        // const pictureUrl = profile.pictureUrl;
        // const email = liff.getDecodedIDToken().email;
        alert('displayName : '+displayName);
      }).catch(
        err => console.error(err)
      );
      // this.$store.dispatch('addTodo', {
      //   task: this.task,
      //   newId: this.newId
      // })
      // this.task = ''
    }
  },
  beforeCreate(){
    //alert('before create');
    liff.init({ liffId: "https://liff.line.me/1654367482-5LkZWvre" }, () => {
      if (liff.isLoggedIn()) {
        // ขั้นตอน 4.4 รออยู่
      } else {
        liff.login();
      }
    }, err => console.error(err.code, err.message));
  }
}
</script>

<style>
h1, h2 {
   font-family: Lato;
}
html {
    font-family: sans-serif;
    background: linear-gradient(45deg, #6cfd9f, #6887ff);
    height: 100%;
    color: #333;
}
.container {
    width: 24rem;
    margin: auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
}
h1 {
    text-align: center;
    margin-top: 0;
}
.form-input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border-radius: 0.25rem;
    border-style: none;
    border: solid 1px lightgray;
    box-sizing: border-box;
    margin-top: 30px;
}
.register-btn {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border-radius: 0.25rem;
    border-style: none;
    border: solid 1px lightgray;
    box-sizing: border-box;
    margin-top: 30px;
    color:white;
    background-color: #3399FF;
}
.register-btn:hover {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border-radius: 0.25rem;
    border-style: none;
    border: solid 1px lightgray;
    box-sizing: border-box;
    margin-top: 30px;
    color:black;
    background-color: #6cfd9f;

}
main {
    width: 100%;
    display: flex;
    align-items: center;
}
body {
    display: flex;
    height: 100%;
    margin: 0;
}

</style>
