<template lang="">
     <div class="absolute inset-x-0 top-0 z-50">
          <div class="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
               <div class="flex lg:gap-x-12">
                    <router-link :to="{ name: 'landing' }" cursor-ix="true" href="#" class="text-sm px-4 py-2.5 font-semibold leading-6 text-gray-900">Home</router-link>
                    <router-link :to="{ name: 'team' }" cursor-ix="true" href="#" class="text-sm px-4 py-2.5 font-semibold leading-6 text-gray-900">Team</router-link>
               </div>
          </div>
     </div>
</template>
<script>
import AOS from 'aos';
export default {
     name: 'nav',
     mounted() {
          AOS.init();
     },
};
</script>
<style lang=""></style>
