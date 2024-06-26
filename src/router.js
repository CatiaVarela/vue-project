import { createMemoryHistory, createRouter } from 'vue-router'
import Liste_Membre from "/src/components/Liste_Membre.vue";
import Creation_Membre from "/src/components/Creation_Membre.vue";
import Test from "/src/components/Test.vue";

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

    }
    ];
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router