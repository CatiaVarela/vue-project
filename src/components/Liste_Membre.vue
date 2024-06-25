<template>
<h2 class="title">Liste des membres</h2>
  <table>
    <thead>
      <tr>
        <th>Prénom</th>
        <th>Nom</th>
        <th>Téléphone</th>
        <th>Mail</th>
        <th>Poste</th>
        <th>Année</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for = "membres in membre">
        <td>{{ membre.prenom }}</td>
        <td>{{membre.nom }}</td>
        <td>{{ membre.tel }}</td>
        <td>{{ membre.mail }}</td>
        <td>{{ membre.poste }}</td>
        <td>{{ membre.annee }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
//const props = defineProps(['membre']);
import Creation_Membre from "@/components/Creation_Membre.vue";

</script>

<style scoped>

table {
  border-collapse: collapse;
  width:100%;
}

table, th, td {
  border: 1px solid #f8f2f2;
  text-align: center;
}

</style>