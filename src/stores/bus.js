import {defineStore} from 'pinia'

export const useBusStore = defineStore({
    id:'bus',
    state: () => ({
        buses: [],
        post: null,
        loading: false,
        error: null
    }),
    getters:{
        
    },
    actions:{
        async fetchBuses() {
            this.buses = []
            this.loading = true;
            this.error = null
            const controller = new AbortController()
            setTimeout(() => controller.abort(), 5000)
            try {
                this.buses = await fetch('http://localhost:8000/api/buses',{ signal: controller.signal })
                .then((response) => {
                    if(response.ok){
                        return response.json()
                    }
                    return Promise.reject(response)
                }) 
            } catch (error) {
                this.error = error
              } finally {
                this.loading = false
              }
        }
    }
})