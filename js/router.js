import {
    buttonHome,
    buttonTheUniverse,
    buttonExploration,
    bodyBackground,
    mainText
} from "./elements.js"

export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
}

    handle() {
    
    const { pathname } = window.location

    const route = this.routes[pathname]
    
    
    fetch(route)
    .then(data => data.text())
    .then(html => {document.querySelector("#app").innerHTML = html})
    .then ( () => {
        if (pathname === "/theuniverse") {
            this.turnToUniversePage()
        }
    
        if (pathname === "/exploration") {
            this.turnToExplorationPage()
        }
    
        if (pathname == "/") {
            this.turnToHomePage()
        }
    })
}

    turnToHomePage () {
    mainText.classList.add("home-page")

    bodyBackground.classList.add("background")
    bodyBackground.classList.remove("the-universe-background")
    bodyBackground.classList.remove("exploration-background")
    
    buttonHome.classList.add("link-on-focus")
    buttonTheUniverse.classList.remove("link-on-focus")
    buttonExploration.classList.remove("link-on-focus")
}

    turnToUniversePage () {
    mainText.classList.remove("home-page")

    bodyBackground.classList.remove("background")
    bodyBackground.classList.add("the-universe-background")
    bodyBackground.classList.remove("exploration-background")

    buttonHome.classList.remove("link-on-focus")
    buttonTheUniverse.classList.add("link-on-focus")
    buttonExploration.classList.remove("link-on-focus")
}

    turnToExplorationPage () {
    mainText.classList.remove("home-page")

    bodyBackground.classList.remove("background")
    bodyBackground.classList.remove("the-universe-background")
    bodyBackground.classList.add("exploration-background")

    buttonHome.classList.remove("link-on-focus")
    buttonTheUniverse.classList.remove("link-on-focus")
    buttonExploration.classList.add("link-on-focus")
}
}