<template>
  <main>
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div data-aos="fade-right" class="py-16 space-y-2.5 section mx-auto">
        <p class="text-4xl font-semibold">Blog</p>

        <p class="max-w-300 text-lg">
         Practical tips, expert insights and helpful ideas to help you choose, plant and care for trees while creating greener, healthier spaces.
        </p>

      </div>
    </section>
    <ComingSoon title="Blog" />

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ComingSoon from "~/components/ComingSoon.vue";
</script>
