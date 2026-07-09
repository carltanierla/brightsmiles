<template>
  <div class="py-10 px-10 sm:px-6 md:px-80 min-h-screen">
  <transition name="fade-slide" mode="out-in">
    <div v-if="isSuccess" class="bg-white rounded-2xl shadow-soft p-10 text-center border-t-8 border-primary">
      <div class="w-20 h-20 bg-primaryLight text-primary rounded-full flex items-center justify-center mx-auto mb-6">
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 class="text-3xl font-bold text-slate-800 mb-3">Consultation Requested!</h2>
      <p class="text-slate-600 text-lg">Thank you, {{ formData.firstName }}. Your secure details have been received.</p>
      <p class="text-slate-500 mt-2">Our team at the <strong>{{ formData.location || 'clinic' }}</strong> office will be in touch shortly.</p>
      <button @click="resetForm" class="mt-8 px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primaryDark transition-colors">
        Submit Another Request
      </button>
    </div>

    <!-- Form State -->
    <div v-else class="bg-white rounded-2xl shadow-soft overflow-hidden border-t-8 border-primary border-x border-x-gray-300">

      <!-- Header -->
      <div class="px-8 pt-10 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-bold text-slate-800 tracking-tight">Bright Smiles Orthodontics</h1>
          <p class="text-slate-500 mt-1">Patient Online Form</p>
        </div>
        <div class="hidden md:block">
          <div class="w-16 h-16 bg-primaryLight rounded-full flex items-center justify-center">
            <img src="/images/logo.png" alt="Bright smiles logo">

          </div>
        </div>
      </div>

      <form @submit.prevent="submitForm" class="p-8">

        <!-- 1. PATIENT INFORMATION -->
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span class="bg-primaryLight text-primary w-7 h-7 rounded-full flex items-center justify-center text-sm">1</span>
            Patient Information
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Patient Status (Office use only)<span class="text-red-500">*</span></label>
              <input type="text" v-model="formData.patientStatus" @blur="validate('patientStatus')"
                     :class="['v-input', { 'has-error': errors.patientStatus }]">
              <p v-if="errors.patientStatus" class="text-red-500 text-xs mt-1">{{ errors.patientStatus }}</p>
            </div>
           <div></div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">First Name (as it appears on Birth Certificate/​Driver's Licence)<span class="text-red-500">*</span></label>
              <input type="text" v-model="formData.firstName" @blur="validate('firstName')"
                     :class="['v-input', { 'has-error': errors.firstName }]" placeholder="John">
              <p v-if="errors.firstName" class="text-red-500 text-xs mt-1">{{ errors.firstName }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Last Name (as it appears on Birth Certificate/​Driver's Licence)<span class="text-red-500">*</span></label>
              <input type="text" v-model="formData.lastName" @blur="validate('lastName')"
                     :class="['v-input', { 'has-error': errors.lastName }]" placeholder="Doe">
              <p v-if="errors.lastName" class="text-red-500 text-xs mt-1">{{ errors.lastName }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Date of Birth <span class="text-red-500">*</span></label>
              <input type="date" v-model="formData.dob" @blur="validate('dob')" @change="validate('dob')"
                     :class="['v-input', { 'has-error': errors.dob }]">
              <p v-if="errors.dob" class="text-red-500 text-xs mt-1">{{ errors.dob }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Gender</label>
              <select v-model="formData.gender" class="v-input bg-white cursor-pointer">
                <option value="" disabled>Select...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
<!--                <option value="Other">Other / Prefer not to say</option>-->
              </select>
            </div>
          </div>
          <div class="mt-5">
            <label class="block text-sm font-semibold text-slate-700 mb-1">Patient is Financially Responsible for the Account</label>
            <div class="flex gap-4 mt-2">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="formData.financiallyResponsible" value="Yes" class="custom-check"> Yes
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="formData.financiallyResponsible" value="No" class="custom-check"> No
              </label>
            </div>
            <sub>*Selecting 'No' declares that the Primary Responsible Party/Legal Guardian is Responsible for the Treatment Fees.
            </sub>
          </div>
        </div>

        <!-- CONDITIONAL: PARENT/GUARDIAN -->
        <transition name="fade-slide">
          <div v-if="isMinor" class="mb-10 bg-blue-50 border border-blue-100 rounded-xl p-6 relative overflow-hidden">
            <h3 class="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              Primary Responsible Party
            </h3>

            <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <h3 class="text-sm font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              Parent / Guardian Details
              <span class="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full lowercase">Patient is under 18</span>
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1">Relationship to Patient<span class="text-red-500">*</span></label>
                <select v-model="formData.guardian_type" class="v-input bg-white cursor-pointer">
                  <option value="" disabled>Select...</option>
                  <option value="Male">git </option>
                  <option value="Female">Female</option>
                  <!--                <option value="Other">Other / Prefer not to say</option>-->
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-1">Guardian Last Name <span class="text-red-500">*</span></label>
                <input type="text" v-model="formData.guardianLastName" @blur="validate('guardianLastName')"
                       :class="['v-input bg-white', { 'has-error': errors.guardianLastName }]">
                <p v-if="errors.guardianLastName" class="text-red-500 text-xs mt-1">{{ errors.guardianLastName }}</p>
              </div>
            </div>
          </div>
        </transition>

        <!-- 2. CONTACT INFORMATION -->
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span class="bg-primaryLight text-primary w-7 h-7 rounded-full flex items-center justify-center text-sm">2</span>
            Contact Details
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Patient's Email Address <span class="text-red-500">*</span></label>
              <input type="email" v-model="formData.email" @blur="validate('email')"
                     :class="['v-input', { 'has-error': errors.email }]" placeholder="patient@example.com">
              <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Patient's Mobile Number <span class="text-red-500">*</span></label>
              <input type="tel" v-model="formData.phone" @input="formatPhone" @blur="validate('phone')"
                     :class="['v-input', { 'has-error': errors.phone }]" placeholder="(04) XXXX XXXX">
              <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Who does the patient see for their General Dental Check-ups?</label>
              <input type="text" v-model="formData.acc" class="v-input">
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Familial Status</label>
              <select v-model="formData.famStatus" class="v-input bg-white cursor-pointer">
                <option value="" disabled>Select...</option>
                <option value="2_parents">2 Parents (ie. Primary &amp; Secondary Responsible Parties details required)</option>
                <option value="single_parent">Single Parent with Sole Custody (ie. Only one Responsible Party)</option>
                <option value="parent_with_custody">Single Parent with Partial Custody (ie. Both Primary Responsible Party &amp; Secondary Responsible Party Details Required))</option>
              </select>
            </div>
          </div>
          <div class="mb-5">
            <label class="block text-sm font-semibold text-slate-700 mb-1">Primary Mailing Address <span class="text-red-500">*</span></label>
            <input type="text" v-model="formData.address" class="v-input" placeholder="Address Line 1">
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">City</label>
              <input type="text" v-model="formData.city" class="v-input" placeholder="City">
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Postal/Zip Code</label>
              <input type="text" v-model="formData.zip" class="v-input" placeholder="Postal/Zip Code">
            </div>
          </div>
        </div>

        <!-- 3. CLINIC & APPOINTMENT INFO (Previously Missing) -->
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span class="bg-primaryLight text-primary w-7 h-7 rounded-full flex items-center justify-center text-sm">3</span>
            Clinic Preferences
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Preferred Location <span class="text-red-500">*</span></label>
              <select v-model="formData.location" @blur="validate('location')"
                      :class="['v-input cursor-pointer', { 'has-error': errors.location }]">
                <option value="" disabled>Select a clinic...</option>
                <option value="Perth">Perth</option>
                <option value="Applecross">Applecross</option>
                <option value="Bunbury">Bunbury</option>
                <option value="Newman">Newman</option>
              </select>
              <p v-if="errors.location" class="text-red-500 text-xs mt-1">{{ errors.location }}</p>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">Are you an existing patient?</label>
              <div class="flex gap-4 mt-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="formData.existingPatient" value="Yes" class="custom-check"> Yes
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" v-model="formData.existingPatient" value="No" class="custom-check"> No
                </label>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">How did you hear about us?</label>
              <select v-model="formData.referral" class="v-input cursor-pointer">
                <option value="" disabled>Select option...</option>
                <option value="Google">Google Search</option>
                <option value="Social Media">Facebook / Instagram</option>
                <option value="Dentist">Referral from Dentist</option>
                <option value="Friend">Friend / Family</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-1">General Dentist Name (Optional)</label>
              <input type="text" v-model="formData.dentist" class="v-input" placeholder="Dr. Smith">
            </div>
          </div>
        </div>

        <!-- 4. ORTHODONTIC NEEDS -->
        <div class="mb-10">
          <h3 class="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <span class="bg-primaryLight text-primary w-7 h-7 rounded-full flex items-center justify-center text-sm">4</span>
            Orthodontic Needs
          </h3>

          <label class="block text-sm font-semibold text-slate-700 mb-3">What are your primary concerns? (Select all that apply)</label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <label class="check-card flex items-center gap-3 p-3 rounded-lg cursor-pointer">
              <input type="checkbox" v-model="formData.concerns" value="Crowding" class="custom-check">
              <span class="text-slate-700 font-medium text-sm">Crowding / Crooked Teeth</span>
            </label>
            <label class="check-card flex items-center gap-3 p-3 rounded-lg cursor-pointer">
              <input type="checkbox" v-model="formData.concerns" value="Spacing" class="custom-check">
              <span class="text-slate-700 font-medium text-sm">Spacing / Gaps</span>
            </label>
            <label class="check-card flex items-center gap-3 p-3 rounded-lg cursor-pointer">
              <input type="checkbox" v-model="formData.concerns" value="Overbite" class="custom-check">
              <span class="text-slate-700 font-medium text-sm">Overbite / Underbite</span>
            </label>
            <label class="check-card flex items-center gap-3 p-3 rounded-lg cursor-pointer">
              <input type="checkbox" v-model="formData.concerns" value="Consultation" class="custom-check">
              <span class="text-slate-700 font-medium text-sm">General Consultation</span>
            </label>
            <label class="check-card flex items-center gap-3 p-3 rounded-lg cursor-pointer sm:col-span-2">
              <input type="checkbox" v-model="formData.concerns" value="Invisalign" class="custom-check">
              <span class="text-slate-700 font-medium text-sm">Interested in Clear Aligners (e.g. Invisalign)</span>
            </label>
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1">Additional Comments or Questions</label>
            <textarea v-model="formData.notes" rows="4" class="v-input resize-y" placeholder="Tell us more about your smile goals..."></textarea>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
          <p class="text-xs text-slate-400">* Required fields</p>
          <button type="submit"
                  class="bg-primary hover:bg-primaryDark text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  :disabled="isSubmitting">
            <span v-if="!isSubmitting">Next</span>
            <span v-else>Submitting...</span>
            <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
          </button>
        </div>

      </form>
    </div>
  </transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch} from 'vue';
  // Form State
  const formData = reactive({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    guardianFirstName: '',
    guardianLastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    location: '',
    existingPatient: 'No', // Default
    referral: '',
    dentist: '',
    concerns: [],
    notes: ''
  });

  const errors = reactive({});
  const isSubmitting = ref(false);
  const isSuccess = ref(false);

  // Computed property for Minor logic (Under 18)
  const isMinor = computed(() => {
    if (!formData.dob) return false;

    const dobDate = new Date(formData.dob);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }

    return age < 18;
  });

  // Watch for minor status change to clear guardian errors if they become an adult
  watch(isMinor, (newVal) => {
    if (!newVal) {
      formData.guardianFirstName = '';
      formData.guardianLastName = '';
      delete errors.guardianFirstName;
      delete errors.guardianLastName;
    }
  });

  // Auto-format Phone Number (e.g., Australian 04 format or general US format)
  const formatPhone = (e) => {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    formData.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  };

  // Validation Logic
  const validate = (field) => {
    let isValid = true;

    // Rules map
    const rules = {
      firstName: { required: true, msg: 'First Name is required' },
      lastName: { required: true, msg: 'Last Name is required' },
      dob: { required: true, msg: 'Valid Date of Birth is required' },
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        msg: 'A valid email address is required'
      },
      phone: {
        required: true,
        minLength: 10, // Rough check for formatted length
        msg: 'A valid phone number is required'
      },
      location: { required: true, msg: 'Please select a preferred clinic' }
    };

    // Add dynamic rules if patient is a minor
    if (isMinor.value) {
      rules.guardianFirstName = { required: true, msg: 'Guardian First Name is required for minors' };
      rules.guardianLastName = { required: true, msg: 'Guardian Last Name is required for minors' };
    }

    // Check specific field if passed, otherwise check all
    const fieldsToCheck = field ? [field] : Object.keys(rules);

    fieldsToCheck.forEach(f => {
      const rule = rules[f];
      if (!rule) return; // Skip if no rules for this field

      delete errors[f]; // Reset error for field
      const value = formData[f];

      if (rule.required && (!value || value.toString().trim() === '')) {
        errors[f] = rule.msg;
        isValid = false;
      }
      else if (rule.pattern && !rule.pattern.test(value)) {
        errors[f] = rule.msg;
        isValid = false;
      }
      else if (rule.minLength && value.replace(/\D/g, '').length < 10) {
        errors[f] = rule.msg;
        isValid = false;
      }
    });

    return isValid;
  };

  // Form Submission
  const submitForm = () => {
    if (validate()) {
      isSubmitting.value = true;

      // Simulate API Call
      setTimeout(() => {
        isSubmitting.value = false;
        isSuccess.value = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    } else {
      // Find first error and scroll to it (rough approximation using querySelector)
      setTimeout(() => {
        const errorNode = document.querySelector('.has-error');
        if (errorNode) {
          errorNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  // Reset Form State
  const resetForm = () => {
    Object.keys(formData).forEach(key => {
      if (Array.isArray(formData[key])) {
        formData[key] = [];
      } else if (key === 'existingPatient') {
        formData[key] = 'No';
      } else {
        formData[key] = '';
      }
    });
    Object.keys(errors).forEach(key => delete errors[key]);
    isSuccess.value = false;
  };
</script>

<style scoped>
body {
  background-color: #f0f9ff; /* Very light blue */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1e293b;
}

/* Form Inputs */
.v-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  background-color: #ffffff;
  transition: all 0.2s ease;
  outline: none;
}

.v-input:focus {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
}

.v-input.has-error {
  border-color: #ef4444;
  background-color: #fef2f2;
}

.v-input.has-error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

/* Custom Checkbox & Radio */
.custom-check {
  accent-color: #0ea5e9;
  width: 1.15rem;
  height: 1.15rem;
  cursor: pointer;
}

/* Vue Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Checkbox label styling */
.check-card {
  border: 1px solid #cbd5e1;
  transition: all 0.2s;
}
.check-card:has(input:checked) {
  border-color: #0ea5e9;
  background-color: #f0f9ff;
}
</style>