<template>
  <main class="space-y-20">
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div data-aos="fade-right" class="py-16 space-y-2.5 section mx-auto">
        <h1 class="text-4xl font-semibold">
          Tree Seedlings &amp; Plants for Sale in Mukuyuni, Machakos
        </h1>

        <p class="max-w-300 text-lg">
          Explore our range of tree seedlings, fruit trees, indigenous trees,
          ornamental plants and landscaping solutions for homes, farms, schools,
          institutions and businesses across Kenya.
        </p>
      </div>
    </section>

    <!--Products-->
    <section class="section space-y-10">
      <div class="space-y-2 max-w-3xl">
        <h2 class="text-3xl font-semibold">Our Plants</h2>
        <p class="text-lg font-light">
          All plants are grown at our nursery along the Machakos - Wote road in
          Mukuyuni, Machakos County. Availability changes with the season, so
          contact us for what is ready today.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="product in products"
          :key="product.name"
          class="rounded-2xl bg-[#F0F7EF] p-6 flex flex-col sm:flex-row gap-5 items-center"
        >
          <img
            :src="product.image"
            :alt="product.alt"
            loading="lazy"
            class="w-full sm:w-2/5 rounded-xl"
          />
          <div class="space-y-2">
            <h3 class="text-xl font-semibold text-primary">{{ product.name }}</h3>
            <p class="text-[#5C5C5C]">{{ product.text }}</p>
          </div>
        </article>
      </div>
    </section>

    <!--Services-->
    <section class="section space-y-6">
      <h2 class="text-3xl font-semibold">Landscaping &amp; Planting Services</h2>
      <p class="text-lg font-light max-w-3xl">
        Beyond seedlings, we design, plant and maintain outdoor spaces for
        homes, institutions, businesses and community projects.
      </p>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <li
          v-for="service in services"
          :key="service.name"
          class="rounded-2xl border border-[#DFE0E2] p-5 space-y-1.5"
        >
          <h3 class="text-lg font-semibold text-primary">{{ service.name }}</h3>
          <p class="text-sm text-[#5C5C5C]">{{ service.text }}</p>
        </li>
      </ul>
    </section>

    <!--CTA-->
    <section class="section text-center space-y-4">
      <h2 class="text-3xl font-semibold">Ask About Available Seedlings</h2>
      <p class="text-lg font-light max-w-2xl mx-auto">
        Tell us what you want to plant and how many, and we will help you choose
        the right trees. You can also visit us in Mukuyuni.
      </p>
      <NuxtLink to="/#contact" class="primary-btn mx-auto">Make An Enquiry</NuxtLink>
    </section>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

useSeo({
  title: "Tree Seedlings for Sale in Mukuyuni, Machakos | Fruit, Indigenous & Ornamental Trees",
  description:
    "Buy fruit tree seedlings (mango, avocado, orange, pawpaw), indigenous, shade and ornamental trees from Palma Mukuyuni Tree Nursery, along Machakos - Wote road. Landscaping services across Kenya.",
  path: "/products",
});

const products = [
  {
    name: "Fruit Trees",
    text: "Fruit tree varieties including mangoes, oranges, avocados, pawpaw, apples, grapes and pomegranate.",
    image: "/fruit-trees.png",
    alt: "Fruit tree seedlings for sale at Palma Mukuyuni Tree Nursery",
  },
  {
    name: "Indigenous Trees",
    text: "Native trees selected for reforestation, land restoration, biodiversity, agroforestry and conservation.",
    image: "/indigenous-trees.png",
    alt: "Indigenous tree seedlings grown in Mukuyuni, Machakos, Kenya",
  },
  {
    name: "Shade Trees",
    text: "Trees suitable for creating shade and enhancing homes, farms, compounds, institutions and public spaces.",
    image: "/shade-trees.png",
    alt: "Shade tree seedlings for homes and institutions",
  },
  {
    name: "Ornamental Plants",
    text: "Attractive plants for improving gardens, compounds, institutions, businesses and landscaped spaces.",
    image: "/ornamental-trees.png",
    alt: "Ornamental plants for landscaping",
  },
  {
    name: "Flowering Plants",
    text: "Flowering plants that add color, beauty and visual appeal to gardens and outdoor spaces.",
    image: "/flowering-plants.png",
    alt: "Flowering plants for gardens",
  },
];

const services = [
  { name: "Garden Design", text: "Thoughtful planting plans for attractive, functional outdoor spaces." },
  { name: "Tree Planting", text: "Quality seedlings and practical planting guidance for long-term growth." },
  { name: "Institutional Landscaping", text: "Greening solutions for schools, churches, offices and public spaces." },
  { name: "Garden Maintenance", text: "Pruning, plant care and ongoing maintenance for healthy landscapes." },
];
</script>
