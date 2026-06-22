<template>
  <div class="font-sans text-slate-600 bg-slate-50 antialiased overflow-x-hidden">
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center gap-2">
            <img src="/images/BrightSmiles.png" onerror="this.onerror=null; this.src='https://static.wixstatic.com/media/dd7742_f822f1d52c2e4135bdab54e19596ee94~mv2.jpg/v1/crop/x_0,y_126,w_1192,h_288/fill/w_466,h_112,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bright%20Smiles%20Orthodontic%20Service_JPG.jpg';" alt="BrightSmiles Logo" class="h-10">
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-primary font-semibold">Home</a>
            <a href="#about" class="text-slate-500 hover:text-primary transition-colors font-medium">About Us</a>
            <a href="#services" class="text-slate-500 hover:text-primary transition-colors font-medium">Services</a>
            <a href="#reviews" class="text-slate-500 hover:text-primary transition-colors font-medium">Reviews</a>
            <a href="#career" class="text-slate-500 hover:text-primary transition-colors font-medium">Career</a>
            <a href="#booking" class="bg-primary hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Book Online</a>
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
        <a @click="toggleMenu" href="#booking" class="py-3 text-center mt-4 bg-primary text-white rounded-full font-semibold block">Book Online</a>
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
              Accepting New Patients in Sydney
            </div>
            <h1 class="font-display text-5xl lg:text-7xl font-extrabold text-dark leading-tight mb-6 tracking-tight">
              Transforming Smiles, <br>
              <span class="text-gradient">One Patient at a Time.</span>
            </h1>
            <p class="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              Welcome to BrightSmiles Orthodontic Service. Experience world-class dental care with our leading Australian specialists.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#booking" class="bg-primary hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-floating text-center flex items-center justify-center gap-2 group">
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


            <div class="absolute top-10 z-10 -left-10 bg-white p-4 rounded-2xl shadow-floating flex items-center gap-4 animate-bounce" style="animation-duration: 3s;">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-xl">
                <i class="fa-solid fa-star"></i>
              </div>
              <div>
                <p class="text-sm font-bold text-dark">4.9/5 Rating</p>
                <p class="text-xs text-slate-500">Based on 500+ reviews</p>
              </div>
            </div>

            <div class="absolute bottom-10 z-10 -right-10 bg-white p-4 rounded-2xl shadow-floating flex items-center gap-4 animate-bounce" style="animation-duration: 4s;">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary text-xl">
                <i class="fa-solid fa-shield-heart"></i>
              </div>
              <div>
                <p class="text-sm font-bold text-dark">Top Rated</p>
                <p class="text-xs text-slate-500">Australian Clinic</p>
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

            <div class="relative rounded-4xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.4)] bg-slate-100 min-h-[400px]">
              <img src="/images/image1.jpeg" alt="Dr. Benjamin Tai" class="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105">

              <div class="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 sm:p-10 z-10 pointer-events-none">
                <p class="text-white font-display font-bold text-2xl sm:text-3xl translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out drop-shadow-md">
                  Relax. Your smile is in good hands.
                </p>
                <div class="w-16 h-1.5 bg-primary mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200 origin-left rounded-full"></div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="1000" class="flex flex-col justify-center">
            <h2 class="text-primary font-bold tracking-wide uppercase text-sm mb-2 flex items-center gap-2">
              <span class="w-8 h-0.5 bg-primary rounded-full"></span> About Us
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

    <section id="reviews" class="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 class="text-primary font-bold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
            <h3 class="font-display text-4xl md:text-5xl font-extrabold text-dark mb-6">Loved by patients across Australia</h3>
            <p class="text-lg text-slate-500 mb-8">Don't just take our word for it. See what our community in Sydney has to say about their new smiles.</p>

            <div class="flex items-center gap-4 mb-8">
              <div class="flex text-yellow-400 text-xl">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <span class="font-bold text-dark text-lg">4.9/5</span>
              <span class="text-slate-500">(Google Reviews)</span>
            </div>
          </div>

          <div class="relative" data-aos="fade-left">
            <div class="bg-white p-8 rounded-3xl shadow-soft relative z-10">
              <i class="fa-solid fa-quote-left text-4xl text-sky-100 absolute top-8 left-8"></i>
              <div class="relative z-10 pl-12">
                <p class="text-xl text-slate-600 italic mb-6">"The team at BrightSmiles is phenomenal. As an adult getting braces, I was nervous, but they made the entire process seamless. Highly recommend to anyone in NSW!"</p>
                <div class="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?img=47" alt="Sarah M." class="w-12 h-12 rounded-full object-cover">
                  <div>
                    <h5 class="font-bold text-dark">Sarah M.</h5>
                    <p class="text-sm text-slate-500">Sydney, NSW</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -top-6 -right-6 w-full h-full border-2 border-primary border-dashed rounded-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="career" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-dark rounded-[3rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between" data-aos="zoom-in">
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-50"></div>

          <div class="relative z-10 mb-8 md:mb-0 max-w-xl">
            <h3 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">Join Our Growing Team</h3>
            <p class="text-slate-300 text-lg">We are always looking for passionate dental professionals to join our Sydney clinic. Grow your career with Australia's leading orthodontic service.</p>
          </div>

          <div class="relative z-10 shrink-0">
            <a href="#" class="bg-white hover:bg-slate-50 text-dark px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
              View Open Roles <i class="fa-solid fa-briefcase"></i>
            </a>
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
                <h2 class="text-primary font-bold tracking-wide uppercase text-sm mb-2">Book Online</h2>
                <h3 class="font-display text-3xl md:text-4xl font-extrabold text-dark mb-6">Request an Appointment</h3>
                <p class="text-slate-600 mb-8 leading-relaxed">Take the first step towards your perfect smile. Fill out the form below and our friendly team will contact you to confirm your booking.</p>

                <ul class="space-y-6">
                  <li class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                      <i class="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-dark">Quick Response</h4>
                      <p class="text-sm text-slate-500">We aim to reply within 2 hours during business days.</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 class="font-bold text-dark">3 Convenient Locations</h4>
                      <p class="text-sm text-slate-500">Bunbury, Applecross, and Newman.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="lg:col-span-3 p-10 md:p-12 relative">
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

                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label for="clinic" class="block text-sm font-semibold text-slate-700 mb-2">Preferred Clinic</label>
                    <select v-model="formData.clinic" id="clinic" required class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white text-slate-600 appearance-none">
                      <option value="" disabled selected>Select a location</option>
                      <option value="bunbury">Bunbury</option>
                      <option value="applecross">Applecross</option>
                      <option value="newman">Newman</option>
                    </select>
                  </div>
                  <div>
                    <label for="service" class="block text-sm font-semibold text-slate-700 mb-2">Service Required</label>
                    <select v-model="formData.service" id="service" required class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white text-slate-600 appearance-none">
                      <option value="" disabled selected>Select a service</option>
                      <option value="ortho">Orthodontics (Braces/Aligners)</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="consult">Initial Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold text-slate-700 mb-2">Additional Notes or Questions</label>
                  <textarea v-model="formData.message" id="message" rows="4" class="w-full px-5 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Tell us a bit about how we can help..."></textarea>
                </div>

                <button type="submit" class="w-full bg-primary hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Submit Booking Request <i class="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-2">
            <img src="/images/BrightSmiles.png" onerror="this.onerror=null; this.src='https://placehold.co/200x60/0f172a/0ea5e9?text=BrightSmiles';" alt="BrightSmiles Logo" class="h-10 mb-6 opacity-80">
            <p class="max-w-sm mb-6">Transforming smiles across Australia with state-of-the-art orthodontic care and general dentistry.</p>
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
              <li class="flex items-center gap-3"><i class="fa-solid fa-envelope text-primary"></i> info@brightsmilesortho.com.au</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 BrightSmiles Orthodontic Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const slides = [
  { src: '/images/image1.png', alt: 'Happy Family' },
  { src: '/images/image2.jpg', alt: 'Orthodontic Care' },
  { src: '/images/image3.jpeg', alt: 'Perfect Smile' },
  { src: '/images/image4.png', alt: 'Perfect Smile' },
];

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

// onMounted(() => {
//
// });

// onUnmounted(() => {
//
// });

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

// onMounted(() => {
//
// })

// onUnmounted(() => {
//
// })

// 4. Lifecycle Hooks
onMounted(() => {
  AOS.init({
    once: true,
    offset: 50,
  })
  window.addEventListener('scroll', handleScroll)

  slideInterval = setInterval(nextSlide, 5000);

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Initialize position check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', handleScroll)
  clearInterval(slideInterval);
})
</script>

<style scoped>
/* Scoped styles specific to this component */
.shadow-soft { box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08); }
.shadow-floating { box-shadow: 0 20px 50px -10px rgba(14, 165, 233, 0.25); }
.text-gradient { background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.bg-gradient-hero { background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); }
</style>