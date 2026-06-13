<script setup>
import { computed } from "vue";

const props = defineProps({
  id: String,
});

import { productos } from "@/data/productos";

const producto = computed(() => {
  return productos.find((p) => p.id === Number(props.id));
});
</script>

<template>
  <div v-if="producto">
    <h1>{{ producto.nombre }}</h1>
    <p>{{ producto.descripcion }}</p>
    <strong>${{ producto.precio }}</strong>
  </div>

  <p v-else>Producto no encontrado</p>

  <router-link to="/catalog-a"> Volver al catálogo A</router-link>
</template>
