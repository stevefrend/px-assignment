<template>
  <div class="container">
    <router-link :to="{ name: 'home' }" class="is-size-5">HOME</router-link>
    <hr/>
    <h1 class="is-size-5">Company name: {{ company.name }}</h1>
    <h2 class="is-size-5">Company Domain: {{ company.domain }}</h2>
    <h2 class="is-size-5">Number of Employees: {{ employees }}</h2>
    <h2 class="is-size-5">Subscriptions per Employee: {{ company.subscriptionsPerEmployee }}</h2>
    <h2 class="is-size-5">Total Subscriptions: {{ subsPerEmployee }}</h2>
    <EditCompanyEmployeeAmount
      v-if="company.id"
      :employeeAmount="company.numberOfEmployees"
      :id="company.id"
      @updatedEmployees="updatedEmployees"
    />
  </div>
</template>

<script>
/* eslint-disable */
import CompanyService from "../services/CompanyService";
import EditCompanyEmployeeAmount from "./EditCompanyEmployeeAmount";

export default {
  name: "CompanyPage",
  components: {
    EditCompanyEmployeeAmount,
    
  },
  data() {
    return {
      company: {},
      employees: 0
    };
  },
  computed: {
    subsPerEmployee() {
      return this.company.subscriptionsPerEmployee * this.employees;
    }
  },
  methods: {
    updatedEmployees(newEmployeeCount) {
      this.employees = newEmployeeCount;
    }
  },
  mounted() {
    CompanyService.getById(+this.$route.params.id).then(res => {
      this.company = res;
      this.employees = res.numberOfEmployees;
    });
  }
};
</script>

<style scoped>
.container {
  background-color: lightblue;
  padding: 50px 20px;
}
</style>
