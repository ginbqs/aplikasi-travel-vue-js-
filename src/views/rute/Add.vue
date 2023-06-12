<template>
    <div class="flex mt-10">
        <div class="m-auto w-1/3">
            <form @submit.prevent="_storeNewDataRute">
                <div class="mb-6">
                    <label for="username-success"
                        class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Kode</label>
                    <input type="text" v-model="rute.kode" id="username-success"
                        class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                        placeholder="Kode">
                    <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span>
                        Username
                        available!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error"
                        class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Asal</label>
                    <input type="text" v-model="rute.asal" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Asal">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error"
                        class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Tujuan</label>
                    <input type="text" v-model="rute.tujuan" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Tujuan">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Waktu
                        Tempuh</label>
                    <input type="text" v-model="rute.waktu_tempuh" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Waktu Tempuh">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error"
                        class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Checkpoints</label>
                    <select v-for="check in rute.checkpoints" 
                        class="bg-red-50 mb-5 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400">
                        <option v-for="terminal in terminals.data">{{ terminal.kode }} - {{ terminal.nama }}</option>
                    </select>
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                    <div class="flex justify-end space-x-2">
                        <button type="button"
                        @click="_addCheckpoints"
                            class="text-white text-right bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 py-2.5 mb-2 dark:focus:ring-blue-800">Tambah</button>
                            <button type="button"
                        @click="_removeCheckpoints"
                            class="text-white text-right bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 py-2.5 mb-2 dark:focus:ring-blue-800">Hapus</button>
                    </div>
                </div>
                <div class="flex space-x-2 mt-5">
                    <router-link :to="{ name: 'rute.index' }" type="button"
                        class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Kembali</router-link>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 py-2.5 mb-2 dark:focus:ring-blue-800">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            rute: {
                kode: '',
                asal: '',
                tujuan: '',
                waktu_tempuh: 0,
                checkpoints:[
                    {id:'',waktu:0}
                ]
            }
        }
    },
    computed:{
        ...mapState('terminal',['terminals'])
    },
    methods: {
        ...mapActions('teriminal', ['fetchDataTerminals']),
        _addCheckpoints(){
            this.rute.checkpoints.push({
                id:'1',waktu: 12
            })
        },
        async _fetchDataTerminals(prev, next) {
            console.log(prev,next)
            try {
                await this.fetchDataTerminals({
                    prev: prev,
                    next: next
                })
            } catch (e) {
                alert(e)
            }
        },
        _removeCheckpoints(){
            if(this.rute.checkpoints.length > 1){
                this.rute.checkpoints.pop()
            }else{
                alert('checkpoint minimal satu')
                return false;
            }
        },
        //     _resetForm() {
        //         this.bus = {
        //             plat_number: '',
        //             bus_number: '',
        //             distributor: '',
        //             ukuran: 0
        //         }
        //     },
        //     _validateForm() {
        //         if (this.rute.plat_number != ""
        //             && this.rute.bus_number != ""
        //             && this.rute.distributor != ""
        //             && this.rute.ukuran != 0
        //         ) {
        //             return true
        //         }
        //         return false
        //     },
        async _storeNewDataRute() {
            // try {
            //     if (!this._validateForm()) {
            //         return alert('Form belum lengkap')
            //     }
            //     await this.storeNewDataBus(this.bus)

            //     this.$router.replace({ name: 'rute.index' })

            // } catch (e) {
            //     alert(e)
            // }
        }
    },
    created(){
        this._fetchDataTerminals(null,null)
    }
}
</script>