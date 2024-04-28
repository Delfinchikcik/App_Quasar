<template>
  <div class="q-pa-md">
    <h3>Мои рекомендации</h3>

    <q-carousel animated v-model="slide" arrows navigation infinite>

      <q-carousel-slide
        :name="1"
        img-src="Py.png"
        style="
        border-radius: 20px; 
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;"
      />
      <q-carousel-slide
        :name="2"
        img-src="Web.png"
        style="
        border-radius: 20px; 
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;"
      />
      <q-carousel-slide
        :name="3"
        img-src="Dev.png"
        style="
        border-radius: 20px; 
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;"
      />
      />
    </q-carousel>
    <!-- <q-btn class="slider-btn" color="primary" label="Показать рекомендации" /> -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const slide = ref(1);
defineOptions({
  name: "Recommendations",
});
</script>



<style scoped>
.slider-btn{
  width: 150px;
  margin-top: 100px;
  display: inline-block;
  align-content: center;
  margin-left: 46%;
}

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