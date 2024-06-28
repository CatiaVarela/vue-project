<template>
  <br>
  <h2 class="title">Liste des utilisateurs</h2>
  <br>
  <table class="table is-bordered is-striped is-narrow is-fullwidth">
    <thead>
    <tr>
      <th>Nom</th>
      <th>Prénom</th>
      <th>Téléphone</th>
      <th>Email_JE</th>
      <th>Poste</th>
      <th>Année</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for = "membre in membres">
      <td>{{ membre.name }}</td>
      <td>{{ membre.firstname }}</td>
      <td>{{ membre.phone }}</td>
      <td>{{ membre.email_je }}</td>
      <td>
        <div v-for="(role, index) in membre.roles" :key="index">
          {{ role.poste }}<br/>
        </div>
      </td>
      <td>
        <div v-for="(role, index) in membre.roles" :key="index">
          {{ role.year }}<br/>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      membres: []
    }
  },
  methods:{
    async getusers(){
      try{
        const response = await axios.get('http://localhost:3000/users')
        this.membres = response.data
      }catch(error) {
        console.error(error)
      }
    }
    /*getusers(){
      fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        this.membres = data
      })
    }*/
  },
  mounted(){
    this.getusers()
  }
}
</script>

<style scoped>

table, th, td {
  border: 1px solid #f8f2f2;
  text-align: center;
  background-color: rgba(23, 177, 204, 0.03);
}
</style>