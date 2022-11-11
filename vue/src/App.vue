<script setup>
import { ref, onMounted } from "vue";

//axios

import axios from "axios";
const users = ref([]);

//?OnMounted
const fetchUsers = () => {
  const data = axios
    .get("http://localhost:3000/users")
    .then((res) => (users.value = res.data));
};
onMounted(() => {
  fetchUsers();
});
const name = ref("");
const surname = ref("");
//
const createUser = () => {
  axios
    .post("http://localhost:3000/users", {
      name: name.value,
      surname: surname.value,
    })
    .then(() => {
      console.log("add user");
    })
    .finally(() => {
      // window.location.reload()
      fetchUsers();
    });
  name.value = "";
  surname.value = "";
};

//? edit func
const isEdit = ref(false);
const id = ref(null);
const editUser = (user) => {
  isEdit.value = true;
  console.log(user);
  name.value = user.name;
  surname.value = user.surname;
  id.value = user.id;
};

//update user

const updateUser = () => {
  axios
    .put(`http://localhost:3000/users/` + id.value, {
      name: name.value,
      surname: surname.value,
    })
    .then(() => {
      console.log("user update  ");
    })
    .finally(() => {
      fetchUsers();
    });
  name.value = "";
  surname.value = "";
  id.value = null;
  isEdit.value = false;
};

//delete user
const deleteUser = (id) => {
  try {
    axios
      .delete("http://localhost:3000/users/" + id)
      .then(() => {
        console.log("user delete");
      })
      .finally(() => {
        fetchUsers();
      });
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <h2>create user</h2>
  <form action="#" method="POST" @submit.prevent>
    <input
      v-model="name"
      type="text"
      name="text"
      id="text"
      placeholder="enter your name"
    />
    <input
      v-model="surname"
      type="text"
      name="surname"
      id="surname"
      placeholder="enter your surname"
    />
    <button @click="createUser" v-if="!isEdit">add</button>
    <button @click="updateUser" v-else>update</button>
  </form>
  <h2>all user</h2>
  <ul>
    <li v-for="user in users" :key="user.id">
      <span> {{ user.id }}-{{ user.name }} {{ user.surname }} </span> |
      <span style="color: cyan; cursor: pointer" @click="editUser(user)">
        edit</span
      >
      |
      <span style="color: red; cursor: pointer" @click="deleteUser(user.id)">
        delete</span
      >
    </li>
  </ul>
</template>

<style scoped></style>
