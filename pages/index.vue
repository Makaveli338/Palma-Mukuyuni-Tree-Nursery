<template>
  <main class="space-y-20">
    <!--Hero section-->
    <section class="bg-[url('/hero.png')] bg-cover bg-center text-white">
      <Header />

      <div
        data-aos="fade-right"
        class="py-9 sm:pt-38.75 sm:pb-39.5 space-y-10 section mx-auto"
      >
        <div class="space-y-1.5 max-w-115.75">
          <h1 class="text-4xl lg:text-6xl font-semibold">
            Growing Trees, <span class="text-[#B8F34B]">Growing Futures.</span>
          </h1>
          <i class="text-2xl">Tupande Miti. Tufaidike Kesho.</i>
        </div>

        <p class="max-w-3xl text-lg">
          We supply high-quality tree seedlings, fruit trees, ornamental plants
          and landscaping solutions for homes, schools, institutions and
          businesses in Kenya and beyond.
        </p>

        <a href="#contact" class="primary-btn">Make An Enquiry</a>
      </div>
    </section>

    <!--Who we are-->
    <section class="section space-y-10 -mt-7.5">
      <!--Top About us-->
      <div class="space-y-5">
        <span data-aos="fade-right" class="primary-badge block"
          >Who we are</span
        >

        <div class="flex justify-between flex-col lg:flex-row gap-3">
          <h2 data-aos="fade-right" class="font-semibold text-3xl">About Us</h2>

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
                service.
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
      <div class="flex gap-7 flex-col lg:flex-row">
        <!--Vision-->
        <div data-aos="fade-right" class="w-full lg:w-1/2">
          <div class="flex max-sm:flex-col gap-1.5">
            <img
              :src="'/vision.png'"
              alt="handling seedlings"
              class="w-full sm:w-1/2"
            />
            <div
              class="rounded-xl px-5 py-9.5 space-y-5 sm:space-y-12.5 bg-[#F5F5F5] w-full sm:w-1/2"
            >
              <p class="text-primary text-2xl font-bold">
                Our <br />
                Vision
              </p>
              <p class="leading-5.5">
                To be a leading tree nursery and landscaping provider in Kenya
                by promoting sustainable environmental practices and supplying
                quality planting materials.
              </p>
            </div>
          </div>
        </div>

        <!--Mission-->
        <div data-aos="fade-left" class="w-full lg:w-1/2">
          <div class="flex max-sm:flex-col gap-1.5">
            <img
              src="/mission.png"
              alt="handling seedlings"
              class="w-full sm:w-1/2"
            />
            <div
              class="rounded-xl px-5 py-9.5 space-y-5 sm:space-y-12.5 bg-primary w-full sm:w-1/2 text-white"
            >
              <p class="text-2xl font-bold">
                Our <br />
                Mission
              </p>
              <p class="leading-5.5">
                To provide high-quality seedlings, professional landscaping
                services, and environmental conservation solutions that
                contribute to greener and healthier communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--What we offer-->
    <section class="space-y-9 section">
      <div class="flex items-end max-sm:flex-col gap-3 justify-between">
        <div data-aos="fade-right" class="space-y-2">
          <div class="primary-badge">What we offer</div>

          <div class="space-y-2.5 text-lg font-light max-w-2xl">
            <p>
              We supply a range of quality planting materials suitable for
              homes, farms, institutions, businesses and environmental
              conservation projects.
            </p>
            <p>
              Enquire from us to get information about available seedlings and
              plants.
            </p>
          </div>
        </div>

        <p data-aos="fade-left" class="font-bold leading-12 text-4xl max-w-md">
          Plants for <span class="text-primary">productive</span> and
          <span class="text-primary">beautiful spaces.</span>
        </p>
      </div>

      <div data-aos="fade-up" class="grid grid-cols-12 gap-4">
        <!--Fruit trees-->
        <div
          class="col-span-full lg:col-span-3 flex flex-col items-center max-sm:py-8 sm:pb-13 space-y-3 bg-[#F0F7EF] sm:pt-23.5 px-9 rounded-2xl"
        >
          <div class="space-y-1.5 text-center">
            <p class="text-lg font-semibold text-[#256E37]">Fruits Trees</p>
            <p class="text-sm text-[#5C5C5C]">
              Fruit tree varieties including mangoes, oranges, avocados, pawpaw,
              apples, grapes and pomegranate.
            </p>
          </div>

          <img src="/fruit-trees.png" alt="Fruit tree seedlings for sale at Palma Mukuyuni Tree Nursery" />
        </div>

        <div class="col-span-full lg:col-span-9 space-y-4">
          <div class="grid grid-cols-12 gap-4 h-fit">
            <!--Flowering plants-->
            <div
              class="col-span-full md:col-span-5 rounded-2xl pt-2.5 px-6 pb-8 bg-[#EAF6F0] h-fit flex flex-col"
            >
              <img
                src="/flowering-plants.png"
                alt="flowering plants"
                class="self-start"
              />

              <div class="space-y-1.5">
                <p class="text-lg font-semibold text-[#27805A]">
                  Flowering Plants
                </p>
                <p class="text-sm text-[#5C5C5C]">
                  Flowering plants that add color, beauty and visual appeal to
                  gardens and outdoor spaces.
                </p>
              </div>
            </div>

            <!--Indigenous trees-->
            <div
              class="h-fit col-span-full md:col-span-7 rounded-2xl pt-2.5 px-6 pb-8 bg-[#E8F2E7] flex max-sm:flex-col items-center"
            >
              <div class="space-y-1.5">
                <p class="text-lg font-semibold text-[#687D27]">
                  Indigenous Trees
                </p>
                <p class="text-sm text-[#5C5C5C]">
                  Native trees selected for reforestation, land restoration,
                  biodiversity, agroforestry and conservation
                </p>
              </div>

              <img src="/indigenous-trees.png" alt="Indigenous tree seedlings grown in Mukuyuni, Machakos, Kenya" />
            </div>
          </div>

          <div class="grid grid-cols-12 gap-4">
            <!--Shade trees-->
            <div
              class="col-span-full md:col-span-7 rounded-2xl pt-2.5 px-6 pb-8 bg-[#EAF6F0] flex max-sm:flex-col items-center"
            >
              <div class="space-y-1.5">
                <p class="text-lg font-semibold text-[#27805A]">Shade trees</p>
                <p class="text-sm text-[#5C5C5C]">
                  Trees suitable for creating shade and enhancing homes, farms,
                  compounds, institutions and public spaces.
                </p>
              </div>

              <img src="/shade-trees.png" alt="Shade tree seedlings for homes and institutions" />
            </div>

            <!--Ornamental Plants -->
            <div
              class="col-span-full md:col-span-5 rounded-2xl pt-2.5 px-6 pb-8 bg-[#E8F2E7] flex max-sm:flex-col items-center"
            >
              <div class="space-y-1.5">
                <p class="text-lg font-semibold text-[#27805A]">
                  Ornamental Plants
                </p>
                <p class="text-sm text-[#5C5C5C]">
                  Attractive plants for improving gardens, compounds,
                  institutions, businesses and landscaped spaces.
                </p>
              </div>

              <img src="/ornamental-trees.png" alt="Ornamental and flowering plants for landscaping" />
            </div>
          </div>
        </div>
      </div>

      <button data-aos="fade-up" class="outlined-btn mx-auto">
        Enquire About Our Products
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
    </section>

    <!--Other services-->
    <div class="space-y-10 section">
      <!--Heading-->
      <div class="space-y-5">
        <div data-aos="fade-right" class="primary-badge">Other Services</div>

        <div class="flex max-sm:flex-col gap-3 justify-between sm:items-start">
          <div data-aos="fade-right" class="space-y-2">
            <p class="font-bold text-4xl max-w-sm">
              <span class="text-primary"> Professional </span>
              Landscaping Services
            </p>
          </div>

          <p data-aos="fade-left" class="text-lg font-light max-w-2xl">
            We design, plant and maintain attractive outdoor spaces for homes,
            institutions, businesses and community projects.
          </p>
        </div>
      </div>

      <!--body-->
      <div
        data-aos="fade-up"
        class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-white"
      >
        <!--Garden Design-->
        <div
          class="bg-[url('/garden-design.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl"
        >
          <p class="text-lg font-bold">Garden Design</p>
          <p class="leading-5.5">
            Thoughtful planting plans for attractive, functional outdoor spaces.
          </p>
        </div>

        <!--Tree Planting-->
        <div
          class="bg-[url('/tree-planting.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl"
        >
          <p class="text-lg font-bold">Tree Planting</p>
          <p class="leading-5.5">
            Quality seedlings and practical planting guidance for long-term
            growth.
          </p>
        </div>

        <!--Institutional Landscaping-->
        <div
          class="bg-[url('/institutional-landscaping.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl"
        >
          <p class="text-lg font-bold">Institutional Landscaping</p>
          <p class="leading-5.5">
            Greening solutions for schools, churches, offices and public spaces.
          </p>
        </div>
        <!--Garden Maintenance-->
        <div
          class="bg-[url('/garden-maintenance.png')] bg-cover bg-center h-87.5 px-4 pb-8 flex flex-col justify-end gap-2.5 rounded-2xl"
        >
          <p class="text-lg font-bold">Garden Maintenance</p>
          <p class="leading-5.5">
            Pruning, plant care and ongoing maintenance for healthy landscapes.
          </p>
        </div>
      </div>
    </div>

    <!--Why choose us-->
    <div
      class="space-y-10 section bg-[#FEFBEC] rounded-3xl py-12.5 !px-10 !max-w-345"
    >
      <!--Heading-->
      <div class="space-y-5">
        <div data-aos="fade-right" class="primary-badge">Why Choose Us</div>

        <div class="flex max-sm:flex-col gap-3 justify-between sm:items-start">
          <p data-aos="fade-right" class="font-bold text-4xl max-w-sm">
            Growing with
            <span class="text-primary"> quality and purpose. </span>
          </p>

          <p data-aos="fade-left" class="text-lg font-light max-w-2xl">
            We combine quality planting materials, practical nursery knowledge,
            professional services and environmental responsibility to help
            customers achieve their greening goals.
          </p>
        </div>
      </div>

      <div
        class="flex gap-10 flex-col lg:flex-row justify-between sm:items-center"
      >
        <img data-aos="fade-right" src="/nursery.png" alt="Rows of tree seedlings at Palma Mukuyuni Tree Nursery" />

        <div
          data-aos="fade-left"
          class="flex flex-col divide-y divide-[#000000]"
        >
          <div class="grid sm:grid-cols-2 gap-10 pb-4">
            <div
              class="flex gap-5 max-sm:border-b border-[#000000] max-sm:pb-4"
            >
              <img src="/tree.svg" alt="tree-icon" class="size-8" />

              <div class="space-y-1 max-w-73.75">
                <p class="text-primary font-bold">
                  Quality & Healthy Seedlings
                </p>
                <p class="font-light">
                  Carefully grown planting materials for your needs.
                </p>
              </div>
            </div>

            <div class="flex gap-5">
              <img src="/tree.svg" alt="tree-icon" class="size-8" />

              <div class="space-y-1 max-w-73.25">
                <p class="text-primary font-bold">Affordable Prices</p>
                <p class="font-light">
                  Practical options for individuals, farmers and institutions.
                </p>
              </div>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-10 pt-6 pb-4">
            <div
              class="flex gap-5 max-sm:border-b border-[#000000] max-sm:pb-4"
            >
              <img src="/tree.svg" alt="tree-icon" class="size-8" />

              <div class="space-y-1 max-w-73.75">
                <p class="text-primary font-bold">Professional Landscaping</p>
                <p class="font-light">
                  Garden design, planting, maintenance and compound
                  beautification.
                </p>
              </div>
            </div>

            <div class="flex gap-5">
              <img src="/tree.svg" alt="tree-icon" class="size-8" />

              <div class="space-y-1 max-w-73.25">
                <p class="text-primary font-bold">Environmental Conservation</p>
                <p class="font-light">
                  We support reforestation, restoration and greener communities.
                </p>
              </div>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-10 pt-6 pb-4">
            <div
              class="flex gap-5 max-sm:border-b border-[#000000] max-sm:pb-4"
            >
              <img src="/tree.svg" alt="tree-icon" class="size-8" />

              <div class="space-y-1 max-w-73.75">
                <p class="text-primary font-bold">Reliable Customer Support</p>
                <p class="font-light">
                  We are available to help you choose suitable planting
                  solutions.
                </p>
              </div>
            </div>

            <div class="flex gap-5">
              <img src="/tree.svg" alt="tree-icon" class="size-8" />

              <div class="space-y-1 max-w-73.25">
                <p class="text-primary font-bold">
                  Convenient 7 day week Service
                </p>
                <p class="font-light">Our business is open every day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Experience Our Nursery-->
    <section
      class="py-17.5 bg-[url('/explore-nursery.png')] bg-cover bg-center text-white"
    >
      <div data-aos="fade-right" class="section space-y-7.5">
        <div class="space-y-4">
          <p class="text-4xl font-bold">
            Experience Our <span class="text-[#B8F34B]"> Nursery</span>
          </p>
          <p class="text-xl sm:text-3xl max-w-218.75">
            See our plants up close, explore our growing spaces and find the
            right trees for your needs.
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/AFZoJx1KYq2wbbpe7"
          type="button"
          class="primary-btn"
        >
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
    </section>

    <!--Our blog-->
    <div data-aos="fade-up" class="space-y-6 section">
      <!--Heading-->
      <div class="space-y-2 text-center">
        <p class="text-4xl font-bold">
          Our <span class="text-primary"> Blog</span>
        </p>
        <p class="text-2xl font-light">
          Practical tips, expert insights and helpful ideas to help you choose,
          plant and care for trees while creating greener, healthier spaces.
        </p>
      </div>

      <div class="flex gap-4 justify-center">
        <div
          class="w-full sm:w-50 rounded-xl border border-[#ECECEC] bg-[#F7F7F7] pt-6 space-y-11 overflow-hidden"
        >
          <div class="px-4 space-y-1.5">
            <p class="font-medium text-[#1F2A2A]">
              Why Successful Tree Farming Requires More Than Just Putting
              Seedlings in the Ground
            </p>
            <p class="text-xs text-[#6F8F88]">Sep 19, 2026</p>
          </div>

          <div
            class="bg-[url('/blogs.png')] bg-cover bg-center h-37.5 flex items-end pb-4.5 px-4"
          >
            <a
              href="https://palmamukuyunitreenursery.substack.com/p/why-successful-tree-farming-requires?r=94dvgt&utm_campaign=post&utm_medium=web"
              type="button"
              class="w-fit group bg-[#00000099] hover:bg-[#000000CC] backdrop-blur-sm rounded-full flex gap-1.5 items-center text-white p-1.5 cursor-pointer transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white"
            >
              <p class="text-xs font-medium">Read More</p>
              <div
                class="size-5 bg-white rounded-full flex-center transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33398 8.00004H12.6673M8.00065 12.6667L12.6673 8.00004L8.00065 3.33337"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <a
        href="https://palmamukuyunitreenursery.substack.com/"
        type="button"
        class="outlined-btn mx-auto mt-8"
      >
        See All Posts
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
      </a>
    </div>

    <!--Contact us-->
    <div id="contact" class="space-y-3 text-center">
      <p class="text-2xl font-medium text-primary">Contact Us</p>

      <div class="section mx-auto grid grid-cols-12 text-start sm:pl-9 px-5">
        <!--col-span-9-->
        <div
          data-aos="fade-right"
          class="bg-[#F7F7F7] rounded-2xl px-4 py-5 sm:pl-12 sm:py-12 col-span-full sm:col-span-8 md:col-span-7 lg:col-span-8 h-fit"
        >
          <div class="sm:max-w-lg space-y-6">
            <div class="space-y-0.5 pb-4 border-b border-[#DFE0E2] text-start">
              <p class="text-base sm:text-lg font-medium text-primary">
                How can we assist you <span class="text-xl"> today?</span>
              </p>
              <p class="text-xs sm:text-sm text">
                Feel free to reach out to us with your inquiries.
              </p>
            </div>

            <!--Input form-->
            <form class="space-y-6" @submit.prevent="submitForm">
            <div class="space-y-2.5">
              <input
                v-model="form.botcheck"
                type="text"
                tabindex="-1"
                autocomplete="off"
                class="hidden"
                aria-hidden="true"
              />
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label for="cf-name" class="text-sm text">Name</label>
                  <input
                    id="cf-name"
                    v-model="form.name"
                    type="text"
                    required
                    autocomplete="name"
                    placeholder="John Paul"
                    class="w-full border border-[#D1D5DB] rounded-md px-4 py-3 placeholder:text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#6F8F88] bg-white"
                  />
                </div>

                <div class="space-y-1">
                  <label for="cf-phone" class="text-sm text">Phone</label>
                  <input
                    id="cf-phone"
                    v-model="form.phone"
                    type="tel"
                    autocomplete="tel"
                    placeholder="+254 70000000"
                    class="w-full border border-[#D1D5DB] rounded-md px-4 py-3 placeholder:text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#6F8F88] bg-white"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label for="cf-email" class="text-sm text">Email</label>
                <input
                  id="cf-email"
                  v-model="form.email"
                  type="email"
                  required
                  autocomplete="email"
                  placeholder="you@example.com"
                  class="w-full border border-[#D1D5DB] rounded-md px-4 py-3 placeholder:text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#6F8F88] bg-white"
                />
              </div>

              <div class="space-y-1">
                <label for="cf-message" class="text-sm text">Write your message</label>
                <textarea
                  id="cf-message"
                  v-model="form.message"
                  required
                  placeholder="Your message"
                  rows="5"
                  class="w-full border border-[#D1D5DB] rounded-md px-4 py-3 placeholder:text-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#6F8F88] bg-white resize-none"
                ></textarea>
              </div>
            </div>

            <div class="flex items-center justify-end gap-4">
              <p
                v-if="status === 'success'"
                role="status"
                class="text-sm text-primary"
              >
                Thank you! Your message has been sent. We'll get back to you soon.
              </p>
              <p v-if="status === 'error'" role="alert" class="text-sm text-red-600">
                Something went wrong. Please call or WhatsApp us instead.
              </p>
              <button
                type="submit"
                class="primary-btn disabled:opacity-60"
                :disabled="status === 'sending'"
              >
                {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
            </form>
          </div>
        </div>

        <!--col-span-3-->
        <div
          data-aos="fade-left"
          class="col-span-full md:col-span-5 text-white lg:col-span-4 bg-primary px-5.5 lg:w-120 rounded-2xl mt-4 sm:translate-y-12 sm:-ml-50 md:translate-y-0 md:ml-0 lg:translate-y-12 lg:-ml-50 flex flex-col justify-center gap-4 py-5.5"
        >
          <p class="text-lg sm:text-xl font-medium">
            Hi, we are always here to <br />
            assist you.
          </p>

          <div class="space-y-2">
            <!---->
            <div
              class="px-6 py-4 flex items-center gap-4 bg-[#FFFFFF33] rounded-2xl"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12.5C13.6569 12.5 15 11.1569 15 9.5C15 7.84315 13.6569 6.5 12 6.5C10.3431 6.5 9 7.84315 9 9.5C9 11.1569 10.3431 12.5 12 12.5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="space-y-1">
                <p class="text-sm font-medium">Visit us:</p>

                <div class="text-sm space-y-0.5">
                  <a
                    class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                    href="https://maps.app.goo.gl/AFZoJx1KYq2wbbpe7"
                    >Mukuyuni, Machakos County, Kenya</a
                  >
                  <p>Along Machakos - Wote road</p>
                </div>
              </div>
            </div>

            <!---->
            <div
              class="px-6 py-4 flex items-center gap-4 bg-[#FFFFFF33] rounded-2xl"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="space-y-1">
                <p class="text-sm font-medium">Call us:</p>

                <div class="text-sm gap-0.5 flex flex-col">
                  <a
                    class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                    href="tel:+254754787926"
                    >+254 754 787 926</a
                  >
                  <a
                    class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                    href="tel:+254723787180"
                    >+254 723 787 180</a
                  >
                </div>
              </div>
            </div>

            <!---->
            <div
              class="px-6 py-4 flex items-center gap-4 bg-[#FFFFFF33] rounded-2xl"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.744 2.63346L21.272 7.52667C21.538 7.69957 21.671 7.78602 21.7674 7.90134C21.8527 8.00342 21.9167 8.12149 21.9558 8.24865C22 8.39229 22 8.55092 22 8.86818V16.1999C22 17.88 22 18.7201 21.673 19.3619C21.3854 19.9263 20.9265 20.3853 20.362 20.6729C19.7202 20.9999 18.8802 20.9999 17.2 20.9999H6.8C5.11984 20.9999 4.27976 20.9999 3.63803 20.6729C3.07354 20.3853 2.6146 19.9263 2.32698 19.3619C2 18.7201 2 17.88 2 16.1999V8.86818C2 8.55092 2 8.39229 2.04417 8.24865C2.08327 8.12149 2.14735 8.00342 2.23265 7.90134C2.32901 7.78602 2.46201 7.69957 2.72802 7.52667L10.256 2.63346M13.744 2.63346C13.1127 2.22315 12.7971 2.01799 12.457 1.93817C12.1564 1.86761 11.8436 1.86761 11.543 1.93817C11.2029 2.01799 10.8873 2.22315 10.256 2.63346M13.744 2.63346L20.9681 7.32913C21.312 7.55268 21.484 7.66445 21.5435 7.8062C21.5956 7.93008 21.5956 8.06969 21.5435 8.19356C21.484 8.33531 21.312 8.44709 20.9681 8.67064L13.744 13.3663C13.1127 13.7766 12.7971 13.9818 12.457 14.0616C12.1564 14.1321 11.8436 14.1321 11.543 14.0616C11.2029 13.9818 10.8873 13.7766 10.256 13.3663L3.03193 8.67064C2.68801 8.44709 2.51604 8.33531 2.45649 8.19356C2.40444 8.06969 2.40444 7.93008 2.45649 7.8062C2.51604 7.66445 2.68801 7.55268 3.03193 7.32913L10.256 2.63346"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="space-y-1">
                <p class="text-sm font-medium">Email us:</p>

                <div class="text-sm">
                  <a
                    class="cursor-pointer relative inline-block no-underline w-fit after:content-[''] after:absolute after:w-full after:scale-x-0 after:rounded after:h-[0.05em] after:bottom-0 after:left-0 after:bg-current after:origin-bottom-right after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
                    href="mailto:palmamukuyuni@gmail.com"
                    >palmamukuyuni@gmail.com</a
                  >
                </div>
              </div>
            </div>

            <!---->
            <div
              class="px-6 py-4 flex items-center gap-4 bg-[#FFFFFF33] rounded-2xl"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 18L14.8571 12M9.14286 12L2.50003 18M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div class="space-y-1">
                <p class="text-sm font-medium">Mail us:</p>

                <div>
                  <p class="font-medium">
                    P.O. Box 56-90301, Kaiti, Makueni, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-white pt-2.5 space-y-1.5">
            <p class="text-sm font-medium">Connect with us</p>

            <div class="flex gap-2">
              <!--X-->
              <a href="https://x.com/PalmaNursery" class="hover:translate-y-0.5"
                ><svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 23H11.4713C5.1461 23 0 17.8524 0 11.5253V11.4747C0 5.14762 5.1461 0 11.4713 0H11.5219C17.8471 0 22.9932 5.14762 22.9932 11.4747V11.5253C22.9932 17.8524 17.8471 23 11.5219 23ZM11.4713 0.778526C5.57494 0.778526 0.778297 5.57659 0.778297 11.4747V11.5253C0.778297 17.4234 5.57494 22.2215 11.4713 22.2215H11.5219C17.4183 22.2215 22.2149 17.4234 22.2149 11.5253V11.4747C22.2149 5.57659 17.4183 0.778526 11.5219 0.778526H11.4713Z"
                    fill="white"
                  />
                  <path
                    d="M4.88348 5.42432L10.0062 12.2753L4.85156 17.8457H6.01201L10.5254 12.969L14.1717 17.8457H18.12L12.7092 10.6093L17.5075 5.42432H16.347L12.1909 9.91563L8.83255 5.42432H4.88424H4.88348ZM6.5895 6.27914H8.40293L16.4124 16.9909H14.599L6.5895 6.27914Z"
                    fill="white"
                  />
                </svg>
              </a>

              <!--Linked in-->
              <a
                href="https://www.linkedin.com/in/palma-tree-nursery-477520438/"
                class="hover:translate-y-0.5"
                ><svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 23H11.4713C5.14611 23 0 17.8524 0 11.5253V11.4747C0 5.14762 5.14611 0 11.4713 0H11.5219C17.8471 0 22.9932 5.14762 22.9932 11.4747V11.5253C22.9932 17.8524 17.8471 23 11.5219 23ZM11.4713 0.778526C5.57495 0.778526 0.778297 5.57658 0.778297 11.4747V11.5253C0.778297 17.4234 5.57495 22.2215 11.4713 22.2215H11.5219C17.4183 22.2215 22.2149 17.4234 22.2149 11.5253V11.4747C22.2149 5.57658 17.4183 0.778526 11.5219 0.778526H11.4713Z"
                    fill="white"
                  />
                  <path
                    d="M5.69403 7.77437C5.40139 7.50267 5.25586 7.16635 5.25586 6.76618C5.25586 6.36602 5.40217 6.0149 5.69403 5.74242C5.98667 5.47071 6.36337 5.33447 6.8249 5.33447C7.28643 5.33447 7.64834 5.47071 7.9402 5.74242C8.23284 6.01413 8.37838 6.3559 8.37838 6.76618C8.37838 7.17647 8.23207 7.50267 7.9402 7.77437C7.64756 8.04608 7.27631 8.18232 6.8249 8.18232C6.37349 8.18232 5.98667 8.04608 5.69403 7.77437ZM8.13244 9.33298V17.6632H5.50102V9.33298H8.13244Z"
                    fill="white"
                  />
                  <path
                    d="M16.8672 10.1544C17.4408 10.7773 17.7272 11.6321 17.7272 12.7205V17.5146H15.2281V13.0584C15.2281 12.5095 15.0857 12.0828 14.8016 11.7792C14.5175 11.4756 14.1346 11.323 13.6552 11.323C13.1758 11.323 12.7928 11.4748 12.5087 11.7792C12.2247 12.0828 12.0822 12.5095 12.0822 13.0584V17.5146H9.56836V9.30819H12.0822V10.3966C12.3367 10.0338 12.68 9.74727 13.1112 9.53629C13.5423 9.32531 14.0272 9.22021 14.5666 9.22021C15.527 9.22021 16.2944 9.53163 16.8672 10.1544Z"
                    fill="white"
                  />
                </svg>
              </a>

              <!--Facebook-->
              <a
                href="https://web.facebook.com/john.tempoz"
                class="hover:translate-y-0.5"
                ><svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 23H11.4713C5.1461 23 0 17.8524 0 11.5253V11.4747C0 5.14762 5.1461 0 11.4713 0H11.5219C17.8471 0 22.9932 5.14762 22.9932 11.4747V11.5253C22.9932 17.8524 17.8471 23 11.5219 23ZM11.4713 0.778526C5.57494 0.778526 0.778297 5.57659 0.778297 11.4747V11.5253C0.778297 17.4234 5.57494 22.2215 11.4713 22.2215H11.5219C17.4183 22.2215 22.2149 17.4234 22.2149 11.5253V11.4747C22.2149 5.57659 17.4183 0.778526 11.5219 0.778526H11.4713Z"
                    fill="white"
                  />
                  <path
                    d="M13.0433 8.92123V11.3417H16.0366L15.5627 14.6021H13.0433V22.1141C12.5382 22.1842 12.0214 22.2208 11.4968 22.2208C10.8913 22.2208 10.2967 22.1725 9.71765 22.0791V14.6021H6.95703V11.3417H9.71765V8.38016C9.71765 6.54283 11.2065 5.05273 13.0441 5.05273V5.05428C13.0495 5.05428 13.0542 5.05273 13.0597 5.05273H16.0374V7.87256H14.0917C13.5134 7.87256 13.0441 8.342 13.0441 8.92045L13.0433 8.92123Z"
                    fill="white"
                  />
                </svg>
              </a>

              <!--Instagram-->
              <a
                href="https://www.instagram.com/palma_mukuyuni_tree_nursery/"
                class="hover:translate-y-0.5"
                ><svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 23H11.4713C5.1461 23 0 17.8524 0 11.5253V11.4747C0 5.14762 5.1461 0 11.4713 0H11.5219C17.8471 0 22.9932 5.14762 22.9932 11.4747V11.5253C22.9932 17.8524 17.8471 23 11.5219 23ZM11.4713 0.778526C5.57494 0.778526 0.778297 5.57659 0.778297 11.4747V11.5253C0.778297 17.4234 5.57494 22.2215 11.4713 22.2215H11.5219C17.4183 22.2215 22.2149 17.4234 22.2149 11.5253V11.4747C22.2149 5.57659 17.4183 0.778526 11.5219 0.778526H11.4713Z"
                    fill="white"
                  />
                  <path
                    d="M14.9351 4.91016H8.06115C6.16211 4.91016 4.61719 6.45553 4.61719 8.35514V14.6456C4.61719 16.5452 6.16211 18.0906 8.06115 18.0906H14.9351C16.8341 18.0906 18.379 16.5452 18.379 14.6456V8.35514C18.379 6.45553 16.8341 4.91016 14.9351 4.91016ZM5.83211 8.35514C5.83211 7.12584 6.83222 6.12543 8.06115 6.12543H14.9351C16.164 6.12543 17.1641 7.12584 17.1641 8.35514V14.6456C17.1641 15.8749 16.164 16.8753 14.9351 16.8753H8.06115C6.83222 16.8753 5.83211 15.8749 5.83211 14.6456V8.35514Z"
                    fill="white"
                  />
                  <path
                    d="M11.4984 14.7042C13.2644 14.7042 14.7019 13.2671 14.7019 11.4998C14.7019 9.73257 13.2651 8.29541 11.4984 8.29541C9.73166 8.29541 8.29492 9.73257 8.29492 11.4998C8.29492 13.2671 9.73166 14.7042 11.4984 14.7042ZM11.4984 9.51147C12.595 9.51147 13.4869 10.4037 13.4869 11.5006C13.4869 12.5976 12.595 13.4897 11.4984 13.4897C10.4018 13.4897 9.50985 12.5976 9.50985 11.5006C9.50985 10.4037 10.4018 9.51147 11.4984 9.51147Z"
                    fill="white"
                  />
                  <path
                    d="M14.9979 8.8127C15.4734 8.8127 15.861 8.42578 15.861 7.94932C15.861 7.47286 15.4742 7.08594 14.9979 7.08594C14.5216 7.08594 14.1348 7.47286 14.1348 7.94932C14.1348 8.42578 14.5216 8.8127 14.9979 8.8127Z"
                    fill="white"
                  />
                </svg>
              </a>

              <!--Whatsapp-->
              <a
                href="https://wa.me/254723787180"
                class="hover:translate-y-0.5"
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 23H11.4713C5.1461 23 0 17.8524 0 11.5253V11.4747C0 5.14761 5.1461 0 11.4713 0H11.5219C17.8471 0 22.9932 5.14761 22.9932 11.4747V11.5253C22.9932 17.8524 17.8471 23 11.5219 23ZM11.4713 0.778526C5.57494 0.778526 0.778297 5.57658 0.778297 11.4747V11.5253C0.778297 17.4234 5.57494 22.2215 11.4713 22.2215H11.5219C17.4183 22.2215 22.2149 17.4234 22.2149 11.5253V11.4747C22.2149 5.57658 17.4183 0.778526 11.5219 0.778526H11.4713Z"
                    fill="white"
                  />
                  <path
                    d="M13.6609 14.7498C10.8178 14.7498 8.50468 12.4353 8.50391 9.59133C8.50468 8.87041 9.09152 8.28418 9.81067 8.28418C9.88461 8.28418 9.95776 8.29041 10.0278 8.30286C10.1819 8.32855 10.3282 8.38072 10.4629 8.45935C10.4823 8.47103 10.4956 8.48972 10.4987 8.51152L10.7991 10.4057C10.803 10.4282 10.796 10.45 10.7812 10.4664C10.6154 10.6501 10.4037 10.7825 10.1679 10.8487L10.0543 10.8806L10.0971 10.9903C10.4847 11.9775 11.2739 12.7662 12.2615 13.1554L12.3713 13.199L12.4032 13.0854C12.4693 12.8495 12.6016 12.6377 12.7853 12.4719C12.7986 12.4594 12.8165 12.4532 12.8344 12.4532C12.8382 12.4532 12.8421 12.4532 12.8468 12.454L14.7404 12.7545C14.763 12.7584 14.7817 12.7708 14.7933 12.7903C14.8712 12.925 14.9233 13.0721 14.9498 13.2263C14.9622 13.2948 14.9677 13.3672 14.9677 13.4427C14.9677 14.1628 14.3816 14.7491 13.6609 14.7498Z"
                    fill="white"
                  />
                  <path
                    d="M18.7034 10.8759C18.5501 9.14288 17.7562 7.53523 16.4681 6.34954C15.1723 5.15683 13.4912 4.49976 11.733 4.49976C7.87418 4.49976 4.73453 7.64033 4.73453 11.5003C4.73453 12.7957 5.09177 14.0577 5.76811 15.157L4.25977 18.4969L9.0891 17.9823C9.92889 18.3264 10.8177 18.5008 11.7322 18.5008C11.9727 18.5008 12.2194 18.4883 12.4669 18.4626C12.6848 18.4393 12.9051 18.405 13.1215 18.3614C16.353 17.7082 18.712 14.8394 18.7307 11.5376V11.5003C18.7307 11.2901 18.7213 11.0799 18.7026 10.8767L18.7034 10.8759ZM9.27512 16.5163L6.60323 16.8013L7.40098 15.0332L7.24143 14.8191C7.22975 14.8036 7.21808 14.788 7.20485 14.7701C6.51216 13.8133 6.14636 12.6828 6.14636 11.501C6.14636 8.41963 8.65248 5.91277 11.733 5.91277C14.6189 5.91277 17.0651 8.16506 17.3009 11.0402C17.3134 11.1943 17.3204 11.3492 17.3204 11.5018C17.3204 11.5454 17.3196 11.5882 17.3188 11.6342C17.2597 14.2119 15.4595 16.4011 12.9409 16.9585C12.7487 17.0013 12.5517 17.034 12.3556 17.0551C12.1517 17.0784 11.9423 17.0901 11.7345 17.0901C10.9944 17.0901 10.2752 16.9468 9.59578 16.6635C9.52028 16.6331 9.44634 16.6004 9.37707 16.5669L9.2759 16.5179L9.27512 16.5163Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-9 max-sm:hidden"></div>
    <div>
      <Footer />
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";

const CONTACT_EMAIL = "palmamukuyuni@gmail";
const form = reactive({ name: "", phone: "", email: "", message: "", botcheck: "" });
const status = ref("idle");

const WEB3FORMS_KEY = "f3085174-b362-4f65-9e86-e8205b0b4653";

async function submitForm() {
  if (form.botcheck) return;
  status.value = "sending";
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  const fields = {
    name: form.name,
    phone: form.phone,
    email: form.email,
    message: form.message,
  };
  const request = WEB3FORMS_KEY
    ? {
        url: "https://api.web3forms.com/submit",
        body: {
          ...fields,
          access_key: WEB3FORMS_KEY,
          subject: `New website enquiry from ${form.name}`,
          from_name: "Palma Mukuyuni website",
          replyto: form.email,
        },
      }
    : {
        url: `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        body: {
          ...fields,
          _subject: `New website enquiry from ${form.name}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        },
      };
  try {
    const res = await fetch(request.url, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(request.body),
    });
    const text = await res.text();
    let data = {};
    try {
      data = JSON.parse(text);
    } catch {
      // some providers return odd bodies on errors; rely on the HTTP status
    }
    if (!res.ok || data.success === false || data.success === "false") {
      throw new Error(`send failed (${res.status}): ${text.slice(0, 200)}`);
    }
    Object.assign(form, { name: "", phone: "", email: "", message: "" });
    status.value = "success";
  } catch (err) {
    console.error("Contact form failed:", err);
    status.value = "error";
  } finally {
    clearTimeout(timer);
  }
}

useSeo({
  title: "Palma Mukuyuni Tree Nursery | Tree Seedlings & Landscaping in Mukuyuni, Machakos, Kenya",
  description:
    "Buy quality tree seedlings, fruit trees, indigenous and ornamental plants at Palma Mukuyuni Tree Nursery, along Machakos - Wote road. Landscaping and garden design for homes, schools and institutions across Kenya.",
  path: "/",
});
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>
