<template>
  <div class="font-sans text-slate-900 bg-white antialiased overflow-x-hidden selection:bg-blue-900 selection:text-white">
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-100 transition-all duration-500">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex justify-between items-center h-28">
          <a href="#" class="flex items-center gap-2 tracking-widest transition-opacity hover:opacity-80">
            <img src="/images/BrightSmiles.png" onerror="this.onerror=null; this.src='https://static.wixstatic.com/media/dd7742_f822f1d52c2e4135bdab54e19596ee94~mv2.jpg/v1/crop/x_0,y_126,w_1192,h_288/fill/w_466,h_112,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bright%20Smiles%20Orthodontic%20Service_JPG.jpg';" alt="Bright Smiles" class="h-9 w-auto object-contain">
          </a>
          <div class="hidden md:flex items-center space-x-12">
            <a href="#" class="text-blue-900 font-semibold text-xs uppercase tracking-widest">Home</a>
            <a href="#about" class="text-slate-400 hover:text-blue-900 transition-colors duration-300 text-xs uppercase tracking-widest font-semibold">Dr Ben</a>
            <a href="#transformations" class="text-slate-400 hover:text-blue-900 transition-colors duration-300 text-xs uppercase tracking-widest font-semibold">Results</a>
            <a href="#technology" class="text-slate-400 hover:text-blue-900 transition-colors duration-300 text-xs uppercase tracking-widest font-semibold">Technology</a>
            <a href="#locations" class="text-slate-400 hover:text-blue-900 transition-colors duration-300 text-xs uppercase tracking-widest font-semibold">Locations</a>
            <router-link to="/onlineform" class="bg-blue-900 hover:bg-slate-900 text-white px-8 py-4 text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-sm hover:shadow-lg">
              Book Online
            </router-link>
          </div>
          <div class="md:hidden flex items-center">
            <button @click="toggleMenu" class="text-slate-900 hover:text-blue-900 focus:outline-none p-2 transition-colors">
              <i :class="isMobileMenuOpen ? 'fa-solid fa-xmark text-2xl' : 'fa-solid fa-bars text-2xl'"></i>
            </button>
          </div>
        </div>
      </div>

      <div :class="['md:hidden bg-white border-t border-slate-100 flex-col py-6 px-6 shadow-2xl absolute w-full transition-all duration-300 origin-top', isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none']">
        <a @click="toggleMenu" href="#about" class="py-4 text-slate-600 font-semibold tracking-wide border-b border-slate-50 block">Meet Dr Ben</a>
        <a @click="toggleMenu" href="#transformations" class="py-4 text-slate-600 font-semibold tracking-wide border-b border-slate-50 block">Transformations</a>
        <a @click="toggleMenu" href="#technology" class="py-4 text-slate-600 font-semibold tracking-wide border-b border-slate-50 block">Technology</a>
        <a @click="toggleMenu" href="#locations" class="py-4 text-slate-600 font-semibold tracking-wide border-b border-slate-50 block">Locations</a>
        <a @click="toggleMenu" href="#faq" class="py-4 text-slate-600 font-semibold tracking-wide border-b border-slate-50 block">FAQ</a>
        <router-link to="/onlineform" @click="toggleMenu" class="py-4 text-center mt-6 bg-blue-900 text-white text-xs uppercase tracking-widest font-bold block">Start Your Journey</router-link>
      </div>
    </nav>

    <section class="relative pt-48 pb-28 lg:pt-64 lg:pb-44 overflow-hidden bg-slate-50">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div class="lg:col-span-6" data-aos="fade-up" data-aos-duration="1200">
            <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 leading-none mb-10 tracking-tight">
              Your Smile.<br>
              <span class="font-bold text-blue-900">Your Confidence.</span><br>
              Your Future.
            </h1>
            <p class="text-lg sm:text-xl text-slate-500 mb-12 max-w-lg leading-relaxed font-light">
              Specialist Orthodontic Care for Children, Teens & Adults. Experience world-class digital smile design in an exclusive, high-end environment.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
              <router-link to="/onlineform">
              <a class="bg-blue-900 hover:bg-slate-900 text-white px-10 py-5 text-xs uppercase tracking-widest font-bold transition-all duration-300 text-center flex items-center justify-center gap-3 shadow-md hover:shadow-xl">
                Schedule Your Consultation <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
              </router-link>
              <a href="#transformations" class="bg-transparent hover:bg-white text-slate-900 border border-slate-300 hover:border-slate-400 px-10 py-5 text-xs uppercase tracking-widest font-bold transition-all duration-300 text-center flex items-center justify-center">
                See What's Possible
              </a>
            </div>
          </div>

          <div class="lg:col-span-6 relative" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <div class="relative overflow-hidden shadow-2xl h-137.5 lg:h-162.5 bg-slate-200 group">
              <img src="/images/BrightSmileHero1.png" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80';" alt="Confident Patient Experiencing Professional Orthodontic Care" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-slate-100 bg-white py-16">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
          <div v-for="(stat, index) in stats" :key="index" class="pt-6 md:pt-0" data-aos="fade-in" :data-aos-delay="index * 150">
            <p class="text-4xl lg:text-5xl font-display font-bold text-blue-900 mb-3">{{ stat.number }}</p>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 lg:py-44 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center max-w-2xl mx-auto mb-24" data-aos="fade-up">
          <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">The Bright Smiles Difference</h2>
          <h3 class="font-display text-4xl lg:text-5xl font-bold text-slate-900">Why Families Choose Us</h3>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="(reason, index) in reasons" :key="index" class="bg-white p-10 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between" data-aos="fade-up" :data-aos-delay="index * 100">
            <div>
              <div class="w-12 h-12 bg-slate-50 flex items-center justify-center mb-8 rounded-none">
                <i class="fa-solid fa-square-check text-xl text-blue-900"></i>
              </div>
              <h4 class="font-bold text-lg text-slate-900 mb-4">{{ reason.title }}</h4>
              <p class="text-slate-500 text-sm leading-relaxed font-light">{{ reason.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section with Integrated Auto-sliding Gallery -->
    <section id="about" class="py-32 lg:py-44 bg-white border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div class="grid lg:grid-cols-12 gap-20 items-center">
          <div class="lg:col-span-6" data-aos="fade-right" data-aos-duration="1200">
            <div class="relative overflow-hidden shadow-2xl h-150 bg-slate-100 group">
              <transition name="fade" mode="out-in">
                <img
                    :key="currentAboutIndex"
                    :src="aboutImages[currentAboutIndex].src"
                    @error="$event.target.src = aboutImages[currentAboutIndex].fallback"
                    :alt="aboutImages[currentAboutIndex].alt"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                >
              </transition>
              <!-- Optional Slide Visual Indicators -->
              <div class="absolute bottom-6 left-6 flex gap-2 z-10 bg-slate-950/40 backdrop-blur-xs p-2">
                <span
                    v-for="(_, index) in aboutImages"
                    :key="index"
                    :class="['h-1.5 transition-all duration-300', currentAboutIndex === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50']"
                ></span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6" data-aos="fade-left" data-aos-duration="1200">
            <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">Your Professional Smile Designer</h2>
            <h3 class="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">Dr. Benjamin Tai</h3>

            <p class="text-xl text-slate-500 mb-12 leading-relaxed font-light max-w-2xl">
              People don't just invest in clinical alignment; they trust the practitioner behind the artistry. Dr. Tai combines meticulous biomedical detail with decades of specialized clinical training to deliver elite dental architecture.
            </p>

            <div class="grid sm:grid-cols-2 gap-6 mb-12">
              <div class="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100">
                <i class="fa-solid fa-ribbon text-blue-900 text-lg mt-0.5"></i>
                <div>
                  <h5 class="font-bold text-sm text-slate-900 mb-1">Elite Accreditation</h5>
                  <p class="text-xs text-slate-500 font-light">Award-winning Specialist Orthodontist & Doctorate Graduate</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100">
                <i class="fa-solid fa-graduation-cap text-blue-900 text-lg mt-0.5"></i>
                <div>
                  <h5 class="font-bold text-sm text-slate-900 mb-1">Academic Eminence</h5>
                  <p class="text-xs text-slate-500 font-light">Doctor of Clinical Dentistry (Orthodontics), UWA</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100">
                <i class="fa-solid fa-wand-magic-sparkles text-blue-900 text-lg mt-0.5"></i>
                <div>
                  <h5 class="font-bold text-sm text-slate-900 mb-1">Digital Mapping Master</h5>
                  <p class="text-xs text-slate-500 font-light">Advanced Digital Smile Design Expert & Innovator</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100">
                <i class="fa-solid fa-gem text-blue-900 text-lg mt-0.5"></i>
                <div>
                  <h5 class="font-bold text-sm text-slate-900 mb-1">Proven Outcomes</h5>
                  <p class="text-xs text-slate-500 font-light">Thousands of complex smiles curated across Australia</p>
                </div>
              </div>
            </div>

            <div class="pl-8 border-l-4 border-blue-900 max-w-xl">
              <p class="text-xl font-display text-slate-900 italic leading-relaxed">
                "Orthodontics is the architecture of self-esteem. We don't just reposition teeth; we design the structural foundation for your lifelong confidence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="transformations" class="py-32 lg:py-44 bg-slate-950 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="flex flex-col md:flex-row justify-between items-stretch md:items-end mb-24 gap-8">
          <div class="max-w-xl">
            <h2 class="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">Case Studies</h2>
            <h3 class="font-display text-4xl lg:text-5xl font-bold leading-tight">Changing Smiles.<br>Changing Lives.</h3>
          </div>
          <div class="flex gap-3 self-end">
            <button @click="prevTransformation" class="w-14 h-14 border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300" aria-label="Previous Case Study"><i class="fa-solid fa-arrow-left text-sm"></i></button>
            <button @click="nextTransformation" class="w-14 h-14 border border-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-950 hover:border-white transition-all duration-300" aria-label="Next Case Study"><i class="fa-solid fa-arrow-right text-sm"></i></button>
          </div>
        </div>

        <div class="relative overflow-hidden bg-slate-900 border border-slate-900 shadow-2xl">
          <transition name="fade" mode="out-in">
            <div :key="activeTransformation.id" class="grid lg:grid-cols-12 items-stretch">
              <div class="lg:col-span-6 relative h-80 sm:h-[450px] lg:h-[550px] bg-slate-800 group flex">
                <div class="w-1/2 h-full relative border-r border-slate-900 overflow-hidden">
                  <img :src="activeTransformation.beforeImg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80';" class="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-103" alt="Orthodontic clinical case alignment state before care">
                  <span class="absolute bottom-6 left-6 bg-slate-950/80 backdrop-blur-md text-slate-300 text-[10px] tracking-widest uppercase font-bold px-3 py-1.5 border border-white/10">Before</span>
                </div>
                <div class="w-1/2 h-full relative overflow-hidden">
                  <img :src="activeTransformation.afterImg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80';" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" alt="Final precision orthodontic alignment result after care">
                  <span class="absolute bottom-6 right-6 bg-blue-900 text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1.5">After</span>
                </div>
              </div>

              <div class="lg:col-span-6 p-10 sm:p-16 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-950">
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-blue-400 font-bold text-xs tracking-widest uppercase">{{ activeTransformation.treatment }}</span>
                  <span class="w-1 h-1 bg-slate-700 rounded-full"></span>
                  <span class="text-slate-400 text-xs tracking-widest uppercase">{{ activeTransformation.duration }}</span>
                </div>
                <h4 class="text-3xl sm:text-4xl font-display font-bold mb-8 text-white">{{ activeTransformation.name }}, <span class="font-light text-slate-400 text-2xl sm:text-3xl">Age {{ activeTransformation.age }}</span></h4>
                <blockquote class="text-lg sm:text-xl text-slate-300 italic mb-10 leading-relaxed font-light border-l-2 border-blue-500 pl-6">
                  "{{ activeTransformation.quote }}"
                </blockquote>
                <div>
                  <a href="#booking" class="inline-flex items-center gap-3 text-white font-bold hover:text-blue-400 transition-colors duration-300 uppercase tracking-widest text-xs group">
                    Book Similar Consultation <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section id="technology" class="py-32 lg:py-44 bg-slate-50">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center max-w-2xl mx-auto mb-24" data-aos="fade-up">
          <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">Precision & Comfort</h2>
          <h3 class="font-display text-4xl lg:text-5xl font-bold text-slate-900">Advanced 3D Smile Technology</h3>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(tech, index) in technologies" :key="index" class="bg-white p-10 border border-slate-200/60 hover:border-blue-900 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group" data-aos="fade-up" :data-aos-delay="index * 100">
            <div>
              <div class="w-14 h-14 bg-slate-50 group-hover:bg-blue-900/5 flex items-center justify-center text-blue-900 text-xl mb-8 transition-colors duration-500">
                <i :class="tech.icon"></i>
              </div>
              <h4 class="font-bold text-lg text-slate-900 mb-4">{{ tech.title }}</h4>
              <p class="text-slate-500 text-sm leading-relaxed font-light">{{ tech.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 lg:py-44 bg-white border-y border-slate-100">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center max-w-2xl mx-auto mb-24" data-aos="fade-up">
          <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">The Process</h2>
          <h3 class="font-display text-4xl font-bold text-slate-900">Your Journey to a Perfect Smile</h3>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <div class="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-200 z-0"></div>

          <div class="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            <div v-for="(step, index) in journeySteps" :key="index" class="text-center group" data-aos="fade-up" :data-aos-delay="index * 150">
              <div class="w-24 h-24 mx-auto bg-white border border-slate-200 group-hover:border-blue-900 shadow-sm transition-colors duration-500 flex items-center justify-center text-sm font-bold text-blue-900 mb-6 relative bg-linear-to-b from-white to-slate-50/50">
                0{{ index + 1 }}
              </div>
              <h4 class="font-bold text-slate-900 mb-3 text-base">{{ step.title }}</h4>
              <p class="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto font-light">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="py-32 lg:py-44 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center max-w-2xl mx-auto mb-30">
          <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">Verified Experiences</h2>
          <h3 class="font-display text-4xl font-bold text-slate-900">Patient Endorsements</h3>
        </div>

        <div class="max-w-4xl mx-auto relative px-4">
          <div class="relative h-64 sm:h-52 md:h-44 flex items-center justify-center">
            <div v-for="(testimonial, index) in testimonials" :key="index" v-show="currentIndex === index" class="text-center absolute inset-x-0 transition-all duration-700">
              <p class="text-xl sm:text-2xl font-display text-slate-800 italic leading-relaxed mb-6 max-w-3xl mx-auto">
                "{{ testimonial.quote }}"
              </p>
              <div class="flex items-center justify-center gap-3">
                <span class="font-bold text-sm text-slate-900">{{ testimonial.name }}</span>
                <span class="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span class="text-xs font-semibold text-blue-900 uppercase tracking-wider">{{ testimonial.treatment }}</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center gap-3 mt-30">
            <button v-for="(_, index) in testimonials" :key="index" @click="setSlide(index)" :class="['w-2 h-2 rounded-full transition-all duration-300 focus:outline-none', currentIndex === index ? 'bg-blue-900 w-6' : 'bg-slate-300 hover:bg-slate-400']" :aria-label="`Maps to slide ${index + 1}`"></button>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="py-32 lg:py-44 bg-white">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid lg:grid-cols-12 gap-16 items-center mb-20">
          <div class="lg:col-span-6">
            <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">Exclusivity in Practice</h2>
            <h3 class="font-display text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">The Practice Experience</h3>
          </div>
          <div class="lg:col-span-6 lg:pl-10">
            <p class="text-slate-500 font-light leading-relaxed">
              We welcome patients into premium spaces optimized for tranquility and medical clinical excellence. From digital configuration suites to curated patient comfort lounges, your journey represents upscale orthodontic care.
            </p>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="relative overflow-hidden h-80 bg-slate-100 group shadow-sm">
            <img src="/images/consultation/consul1.jpg" alt="Bright Smiles Premium Treatment and Consultation Suites" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex items-end">
              <p class="text-white font-bold text-sm uppercase tracking-widest">Consultation Area</p>
            </div>
          </div>
          <div class="relative overflow-hidden h-80 bg-slate-100 group shadow-sm">
            <img src="/images/kids_area/waiting1.png" alt="Advanced 3D Imaging and Clinical Scanning Infrastructure" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex items-end">
              <p class="text-white font-bold text-sm uppercase tracking-widest">Patient waiting room & kids area</p>
            </div>
          </div>
          <div class="relative overflow-hidden h-80 sm:col-span-2 lg:col-span-1 bg-slate-100 group shadow-sm">
            <img src="/images/reception/rec2.jpg" alt="Bright Smiles Orthodontics Architectural Lounge and Coffee Zone" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
            <div class="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex items-end">
              <p class="text-white font-bold text-sm uppercase tracking-widest">Reception Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="locations" class="py-32 lg:py-44 bg-slate-50 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center max-w-2xl mx-auto mb-24" data-aos="fade-up">
          <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">Our Clinics</h2>
          <h3 class="font-display text-4xl font-bold text-slate-900">Convenient Australian Locations</h3>
        </div>

        <div class="grid lg:grid-cols-12 gap-12 items-start">
          <div class="lg:col-span-4 flex flex-col gap-4" data-aos="fade-right">
            <button
                v-for="clinic in clinics"
                :key="clinic.id"
                @click="activeClinicId = clinic.id"
                :class="['w-full text-left p-8 border rounded-none transition-all duration-300 group', activeClinicId === clinic.id ? 'border-blue-900 bg-white shadow-xl' : 'border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300']"
            >
              <div class="flex items-center justify-between mb-3">
                <h4 class="font-display text-xl font-bold text-slate-900">
                  {{ clinic.name }}
                </h4>
                <i :class="['fa-solid fa-arrow-right text-xs transition-transform', activeClinicId === clinic.id ? 'text-blue-900 translate-x-1' : 'text-slate-400 group-hover:translate-x-1']"></i>
              </div>
              <p class="text-xs text-slate-500 leading-relaxed font-light line-clamp-2">{{ clinic.address }}</p>
            </button>
          </div>

          <div class="lg:col-span-8 bg-white p-6 sm:p-8 border border-slate-200 shadow-sm" data-aos="fade-left">
            <transition name="fade" mode="out-in">
              <div :key="activeClinic.id">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-6">
                  <div>
                    <h4 class="text-2xl font-display font-bold text-slate-900 mb-2">{{ activeClinic.name }} Clinic</h4>
                    <p class="text-sm text-slate-500 font-light">{{ activeClinic.address }}</p>
                  </div>
                  <a :href="activeClinic.directionsUrl" target="_blank" rel="noopener" class="shrink-0 bg-slate-900 hover:bg-blue-900 text-white px-6 py-4 font-bold text-xs uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 shadow-sm">
                    <i class="fa-solid fa-route text-xs"></i> Get Directions
                  </a>
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
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section id="careers" class="py-32 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div class="grid lg:grid-cols-12 gap-16 items-center" data-aos="fade-up">
          <div class="lg:col-span-6">
            <h2 class="text-xs font-bold tracking-widest uppercase text-blue-400 mb-4">Careers</h2>
            <h3 class="font-display text-4xl lg:text-5xl font-bold mb-8">Join Our Growing Team</h3>
            <p class="text-base text-slate-400 mb-10 leading-relaxed max-w-lg font-light">
              We are continually seeking passionate, meticulous dental professionals to join our practice suites. Build your long-term career with Australia's premier digital orthodontic ecosystem.
            </p>
            <div class="space-y-4 text-slate-300 font-light text-sm">
              <p class="flex items-center gap-3"><i class="fa-solid fa-check text-blue-400 text-xs"></i> World-class clinical operating space</p>
              <p class="flex items-center gap-3"><i class="fa-solid fa-check text-blue-400 text-xs"></i> Continuous precision clinical professional training</p>
              <p class="flex items-center gap-3"><i class="fa-solid fa-check text-blue-400 text-xs"></i> Cutting-edge 3D diagnostic architecture</p>
            </div>
          </div>

          <div class="lg:col-span-6 bg-slate-950 border border-slate-800 p-8 sm:p-12 text-center flex flex-col justify-center shadow-2xl">
            <i class="fa-solid fa-envelope-open-text text-4xl text-blue-400 mb-6"></i>
            <h4 class="text-2xl font-bold mb-3">Submit Your Profile</h4>
            <p class="text-sm text-slate-400 mb-8 font-light">Email your structural CV and introductory letter directly to clinical operations.</p>
            <a href="mailto:info@brightsmilesortho.com.au" class="inline-block bg-white text-slate-900 hover:bg-blue-400 hover:text-white px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md">
              info@brightsmilesortho.com.au
            </a>

            <div class="flex items-center w-full my-8 opacity-40">
              <div class="h-px bg-slate-600 flex-1"></div>
              <span class="text-slate-400 font-bold uppercase text-[10px] tracking-widest px-4 text-center">Social Communication</span>
              <div class="h-px bg-slate-600 flex-1"></div>
            </div>

            <div class="flex items-center justify-center gap-6">
              <a href="https://www.facebook.com/BrightSmilesOrtho" target="_blank" class="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f text-slate-400 group-hover:text-white text-base"></i>
              </a>
              <a href="https://www.instagram.com/brightsmilesorthodontics" target="_blank" class="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600" aria-label="Instagram">
                <i class="fa-brands fa-instagram text-slate-400 group-hover:text-white text-base"></i>
              </a>
              <a href="https://www.threads.com/@brightsmilesorthodontics" target="_blank" class="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950" aria-label="Threads">
                <i class="fa-brands fa-threads text-slate-400 group-hover:text-white text-base"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="py-32 lg:py-44 bg-slate-50">
      <div class="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="text-center mb-20">
          <h3 class="font-display text-4xl font-bold text-slate-900">Frequently Asked Questions</h3>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="bg-white border border-slate-200/60 shadow-xs">
            <button @click="toggleFaq(index)" class="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none group">
              <span class="font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-900 transition-colors duration-300">{{ faq.question }}</span>
              <i :class="['fa-solid fa-plus text-blue-900 text-xs transition-transform duration-500', activeFaq === index ? 'rotate-45 text-slate-400' : '']"></i>
            </button>
            <transition name="accordion">
              <div v-show="activeFaq === index" class="px-8 pb-6 text-sm text-slate-500 leading-relaxed font-light">
                {{ faq.answer }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section id="booking" class="py-32 lg:py-44 bg-white border-t border-slate-100">
      <div class="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="bg-slate-50 border border-slate-200/60 p-8 sm:p-16 shadow-xs">
          <div class="text-center max-w-xl mx-auto mb-16">
            <h2 class="text-xs font-bold tracking-widest uppercase text-blue-900 mb-4">Take the first step</h2>
            <h3 class="font-display text-4xl font-bold text-slate-900 mb-4">Discover Your Smile Options</h3>
            <p class="text-slate-500 text-sm font-light leading-relaxed">Submit the diagnostic data request below for a comprehensive consultation appointment at our practice suites.</p>
          </div>

          <div v-if="isBookingSubmitted" class="text-center py-16">
            <i class="fa-solid fa-circle-check text-5xl text-blue-900 mb-6"></i>
            <h3 class="text-2xl font-bold text-slate-900 mb-2">Request Catalogued</h3>
            <p class="text-sm text-slate-500 font-light mb-8">Our master treatment coordinator will communicate scheduling arrangements shortly.</p>
            <button @click="resetBooking" class="text-blue-900 font-bold hover:text-slate-900 tracking-widest text-xs uppercase border-b border-blue-900 pb-1">Submit Alternative Profile Request</button>
          </div>

          <form v-else @submit.prevent="submitBooking" class="space-y-8">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">First Name</label>
                <input v-model="formData.firstName" type="text" class="w-full px-5 py-4 border border-slate-200 focus:border-slate-400 bg-white text-sm font-light outline-none transition-colors rounded-none" required>
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Last Name</label>
                <input v-model="formData.lastName" type="text" class="w-full px-5 py-4 border border-slate-200 focus:border-slate-400 bg-white text-sm font-light outline-none transition-colors rounded-none" required>
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                <input v-model="formData.email" type="email" class="w-full px-5 py-4 border border-slate-200 focus:border-slate-400 bg-white text-sm font-light outline-none transition-colors rounded-none" required>
              </div>
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                <input v-model="formData.phone" type="tel" class="w-full px-5 py-4 border border-slate-200 focus:border-slate-400 bg-white text-sm font-light outline-none transition-colors rounded-none" required>
              </div>
            </div>
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">How can our team assist your goals?</label>
              <textarea v-model="formData.message" rows="5" class="w-full px-5 py-4 border border-slate-200 focus:border-slate-400 bg-white text-sm font-light outline-none transition-colors resize-none rounded-none"></textarea>
            </div>
            <button type="submit" class="w-full bg-slate-900 hover:bg-blue-900 text-white font-bold py-5 text-xs uppercase tracking-widest transition-colors duration-300 shadow-sm">
              Schedule Your Consultation
            </button>
          </form>
        </div>
      </div>
    </section>

    <footer class="bg-slate-950 text-slate-500 py-20 border-t border-slate-900 text-xs tracking-wide">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div class="md:col-span-5">
            <img src="/images/BrightSmiles2.png" onerror="this.onerror=null; this.src='https://placehold.co/200x60/020617/ffffff?text=Bright+Smiles';" alt="Bright Smiles Ortho Corporate Identity" class="h-7 mb-6 opacity-90 object-contain">
            <p class="max-w-sm mb-8 text-slate-400 font-light leading-relaxed">A specialist orthodontic group delivering elite patient outcomes through state-of-the-art diagnostic ecosystems and tailored architecture.</p>
            <div class="flex space-x-5">
              <a href="https://www.instagram.com/brightsmilesorthodontics" target="_blank" class="text-slate-600 hover:text-white transition-colors duration-300 text-base" aria-label="Instagram Profile Link"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/BrightSmilesOrtho" target="_blank" class="text-slate-600 hover:text-white transition-colors duration-300 text-base" aria-label="Facebook Profile Link"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.threads.com/@brightsmilesorthodontics" target="_blank" class="text-slate-600 hover:text-white transition-colors duration-300 text-base" aria-label="Threads Profile Link"><i class="fa-brands fa-threads"></i></a>
            </div>
          </div>
          <div class="md:col-span-3 md:col-start-7">
            <h4 class="text-white font-bold mb-6 tracking-widest uppercase text-[10px]">Navigation</h4>
            <ul class="space-y-4 font-medium">
              <li><a href="#about" class="hover:text-white transition-colors duration-300">Dr Ben Tai</a></li>
              <li><a href="#transformations" class="hover:text-white transition-colors duration-300">Clinical Results</a></li>
              <li><a href="#technology" class="hover:text-white transition-colors duration-300">Advanced Systems</a></li>
              <li><a href="#locations" class="hover:text-white transition-colors duration-300">Practice Locations</a></li>
              <li><a href="#careers" class="hover:text-white transition-colors duration-300">Clinical Careers</a></li>
              <li><a href="#faq" class="hover:text-white transition-colors duration-300">FAQ Information</a></li>
            </ul>
          </div>
          <div class="md:col-span-3">
            <h4 class="text-white font-bold mb-6 tracking-widest uppercase text-[10px]">Central Headquarters</h4>
            <ul class="space-y-4 font-light text-slate-400">
              <li class="flex items-start gap-3"><i class="fa-solid fa-location-dot text-blue-500 mt-0.5"></i> 22B Stirling St, Bunbury WA 6230</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-phone text-blue-500"></i> (08) 9721 6888</li>
              <li class="flex items-center gap-3"><i class="fa-solid fa-envelope text-blue-500"></i> info@brightsmilesortho.com.au</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-900 mt-16 pt-8 text-slate-600 font-light flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Bright Smiles Orthodontic Service. All rights reserved.</p>
          <div class="flex gap-6">
            <a href="#" class="hover:text-slate-400 transition-colors duration-300">Privacy Infrastructure</a>
            <a href="#" class="hover:text-slate-400 transition-colors duration-300">Terms of Service Framework</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 1. Mobile Menu State Engine
const isMobileMenuOpen = ref(false)
const toggleMenu = () => isMobileMenuOpen.value = !isMobileMenuOpen.value

// 2. Verified Corporate Stat Benchmarks
const stats = [
  { number: '20+', label: 'Years Specialized Experience' },
  { number: '3,500+', label: 'Smiles Artfully Curated' },
  { number: '4.4★', label: 'Unblemished Google Rating' },
  { number: '100%', label: 'Cohesive Digital Workflow' }
]

// 3. Clinical Philosophy Configurations
const reasons = [
  { title: 'Specialist Orthodontist', desc: 'Expertise cultivated through exhaustive post-graduate academic specialization entirely distinct from base dentistry.' },
  { title: 'Bespoke Structural Plans', desc: 'We reject generic treatments. Every configuration is structurally built for your unique anatomical symmetry.' },
  { title: 'Advanced Digital Systems', desc: 'Banish traditional physical paste configurations. We track structures via high-end 3D spatial optics.' },
  { title: 'Inconspicuous Frameworks', desc: 'From completely hidden internal appliances to pristine customized clear aligner structural pathways.' },
  { title: 'Structured Financial Paths', desc: 'Elite cosmetic health infrastructure made accessible. We arrange modular, interest-free configurations.' },
  { title: 'Intergenerational Focus', desc: 'From crucial interceptive early youth support configurations to advanced mature adult treatments.' }
]

// 4. Case Transformations Matrix Data
const transformations = ref([
  {
    id: 1,
    name: 'Emily',
    age: '17',
    treatment: 'Clear Aligners',
    duration: '18 Months',
    quote: 'I used to explicitly mask my profile alignment across media frameworks. Now, my expressive freedom has completely shifted structural dynamics.',
    beforeImg: '/images/emily-before.jpg',
    afterImg: '/images/emily-after.jpg'
  },
  {
    id: 2,
    name: 'Marcus',
    age: '28',
    treatment: 'Ceramic Braces',
    duration: '24 Months',
    quote: 'Operating within high-stakes corporate management parameters required minimal configuration visibility. Dr. Tai engineered an elite framework alignment.',
    beforeImg: '/images/marcus-before.jpg',
    afterImg: '/images/marcus-after.jpg'
  }
])
const activeTransformIndex = ref(0)
const activeTransformation = computed(() => transformations.value[activeTransformIndex.value])
const nextTransformation = () => activeTransformIndex.value = (activeTransformIndex.value + 1) % transformations.value.length
const prevTransformation = () => activeTransformIndex.value = (activeTransformIndex.value - 1 + transformations.value.length) % transformations.value.length

// About Section Autoslide State Config
const currentAboutIndex = ref(0)
let aboutAutoplayInterval = null
const aboutImages = ref([
  {
    src: '/images/DrBen/DrBen1.jpeg',
    fallback: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    alt: 'Dr. Benjamin Tai Specialist Orthodontist Portrait'
  },
  {
    src: '/images/DrBen/DrBen.png',
    fallback: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    alt: 'Dr. Benjamin Tai reviewing treatment blueprints'
  },
  {
    src: '/images/DrBen/DrBen2.png',
    fallback: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    alt: 'Premium Orthodontic Consultation Suite'
  },
  {
    src: '/images/DrBen/DrBen3.jpg',
    fallback: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    alt: 'Advanced Digital smile telemetry tracking systems'
  }
])

const startAboutAutoplay = () => {
  aboutAutoplayInterval = setInterval(() => {
    currentAboutIndex.value = (currentAboutIndex.value + 1) % aboutImages.value.length
  }, 5000) // Slide transitions occur seamlessly every 5 seconds
}

// 5. High-End Technology Infrastructures
const technologies = [
  { icon: 'fa-solid fa-laptop-medical', title: 'iTero 3D Optics Scanner', desc: 'Replaces antiquated, physically structural putties with an absolute cloud-computed geometric model.' },
  { icon: 'fa-solid fa-print', title: '3D Additive Production Lab', desc: 'In-house diagnostic printing architectures produce precision appliances, slashing deployment wait parameters.' },
  { icon: 'fa-solid fa-mobile-screen', title: 'Continuous Remote Tracking', desc: 'Remotely trace biomechanical drift states via protected patient applications, optimizing physical visits.' },
  { icon: 'fa-regular fa-face-smile', title: 'Predictive Smile Simulation', desc: 'Visualize projected outcomes and structural final metrics before active orthodontic mechanics are instantiated.' }
]

// 6. Milestone System Journey Configuration
const journeySteps = [
  { title: 'Anatomical Analysis', desc: 'Engage with Dr. Tai to review facial metrics and map dental structural goals.' },
  { title: 'High-Precision Scan', desc: 'Execute real-time optical scanning matrix computations within moments.' },
  { title: 'Architectural Blueprint', desc: 'Examine your predictive digital structural blueprint timeline roadmap.' },
  { title: 'Dynamic Correction Journey', desc: 'Instantiate corrective structures supported by constant telemetry observation.' }
]

// 7. Testimonials Array Engine
const testimonials = ref([
  { quote: "I am thrilled with the results of my dental treatment, and I owe a huge thanks to Dr. Ben. Dr. Ben was instrumental throughout the process. He guided me with expert advice, suggested questions to ask my dentist, and thoroughly explained the risks and benefits of each option. His dedication to ensuring I received the best possible treatment made the entire journey smooth, even though my case was quite complicated. I am so grateful my dentist referred me to him. Thank you, Dr. Ben, for restoring my confidence and making me feel great about my smile again!", name: "Hellen M.", treatment: "Adult Orthodontics" },
  { quote: "Thank you to Ben for the comfortable & knowledgeable experience of taking my son through the process of applying, maintaining & removal of his braces.\n" +
        "The intricate attention to detail in creating the perfect results.\n" +
        "We are very happy & shall continue the visits to keep the perfect smile 😁", name: "Ri Ri S.", treatment: "Teen Orthodontics" },
  { quote: "Dr Ben Tai is a high-standard professional, I am 3 years post braces removal and I love my smile! I always get compliments on it. I started to get some teeth shifting due to not wearing my retainers on several occasions, and Dr Tai booked me in immediately after emailing him and sorted me out.", name: "Sevasti S.", treatment: "Comprehensive Braces" }
])
const currentIndex = ref(0)
let autoplayInterval = null
const setSlide = (index) => {
  currentIndex.value = index
  resetAutoplay()
}
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  }, 7000)
}
const resetAutoplay = () => {
  clearInterval(autoplayInterval)
  startAutoplay()
}

// 8. Practice Location Registries
const activeClinicId = ref('bunbury')
const clinics = [
  {
    id: 'bunbury',
    name: 'Bunbury Suite',
    address: 'Bright Smiles Bunbury Orthodontic Centre, 22B Stirling St, Bunbury WA 6230',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Bright%20Smiles%20Bunbury%20Orthodontic%20Centre,%2022B%20Stirling%20St,%20Bunbury%20WA%206230&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bright+Smiles+Bunbury+Orthodontic+Centre,+22B+Stirling+St,+Bunbury+WA+6230'
  }
]
const activeClinic = computed(() => {
  return clinics.find(c => c.id === activeClinicId.value) || clinics[0]
})

// 9. FAQ Structure Node
const faqs = [
  { question: 'Am I too advanced in years for specialist care configuration?', answer: 'Anatomical structures can adapt effectively across any generation. Nearly 30% of our active diagnostic patients represent established adults correcting aesthetic profiles.' },
  { question: 'Will the corrective structural adjustments cause severe discomfort?', answer: 'Modern setups utilize light, sequential physical dynamic adjustments. Minor structural awareness is temporary, passing inside consecutive hours.' },
  { question: 'What timeline applies to complete orthodontic alignment?', answer: 'Chronological parameters range across 6 to 24 months based on tracking indicators. Your initial consultation configuration outlines absolute specific guidelines.' },
  { question: 'Can clear aligner software replace standard hardware matrices entirely?', answer: 'Generally, yes. Dr. Tai specializes within advanced clear aligner deployment mechanics and will select options matching your functional bite vectors.' }
]
const activeFaq = ref(null)
const toggleFaq = (index) => activeFaq.value = activeFaq.value === index ? null : index

// 10. Core Communication Form System
const isBookingSubmitted = ref(false)
const formData = reactive({ firstName: '', lastName: '', email: '', phone: '', message: '' })
const submitBooking = () => {
  setTimeout(() => isBookingSubmitted.value = true, 500)
}
const resetBooking = () => {
  Object.keys(formData).forEach(key => formData[key] = '')
  isBookingSubmitted.value = false
}

// Hooks Lifecycle Hooks
onMounted(() => {
  AOS.init({ once: true, offset: 40 })
  startAutoplay()
  startAboutAutoplay()
})
onUnmounted(() => {
  clearInterval(autoplayInterval)
  clearInterval(aboutAutoplayInterval)
})
</script>

<style scoped>
/* Typography Architecture for Ultra-Luxury Experience */
.font-display { font-family: 'Playfair Display', serif; }
.font-sans { font-family: 'Inter', sans-serif; }

/* Clean UI Animations */
.fade-enter-active, .fade-leave-active { transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Accordion Component Transition Rules */
.accordion-enter-active, .accordion-leave-active { transition: max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease; max-height: 250px; overflow: hidden; }
.accordion-enter-from, .accordion-leave-to { max-height: 0; opacity: 0; }
</style>