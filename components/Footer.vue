<template>
  <section
    class="bg-[url('/footer-bg.png')] bg-cover bg-top text-white sm:h-[700px] w-full pb-9 flex items-end"
  >
    <div class="section space-y-5 w-full">
      <div class="h-80"></div>
      <div class="space-y-5 w-full">
        <img data-aos="fade-right" src="/logo-text.svg" alt="Palma Mukuyuni Tree Nursery logo" />

        <div class="flex max-sm:flex-col gap-3 justify-between items-end pb-6 border-b border-white">
          <div class="text-xl">
            <p>Growing Trees, Growing Futures.</p>
            <i>Tupande Miti. Tufaidi­ke Kesho.</i>
          </div>

          <div class="max-sm:hidden space-y-2.5">
            <p class="text-xl font-semibold">Quick Links</p>

            <div class="flex gap-4 text-xl font-light">
              <NuxtLink to="/" active-class="nav-link-active" class="nav-link">Home</NuxtLink>
              <NuxtLink to="/about" active-class="nav-link-active" class="nav-link">About</NuxtLink>
              <NuxtLink to="/products" active-class="nav-link-active" class="nav-link">Products</NuxtLink>
              <NuxtLink to="/gallery" active-class="nav-link-active" class="nav-link">Gallery</NuxtLink>
            </div>

          </div>

        </div>

        <p class="text-center text-xl">© {{ year }} Palma Mukuyuni Tree Nursery.  All rights reserved</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

