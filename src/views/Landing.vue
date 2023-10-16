<template lang="">
     <div class="bg-white">
          <div class="relative isolate px-6 lg:px-8">
               <div class="fixed inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
                    <div
                         class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#181562] to-[#00a2d4] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                         style="
                              clip-path: polygon(
                                   74.1% 44.1%,
                                   100% 61.6%,
                                   97.5% 26.9%,
                                   85.5% 0.1%,
                                   80.7% 2%,
                                   72.5% 32.5%,
                                   60.2% 62.4%,
                                   52.4% 68.1%,
                                   47.5% 58.3%,
                                   45.2% 34.5%,
                                   27.5% 76.7%,
                                   0.1% 64.9%,
                                   17.9% 100%,
                                   27.6% 76.8%,
                                   76.1% 97.7%,
                                   74.1% 44.1%
                              );
                         "
                    ></div>
               </div>

               <div data-aos="fade-up" class="mx-auto max-w-2xl py-52 sm:py-52 lg:py-64">
                    <div class="text-center">
                         <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Portofolio Proyek yang telah kami kerjakan</h1>
                         <p class="mt-6 text-lg leading-8 text-gray-600">Lihat proyek yang telah rampung dikerjakan hingga saat ini di beberapa instansi</p>
                         <div class="mt-10 flex items-center justify-center gap-x-6">
                              <button cursor-ix="true" @click="scrollToProject" class="text-sm cursor-none px-3.5 py-2.5 font-semibold text-gray-900">Lihat <span aria-hidden="true" class="ml-5">⇂</span></button>
                         </div>
                    </div>
               </div>
          </div>

          <div id="project">
               <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom" class="text-3xl mx-16 mb-10 lg:mb-16 text-center font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r to-sky-400 from-blue-400">Aplikasi</span> yang telah kami buat.
               </h1>
               <Card v-for="(project, index) in projects" :key="index" :project="project"></Card>
          </div>
     </div>
</template>
<script>
import Card from '../components/landing/Card.vue';
import AOS from 'aos';
export default {
     name: 'landing',
     components: {
          Card,
     },
     data() {
          return {
               projects: [
                    {
                         id: 'sibamira',
                         namaPanjang: 'Sistem Inventarisasi Barang Milik Negara',
                         imgUrl: 'sibamira.png',
                         miniDes: 'Sistem untuk pencatatan aset milik negara di Universitas Jambi',
                         colorText: 'text-white',
                         color1: 'bg-gray-800',
                         color2: '#1971ff',
                    },
                    {
                         id: 'siphp',
                         namaPanjang: 'Sistem Informasi Pelaporan Harian Pegawai',
                         imgUrl: 'siphp.png',
                         miniDes: 'Sistem untuk monitoring kegiatan harian pegawai di Badan Pusat Statistik Provinsi Jambi',
                         colorText: 'text-black',
                         color1: 'bg-blue-50',
                         color2: '#0d7eff',
                    },
                    {
                         id: 'sipbetul',
                         namaPanjang: 'Sistem Pengelolaan Berita dan Tulisan',
                         imgUrl: 'sipbetul.png',
                         miniDes: 'Sistem untuk pengumpulan dan review berita di Badan Pusat Statistik Provinsi Jambi',
                         colorText: 'text-black',
                         color1: 'bg-blue-300',
                         color2: '#ffff',
                    },
               ],
          };
     },
     methods: {
          scrollToProject() {
               const projectElement = document.getElementById('project');
               if (projectElement) {
                    projectElement.scrollIntoView({ behavior: 'smooth' });
               }
          },
     },
     mounted() {
          AOS.init();
     },
};
</script>
<style lang=""></style>
