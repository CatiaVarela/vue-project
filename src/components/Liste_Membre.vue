<template>
<h2>Liste des membres</h2>
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
      <tr>
        <td>{{ props.membre.prenom }}</td>
        <td>{{ props.membre.nom }}</td>
        <td>{{ props.membre.tel }}</td>
        <td>{{ props.membre.mail }}</td>
        <td>{{ props.membre.poste }}</td>
        <td>{{ props.membre.annee }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['membre']);

</script>

<style scoped>
table {
  border-collapse: collapse;

}

table, th, td {
  border: 1px solid #f8f2f2;
}

</style>