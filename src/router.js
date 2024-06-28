import { createMemoryHistory, createRouter } from 'vue-router'
import Liste_Membre from "/src/components/Liste_Membre.vue";
import Creation_Membre from "/src/components/Creation_Membre.vue";
import Test from "/src/components/Test.vue";
import Create_User from "@/components/Create_User.vue";
import Liste_User from "@/components/Liste_User.vue";

const routes = [
    {
        path : '/creation-membre',
        name : "Creation_Membre",
        component : Creation_Membre
    },
{
    path : '/liste-membre',
    name : "Liste_Membre",
    component: Liste_Membre
},
    {
        path : '/test',
        name: "Test",
        component: Test

    },
    {
    path: '/create-user',
    name: "Create_User",
    component: Create_User
},
    {
        path: '/liste-user',
        name: "Liste_User",
        component: Liste_User
    }
    ];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router