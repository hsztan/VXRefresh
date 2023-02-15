const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      const result = results[0];
      this.firstName = result.first;
      this.lastName = result.last;
      this.email = result.email;
      this.gender = result.gender;
      this.picture = result.picture.large;
    },
  },
});

app.mount('#app');
