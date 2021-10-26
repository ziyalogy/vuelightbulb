const app = Vue.createApp({
    data() {
        return {
            title: 'Vue Fancy Bulb',
            image: './images/lightOff.png',
            switchOn: false,
            states: [
              { id: 1, name:'On', color: '#ffcc00', image: './images/lightOn.png' },
              { id: 2, name:'Off', color: 'black', image: './images/lightOff.png' },
            ]
        }
    },
    methods: {
        updateImage(stateImage) {
            this.image = stateImage
        }
    }
})
