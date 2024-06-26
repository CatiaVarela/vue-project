<template>

  <h2 class="title"> Créer un membre</h2>

  <form @submit.prevent="submit">
    <div class="field is-grouped">
      <label class="label" for="nom">Nom </label>
      <input type="text" v-model="membre.nom" />

      <label class="label" for="prenom"> Prénom </label>
      <input type="text" v-model="membre.prenom" />
    </div>

    <div class="field is-grouped">
      <label class="label" for="tel">Téléphone </label>
      <input type="text" v-model="membre.tel" />

      <label class="label" for="mail">Mail </label>
      <input type="text" v-model="membre.mail" />
    </div>
    <div class="field is-grouped">
      <label class="label" for="poste">Poste </label>
      <input type="text"  v-model="membre.poste" />

      <label class="label" for="annee">Année </label>
      <input type="number" v-model="membre.annee" />
    </div>
    <button type="submit" class="button is-info">Soumettre</button>
  </form>

</template>

<script >
import { reactive } from 'vue';

export default {
  data() {
    return {
      membre : {
        nom: '',
        prenom: '',
        tel: '',
        mail: '',
        poste: '',
        annee: ''
      }
    }
  },
  methods: {
    submit() {
      //this.$emit('submit', this.membre);
      let membres = [];
       membres = JSON.parse(localStorage.getItem('membres'));
      if (this.membre) {
        membres.push(this.membre);
      }
      localStorage.setItem('membres', JSON.stringify(membres));

      console.log(this.membre);
    }
    }
}
//const membre = reactive({prenom: 'prenom', nom: 'nom', tel: '', mail: '', poste: '', annee: '2024'});

</script>

<style scoped>

form{
  margin: 20px;
  padding: 10px;
  border: 1px solid #f8f2f2;
  border-radius: 10px;
  width: 100%;
  margin: auto;
}
form div{
  margin: 10px;
}

input{
  margin: 20px;
  width: 100%;
  padding: 5px;
}

button{
  margin-left: 30%;
  width: 500px;
  padding: 5px;
}

</style>
