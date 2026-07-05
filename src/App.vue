<template>
  <div class="font-sans text-slate-600 bg-slate-50 antialiased overflow-x-hidden">
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <a href="#">
            <div class="flex items-center gap-2">
              <img src="/images/BrightSmiles.png" onerror="this.onerror=null; this.src='https://static.wixstatic.com/media/dd7742_f822f1d52c2e4135bdab54e19596ee94~mv2.jpg/v1/crop/x_0,y_126,w_1192,h_288/fill/w_466,h_112,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bright%20Smiles%20Orthodontic%20Service_JPG.jpg';" alt="BrightSmiles Logo" class="h-10">
            </div>
          </a>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-primary font-semibold">Home</a>
            <a href="#about" class="text-slate-500 hover:text-primary transition-colors font-medium">About Us</a>
            <a href="#services" class="text-slate-500 hover:text-primary transition-colors font-medium">Services</a>
            <a href="#reviews" class="text-slate-500 hover:text-primary transition-colors font-medium">Reviews</a>
            <a href="#career" class="text-slate-500 hover:text-primary transition-colors font-medium">Career</a>
            <a href="https://www.brightsmilesortho.com.au/onlineform" target="_blank" class="bg-primary hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Book Online</a>
          </div>
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-slate-500 hover:text-primary focus:outline-none p-2">
              <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark text-2xl' : 'fa-solid fa-bars text-2xl'"></i>
            </button>
          </div>
        </div>
      </div>

      <div :class="['md:hidden bg-white border-t border-slate-100 flex-col py-4 px-4 shadow-xl absolute w-full transition-all duration-300 origin-top', isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none']">
        <a @click="toggleMenu" href="#" class="py-3 text-primary font-semibold border-b border-slate-50 block">Home</a>
        <a @click="toggleMenu" href="#about" class="py-3 text-slate-600 font-medium border-b border-slate-50 block">About Us</a>
        <a @click="toggleMenu" href="#services" class="py-3 text-slate-600 font-medium border-b border-slate-50 block">Services</a>
        <a @click="toggleMenu" href="#reviews" class="py-3 text-slate-600 font-medium border-b border-slate-50 block">Reviews</a>
        <a @click="toggleMenu" href="#career" class="py-3 text-slate-600 font-medium border-b border-slate-50 block">Career</a>
        <a @click="toggleMenu" href="https://www.brightsmilesortho.com.au/onlineform" target="_blank" class="py-3 text-center mt-4 bg-primary text-white rounded-full font-semibold block">Book Online</a>
      </div>
    </nav>

    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-hero">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute top-0 right-0 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 mb-6 text-sm font-semibold text-primary">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              Accepting New Patients
            </div>
            <h1 class="font-display text-5xl lg:text-7xl font-extrabold text-dark leading-tight mb-6 tracking-tight">
              Transforming Smiles, <br>
              <span class="text-gradient">One Patient at a Time.</span>
            </h1>
            <p class="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              Welcome to BrightSmiles Orthodontic Service. Experience world-class dental care with our leading Australian specialists.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="https://www.brightsmilesortho.com.au/onlineform" target="_blank" class="bg-primary hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-floating text-center flex items-center justify-center gap-2 group">
                Book a Consultation <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#about" class="bg-white hover:bg-slate-50 text-dark border border-slate-200 px-8 py-4 rounded-full font-bold transition-all text-center flex items-center justify-center gap-2">
                <i class="fa-solid fa-play text-primary"></i> Meet the Team
              </a>
            </div>
          </div>

          <div class="relative" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div class="relative rounded-t-[100px] rounded-b-[30px] overflow-hidden shadow-2xl border-8 border-white h-[500px]">
              <div class="relative w-full h-full bg-slate-100">
                <div
                    v-for="(image, index) in slides"
                    :key="index"
                    class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
                >
                  <img
                      :src="image.src"
                      :alt="image.alt"
                      class="w-full h-full object-cover"
                  />
                </div>

                <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                  <button
                      v-for="(_, index) in slides"
                      :key="index"
                      @click="goToSlide(index)"
                      class="w-3 h-3 rounded-full bg-white shadow-md transition-opacity focus:outline-none"
                      :class="currentSlide === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'"
                  ></button>
                </div>
              </div>
            </div>

            <div class="absolute top-4 z-10 left-2 md:top-10 md:-left-10 bg-white p-3 md:p-4 rounded-2xl shadow-floating flex items-center gap-4 animate-bounce" style="animation-duration: 3s;">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-500 text-xl">
                <i class="fa-solid fa-star"></i>
              </div>
              <div>
                <p class="text-xs md:text-sm font-bold text-dark">4.4/5 Rating</p>
                <p class="text-[10px] md:text-xs text-slate-500">Based on Google reviews</p>
              </div>
            </div>

            <div class="absolute bottom-15 z-10 right-2 md:bottom-10 md:-right-10 bg-white p-3 md:p-4 rounded-2xl shadow-floating flex items-center gap-4 animate-bounce" style="animation-duration: 4s;">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary text-xl">
                <i class="fa-solid fa-shield-heart"></i>
              </div>
              <div>
                <p class="text-xs md:text-sm font-bold text-dark">Top Rated</p>
                <p class="text-[10px] md:text-xs text-slate-500">Australian Clinic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div class="relative group" data-aos="fade-right" data-aos-duration="1200">
            <div class="absolute -inset-4 bg-linear-to-r from-primary via-sky-300 to-blue-400 rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>

            <div class="relative rounded-4xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.4)] bg-slate-100 min-h-100">
              <img src="/images/image1.jpeg" alt="Dr. Benjamin Tai" class="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105 min-h-100">

              <div class="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 sm:p-10 z-10 pointer-events-none">
                <p class="text-white font-display font-bold text-2xl sm:text-3xl translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out drop-shadow-md">
                  Relax. Your smile is in good hands.
                </p>
                <div class="w-16 h-1.5 bg-primary mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200 origin-left rounded-full"></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col md:items-center justify-center">
            <h2 class="text-primary font-bold tracking-wide uppercase text-sm mb-2 gap-2">
              About Us
            </h2>
            <h3 class="font-display text-4xl md:text-5xl font-extrabold text-dark mb-8 leading-tight">
              Meet Your Professional Smile Designer
            </h3>
            <div class="text-slate-600 text-lg space-y-6 leading-relaxed">
              <p>
                <strong class="text-dark font-display text-xl">Dr. Benjamin Tai</strong> is an award-winning Specialist Orthodontist (Professional Smile Designer) and qualified General Dentist who received his training from the University of Western Australia where he was awarded a Doctorate of Clinical Dentistry in Orthodontics, and a Bachelor of Dental Science, and Honours for his Bachelor of Science in Dentistry and research in the field of orthodontics.
              </p>
              <p>
                He has impeccable attention to detail, is probably more passionate about your smile than even you may be and is committed to providing exceptional care to all his patients.
              </p>
              <div class="bg-slate-50 border-l-4 border-primary p-6 rounded-r-2xl mt-8">
                <p class="text-xl font-bold text-dark italic">
                  "Don't put it off any longer... It's time to become excited about straightening your teeth!"
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="services" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 class="text-primary font-bold tracking-wide uppercase text-sm mb-2">What We Do</h2>
          <h3 class="font-display text-4xl md:text-5xl font-extrabold text-dark mb-4">Our Comprehensive Services</h3>
          <p class="text-lg text-slate-500">From routine check-ups to advanced orthodontic treatments, our Sydney clinic offers everything you need for a healthy smile.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div data-aos="fade-up" data-aos-delay="100" class="bg-slate-50 p-10 rounded-4xl hover:bg-white hover:shadow-floating transition-all duration-300 group border border-slate-100">
            <div class="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-teeth-open"></i>
            </div>
            <h4 class="font-display text-2xl font-bold text-dark mb-4">The latest technology brings unprecedented comfort like never before</h4>
            <p class="text-slate-500 mb-6 leading-relaxed">To provide a relaxing and exceptional experience, we have invested in advanced 3D technology to make your appointments faster, more comfortable, and more convenient.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" class="bg-primary p-10 rounded-4xl shadow-floating text-white transform md:-translate-y-4">
            <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white text-3xl mb-8">
              <i class="fa-solid fa-tooth"></i>
            </div>
            <h4 class="font-display text-2xl font-bold mb-4">Our mission, vision, and values</h4>
            <p class="text-white/80 mb-6 leading-relaxed">Driven by the belief that everyone deserves health and happiness, we strive to be a world-class, innovative orthodontic provider dedicated to transforming lives and making a positive difference in the world.</p>
            <h4 class="font-display text-2xl font-bold  mb-4">
              'One smile can make your day...
              Your smile can change your life!'</h4>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" class="bg-slate-50 p-10 rounded-4xl hover:bg-white hover:shadow-floating transition-all duration-300 group border border-slate-100">
            <div class="w-16 h-16 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary text-3xl mb-8 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-x-ray"></i>
            </div>
            <h4 class="font-display text-2xl font-bold text-dark mb-4">Committed to excellence 24/7.</h4>
            <p class="text-slate-500 mb-6 leading-relaxed">To accommodate your busy schedule, we offer free online consultations, after-hours appointments, and an expert team utilizing advanced technology to maximize your comfort and convenience.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="locations-section" class="py-24 bg-slate-50 border-t border-slate-200 relative z-20 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="800">
          <span class="text-sky-500 font-bold tracking-wide uppercase text-sm block mb-2">Our Location</span>
          <h3 class="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Convenient Australia Location
          </h3>
          <p class="text-lg text-slate-500">
            Select a location to view details, operating structures, and dynamic maps routing.
          </p>
        </div>

        <div class="grid lg:grid-cols-5 gap-8 items-start">

          <div class="lg:col-span-2 space-y-4" data-aos="fade-right" data-aos-duration="1000">
            <div class="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row lg:flex-col gap-2">
              <button
                  v-for="clinic in clinics"
                  :key="clinic.id"
                  @click="activeClinicId = clinic.id"
                  :class="[
                  'w-full text-left px-5 py-4 rounded-xl font-display font-bold text-lg transition-all flex items-center justify-between group duration-300',
                  activeClinicId === clinic.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-200 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                ]"
              >
                <span class="flex items-center gap-3">
                  <i class="fa-solid fa-location-dot transition-colors" :class="activeClinicId === clinic.id ? 'text-white' : 'text-sky-500'"></i>
                  {{ clinic.name }}
                </span>
                <i class="fa-solid fa-chevron-right text-sm transform transition-transform group-hover:translate-x-1" :class="activeClinicId === clinic.id ? 'text-white' : 'text-slate-400'"></i>
              </button>
            </div>

            <transition name="fade-slide" mode="out-in">
              <div :key="activeClinic.id" class="bg-white p-8 rounded-3xl shadow-md border border-slate-100 space-y-6">
                <div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-sky-500 mb-1">Clinic Address</h4>
                  <p class="text-lg text-slate-800 font-medium leading-relaxed">
                    {{ activeClinic.address }}
                  </p>
                </div>

                <div class="border-t border-slate-100 pt-4 space-y-3">
                  <div class="flex items-center gap-3 text-slate-600">
                    <i class="fa-solid fa-phone text-sky-500 w-5"></i>
                    <span>(02) 9876 5432</span>
                  </div>
                  <div class="flex items-center gap-3 text-slate-600">
                    <i class="fa-solid fa-envelope text-sky-500 w-5"></i>
                    <span>info@brightsmilesortho.com.au</span>
                  </div>
                </div>

                <a
                    :href="activeClinic.directionsUrl"
                    target="_blank"
                    rel="noopener"
                    class="inline-flex w-full items-center justify-center gap-2 bg-slate-900 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-sky-600 transition-all hover:scale-[1.02] shadow-sm active:scale-95"
                >
                  <i class="fa-solid fa-route"></i> Get Live Directions
                </a>
              </div>
            </transition>
          </div>

          <div class="lg:col-span-3 h-112.5 lg:h-140 relative overflow-hidden" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <transition name="fade-map" mode="out-in">
              <iframe
                  :key="activeClinic.id"
                  :src="activeClinic.mapEmbedUrl"
                  class="w-full h-full rounded-3xl border-0 shadow-xl bg-slate-200"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Google Maps Location View Layout"
              ></iframe>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section
        ref="sectionRef"
        id="mascot-section"
        class="relative w-full bg-[#FCFCFC] h-[300vh]"
    >
      <div
          :class="[stickyClass, 'w-full h-screen overflow-hidden']"
      >

        <div
            id="mascot-text"
            class="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none transition-all duration-500"
            :style="{
          opacity: textStyles.opacity,
          transform: textStyles.transform
        }"
        >
          <h2 class="font-display text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl text-center mb-4">
            Meet Dr. Bailey
          </h2>
          <p class="text-xl md:text-2xl text-white font-medium text-center bg-[#FCFCFC]/40 px-8 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-2xl">
            Even our chief morale officer has a perfect smile!
          </p>
        </div>

        <div class="relative w-full h-full flex items-center justify-center bg-[#FCFCFC] overflow-hidden">
          <div
              id="mascot-wrapper"
              class="relative w-auto h-auto max-w-full max-h-full transition-transform duration-75 ease-out"
              style="transform-origin: 48% 35%;"
              :style="{ transform: `scale(${wrapperScale})` }"
          >
            <img
                :src="imgSrc"
                @error="handleImgError"
                alt="Dr. Bailey the Dog"
                class="w-auto h-auto max-w-full max-h-full object-contain"
            >

            <div
                id="mascot-sparkle"
                class="absolute z-20 transition-all duration-75 pointer-events-none"
                style="top: 50%; left: 48%;"
                :style="{
              opacity: sparkleStyles.opacity,
              transform: sparkleStyles.transform
            }"
            >
            </div>
          </div>

          <div
              id="mascot-overlay"
              class="absolute inset-0 transition-all duration-75 ease-out pointer-events-none z-10"
              :style="{ backgroundColor: overlayBg }"
          ></div>
        </div>
      </div>
    </section>

    <section id="reviews" class="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          <div class="lg:col-span-5" data-aos="fade-right" data-aos-duration="1000">
            <h2 class="text-primary font-bold tracking-wide uppercase text-sm mb-2 md:text-center items-center gap-2">
              Testimonials
            </h2>
            <h3 class="font-display text-4xl md:text-5xl md:text-center font-extrabold text-dark mb-6 leading-tight">
              Loved by patients across Australia
            </h3>
            <p class="text-lg text-slate-500 mb-8 md:text-center leading-relaxed">
              Don't just take our word for it. See what our community in Sydney has to say about their new smiles.
            </p>

            <div class="flex mx-auto self-center items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 transform transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
              <div class="flex text-yellow-400 text-xl drop-shadow-sm gap-1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
              </div>
              <div class="h-10 w-px bg-slate-200"></div>
              <div class="flex flex-col">
                <span class="font-display font-bold text-dark text-xl leading-none mb-1">4.4/5</span>
                <span class="text-slate-500 text-xs font-semibold tracking-wide uppercase">Google Reviews</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div
                @mouseenter="stopAutoplay"
                @mouseleave="startAutoplay"
                class="relative w-full overflow-hidden rounded-4xl bg-white p-8 sm:p-12 shadow-floating border border-slate-100 group transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(14,165,233,0.3)]"
            >
              <div class="pointer-events-none absolute -top-4 -left-4 text-sky-50 opacity-60 transform -rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                <i class="fa-solid fa-quote-left text-9xl"></i>
              </div>

              <div class="relative z-10 flex min-h-62.5 md:min-h-70 flex-col justify-center items-center">
                <transition name="fade" mode="out-in">
                  <div :key="currentIndex" class="flex w-full flex-col items-center">

                    <p class="mb-10 text-xl sm:text-2xl font-medium leading-relaxed text-slate-700 italic text-center">
                      "{{ activeTestimonial.quote }}"
                    </p>

                    <div class="flex flex-col items-center justify-center gap-3 mt-auto">
                      <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-sky-400 text-lg font-bold text-white shadow-md transform transition-transform group-hover:scale-110 duration-500">
                        {{ getInitials(activeTestimonial.name) }}
                      </div>
                      <div class="text-center">
                        <h4 class="text-lg font-bold text-dark">{{ activeTestimonial.name }}</h4>
                        <p class="text-sm font-semibold text-primary">{{ activeTestimonial.role }}</p>
                      </div>
                    </div>

                  </div>
                </transition>
              </div>

              <div class="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
                <button
                    @click="prev"
                    class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:bg-sky-50 hover:text-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Previous testimonial"
                >
                  <i class="fa-solid fa-arrow-left-long"></i>
                </button>

                <div class="flex space-x-2">
                  <button
                      v-for="(_, index) in testimonials"
                      :key="index"
                      @click="setSlide(index)"
                      :class="[
                    'h-2.5 rounded-full transition-all duration-500',
                    currentIndex === index ? 'w-8 bg-primary shadow-sm' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  ]"
                      :aria-label="`Go to slide ${index + 1}`"
                  ></button>
                </div>

                <button
                    @click="next"
                    class="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:bg-sky-50 hover:text-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label="Next testimonial"
                >
                  <i class="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="career" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-dark rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12" data-aos="zoom-in">
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-50"></div>

          <div class="relative z-10 max-w-xl text-center md:text-left">
            <h3 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Join Our Growing Team</h3>
            <p class="text-slate-300 text-lg">We are always looking for passionate dental professionals to join our Sydney clinic. Grow your career with Australia's leading orthodontic service.</p>
          </div>

          <div class="relative z-10 shrink-0 flex flex-col items-center w-full md:w-auto">
            <div class="bg-white/5 border border-white/10 backdrop-blur-md px-8 py-5 rounded-3xl shadow-xl text-center transform transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 w-full">
              <p class="text-slate-300 font-medium mb-1">Email your application directly at:</p>
              <a href="mailto:info@brightsmilesortho.com.au" class="text-white hover:text-sky-400 font-bold text-lg tracking-wide transition-colors break-all">
                info@brightsmilesortho.com.au
              </a>
            </div>

            <div class="flex items-center w-full my-6 opacity-60">
              <div class="h-px bg-slate-400 flex-1"></div>
              <span class="text-slate-300 font-bold uppercase text-xs tracking-widest px-4 text-center">OR contact us at our social media accounts</span>
              <div class="h-px bg-slate-400 flex-1"></div>
            </div>

            <div class="flex gap-4 sm:gap-6">
              <a href="https://www.facebook.com/BrightSmilesOrtho" target="_blank" class="group relative flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_10px_25px_rgba(24,119,242,0.4)] overflow-hidden" aria-label="Facebook">
                <div class="absolute inset-0 bg-[#1877F2] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div class="absolute inset-0 bg-linear-to-tr from-white/0 via-white/30 to-white/0 translate-y-full group-hover:-translate-y-full transition-transform duration-700 ease-in-out z-10"></div>
                <i class="fa-brands fa-facebook-f text-slate-300 group-hover:text-white text-2xl z-20 transition-all duration-500 group-hover:scale-110 drop-shadow-md"></i>
              </a>

              <a href="https://www.instagram.com/brightsmilesorthodontics" target="_blank" class="group relative flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_10px_25px_rgba(220,39,67,0.4)] overflow-hidden" aria-label="Instagram">
                <div class="absolute inset-0 bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div class="absolute inset-0 bg-linear-to-tr from-white/0 via-white/30 to-white/0 translate-y-full group-hover:-translate-y-full transition-transform duration-700 ease-in-out z-10"></div>
                <i class="fa-brands fa-instagram text-slate-300 group-hover:text-white text-2xl z-20 transition-all duration-500 group-hover:scale-110 drop-shadow-md"></i>
              </a>

              <a href="https://www.threads.com/@brightsmilesorthodontics" target="_blank" class="group relative flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-110 hover:shadow-[0_10px_25px_rgba(255,255,255,0.15)] overflow-hidden" aria-label="Threads">
                <div class="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <div class="absolute inset-0 bg-linear-to-tr from-white/0 via-white/30 to-white/0 translate-y-full group-hover:-translate-y-full transition-transform duration-700 ease-in-out z-10"></div>
                <i class="fa-brands fa-threads text-slate-300 group-hover:text-white text-2xl z-20 transition-all duration-500 group-hover:scale-110 drop-shadow-md"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="booking" class="py-24 bg-slate-50 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-[3rem] shadow-floating overflow-hidden" data-aos="fade-up">
          <div class="grid lg:grid-cols-5">

            <div class="lg:col-span-2 bg-gradient-hero p-10 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary rounded-full filter blur-[80px] opacity-20 pointer-events-none"></div>

              <div class="relative z-10">
                <h2 class="text-primary font-bold tracking-wide uppercase text-sm mb-2">Online Consultation</h2>
                <h3 class="font-display text-3xl md:text-4xl font-extrabold text-dark mb-6">Free online consultation</h3>
                <p class="text-slate-600 mb-8 leading-relaxed">
                  Bright Smiles Orthodontics we are currently offering free online consultations to save you time & money, and make your treatment with us as convenient as possible.



                  All you have to do is submit the form below and someone from our team will be in contact with you soon!  </p>

                <ul class="space-y-6">
                  <li class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                      <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-dark">Quick Response</h4>
                      <p class="text-sm text-slate-500">We aim to reply to you as soon as we can.</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-dark">Convenient Location</h4>
                      <p class="text-sm text-slate-500">Bunbury</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="lg:col-span-3 p-10 md:p-12 relative">
              <!-- Success Message using Vue Conditional Rendering -->
              <div v-if="isBookingSubmitted" class="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-12">
                <div class="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto animate-bounce">
                  <i class="fa-solid fa-check"></i>
                </div>
                <h3 class="font-display text-3xl font-bold text-dark mb-4">Request Sent!</h3>
                <p class="text-slate-600 mb-8 text-lg max-w-md mx-auto">Thank you for choosing BrightSmiles. Our team will be in touch shortly to confirm your appointment time.</p>
                <button @click="resetBooking" type="button" class="text-primary font-bold hover:text-sky-600 transition-colors flex items-center gap-2 mx-auto">
                  <i class="fa-solid fa-rotate-left"></i> Book another appointment
                </button>
              </div>

              <!-- Vue Form Submit Binding -->
              <form v-else @submit.prevent="submitBooking" class="space-y-6 transition-opacity duration-300" :style="{ opacity: bookingOpacity }">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="firstName" class="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input v-model="formData.firstName" type="text" id="firstName" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John" required>
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input v-model="formData.lastName" type="text" id="lastName" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Doe" required>
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="email" class="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input v-model="formData.email" type="email" id="email" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@example.com" required>
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input v-model="formData.phone" type="tel" id="phone" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white" placeholder="(08) XXXX XXXX" required>
                  </div>
                </div>

                <!-- New Location Dropdown Field -->
                <div>
                  <label for="location" class="block text-sm font-semibold text-slate-700 mb-2">Preferred Location</label>
                  <div class="relative">
                    <select v-model="formData.location" id="location" required class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white text-slate-600 appearance-none pr-10">
                      <option value="" disabled selected>Select a clinic location</option>
                      <option value="Bunbury">Bunbury</option>
                      <option value="Busselton">Busselton (Example)</option>
                      <!-- Add more <option> tags here if you have other branches -->
                    </select>
                    <!-- Custom Dropdown Arrow -->
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                      <i class="fa-solid fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold text-slate-700 mb-2">What is your concern or do you have any Question?</label>
                  <textarea v-model="formData.message" id="message" rows="4" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Tell us a bit about how we can help..."></textarea>
                </div>

                <button type="submit" class="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Submit Registration <i class="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


    <footer class="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div class="col-span-1 md:col-span-2">
            <img src="/images/BrightSmiles2.png" onerror="this.onerror=null; this.src='https://placehold.co/200x60/0f172a/0ea5e9?text=BrightSmiles';" alt="BrightSmiles Logo" class="h-10 mb-6 opacity-80">
            <p class="max-w-sm mb-6">Transforming smiles across Australia with state-of-the-art orthodontic care and general dentistry.</p>
            <div class="flex space-x-4">
              <a target="_blank" href="https://www.facebook.com/BrightSmilesOrtho" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fa-brands fa-facebook-f"></i></a>
              <a target="_blank" href="https://www.instagram.com/brightsmilesorthodontics" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fa-brands fa-instagram"></i></a>
              <a target="_blank" href="https://www.threads.com/@brightsmilesorthodontics" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><i class="fa-brands fa-threads"></i></a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Quick Links</h4>
            <ul class="space-y-3">
              <li><a href="#" class="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" class="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" class="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#career" class="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Contact</h4>
            <ul class="space-y-3">
              <li class="flex items-center gap-3"><i class="fa-solid fa-phone text-primary"></i> (08) 9721 6888</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-envelope text-primary"></i>info@brightsmilesortho.com.au</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 BrightSmiles Orthodontic Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const slides = [
  { src: '/images/image1.png', alt: 'Happy Family' },
  { src: '/images/image2.jpg', alt: 'Orthodontic Care' },
  { src: '/images/image3.jpeg', alt: 'Perfect Smile' },
  { src: '/images/image4.png', alt: 'Perfect Smile' },
];

// State managing the active clinic tab selection
const activeClinicId = ref('bunbury')

// Clinic Data Layer with structural addresses from the template file
const clinics = [
  {
    id: 'bunbury',
    name: 'Bunbury',
    address: 'Bright Smiles Bunbury Orthodontic Centre, 22B Stirling St, Bunbury WA 6230, Australia',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Bright%20Smiles%20Bunbury%20Orthodontic%20Centre,%2022B%20Stirling%20St,%20Bunbury%20WA%206230&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bright+Smiles+Bunbury+Orthodontic+Centre,+22B+Stirling+St,+Bunbury+WA+6230'
  },
]

// Computed property that updates components automatically when activeClinicId changes
const activeClinic = computed(() => {
  return clinics.find(c => c.id === activeClinicId.value) || clinics[0]
})

const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetInterval();
};

const resetInterval = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
};

// 1. Mobile Menu State
const isMobileMenuOpen = ref(false)
const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 2. Booking Form State & Handlers
const isBookingSubmitted = ref(false)
const bookingOpacity = ref(1)
const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  clinic: '',
  service: '',
  message: ''
})

const submitBooking = () => {
  bookingOpacity.value = 0
  setTimeout(() => {
    isBookingSubmitted.value = true
  }, 300)
}

const resetBooking = () => {
  Object.keys(formData).forEach(key => formData[key] = '')
  isBookingSubmitted.value = false
  setTimeout(() => {
    bookingOpacity.value = 1
  }, 50)
}

// Template Refs
const sectionRef = ref(null)

// Fallback image asset handling
const imgSrc = ref('/images/bailey.jpeg')
const handleImgError = () => {
  imgSrc.value = 'https://placehold.co/1200x1600/111111/38bdf8?text=Dr.+Bailey+(Place+bailey.jpg+in+same+folder)'
}

// Layout state flags
const stickyClass = ref('absolute top-0 left-0 z-40')
const wrapperScale = ref(1)
const overlayBg = ref('rgba(17, 17, 17, 0)')

const textStyles = reactive({
  opacity: '0',
  transform: 'translateY(2rem)'
})

const sparkleStyles = reactive({
  opacity: '0',
  transform: 'translate(-50%, -50%) scale(0.5) rotate(0deg)'
})

const handleScroll = () => {
  if (!sectionRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // 1. Programmatic Viewport Pinning System
  if (rect.top > 0) {
    // Above the scroll track -> Keep at the top of the track
    stickyClass.value = 'absolute top-0 left-0 z-40'
  } else if (rect.top <= 0 && rect.bottom >= windowHeight) {
    // Scrolling through the track -> Lock to screen viewport
    stickyClass.value = 'fixed top-0 left-0 z-40'
  } else {
    // Scrolled past the track -> Lock to the absolute bottom of the track
    stickyClass.value = 'absolute bottom-0 left-0 z-40'
  }

  // 2. Zoom & Element Progression Calculations
  let progress = -rect.top / (rect.height - windowHeight)
  progress = Math.max(0, Math.min(1, progress))

  if (progress > 0) {
    wrapperScale.value = 1 + progress
    overlayBg.value = `rgba(17, 17, 17, ${progress * 0.6})`

    // Text presentation trigger
    if (progress > 0.5) {
      textStyles.opacity = '1'
      textStyles.transform = 'translateY(0)'
    } else {
      textStyles.opacity = '0'
      textStyles.transform = 'translateY(2rem)'
    }

    // Finishing sparkle animation trigger
    if (progress >= 1) {
      sparkleStyles.opacity = '1'
      sparkleStyles.transform = 'translate(50%, 50%) scale(1) rotate(15deg)'
    } else {
      sparkleStyles.opacity = '1'
      sparkleStyles.transform = 'translate(50%, 50%) scale(0.5) rotate(0deg)'
    }
  } else {
    // Neutral Reset Styles
    wrapperScale.value = 1
    overlayBg.value = 'rgba(17, 17, 17, 0)'
    textStyles.opacity = '0'
    textStyles.transform = 'translateY(2rem)'
    sparkleStyles.opacity = '0'
    sparkleStyles.transform = 'translate(-50%, -50%) scale(0.5) rotate(0deg)'
  }
}

// 4. Lifecycle Hooks
onMounted(() => {
  AOS.init({
    once: true,
    offset: 50,
  })
  window.addEventListener('scroll', handleScroll)

  // Start autoplay for Testimonials
  startAutoplay()

  // Start autoplay for Hero Slides
  resetInterval()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)

  // Stop autoplay for Testimonials
  stopAutoplay()

  // Clear hero slide interval
  clearInterval(slideInterval)
})


const testimonials = ref([
  {
    id: 1,
    quote: "I just wanted to thank you for a wonderful job so well done and for an amazing service throughout. I'm so glad we chose Bright Smiles! Thank you!",
    name: "Roshni R.",
    role: "Customer"
  },
  {
    id: 2,
    quote: "Dr Ben Tai is a high-standard professional, I am 3 years post braces removal and I love my smile! I always get compliments on it. I started to get some teeth shifting due to not wearing my retainers on several occasions, and Dr Tai booked me in immediately after emailing him and sorted me out.",
    name: "Sevasti S.",
    role: "Customer"
  },
  {
    id: 3,
    quote: "Thanks to Dr Ben for your help to fix our son's retainer and for your advice on braces for both of our boys.",
    name: "Luke",
    role: "Customer"
  },
  {
    id: 4,
    quote: "I received the best possible treatment made the entire journey smooth, even though my case was quite complicated. I am so grateful my dentist referred me to him. Thank you, Dr. Ben, for restoring my confidence and making me feel great about my smile again!",
    name: "Hellen H.",
    role: "Customer"
  },
  {
    id: 5,
    quote: "Thank you to Ben for the comfortable & knowledgeable experience of taking my son through the process of applying, maintaining & removal of his braces.\n" +
        "The intricate attention to detail in creating the perfect results.\n" +
        "We are very happy & shall continue the visits to keep the perfect smile 😁",
    name: "Ri Ri S.",
    role: "Customer"
  },
  {
    id: 5,
    quote: "The clinic was comfortable and Dr Tai was very friendly and happy to explain everything that he was doing. He seems like he genuinely enjoys his work and helping his patients.",
    name: "Renae",
    role: "Customer"
  },
])

const currentIndex = ref(0)
let autoplayInterval = null // Reference to store the interval timer

const activeTestimonial = computed(() => testimonials.value[currentIndex.value])

const getInitials = (name) => {
  const parts = name.split(' ')
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  }
  return name.slice(0, 2).toUpperCase()
}

// --- Autoplay Logic ---

const startAutoplay = () => {
  // Clear any existing interval to prevent duplicates
  stopAutoplay()
  autoplayInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  }, 5000) // 5000ms = 5 seconds
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  startAutoplay()
}

// --- Navigation Logic ---
// We call resetAutoplay() on manual actions so the timer starts fresh

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  resetAutoplay()
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
  resetAutoplay()
}

const setSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}
</script>

<style scoped>
/* Scoped styles specific to this component */
.shadow-soft { box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08); }
.shadow-floating { box-shadow: 0 20px 50px -10px rgba(14, 165, 233, 0.25); }
.text-gradient { background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.bg-gradient-hero { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); }

/* Vue Transition classes for smooth fading */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Transition for Details Card */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Transition for Map Iframe */
.fade-map-enter-active,
.fade-map-leave-active {
  transition: opacity 0.6s ease;
}
.fade-map-enter-from,
.fade-map-leave-to {
  opacity: 0;
}
</style>