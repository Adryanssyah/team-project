<template lang="">
     <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div @click="closeModal" class="fixed inset-0 bg-gray-200 bg-opacity-50 backdrop-blur-sm transition-opacity"></div>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
               <div class="flex min-h-full justify-center p-6 text-center items-center sm:p-0">
                    <div class="relative">
                         <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-max sm:max-w-lg">
                              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                   <div class="sm:flex sm:items-start">
                                        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                             <h3 class="text-base font-semibold leading-6 text-gray-900 my-5">{{ content.title }}</h3>
                                             <div class="mt-2">
                                                  <p class="text-sm text-gray-800">{{ content.desc }}</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                   <button cursor-ix="true" type="button" class="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto" @click="closeModal">Tutup</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
export default {
     name: 'modalf',
     props: ['content'],

     methods: {
          closeModal() {
               this.$emit('close');
          },
     },
};
</script>
<style lang=""></style>
