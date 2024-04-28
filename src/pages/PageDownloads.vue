<template>
  <div class="q-pa-md">
    <h3>Мои загрузки</h3>
    <q-list separator bordered>
      <q-item
        @click="toggleTaskDone(index)"
        clickable
        :class="{'done bg-green-3': task.done }"
        v-for="(task, index) in tasks" 
        :key="task.title" 
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox class="no-pointer-event" v-model="task.done" val="teal" color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn @click.stop="deleteTask(index)" dense flat round color="primary" icon="delete" />       
        </q-item-section>
      </q-item>
    </q-list>

    <!-- Форма для добавления новой задачи -->
    <q-input outlined v-model="newTaskTitle" label="Введите ссылку" />
    <q-btn @click="addTask" color="primary" label="Включить анализ" />
  </div>
</template>

<script setup>

defineOptions({
  name: "PageDownloads",
});

</script>

<script>
export default {
  name: "PageDownloads",


data() {
    return {
      tasks: [
        {
          title: "https://hh.ru/vacancy/94493829?query=%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82+1C&hhtmFrom=vacancy_search_list",
          done: true,
        },
        {
          title: "https://hh.ru/vacancy/95546610?query=%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82+1C&hhtmFrom=vacancy_search_list",
          done: false,
        },
        // {
        //   title: "https://hh.ru/vacancy/96425465?query=%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82+1C&hhtmFrom=vacancy_search_list",
        //   done: false,
        // },
      ],
      newTaskTitle: '', // Название новой задачи
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    addTask() {
      if (this.newTaskTitle.trim() !== '') {
        this.tasks.push({
          title: this.newTaskTitle.trim(),
          done: false,
        });
        this.newTaskTitle = ''; // Очистить поле ввода после добавления задачи
      }
    },
  },
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: grey;
  }
}
</style>