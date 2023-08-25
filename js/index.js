import 
{
    buttonHome,
    buttonTheUniverse,
    buttonExploration,
    buttonKnowMore,
} 
from "./elements.js"

import { Router } from "./router.js"

const router = new Router()
router.add("/","/pages/home.html")
router.add("/theuniverse","/pages/theuniverse.html")
router.add("/exploration","/pages/exploration.html")
router.add(404,"/pages/404.html")

buttonHome.addEventListener("click", () => {router.route()})

buttonTheUniverse.addEventListener("click", () => {router.route()})

buttonExploration.addEventListener("click", () => {router.route()})

buttonKnowMore.addEventListener("click", () => {router.route()})

window.onpopstate = () => router.handle()