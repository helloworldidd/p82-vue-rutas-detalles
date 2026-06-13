<script setup>
import { productos } from '@/data/productos'
</script>

<template>
  <h1>Catálogo A</h1>

  <div
    v-for="producto in productos"
    :key="producto.id"
  >
    <h3>{{ producto.nombre }}</h3>

    <p>
      ${{ producto.precio }}
    </p>

    <router-link
      :to="`/catalog-a/${producto.id}`"
    >
      Ver producto
    </router-link>
    
  </div>
</template>

<style scoped>
div {
  border: 1px solid #18987a;
  padding: 10px;
}
</style>