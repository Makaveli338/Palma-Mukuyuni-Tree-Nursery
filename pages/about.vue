<template>
  <main class="space-y-25">
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div data-aos="fade-right" class="py-16 space-y-2.5 section mx-auto">
        <p class="text-4xl font-semibold">About Us</p>

        <p class="max-w-300 text-lg">
          Discover who we are, what we stand for and how we are helping create
          greener and healthier communities through quality planting materials
          and professional landscaping.
        </p>
      </div>
    </section>

    <!--Who we are-->
    <section class="section space-y-10 -mt-10">
      <!--Top About us-->
      <div class="space-y-5">
        <span data-aos="fade-right" class="primary-badge block"
          >Who we are</span
        >

        <div class="flex justify-between flex-col lg:flex-row gap-3">
          <p data-aos="fade-right" class="font-semibold text-3xl">
            About <span class="text-primary"> Palma Mukuyuni </span> Tree
            Nursery
          </p>

          <div data-aos="fade-left" class="max-w-3xl space-y-6">
            <div class="space-y-1.5 text-lg font-light">
              <p>
                Palma Mukuyuni Tree Nursery is committed to producing and
                supplying high-quality seedlings and planting materials while
                providing professional landscaping and environmental
                conservation solutions.
              </p>
              <p>
                We serve families, farmers, schools, institutions, businesses
                and communities looking to establish greener, healthier and more
                productive spaces.
              </p>
              <p>
                Our work brings together quality nursery production, practical
                skills, environmental responsibility and customer-focused
                service. From the first seedling to the establishment of a
                thriving landscape, we support our customers with quality
                plants, practical guidance and solutions suited to their needs.
              </p>
              <p>
                We believe every tree has the potential to contribute something
                valuable — whether it provides food, shade, income, beauty,
                habitat or a healthier environment.
              </p>
            </div>

            <button class="outlined-btn">
              More About Us
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#256E37" />
                <path
                  d="M8 16L16 8M16 13.3333V8H10.6667"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--Mission & Vision-->
      <div class="gap-x-8 gap-y-4 grid grid-cols-12">
        <div
          data-aos="fade-right"
          class="col-span-full md:col-span-7 gap-4 flex flex-col"
        >
          <!--Vision-->
          <div class="rounded-2xl py-5 px-6 space-y-7.5 bg-[#F5F5F5]">
            <p class="text-2xl font-bold text-primary">
              Our <br />
              Vision
            </p>
            <p class="leading-5.5">
              To be a leading tree nursery and landscaping provider in Kenya by
              promoting sustainable environmental practices and supplying
              quality planting materials.
            </p>
          </div>

          <!--Mission-->
          <div class="rounded-2xl py-5 px-6 space-y-7.5 bg-primary text-white">
            <p class="text-2xl font-bold">
              Our <br />
              Mission
            </p>
            <p class="leading-5.5">
              To provide high-quality seedlings, professional landscaping
              services, and environmental conservation solutions that contribute
              to greener and healthier communities.
            </p>
          </div>
        </div>

        <div data-aos="fade-left" class="col-span-full sm:col-span-5">
          <img src="/tree-nursery.png" alt="Tree Nursery" />
        </div>
      </div>
    </section>

    <!--Who we serve-->
    <div class="space-y-5 section">
      <div class="space-y-1.5">
        <div data-aos="fade-right" class="primary-badge">Who We Serve</div>

        <div class="flex max-sm:flex-col justify-between gap-3">
          <p data-aos="fade-right" class="font-bold text-3xl max-w-xs">
            Growing With
            <span class="text-primary"> Different Communities </span>
          </p>

          <p data-aos="fade-left" class="text-lg font-light max-w-2xl">
            Whether you're planting one tree or developing a larger landscape,
            we provide planting materials and services for different needs.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        class="flex gap-4 max-sm:flex-col overflow-x-auto scrollbar-hide text-white"
      >
        <!--Families & Homeowners-->
        <div
          class="bg-[url('/families.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl sm:w-80 shrink-0"
        >
          <p class="text-lg font-bold">Families & Homeowners</p>
          <p class="leading-5.5">
            Fruit trees, ornamental plants, gardens and greener home
            environments.
          </p>
        </div>

        <!--Farmers-->
        <div
          class="bg-[url('/farmers.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl sm:w-80 shrink-0"
        >
          <p class="text-lg font-bold">Farmers</p>
          <p class="leading-5.5">
            Fruit trees, indigenous species and planting materials for
            productive farms.
          </p>
        </div>

        <!--Institutions & Schools-->
        <div
          class="bg-[url('/institutions.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl sm:w-80 shrink-0"
        >
          <p class="text-lg font-bold">Institutions & Schools</p>
          <p class="leading-5.5">
            Trees, landscaping and environmental initiatives for greener
            environments.
          </p>
        </div>

        <!--Businesses-->
        <div
          class="bg-[url('/businesses.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl sm:w-80 shrink-0"
        >
          <p class="text-lg font-bold">Businesses</p>
          <p class="leading-5.5">
            Professional landscaping solutions for commercial spaces and
            properties.
          </p>
        </div>

        <!--Communities-->
        <div
          class="bg-[url('/communities.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl sm:w-80 shrink-0"
        >
          <p class="text-lg font-bold">Communities</p>
          <p class="leading-5.5">
            Tree planting, environmental conservation and greening initiatives.
          </p>
        </div>
      </div>
    </div>

    <!--What matters to us-->
    <div class="space-y-9 section">
      <div class="space-y-2 text-center">
        <div class="primary-badge mx-auto">What matters to us</div>
        <p class="text-4xl font-semibold">
          Our <span class="text-primary">Core</span> Values
        </p>
        <p class="text-lg font-light">
          The principles that guide how we grow our plants, serve our customers
          and contribute to the communities around us.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!--Quality-->
        <div
          class="py-5 px-4 rounded-2xl gap-5 flex flex-col items-center text-center bg-[#F4FBF5]"
        >
          <img src="/quality.svg" alt="Quality badge" />
          <p class="text-2xl font-bold text-primary">Quality</p>
          <p class="leading-5.5 text-[#000000B2]">
            We are committed to producing and supplying healthy, well-nurtured
            planting materials that give our customers a strong foundation for
            successful growth.
          </p>
        </div>

        <!--Sustainability -->
        <div
          class="py-5 px-4 rounded-2xl gap-5 flex flex-col items-center text-center bg-[#F4FBF5]"
        >
          <img src="/sustainability.svg" alt="Sustainability badge" />
          <p class="text-2xl font-bold text-primary">Sustainability</p>
          <p class="leading-5.5 text-[#000000B2]">
            We promote responsible planting and environmental practices that
            support healthier ecosystems and greener communities
          </p>
        </div>

        <!--Customer Service -->
        <div
          class="py-5 px-4 rounded-2xl gap-5 flex flex-col items-center text-center bg-[#F4FBF5]"
        >
          <img src="/customer-service.svg" alt="Customer Service badge" />
          <p class="text-2xl font-bold text-primary">Customer Service</p>
          <p class="leading-5.5 text-[#000000B2]">
            We listen to our customers, understand their needs and provide
            practical solutions that help them achieve their planting and
            landscaping goals.
          </p>
        </div>

        <!--Innovation -->
        <div
          class="py-5 px-4 rounded-2xl gap-5 flex flex-col items-center text-center bg-[#F4FBF5]"
        >
          <img src="/innovation.svg" alt="Innovation badge" />
          <p class="text-2xl font-bold text-primary">Innovation</p>
          <p class="leading-5.5 text-[#000000B2]">
            We continuously look for better ways to improve nursery production,
            landscaping practices and the way we serve our customers.
          </p>
        </div>
      </div>
    </div>

    <!--People, skills & Environment-->
    <div class="bg-[url('/frame.png')] bg-cover bg-center text-white py-13.5">
      <div class="section space-y-9">
        <div class="flex lg:items-end gap-3 max-sm:flex-col justify-between">
          <div class="space-y-3">
            <div class="primary-badge">People, Skills & Environment</div>
            <p class="max-w-2xl text-lg font-light">
              Our work is about more than producing seedlings. We aim to create
              value for people, communities and the environment by combining
              nursery production with practical skills, environmental
              responsibility and opportunities for growth.
            </p>
          </div>

          <p class="max-w-sm text-4xl font-semibold">
            Growing More <span class="text-[#B7EF55]"> Than Trees</span>
          </p>
        </div>

        <div class="flex gap-5 max-sm:flex-col">
          <!--Youth Empowerment-->
          <div
            class="py-5 px-4 rounded-2xl gap-5 flex flex-col items-center text-center bg-[#F4FBF5] w-full sm:w-1/2"
          >
            <img src="/youth.svg" alt="Youth empowerment badge" />
            <div class="space-y-3 text-[#000000B2]">
              <p class="text-2xl font-bold text-primary">
                Youth Training & Empowerment
              </p>
              <p>
                We support access to practical training and knowledge that can
                help young people develop agricultural, nursery and landscaping
                skills
              </p>
              <div class="leading-5.5">
                <p>Practical nursery skills</p>
                <p>Tree production and care</p>
                <p>Landscaping fundamentals</p>
                <p>Building independent entrepreneurial skills</p>
              </div>
            </div>
          </div>

          <!--Environmental Conservation-->
          <div
            class="py-5 px-4 rounded-2xl gap-5 flex flex-col items-center text-center bg-[#F4FBF5] w-full sm:w-1/2"
          >
            <img
              src="/environment.svg"
              alt="Environmental Conservation badge"
            />
            <div class="space-y-3 text-[#000000B2]">
              <p class="text-2xl font-bold text-primary">
                Environmental Conservation
              </p>
              <p>
                We support a greener Kenya by encouraging quality tree planting,
                responsible land management and environmental awareness.
              </p>
              <div class="leading-5.5">
                <p>Reforestation and land restoration</p>
                <p>Promoting indigenous species</p>
                <p>Encouraging responsible land use</p>
                <p>Supporting greener communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--How we do it-->
    <div class="section space-y-10">
      <div class="space-y-2 text-center">
        <div class="primary-badge mx-auto">How we do it</div>
        <p class="text-4xl font-semibold">
          Our <span class="text-primary"> Approach</span>
        </p>
        <p class="text-lg font-light">
          Our approach is built around four simple principles:
        </p>
      </div>

      <div class="flex gap-6 max-sm:flex-col">
        <div>
          <div class="p-10 text-right space-y-2">
            <p class="text-lg font-bold text-primary">Grow with Care</p>
            <p class="leading-6 text-[#5C5C5C] max-w-xs">
              We nurture seedlings through their early stages with attention to
              their health and development.
            </p>
          </div>
          <div class="p-10 text-right space-y-2">
            <p class="text-lg font-bold text-primary">Serve with Knowledge</p>
            <p class="leading-6 text-[#5C5C5C] max-w-xs">
              We combine our practical experience with customer guidance to make
              planting and landscaping easier.
            </p>
          </div>
        </div>
        <img src="/approach.png" alt="Seedling being held" />
        <div>
          <div class="p-10 text-right space-y-2">
            <p class="text-lg font-bold text-primary">Grow with Care</p>
            <p class="leading-6 text-[#5C5C5C] max-w-xs">
              We nurture seedlings through their early stages with attention to
              their health and development.
            </p>
          </div>
          <div class="p-10 text-right space-y-2">
            <p class="text-lg font-bold text-primary">Plant with Purpose</p>
            <p class="leading-6 text-[#5C5C5C] max-w-xs">
              We help customers choose planting materials suited to their
              environment and intended use.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!--Objectives-->
    <div class="section space-y-10">
      <div class="space-y-2 text-center">
        <div class="primary-badge mx-auto">Objectives</div>
        <p class="text-4xl font-semibold">
          WHat We <span class="text-primary"> Aim to Achieve</span>
        </p>
        <p class="text-lg font-light">
          We are working towards a future where quality planting materials,
          practical skills and responsible environmental practices help create
          productive farms, greener spaces and stronger communities.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 relative">
        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/train-mentor.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">Train & Mentor Youth</p>
          </div>
        </div>

        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/independence.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">Build Independence</p>
          </div>
        </div>

        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/innovation.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">Promote Innovation</p>
          </div>
        </div>

        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/food-security.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">Food Security</p>
          </div>
        </div>

        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/mordern-nurseries.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">
              Modern Nursery Systems
            </p>
          </div>
        </div>

        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/expand-markets.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">Expand Markets</p>
          </div>
        </div>

        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/greener-communities.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">Greener Communities</p>
          </div>
        </div>

        <div
          class="rounded-xl relative bg-[#F7F7F7] flex gap-7.5 overflow-hidden"
        >
          <img src="/community-service.png" alt="" />
          <div class="flex h-full items-center">
            <p class="text-lg text-primary font-medium">Community Service</p>
          </div>
        </div>
      </div>
    </div>

    <!--Where every tree begins-->
    <div
      class="bg-[url('/explore-nursery.png')] bg-cover bg-center text-white section !px-20 py-33.75 rounded-2xl space-y-12"
    >
      <div class="space-y-4">
        <p class="text-4xl font-bold">
          Where <span class="text-[#B8F34B]"> Every</span> Tree Begins
        </p>

        <div class="space-y-3 text-3xl">
          <p>
            Our nursery is where our commitment to quality starts. We carefully
            nurture seedlings and planting materials before they make their way
            to farms, gardens, institutions, landscapes and communities across
            Kenya.
          </p>
          <p>
            See our seedlings. Explore our growing spaces. Talk to our team.
          </p>
        </div>
      </div>

     <a href="https://maps.app.goo.gl/AFZoJx1KYq2wbbpe7" type="button" class="primary-btn">
          Visit Our Nursery
          <div class="size-6 rounded-full bg-white flex-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L12 4M12 9.33333V4H6.66667"
                stroke="#D6B15E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </a>
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import ComingSoon from "~/components/ComingSoon.vue";
</script>
