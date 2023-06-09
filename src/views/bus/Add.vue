<template>
    <div class="flex mt-10">
        <div class="m-auto w-1/3">
            <form @submit.prevent="_storeNewDataBus">
                <div class="mb-6">
                    <label for="username-success"
                        class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Nomor Plat Bus</label>
                    <input type="text" v-model="bus.plat_number" id="username-success"
                        class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                        placeholder="Nomor Plat Bus">
                    <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span>
                        Username
                        available!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Nomor
                        Bus</label>
                    <input type="text" v-model="bus.bus_number" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Nomor Bus">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error"
                        class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Distributor</label>
                    <input type="text" v-model="bus.distributor" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Distributor">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Jumlah
                        Kursi</label>
                    <input type="text" v-model="bus.ukuran" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Jumlah Kursi">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="flex space-x-2 mt-5">
                    <router-link :to="{ name: 'bus.index' }" type="button"
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
            bus: {
                plat_number: '',
                bus_number: '',
                distributor: '',
                ukuran: 0
            }
        }
    },
    methods: {
        ...mapActions('bus', ['storeNewDataBus']),
        _resetForm() {
            this.bus = {
                plat_number: '',
                bus_number: '',
                distributor: '',
                ukuran: 0
            }
        },
        _validateForm() {
            if (this.bus.plat_number != ""
                && this.bus.bus_number != ""
                && this.bus.distributor != ""
                && this.bus.ukuran != 0
            ) {
                return true
            }
            return false
        },
        async _storeNewDataBus() {
            try {
                if (!this._validateForm()) {
                    return alert('Form belum lengkap')
                }
                await this.storeNewDataBus(this.bus)

                this.$router.replace({ name: 'bus.index' })

            } catch (e) {
                alert(e)
            }
        }
    }
}
</script>