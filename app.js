import { Home } from "./views/home.js";
import { Interests } from "./views/interests.js";
import { Skills } from "./views/skills.js";

const routes = {
    "#/home": Home,
    "#/interests": Interests,
    "#/skills": Skills
};

function render() {
    const app = document.getElementById("app");
    const route = location.hash;

    const view = routes[route];

    if (view) {
        app.innerHTML = view();
    } else {
        app.innerHTML = "<h2>404 - Stránka nenalezena</h2>";
    }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", () => {
    if (!location.hash) {
        location.hash = "#/home";
    }
    render();
});
