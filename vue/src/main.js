import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter , faGooglePlusG  , faFacebookF , faSearchengin , faBuffer} from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret , faTwitter , faGooglePlusG, faFacebookF , faSearchengin , faBuffer)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')