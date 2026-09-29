<template>
  <main>
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div data-aos="fade-right" class="py-16 space-y-2.5 section mx-auto">
        <p class="text-4xl font-semibold">Gallery</p>

        <p class="max-w-300 text-lg">
          A look at our nursery, our seedlings and the landscaping projects we
          have brought to life for homes, schools and institutions.
        </p>

      </div>
    </section>
    <ComingSoon title="Gallery" />

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ComingSoon from "~/components/ComingSoon.vue";
</script>
