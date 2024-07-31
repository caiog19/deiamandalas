<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleRegister() {
      // Lógica para registro
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
};
</script>
