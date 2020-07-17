<template>
  <div class="wrapper">
    <h5>Update Employee Count</h5>
    <hr />
    <span>New Amount: {{ newEmployeeAmount }}</span>
    <div>
      <button class="button" @click="newEmployeeAmount++">+</button>
      <button class="button" @click="newEmployeeAmount--">-</button>
      <button class="button" type="submit" @click="updateEmployeeCount">Update</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "EditCompanyEmployeeAmount",
  props: ["employeeAmount"],
  data: function() {
    return {
      newEmployeeAmount: this.employeeAmount
    };
  },
  methods: {
    updateEmployeeCount() {
      this.$emit("updatedEmployees", this.newEmployeeAmount);
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin-top: 40px;
  padding: 50px 20px;
  background-color: lightgray;
  border: 1px solid black;
}
</style>
