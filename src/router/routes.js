const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/Home.vue") },
      { path: "profile", component: () => import("src/pages/Profile.vue") },
      { path: "/pagedownloads", component: () => import("src/pages/PageDownloads.vue") },
      { path: "/recommendations", component: () => import("src/pages/Recommendations.vue") },
      { path: "/vacancies", component: () => import("src/pages/Vacancies.vue") },
      { path: "/school", component: () => import("src/pages/School.vue") },
      { path: "/timeline", component: () => import("src/pages/Timeline.vue") },
      { path: "/search", component: () => import("src/pages/Search.vue") },
      { path: "/mood", component: () => import("src/pages/Mood.vue") },
      { path: "/group_work", component: () => import("src/pages/Group_work.vue") },
      { path: "/group_add", component: () => import("src/pages/Group_add.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
