<template>
  <div class="q-pa-md">
    <h3>Мои интервью</h3>
    <q-carousel animated v-model="slide" arrows navigation infinite>

<q-carousel-slide
  :name="1"
  img-src="w.jpg"
  style="
  border-radius: 20px; 
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;"
/>

</q-carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);

defineOptions({
  name: "Group_work",
});
</script>

<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>

