<template>
     <Notfound v-if="error"></Notfound>
     <div v-if="!isLoading && !error" class="relative isolate overflow-hidden bg-white px-6 pt-24 sm:pt-32 lg:overflow-visible lg:px-0">
          <div class="absolute inset-0 -z-10 overflow-hidden">
               <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                         <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                              <path d="M100 200V.5M.5 .5H200" fill="none" />
                         </pattern>
                    </defs>
                    <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
                         <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
               </svg>
          </div>

          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
               <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                         <div class="lg:max-w-lg">
                              <p data-aos="fade-right" class="text-base font-semibold leading-7 text-indigo-600">{{ project.namaPendek }}</p>
                              <h1 data-aos="fade-right" class="my-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ project.namaPanjang }}</h1>
                         </div>
                    </div>
               </div>

               <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                         data-aos="fade-left"
                         v-tilt
                         data-tilt-glare
                         data-tilt-max-glare="0.1"
                         data-tilt-max="1"
                         class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                         :src="'../' + project.imgUrl"
                         alt=""
                    />
               </div>
               <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                         <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                              <p data-aos="fade-right"><strong class="font-semibold text-gray-900">Latar Belakang - </strong> {{ project.latarBelakang }}</p>
                         </div>
                         <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg mt-8">
                              <div>
                                   <div class="sm:px-0">
                                        <h3 data-aos="fade-right" class="text-base font-semibold leading-7 text-gray-900">Informasi Aplikasi</h3>
                                   </div>
                                   <div class="mt-6 border-t border-gray-100">
                                        <dl class="divide-y divide-gray-100">
                                             <div data-aos="fade-right" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                  <dt class="text-sm font-medium leading-6 text-gray-900">Jenis Aplikasi</dt>
                                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ project.jenis }}</dd>
                                             </div>
                                             <div data-aos="fade-right" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                  <dt class="text-sm font-medium leading-6 text-gray-900">Tanggal Rilis</dt>
                                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ project.rilis }}</dd>
                                             </div>
                                             <div data-aos="fade-right" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                  <dt class="text-sm font-medium leading-6 text-gray-900">Teknologi</dt>
                                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                       <span
                                                            class="mr-2 mb-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10"
                                                            v-for="(item, index) in project.teknologi"
                                                            :key="index"
                                                            >{{ item }}</span
                                                       >
                                                  </dd>
                                             </div>
                                             <div data-aos="fade-right" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                  <dt class="text-sm font-medium leading-6 text-gray-900">Pemilik</dt>
                                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ project.pemilik }}</dd>
                                             </div>
                                             <div data-aos="fade-right" v-show="project.link != ''" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                  <dt class="text-sm font-medium leading-6 text-gray-900">Link</dt>
                                                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                       <a v-cursor-ix cursor-ix="true" target="_blank" :href="project.link" class="text-sm px-3 py-2.5 font-medium text-blue-500">
                                                            <span>Kunjungi</span>
                                                       </a>
                                                  </dd>
                                             </div>
                                        </dl>
                                   </div>
                              </div>
                         </div>
                         <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg mt-8">
                              <div>
                                   <div class="sm:px-0 mt-10">
                                        <h3 data-aos="fade-right" class="text-base font-semibold leading-7 text-gray-900">Fitur-fitur</h3>
                                   </div>
                                   <div class="mt-6 border-gray-100">
                                        <dl class="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                             <div data-aos="fade-right" v-for="(item, indexx) in project.fitur" :key="indexx" class="flex flex-col gap-5 justify-between border-t border-gray-200 pt-4">
                                                  <div>
                                                       <dt class="font-medium text-gray-900">{{ item.nama }}</dt>
                                                       <dd class="mt-2 text-sm text-gray-500">{{ item.desc }}</dd>
                                                  </div>
                                                  <div class="text-end">
                                                       <button @click="openModal(indexx, project.id, item, project.fitur)" cursor-ix="true" class="text-sm text-blue-500 px-3 py-1.5">Detail</button>
                                                  </div>
                                             </div>
                                        </dl>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition-all duration-300" leave-active-class="transition-all duration-300" name="modal-backdrop">
          <Modal v-show="modalShow" @toggle="openModal" @close="closeModal" @next="nextFitur" @prev="prevFitur" :id="id" :fitur="fitur"></Modal>
     </Transition>
</template>
<script>
import Modal from '../components/Modal.vue';
import Notfound from '../components/notFound.vue';
import AOS from 'aos';
import axios from 'axios';
export default {
     name: 'detail',
     props: ['key', 'aplikasi'],
     components: {
          Modal,
          Notfound,
     },
     data() {
          return {
               modalShow: false,
               project: null,
               isLoading: true,
               error: false,
               id: {
                    id: '0',
                    app: this.aplikasi,
                    panjang: 0,
               },
               fitur: {
                    nama: '',
                    desc: '',
               },
          };
     },
     methods: {
          openModal(id, app, item, projects) {
               this.modalShow = true;
               this.id = {
                    id: id,
                    app: app,
                    panjang: projects.length,
               };
               this.fitur = item;
          },
          closeModal() {
               this.modalShow = false;
          },
          prevFitur() {
               this.id = {
                    id: this.id.id - 1,
                    app: this.id.app,
                    panjang: this.id.panjang,
               };
               this.fitur = this.project.fitur[this.id.id];
          },
          nextFitur() {
               this.id = {
                    id: this.id.id + 1,
                    app: this.id.app,
                    panjang: this.id.panjang,
               };
               this.fitur = this.project.fitur[this.id.id];
          },
          async ambilData() {
               try {
                    const response = await axios.get('../data/projects.json');
                    const foundProject = response.data.find((project) => project.id === this.aplikasi);

                    if (foundProject) {
                         this.project = foundProject;
                    } else {
                         this.error = true;
                    }
                    this.isLoading = false;
               } catch (error) {
                    console.error('Error fetching questions:', error);
               }
          },
     },
     mounted() {
          AOS.init();

          window.scrollTo(0, 0);

          this.ambilData();
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
