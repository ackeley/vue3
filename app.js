const app = {
            data() {
                return {
                    name:'Ackeley',
                    lastname: 'Lennon',
                    product: {
                        title: 'Vue 3',
                        description: 'Curso Vue 3',
                        image: './assets/images/vue3.jpeg'
                    },
                    product2: {
                        title: 'Html 5',
                        description: 'Curso Vue 3',
                        image: './assets/images/html5.png'
                    },
                }
            },
}
Vue.createApp(app).mount('#app')