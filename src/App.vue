<template>

<h2> Créer un membre</h2>
  <form @submit.prevent="soumettreForm">
    <div class="field is-grouped">
      <label class="label" for="prenom"> Prénom </label>
      <input type="text" v-model="prenom" required/>

      <label class="label" for="nom">Nom </label>
      <input type="text" v-model="nom" required/>
    </div>

    <div class="field is-grouped">
      <label class="label" for="tel">Téléphone </label>
      <input type="text" v-model="tel" required/>

      <label class="label" for="mail">Mail </label>
      <input type="text" v-model="mail" required/>
    </div>
    <div class="field is-grouped">
      <label class="label" for="poste">Poste </label>
      <input type="text"  v-model="poste" required/>

      <label class="label" for="annee">Année </label>
      <input type="text" v-model="annee" required/>
    </div>
    <button type="submit" class="button is-primary">Soumettre</button>
  </form>

  <Liste_Membre :membre = "membre"/>

</template>

<script setup>
import Liste_Membre from "@/components/Liste_Membre.vue";
import { reactive } from 'vue';
const membre = reactive({prenom: 'prenom', nom: 'nom', tel: '', mail: '', poste: '', annee: '2024'});

const soumettreForm = () => {
  console.log(membre);
}

</script>

<style scoped>

form{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
}
form div{
  margin: 10px;
}
</style>
