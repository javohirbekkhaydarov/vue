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
  name.value = null;
  surname.value = null;

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
    <div>
      <input v-model="name" type="text" name="text" id="text" />
      <label for="name"> enter your name </label>
    </div>
    <div>
      <input v-model="surname" type="text" name="surname" id="surname" />
      <label for="surname">enter your surname</label>
    </div>
    <button class="btn" @click="createUser" v-if="!isEdit">add</button>
    <button class="btn" @click="updateUser" v-else>update</button>
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

<style scoped>
div {
  width: 400px;
  margin: 40px auto;
  text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
}
div input {
  padding: 25px 15px 15px;
  border: 1px solid #673ab7;
}
input:focus {
  outline: none;
}
div label {
  position: absolute;

  color: #777;
  transition: all 0.3s;
  cursor: text;
}
label {
  top: 5px;
  left: 105px;
  font-size: 12px;
  color: #673ab7;
}
p {
  font: 25px bold arial, helvetica, sans-serif;
  margin-top: 80px;
  text-align: center;
}

.btn {
  position: absolute;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 2px;
  font-weight: 200;
  top: 110%;
  left: 45%;
  border: none;
  padding: 10px 20px;
  margin: 0;
  box-shadow: none;
  color: white;
  background: #ee0979; /* fallback for old browsers */
  background: linear-gradient(to right, #ff6a00, #ee0979);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: x-large;
  background-size: 400% 400%;
  animation: ButtonBg 10s ease infinite;
}

.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.btn:active {
  display: none;
}

@keyframes ButtonBg {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* list */
ul li {
  text-align: center;
  font-size: 22px;
  list-style: none;
}
</style>
