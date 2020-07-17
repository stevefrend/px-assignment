
<template>
  <div>
    <span>{{id}}</span>
    <span>{{name}}</span>
    <router-link :to="{ name: 'CompanyPage', params: { id: id }}">Info</router-link>
    <router-link :to="{ name: 'CompanyEditPage', params: { id: id }}">Edit</router-link>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'CompanyItem',
  props: {
    id: Number,
    name: String,
  }
};
</script>

<style scoped>

div {
  background-color: lightblue;
}

</style>
