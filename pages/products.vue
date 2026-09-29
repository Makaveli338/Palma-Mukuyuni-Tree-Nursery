<template>
  <main>
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div data-aos="fade-right" class="py-16 space-y-2.5 section mx-auto">
        <h1 class="text-4xl font-semibold">Products</h1>

        <p class="max-w-300 text-lg">
          Explore our range of tree seedlings, fruit trees, ornamental plants
          and landscaping solutions for homes, schools, institutions and
          businesses.
        </p>

      </div>
    </section>
    <ComingSoon title="Products" />

    <Footer />
  </main>
</template>

<script setup lang="ts">
useSeo({
  title: "Products | Palma Mukuyuni Tree Nursery",
  description: "Tree seedlings, fruit trees, ornamental plants and landscaping from Palma Mukuyuni Tree Nursery.",
  path: "/products",
  noindex: true, // coming-soon page; remove once real content is added
});
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ComingSoon from "~/components/ComingSoon.vue";
</script>
