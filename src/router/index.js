import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
const routes = [
{
path: "/register",
name: "register",
component: Register
},

{
path: "/login",
name: "login",
component: Login,
},

{
path: "/",
name: "contactbook",
component: ContactBook,
},

{
path: "/contacts/:id",
name: "contact.edit",
component: () => import("@/views/ContactEdit.vue"),
props: true // Truyền các biến trong $route.params vào làm props
},

{
path: "/:pathMatch(.*)*",
name: "notfound",
component: () => import("@/views/NotFound.vue"),
},

];

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes,
});
router.beforeEach((to, from, next) => {

const loggedIn = localStorage.getItem("loggedIn");

if (!loggedIn && to.name !== "login" && to.name !== "register") {
next("/login");
}
else {
next();
}

});
export default router;