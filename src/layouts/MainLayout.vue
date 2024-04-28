<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar class="toolbar">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="logoGB.png" />
            <img src="dinoAI.png" />
          </q-avatar>
          DinoAI 
        </q-toolbar-title>
        <div>
          <q-btn class="notifications_icon" icon="notifications"></q-btn>
          <q-btn class="enter_btn">Войти</q-btn>
          <q-btn class="registration_btn">Регистрация</q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="220"
      :breakpoint="400"
    >
      <q-scroll-area style="height: calc(100%); border-right: 1px solid #ddd">
        
        <q-list padding>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Главная </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/profile" exact>
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>
            <q-item-section> Профиль </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/PageDownloads" exact>
            <q-item-section avatar>
              <q-icon name="cloud_download" />
            </q-item-section>
            <q-item-section> Загрузки </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Recommendations" exact>
            <q-item-section avatar>
              <q-icon name="create" />
            </q-item-section>
            <q-item-section> Рекомендации </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/vacancies" exact>
            <q-item-section avatar>
              <q-icon
                name="format_list_bulleted"
              />
            </q-item-section>
            <q-item-section> Вакансии </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/school" exact>
            <q-item-section avatar>
              <q-icon name="school" />
            </q-item-section>
            <q-item-section> Курсы </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/timeline" exact>
            <q-item-section avatar>
              <q-icon name="timeline" />
            </q-item-section>
            <q-item-section> Прогресс </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/mood" exact>
            <q-item-section avatar>
              <q-icon name="mood" />
            </q-item-section>
            <q-item-section> Навыки </q-item-section>
          </q-item>

          

          <q-item clickable v-ripple to="/search" exact>
            <q-item-section avatar>
              <q-icon name="search" />
            </q-item-section>
            <q-item-section> Выбор работы </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/group_work" exact>
            <q-item-section avatar>
              <q-icon name="group_work" />
            </q-item-section>
            <q-item-section> Интервью </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/group_add" exact>
            <q-item-section avatar>
              <q-icon name="group_add" />
            </q-item-section>
            <q-item-section> Трудоустройство </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer elevated class="bg-white text-white">
      <q-toolbar class="text-black row items-center justify-between">
        <div class="q-my-md q-mx-xl row items-center ">
          <img class="geekBrains_logo" src="GeekBrains.png" />

          <a class="footer_ref" href="tel:+74999224710">+7 499 922-47-10</a>
          <div class="footer_ref row phone_container">
            <a class="phone_with_text" href="tel:88007006841">8 800 700-68-41</a>
            <p class="phone_text">Бесплатно по России</p>
          </div>

          <a class="footer_ref" href="email:support@geekbrains.ru"
            >support@geekbrains.ru</a
          >
        </div>
        <div class="q-mx-md">
          <q-btn class="footer_social">
            <q-icon  name="img:vk_icon.png" />
          </q-btn>
          <q-btn class="footer_social">
            <q-icon  name="img:youtube_icon.png" />
          </q-btn>
          <q-btn class="footer_social">
            <q-icon  name="img:telegram_icon.png" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { computed, ref } from "vue";
import { date } from "quasar";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  computed: {
    dataTime() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd H mm");
    },
  },
};
</script>
<style scoped>
.notifications_icon {
  border-radius: 50%;
  width: 1vw;
  background-color: rgb(236, 233, 233);
  margin-right: 6px;
}
.enter_btn,
.registration_btn {
  background-color: rgb(236, 233, 233);
  margin: 6px;
}
.geekBrains_logo {
  width: 15vw;
  margin-right: 5vw;
}
.phone_text {
  color: grey;
}
.footer_ref {
  text-decoration: none;
  color: black;
  margin-right: 5vw;
}
.phone_container{
  margin-top: 20px;
}
.phone_with_text{
  text-decoration: none;
  color: black;
  margin-right: 3px;
}
.footer_social{
  width: 30px;
  height: 30px;
  margin: 10px;
}

@media (max-width: 420px) {
  .enter_btn,.notifications_icon,.registration_btn{
    display: none;
  }
}
</style>
