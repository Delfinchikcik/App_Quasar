<template>
  <q-page class="container q-pa-md">
    <h1 class="text-brown title_frame">
      Интеллектуальный карьерный <br/>
      навигатор
    </h1>
    <h3 class="frame_subtitle">для платформы GeekBrains</h3>
    <q-img class="dinoAI" src="dinoAI.png"></q-img>
    <!-- <div class="container_figure">
      <div class="red_circle"></div>
    </div>
    <div class="container_figure_2">
      <div class="blue_circle"></div>
    </div> -->
  </q-page>
</template>

<script setup></script>

<style scoped>
.dinoAI {
  width: 40%;
  position: absolute;
  top: 20vh;
  right: 6vw;
  z-index: 3;
}
.title_frame {
  font-size: 8vw;
  line-height: 140px;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 0;
  z-index: 2;
}
.frame_subtitle {
  margin: 30px;
}
.red_circle {
  opacity: 0.3;
  filter: blur(5px);
}
/* .container_figure{
  width: 1900px;
  height: 400px;
  position: relative;
  overflow: hidden;
  bottom: 100px;
  left: 100px;
}

.red_circle {
  width: 950px;
  height: 900px;
  background-color: #f10014;
  border-radius: 50%;
  position: absolute;
  left: 100px;
  filter: blur(7px)
}

.container_figure_2{
width: 900px;
  height: 750px;
  position: relative;
  overflow: hidden;
  bottom: 800px;
  right: -650px;
  z-index: 2;
}
.blue_circle{
  width: 900px;
  height: 700px;
  background-color: #000cb3;
  border-radius: 50%;
  position: absolute;
  opacity: .3;
  left: 150px;
  filter: blur(7px);
  rotate: 150deg;
} */

@media (max-width: 420px) {
  .dinoAI {
  top: 28vh;
}
.title_frame {
  font-size: 10vw;
  line-height: 48px;
  margin-top: 30%;
  margin-left: 20px;
}
.frame_subtitle {
  margin: 10px;
  font-size: 22px;
}
/* .container_figure{
  width: 290px;
  height: 290px;
  position: relative;
  overflow: hidden;
  bottom: 10px;
  left: -70px;
}

.red_circle {
  width: 270px;
  height: 270px;
  left: 10px;
}

.container_figure_2{
  width: 290px;
  height: 400px;
  bottom: 480px;
  left: 60px;
}
.blue_circle{
  width: 590px;
  height: 270px;
  left:20px;
} */
}
</style>
