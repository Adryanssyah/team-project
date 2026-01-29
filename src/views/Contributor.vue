<template lang="">
     <div class="bg-white relative isolate pt-24 sm:pt-32">
          <div data-aos="fade-up" class="fixed inset-x-0 -z-50 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
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
          <div class="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center gap-10 py-10">
               <div class="max-w-2xl text-center">
                    <h2 data-aos="fade-up" class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ini adalah tim kami</h2>
                    <p data-aos="fade-up" data-aos-delay="50" class="mt-6 text-lg leading-8 text-gray-600">Kami mengerjakan projek dengan fokus yang berbeda, yaitu Front End dan Back End</p>
               </div>
               <div class="grid gap-28 sm:grid-cols-2 xl:col-span-2">
                    <div class="">
                         <div class="flex flex-col text-center items-center gap-3">
                              <img
                                   data-aos="fade-up"
                                   data-aos-delay="100"
                                   class="h-32 w-h-32 rounded-full"
                                   src="../../public/adryan.jpeg"
                                   alt=""
                              />
                              <div class="flex flex-col">
                                   <h3 data-aos="fade-up" data-aos-delay="150" class="text-base font-semibold leading-7 tracking-tight text-gray-900">Muhammad Adryan Syahputra</h3>
                                   <p data-aos="fade-up" data-aos-delay="200" class="text-sm font-semibold leading-6 text-indigo-600">Front End</p>
                                   <div class="mt-3" data-aos="fade-up" data-aos-delay="300">
                                        <a v-cursor-ix target="_blank" cursor-ix="true" class="px-3 py-2.5" href="https://www.instagram.com/_adryans"><i class="bi bi-instagram"></i></a>
                                        <a v-cursor-ix target="_blank" cursor-ix="true" class="px-3 py-2.5 ml-4" href="https://github.com/Adryanssyah"><i class="bi bi-github"></i></a>
                                        <a v-cursor-ix target="_blank" cursor-ix="true" class="px-3 py-2.5 ml-4" href="https://www.linkedin.com/in/adryansyah24/"><i class="bi bi-linkedin"></i></a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="">
                         <div class="flex flex-col text-center items-center gap-3">
                              <img
                                   data-aos="fade-up"
                                   data-aos-delay="100"
                                   class="h-32 w-h-32 rounded-full"
                                   src="https://static.vecteezy.com/system/resources/previews/009/734/564/non_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                                   alt=""
                              />
                              <div class="flex flex-col">
                                   <h3 data-aos="fade-up" data-aos-delay="150" class="text-base font-semibold leading-7 tracking-tight text-gray-900">M. Febrin Dafian</h3>
                                   <p data-aos="fade-up" data-aos-delay="200" class="text-sm font-semibold leading-6 text-indigo-600">Back End</p>
                                   <div class="mt-3" data-aos="fade-up" data-aos-delay="300">
                                        <a v-cursor-ix target="_blank" cursor-ix="true" class="px-3 py-2.5" href="https://www.instagram.com/febrindafian/"><i class="bi bi-instagram"></i></a>
                                        <a v-cursor-ix target="_blank" cursor-ix="true" class="px-3 py-2.5 ml-4" href="https://github.com/mfebrindafian"><i class="bi bi-github"></i></a>
                                        <a v-cursor-ix target="_blank" cursor-ix="true" class="px-3 py-2.5 ml-4" href="https://www.linkedin.com/in/mfebrindafian/"><i class="bi bi-linkedin"></i></a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import AOS from 'aos';
export default {
     name: 'contributor',
     mounted() {
          AOS.init();
     },
};
</script>
<style lang=""></style>
