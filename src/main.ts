import { createApp } from 'lunchboxjs'
import App from './App.vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import OrbitControlsWrapper from './OrbitControlsWrapper.vue'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'

createApp(App)
    .extend({
        OrbitControls,
        RoundedBoxGeometry,
    })
    .component('OrbitControlsWrapper', OrbitControlsWrapper)
    .mount('#app')
