<template>
    <div class="container mx-auto">
        <div class="mt-10">
            <div class="max-w-7xl mx-auto flex justify-between">
                <div>
                    <router-link :to="{ name: 'home' }"
                        class="inline-block shadow-sm py-2 px-4 text-gray-500 bg-gray-100 rounded-t-md text-sm border-gray-200 border">Home</router-link>
                    <router-link :to="{ name: 'terminal.add' }"
                        class="inline-block shadow-sm py-2 px-4 text-blue-500 bg-blue-100 rounded-t-md text-sm border-blue-200 border">Buat
                        baru</router-link>
                </div>
            </div>
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <nav v-if="typeof terminals.data != 'undefined'"
                                    class="flex items-center justify-between pt-4 ml-4 mr-4 mb-3"
                                    aria-label="Table navigation">
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span
                                            class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span
                                            class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                                    <ul class="inline-flex items-center -space-x-px">
                                        <li>
                                            <button href="#" :disabled="terminals.prev_page_url == null" :class="{
                                                'cursor-not-allowed': terminals.prev_page_url == null,
                                                'hover:bg-blue-100 hover:text-white': terminals.prev_page_url != null
                                            }"
                                                @click="$event.preventDefault(); _fetchDataTerminals(terminals.prev_page_url, null)"
                                                class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                Prev
                                            </button>
                                        </li>
                                        <li>
                                            <button href="#" :disabled="terminals.next_page_url == null" :class="{
                                                'cursor-not-allowed': terminals.next_page_url == null,
                                                'hover:bg-blue-100 hover:text-white': terminals.next_page_url != null
                                            }"
                                                @click="$event.preventDefault(); _fetchDataTerminals(null, terminals.next_page_url)"
                                                class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                #
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    KODE
                                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1"
                                                            aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                                                            <path
                                                                d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                                        </svg></a>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    NAMA
                                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1"
                                                            aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                                                            <path
                                                                d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                                        </svg></a>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    ALAMAT
                                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1"
                                                            aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                                                            <path
                                                                d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                                        </svg></a>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    TIPE
                                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1"
                                                            aria-hidden="true" fill="currentColor" viewBox="0 0 320 512">
                                                            <path
                                                                d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                                                        </svg></a>
                                                </div>
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                <div class="flex items-center">
                                                    ACTION
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(terminal, index) in terminals.data"
                                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {{ terminals.from + index }}
                                            </th>
                                            <td class="px-6 py-4">
                                                {{ terminal.kode }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ terminal.nama }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ terminal.alamat }}
                                            </td>
                                            <td class="px-6 py-4">
                                                {{ terminal.tipe }}
                                            </td>
                                            <td class="px-6 py-4 text-right flex space-x-2">
                                                <router-link :to="{ name: 'terminal.edit', params: { id: terminal.id } }"
                                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</router-link>
                                                <button @click="_deleteTerminalData(terminal.id)"
                                                    class="font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState('terminal', ['terminals'])
    },
    methods: {
        ...mapActions('terminal', ['fetchDataTerminals','deleteTerminalData']),
        async _fetchDataTerminals(prev, next) {
            try {
                await this.fetchDataTerminals({
                    prev: prev,
                    next: next
                })
            } catch (e) {
                alert(e)
            }
        },
        async _deleteTerminalData(terminalID) {
            try {
                if (!confirm("Are you sure")) {
                    return false
                }
                await this.deleteTerminalData(terminalID)
                this._fetchDataTerminals(null, null)
            } catch (e) {
                alert(e)
            }
        }
    },
    created() {
        this._fetchDataTerminals()
    }
}
</script>