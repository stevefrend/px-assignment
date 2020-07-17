<template>
<div class="container">
  <h1 class="title">Companies</h1>
  <ul>
    <CompanyItem
      :key="company.id"
      v-for="company in companies"
      :name="company.name"
      :id="company.id"
    />
  </ul>
</div>
</template>

<script>
import CompanyItem from './CompanyItem.vue';
import CompanyService from '../services/CompanyService';


export default {
  name: 'home',
  components: {
    CompanyItem,
  },
  data() {
    return {
      companies: [],
    };
  },
  mounted() {
    CompanyService.getAll().then((res) => {
      this.companies = res;
    });
  },
};
</script>
