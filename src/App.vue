<template>
     <div @contextmenu.prevent class="font-poppins">
          <CustomNav :key="$route.fullPath"></CustomNav>
          <router-view :key="$route.fullPath"></router-view>
          <CustomCursor v-if="routerReady" :key="$route.fullPath" />
          <CustomFooter :key="$route.fullPath" />
     </div>
</template>

<script>
import CustomCursor from './components/Cursor.vue';
import CustomFooter from './components/Footer.vue';
import CustomNav from './components/Navigation.vue';

export default {
     name: 'app',
     components: {
          CustomCursor,
          CustomFooter,
          CustomNav,
     },
     data() {
          return {
               routerReady: false,
          };
     },
     created() {
          this.$router.afterEach(() => {
               this.routerReady = true;
          });
     },
};
</script>

<style>
button:hover {
     cursor: none;
}
</style>
