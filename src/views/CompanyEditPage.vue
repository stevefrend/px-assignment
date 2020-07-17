<template>
  <div>
    <router-link :to="{ name: 'home' }">HOME</router-link>
    <form @submit="handleForm">
      <label for="name">Name: </label>
      <input type="text" name="name" :value="company.name" />
      <label for="domain">Domain: </label>
      <input type="text" name="domain" :value="company.domain" />
      <label for="employees">Number of Employees: </label>
      <input type="text" name="employees" :value="company.numberOfEmployees" />
      <label for="subscriptions">Subscriptions per Employee: </label>
      <input type="text" name="subscriptions" :value="company.subscriptionsPerEmployee" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import CompanyService from "../services/CompanyService";
import EditCompanyEmployeeAmount from "./EditCompanyEmployeeAmount";

export default {
  name: "CompanyEditPage",
  data() {
    return {
      company: {}
    };
  },
  methods: {
    handleForm(e) {
      e.preventDefault();
      const newDetails = `
        DETAILS UPDATED!

        Name: ${e.target.elements.name.value}
        Domain: ${e.target.elements.domain.value}
        Employees: ${e.target.elements.employees.value}
        Subscriptions: ${e.target.elements.subscriptions.value}
      `;
      /**
        * Could persist this data to memory but due to the instructions only triggering a window alert 
       */
      window.alert(newDetails);
    }
  },
  mounted() {
    CompanyService.getById(+this.$route.params.id).then(res => {
      this.company = res;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
