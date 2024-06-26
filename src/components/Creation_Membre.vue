<template>
<br>
  <h2 class="title"> Créer un membre</h2>
<br>
  <form @submit.prevent="submit">
    <div class="field is-grouped is-grouped-centered ">
      <div class="field-label is-normal">
      <label class="label" for="nom">Nom </label>
        </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="text" v-model="membre.nom" />
      </div>
        <div class="field-label is-normal">
      <label class="label" for="prenom"> Prénom </label>
        </div>
      <div class="control is-expanded">
        <input class="input is-normal" type="text" v-model="membre.prenom" />
      </div>
    </div>

      <div class="field is-grouped is-grouped-centered">
        <div class="field-label is-normal">
          <label class="label" for="tel"> Téléphone </label>
        </div>
        <div class="control is-expanded">
      <input class="input is-normal" type="text" v-model="membre.tel" />
          </div>
        <div class="field-label is-normal">
      <label class="label" for="mail">Mail </label>
        </div>
        <div class="control is-expanded">
      <input class="input is-normal" type="text" v-model="membre.mail" />
        </div>
    </div>
    <div class="field is-grouped is-grouped-centered">
      <div class="field-label is-normal">
      <label class="label" for="poste">Poste </label>
      </div>
      <div class="control is-expanded">
      <input class="input is-normal" type="text"  v-model="membre.poste" />
      </div>
        <div class="field-label is-normal">
      <label class="label" for="annee">Année </label>
        </div>
      <div class="control is-expanded">
      <input class="input is-normal" type="number" v-model="membre.annee" />
      </div>
    </div>
    <button type="submit" class="button is-info is-rounded">Soumettre</button>
  </form>

</template>

<script >
//import { reactive } from 'vue';

export default {
  data() {
    return {
      membre: {
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
      this.membre = {
        nom: '',
        prenom: '',
        tel: '',
        mail: '',
        poste: '',
        annee: ''
      }
    }
  }
}
//const membre = reactive({prenom: 'prenom', nom: 'nom', tel: '', mail: '', poste: '', annee: '2024'});

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
