<script setup>
import { ref } from 'vue'

import AppMenuItem from './AppMenuItem.vue'

const model = ref([
  {
    label: 'Home',
    items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }],
  },
  {
    label: 'Pages',
    icon: 'pi pi-fw pi-briefcase',
    to: '/pages',
    items: [
      {
        label: 'Crud',
        icon: 'pi pi-fw pi-pencil',
        to: '/crud',
      },
    ],
  },
  // {
  //   label: 'Hierarchy',
  //   items: [
  //     {
  //       label: 'Submenu 1',
  //       icon: 'pi pi-fw pi-bookmark',
  //       items: [
  //         {
  //           label: 'Submenu 1.1',
  //           icon: 'pi pi-fw pi-bookmark',
  //           items: [
  //             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
  //             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
  //             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
  //           ],
  //         },
  //         {
  //           label: 'Submenu 1.2',
  //           icon: 'pi pi-fw pi-bookmark',
  //           items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }],
  //         },
  //       ],
  //     },
  //     {
  //       label: 'Submenu 2',
  //       icon: 'pi pi-fw pi-bookmark',
  //       items: [
  //         {
  //           label: 'Submenu 2.1',
  //           icon: 'pi pi-fw pi-bookmark',
  //           items: [
  //             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
  //             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
  //           ],
  //         },
  //         {
  //           label: 'Submenu 2.2',
  //           icon: 'pi pi-fw pi-bookmark',
  //           items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }],
  //         },
  //       ],
  //     },
  //   ],
  // }
])
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item
        v-if="!item.separator"
        :item="item"
        :index="i"
      ></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
