<template>

  <nav class="navbar is-info">
    <div class="navbar-brand">
      <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" ><RouterLink to="/" class="routeur"> Accueil </RouterLink></a>
        <a class="navbar-item" ><RouterLink to="/creation-membre" class="routeur"> Création de membres </Routerlink></a>
        <a class="navbar-item" ><RouterLink to="/liste-membre" class="routeur"> Liste des membres </RouterLink></a>
        <a class="navbar-item" ><RouterLink to="/create-user" class="routeur"> Création d'utilisateurs </Routerlink></a>
        <a class="navbar-item" ><RouterLink to="/liste-user" class="routeur"> Liste des utilisateurs </RouterLink></a>
      </div>
    </div>
  </nav>
  <main>
    <RouterView />
  </main>

</template>

<script>
import Liste_Membre from "@/components/Liste_Membre.vue";
import Creation_Membre from "@/components/Creation_Membre.vue";
import Liste_User from "@/components/Liste_User.vue";
import Create_User from "@/components/Create_User.vue";
//import Test from "@/components/Test.vue";
export default {
  name: 'App',
  components: {Creation_Membre,Liste_Membre,Create_User,Liste_User}
}
</script>

<style scoped>

</style>
