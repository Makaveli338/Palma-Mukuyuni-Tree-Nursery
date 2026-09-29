<template>
  <main>
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />
      <div class="py-16 space-y-2.5 section mx-auto">
        <h1 class="text-4xl font-semibold">
          {{ is404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
      </div>
    </section>

    <section class="section py-24 sm:py-32 text-center space-y-5">
      <span class="primary-badge mx-auto">{{ error?.statusCode || 404 }}</span>
      <p class="text-3xl sm:text-5xl font-semibold text-primary">
        {{ is404 ? "This page doesn't exist" : 'We hit a snag' }}
      </p>
      <p class="max-w-xl mx-auto text-lg text-[#5C5C5C]">
        {{
          is404
            ? "The page you're looking for may have moved or never existed. Let's get you back to the nursery."
            : 'Please try again in a moment, or head back to the home page.'
        }}
      </p>
      <button class="primary-btn w-fit mx-auto" @click="handleError">
        Back to Home
      </button>
    </section>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const props = defineProps<{ error: { statusCode?: number } }>();
const is404 = computed(() => props.error?.statusCode === 404);

useHead({ title: 'Page not found | Palma Mukuyuni Tree Nursery', meta: [{ name: 'robots', content: 'noindex' }] });

const handleError = () => clearError({ redirect: '/' });
</script>
