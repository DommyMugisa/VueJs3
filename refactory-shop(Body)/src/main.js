import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

// 1.Install Vue-Router
// 2. import the vue-router
import {createRouter, createWebHashHistory} from 'vue-router'

// Import all components to be used for routing
import HomeSection from './components/HomeSection';
import ProgramsSection from './components/ProgramsSection';
import CoursesSection from './components/CoursesSection';
import AlumniSection from './components/AlumniSection';
import StaffSection from './components/StaffSection';

//Create Routes for Navigating Front-end Elements/ Components
const routes = [
    {path: '/', component: HomeSection},
    {path: '/programs', component: ProgramsSection},
    {path: '/courses', component: CoursesSection},
    {path: '/alumni', component: AlumniSection},
    {path: '/staff', component: StaffSection},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's keep it simple for now.
const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

// 4 .create the vue app instance
const app = createApp(App)

// 5. register router as a routing middle-ware
app.use(router)

// 6. mount the app component to the DOM
app.mount('#app')
