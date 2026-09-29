<template>
  <section class="section py-24 sm:py-32 text-center space-y-5">
    <span class="primary-badge mx-auto">{{ title }}</span>
    <p class="font-playfair text-3xl sm:text-5xl font-semibold text-primary">
      Coming Soon
    </p>
    <p class="max-w-xl mx-auto text-lg text-[#5C5C5C]">
      We're working on this page. Check back soon to see {{ title }} from
      Palma Mukuyuni Tree Nursery.
    </p>
    <NuxtLink to="/" class="primary-btn w-fit mx-auto">Back to Home</NuxtLink>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
