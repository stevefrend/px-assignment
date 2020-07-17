<template>
  <div class="item-container">
    <h2 class="is-size-5 item">{{ id }}</h2>
    <h2 class="is-size-5 item">{{ name }}</h2>
    <div class="buttons">
      <button class="button item">
        <router-link :to="{ name: 'CompanyPage', params: { id: id } }">Info</router-link>
      </button>
      <button class="button item">
        <router-link :to="{ name: 'CompanyEditPage', params: { id: id } }">Edit</router-link>
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CompanyItem",
  props: {
    id: Number,
    name: String
  }
};
</script>

<style scoped>
.item-container {
  background-color: lightblue;
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
}

.item {
  margin-right: 30px;
  margin-top: 20px;
}

</style>
