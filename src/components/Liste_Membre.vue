<template>
  <br>
  <h2 class="title">Liste des membres</h2>
  <br>
  <table class="table is-bordered is-striped is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Téléphone</th>
        <th>Mail</th>
        <th>Poste</th>
        <th>Année</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for = "membre in membres">
        <td>{{ membre.nom }}</td>
        <td>{{membre.prenom }}</td>
        <td>{{ membre.tel }}</td>
        <td>{{ membre.mail }}</td>
        <td>{{ membre.poste }}</td>
        <td>{{ membre.annee }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
//import Creation_Membre from "@/components/Creation_Membre.vue";

export default {
  /*components: {
    Creation_Membre
  },*/
  data() {
    return {
      membres: []
    }
  },
  created() {
    this.membres = JSON.parse(localStorage.getItem('membres'));
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