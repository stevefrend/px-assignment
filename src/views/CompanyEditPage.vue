<template>
  <div class="container">
    <router-link :to="{ name: 'home' }" class="is-size-5">HOME</router-link>
    <hr/>
    <h1 class="title">Edit</h1>
    <form @submit="handleForm">
      <div class="field">
        <label class="is-size-5" for="name">Name: </label>
        <input class="is-size-5" type="text" name="name" :value="company.name" />
      </div>
      <div class="field">
        <label for="domain">Domain: </label>
        <input type="text" name="domain" :value="company.domain" />
      </div>
      <div class="field">
        <label for="employees">Number of Employees: </label>
        <input type="text" name="employees" :value="company.numberOfEmployees" />
      </div>
      <div class="field">
        <label for="subscriptions">Subscriptions per Employee: </label>
        <input type="text" name="subscriptions" :value="company.subscriptionsPerEmployee" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>

import CompanyService from '../services/CompanyService';


export default {
  name: 'CompanyEditPage',
  data() {
    return {
      company: {},
    };
  },
  methods: {
    handleForm(e) {
    /**
     * TODO
      * add form validation for fields
      * add tests for validation
      * add security checks
     */
      e.preventDefault();
      const newDetails = `
        DETAILS UPDATED!

        Name: ${e.target.elements.name.value}
        Domain: ${e.target.elements.domain.value}
        Employees: ${e.target.elements.employees.value}
        Subscriptions: ${e.target.elements.subscriptions.value}
      `;
      /**
        * Could persist this data to memory but due to the instructions
        * only triggering a window alert
       */
      window.alert(newDetails);
    },
  },
  mounted() {
    CompanyService.getById(+this.$route.params.id).then((res) => {
      this.company = res;
    });
  },
};
</script>

<style scoped>

.container {
  background-color: lightblue;
  padding: 50px 20px;
}

label {
  /* margin-right: 300px; */
}

form {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 50px;
}
</style>
