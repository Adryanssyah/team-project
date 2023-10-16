<template lang="">
     <footer class="font-poppins mt-16 bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a target="_blank" href="https://adryanssyah.github.io/portfolio/" class="hover:underline">Adryan</a>. All Rights Reserved. </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
               <a @click="openModal('about')" cursor-ix="true" class="mr-4 hover:text-black rounded px-3 py-2 md:mr-6">About</a>
               <a @click="openModal('privacy')" cursor-ix="true" class="mr-4 hover:text-black rounded px-3 py-2 md:mr-6">Kebiakan Privasi</a>
               <router-link :to="{ name: 'team' }" cursor-ix="true" class="hover:text-black rounded px-3 py-2">Team</router-link>
          </ul>
     </footer>
     <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-all duration-300" leave-active-class="transition-all duration-300">
          <Modalf v-show="modalShow" @close="closeModal" :content="content" />
     </Transition>
</template>
<script>
import Modalf from './Modalf.vue';
export default {
     name: 'CustomFooter',
     components: { Modalf },
     data() {
          return {
               modalShow: false,
               content: {
                    title: '',
                    desc: '',
               },
               about: {
                    title: 'Selamat datang di Portofolio Kami!',
                    desc: 'Semua dimulai dari tugas kelompok kami yang memicu semangat untuk menggali lebih dalam di dunia pengembangan web. Dalam perjalanan ini, kami telah bekerja pada berbagai proyek website mulai dari aplikasi yang diterapkan di beberapa instansi. Kami telah memanfaatkan setiap kesempatan untuk belajar dan berkembang, dan kami sangat bersemangat untuk membagikan karya-karya kami dengan Anda di sini. Semoga Anda menikmati eksplorasi melalui portofolio kami, dan jangan ragu untuk menghubungi kami jika Anda tertarik untuk bekerja sama atau sekadar berbagi pandangan. Terima kasih telah berkunjung! ',
               },
               privacy: {
                    title: 'Kebijakan Privasi',
                    desc: `Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi yang Anda bagikan dengan kami melalui situs web ini. Kami hanya akan menggunakan informasi tersebut untuk keperluan komunikasi dan untuk menyediakan informasi atau layanan yang Anda minta. Kami tidak akan membagikan informasi Anda kepada pihak ketiga tanpa izin Anda, kecuali jika diwajibkan oleh hukum.`,
               },
          };
     },
     methods: {
          openModal(type) {
               this.modalShow = true;
               type === 'about' ? (this.content = this.about) : (this.content = this.privacy);
          },
          closeModal() {
               this.modalShow = false;
          },
     },

     watch: {
          modalShow(newValue) {
               if (newValue) {
                    document.body.classList.add('overflow-hidden');
               } else {
                    document.body.classList.remove('overflow-hidden');
               }
          },
     },
};
</script>
<style lang=""></style>
