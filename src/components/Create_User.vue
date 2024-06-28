<template>
  <br>
  <h2 class="title"> Créer un utilisateur</h2>
  <br>
  <form @submit.prevent="submit">
    <div class="field is-grouped is-grouped-centered ">
      <div class="field-label is-normal">
        <label class="label" for="name">Nom </label>
      </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="text" v-model="membre.name" />
      </div>
      <div class="field-label is-normal">
        <label class="label" for="firstname"> Prénom </label>
      </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="text" v-model="membre.firstname" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-centered">
      <div class="field-label is-normal">
        <label class="label" for="phone"> Téléphone </label>
      </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="text" v-model="membre.phone" />
      </div>
      <div class="field-label is-normal">
        <label class="label" for="email_je">Email_je </label>
      </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="text" v-model="membre.email_je" />
      </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <div class="field-label is-normal">
        <label class="label" for="poste">Poste </label>
      </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="text"  v-model="membre.roles.poste" />
      </div>
      <div class="field-label is-normal">
        <label class="label" for="year">Année </label>
      </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="number" v-model="membre.roles.year" />
      </div>
    </div>
    <button type="submit" class="button is-info is-rounded">Soumettre</button>
  </form>

</template>

<script >
import axios from "axios";
export default {
  data() {
    return {
      membre: {
        name: '',
        firstname: '',
        email_je: '',
        phone: '',
        roles: {
          year: 0,
          poste: ''
        }
      }
    }
  },
  methods: {
    submit() {
      try{
        axios.post('http://localhost:3000/users/set-user', this.membre)
        console.log( this.membre)
      }catch (error) {
        console.error(error)
      }

      this.membre = {
        name: '',
        firstname: '',
        email_je: '',
        phone: '',
        roles: {
          year: 0,
          poste: ''
        }
      }
    }
  }
}

</script>

<style scoped>

form{
  padding: 5px;
  border: 1px solid #f8f2f2;
  border-radius: 10px;
  width: 100%;
  margin:auto;
}
form div label{
  margin-right: 20%;
}

button{
  margin-left: 35%;
  width: 400px;
  padding: 5px;
}

input{
  background-color: #f2f2f2;
  color:black;
}
</style>
