<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/catalog-a">Catalog A</router-link>
    <router-link to="/catalog-b">Catalog B</router-link>

  </nav>

  <router-view />
</template>

<style>
a {
  text-decoration: none;
  margin: 10px;
  color: #18987a;
}
</style>
