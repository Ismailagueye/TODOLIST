import { createRouter, createWebHistory } from 'vue-router'
import TasKlist from '@/views/TasKlist.vue'
import TasKItem from '@/views/TasKItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Liste des taches',
      component: TasKlist,
    },

    {
      path: '/TaskItem',
      name: 'Tache individuelle',
      component: TasKItem,
    },

    // {
    //   path: '/TaskForm',
    //  name: 'Formulaire',
    //   component: TaskForm,
    // },



  {
   path: '/TaskForm',
   name: 'TaskForm',
  component: () => import('../views/TaskForm.vue'),
  },

  ],
})

export default router
