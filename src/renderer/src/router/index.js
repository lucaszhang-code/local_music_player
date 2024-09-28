import { createRouter, createWebHistory } from 'vue-router'
import LayoutPage from '../views/LayoutPage.vue'
import MusicPage from '../views/MusicPage.vue'
import ArtistPage from '../views/ArtistPage.vue'
import AlbumPage from '../views/AlbumPage.vue'
import SearchPage from '../views/SearchPage.vue'
import ArtistDetailPage from '../views/ArtistDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/music',
      component: LayoutPage
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicPage
    },
    {
      path: '/artist',
      name: 'Artist',
      component: ArtistPage,
    },
    {
      path: '/album',
      name: 'Album',
      component: AlbumPage
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchPage
    },
    {
      path: '/artistDetail/:id',
      name: 'ArtistDetail',
      component: ArtistDetailPage
    }
  ]
})

export default router
