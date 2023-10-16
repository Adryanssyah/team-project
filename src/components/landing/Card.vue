<template>
     <div class="bg-white">
          <div data-aos="fade-up" ata-aos-delay="200" data-aos-anchor-placement="center-bottom" class="mx-auto p-0 max-w-7xl px-3 sm:px-6 py-3 lg:px-8">
               <div
                    v-tilt
                    data-tilt-glare
                    data-tilt-max-glare="0.1"
                    data-tilt-max="1"
                    :class="project.color1"
                    class="relative isolate hover:shadow-2xl rounded-xl transition-shadow duration-300 overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
               >
                    <svg
                         viewBox="0 0 1024 1024"
                         class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                         aria-hidden="true"
                    >
                         <circle cx="512" cy="512" r="512" :fill="'url(#' + project.color2 + ')'" fill-opacity="0.7" />
                         <defs>
                              <radialGradient :id="project.color2">
                                   <stop stop-color="#7775D6" />
                                   <stop offset="1" :stop-color="project.color2" />
                              </radialGradient>
                         </defs>
                    </svg>
                    <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                         <h2 :class="project.colorText" class="text-3xl font-bold tracking-tight sm:text-4xl">{{ project.namaPanjang }}</h2>
                         <p :class="project.colorText" class="mt-6 text-lg leading-8 text-opacity-75">{{ project.miniDes }}.</p>
                         <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                              <router-link v-cursor-ix cursor-ix="true" :class="project.colorText" :to="{ name: 'detail', params: { aplikasi: project.id } }" class="rounded-md px-3.5 py-2.5 text-sm font-semibold"
                                   >Lihat Detail <span aria-hidden="true" class="ml-2">⇀</span></router-link
                              >
                         </div>
                    </div>
                    <div class="relative mt-16 h-80 lg:mt-8" style="transform: translateZ(100px)">
                         <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" :src="project.imgUrl" :alt="project.namaPanjang" width="1824" height="1080" />
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
import AOS from 'aos';
export default {
     name: 'card',
     props: ['project'],

     mounted() {
          AOS.init();
     },
};
</script>
<style lang=""></style>
