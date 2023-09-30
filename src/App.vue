<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      isOpen: true,
      warning: ['jadwal', 'rute', 'pemesanan', 'service', 'akses', 'user', 'supir']
    }
  },
  methods: {
    checkMenu(menu) {
      if (!this.warning.includes(menu)) {
        this.isOpen = !this.isOpen
      } else {
        this.$swal('Menu belum tersedia!');
      }
    }
  }
}

</script>
<template>
  <div class="bg-cyan-700 h-screen w-full px-24">
    <header class="pt-10 flex justify-items-center">
      <img src="./assets/logo.png" class="w-10 h-10" />
      <span class="text-white text-2xl ml-2 font-semibold">Management Travel</span>
    </header>
    <div class="mt-20" v-if="isOpen">
      <h1 class="text-4xl font-semibold text-white mb-10">Startup</h1>
      <div class="flex gap-2">
        <RouterLink to="/jadwal" @click="checkMenu('jadwal')" class="w-96 h-44 bg-red-600 flex-row hover:bg-red-700">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/jadwal.png" class="w-28 h-28" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">Jadwal</span>
            </div>
            <div v-if="warning.includes('jadwal')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/rute" @click="checkMenu('rute')" class="w-96 h-44 bg-sky-400 flex-row hover:bg-sky-500">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/rute.png" class="w-28 h-28" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">Rute</span>
            </div>
            <div v-if="warning.includes('rute')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/pemesanan" @click="checkMenu('pemesanan')"
          class="w-44 h-44 bg-amber-500 flex-row hover:bg-amber-600">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/bayar.svg" class="w-28 h-28" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">Pemesanan</span>
            </div>
            <div v-if="warning.includes('pemesanan')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/service" @click="checkMenu('service')"
          class="w-96 h-44 bg-green-800 flex-row hover:bg-green-900">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/service.svg" class="w-28 h-28" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">Service</span>
            </div>
            <div v-if="warning.includes('service')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="flex gap-2 mt-2">
        <RouterLink to="/akses" @click="checkMenu('akses')" class="w-44 h-44 bg-lime-500 flex-row hover:bg-lime-600">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/akses.svg" class="w-28 h-28" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">Akses</span>
            </div>
            <div v-if="warning.includes('akses')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/user" @click="checkMenu('user')" class="w-96 h-44 bg-blue-800 flex-row hover:bg-blue-900">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/user.png" class="w-24 h-24" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">User</span>
            </div>
            <div v-if="warning.includes('user')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/supir" @click="checkMenu('supir')" class="w-96 h-44 bg-yellow-400 flex-row hover:bg-yellow-500">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/supir.png" class="w-28 h-28" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">User</span>
            </div>
            <div v-if="warning.includes('supir')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/bus" @click="checkMenu('bus')" class="w-96 h-44 bg-purple-600 flex-row hover:bg-purple-700">
          <div class="flex w-full h-3/4 justify-center items-center">
            <img src="./assets/icon/bus.svg" class="w-32 h-32" />
          </div>
          <div class="w-full h-1/4 text-left flex flex justify-between px-5">
            <div>
              <span class="text-2xl text-white font-normal mt-10">Bus</span>
            </div>
            <div v-if="warning.includes('bus')">
              <img src="./assets/warning.png" class="w-8 h-8" />
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
    <div class="mt-5 pt-5 text-white border-t-2 border-white" v-if="!isOpen">
      <div class="text-blue-300 underline text-lg pb-10 hover:text-blue-500 cursor-pointer" @click="checkMenu('back')">
        &#x3C; Kembali</div>
      <RouterView />
    </div>
  </div>
</template>
