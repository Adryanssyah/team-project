<template lang="">
     <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div @click="closeModal" class="fixed inset-0 bg-gray-200 bg-opacity-50 backdrop-blur-sm transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div class="flex min-h-full justify-center p-6 text-center items-center sm:p-0">
                    <div class="relative">
                         <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-max sm:max-w-lg">
                              <div class="w-full bg-cover p-5 overflow-hidden relative bg-gray-300">
                                   <img :src="'../' + id.app + '/' + id.id + '.png'" alt="image" class="rounded" />
                              </div>
                              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                   <div class="sm:flex sm:items-start">
                                        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                             <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{{ fitur.nama }}</h3>
                                             <div class="mt-2">
                                                  <p class="text-sm text-gray-500">{{ fitur.desc }}</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                   <button
                                        v-cursor-ix
                                        cursor-ix="true"
                                        type="button"
                                        class="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto"
                                        @click="closeModal"
                                        ref="cancelButtonRef"
                                   >
                                        Tutup
                                   </button>
                              </div>
                         </div>
                         <div
                              v-cursor-ix
                              cursor-ix="true"
                              v-show="id.id != 0"
                              @click="prevFitur"
                              class="absolute z-50 text-gray-500 hover:text-gray-700 transition-colors duration-200 -left-6 top-1/2 p-3 bg-gray-50 bg-opacity-75 rounded-full hover:bg-opacity-0 hover:backdrop-blur-none"
                         >
                              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                              </svg>
                         </div>
                         <div
                              v-cursor-ix
                              cursor-ix="true"
                              v-show="id.id != id.panjang - 1"
                              @click="nextFitur"
                              class="absolute z-50 text-gray-500 hover:text-gray-700 transition-colors duration-200 -right-6 top-1/2 p-3 bg-gray-50 bg-opacity-75 rounded-full hover:bg-opacity-0 hover:backdrop-blur-none"
                         >
                              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                              </svg>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
export default {
     name: 'modal',
     props: ['id', 'fitur'],
     data() {
          return {};
     },
     methods: {
          closeModal() {
               this.$emit('close');
          },
          nextFitur() {
               this.$emit('next');
          },
          prevFitur() {
               this.$emit('prev');
          },
     },
};
</script>
<style lang=""></style>
