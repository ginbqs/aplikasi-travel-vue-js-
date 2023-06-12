<template>
    <div class="flex mt-10">
        <div class="m-auto w-1/3">
            <form @submit.prevent="_updateDataTerminal">
                <div class="mb-6">
                    <label for="username-success"
                        class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Kode</label>
                    <input type="text" v-model="terminal.kode" id="username-success"
                        class="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                        placeholder="Kode">
                    <p class="mt-2 text-sm text-green-600 dark:text-green-500"><span class="font-medium">Alright!</span>
                        Username
                        available!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Nama</label>
                    <input type="text" v-model="terminal.nama" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Nama">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error"
                        class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Alamat</label>
                    <input type="text" v-model="terminal.alamat" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Alamat">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Provinsi</label>
                    <input type="text" v-model="terminal.provinsi" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Provinsi">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Kota</label>
                    <input type="text" v-model="terminal.kota" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Kota">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Kecamatan</label>
                    <input type="text" v-model="terminal.kecamatan" id="username-error"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                        placeholder="Kecamatan">
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="mb-6">
                    <label for="username-error" class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500">Tipe</label>
                    <select v-model="terminal.tipe"
                        class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400">
                        <option value="CHECKPOINT">CHECKPOINT</option>
                        <option value="TERMINAL">TERMINAL</option>
                        <option value="PUL">PUL</option>
                    </select>
                    <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> Username
                        already
                        taken!</p>
                </div>
                <div class="flex space-x-2 mt-5">
                    <router-link :to="{ name: 'terminal.index' }" type="button"
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
            terminal: {
                kode: '',
                nama: '',
                alamat: '',
                provinsi: '',
                kota: '',
                kecamatan: '',
                tipe: 'TERMINAL',
            }
        }
    },
    methods: {
        ...mapActions('terminal', ['storeNewDataTerminal','getTerminalData','updateDataTerminal']),
        _resetForm() {
            this.terminal = {
                kode: '',
                nama: '',
                alamat: '',
                provinsi: '',
                kota: '',
                kecamatan: '',
                tipe: 'TERMINAL',
            }
        },
        _validateForm() {
            if (this.terminal.kode != ""
                && this.terminal.nama != ""
                && this.terminal.alamat != ""
                && this.terminal.provinsi != ''
                && this.terminal.kota != ''
                && this.terminal.kecamatan != ''
                && this.terminal.tipe != ''
            ) {
                return true
            }
            return false
        },
        async _updateDataTerminal() {
            try {
                if (!this._validateForm()) {
                    return alert('Form belum lengkap')
                }
                await this.updateDataTerminal(this.terminal)

                this.$router.replace({ name: 'terminal.index' })

            } catch (e) {
                alert(e)
            }
        },
        async _getTerminalData(){
            try {
                let terminal = await this.getTerminalData(this.$route.params.id)
                this.terminal = terminal
            } catch (e) {
                alert(e)
            }
        }
    },
    created(){
        this._getTerminalData()
    }
}
</script>