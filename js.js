const app = Vue.createApp({
    data() {
        return {
            title: 'Vue Fancy Bulb',
            image: './images/lightOff.png',
            switchOn: false,
            states: [
              { id: 1, name:'On', color: '#2abb9b', image: './images/lightOn.png' },
              { id: 2, name:'Off', color: '#96281b', image: './images/lightOff.png' },
            ],
            bodyState: [
                { id: 1, name:'On', bgColor: '#ffcc00' },
              { id: 2, name:'Off', bgColor: '#bfbfbf'}, 
            ]
        }
    },
    methods: {
        updateImage(stateImage) {
            this.image = stateImage
        },
        changeBodyBg(bodyBG) {
            this.bodyState = bodyBG
        }
    }
    })
