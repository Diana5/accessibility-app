<template>
  <div class="main-content">
    <form @submit.prevent="submit" novalidate>
      <FormInput
        v-model="firstName"
        fieldKey="firstName"
        label="First name"
        ref="firstName"
        icon="user"
        @blur="$v.firstName.$touch()"
        inputPlaceholder="Please input your first name"
        :required="true"
        :vuelidateModel="$v.firstName"
        :hasError="$v.firstName.$error"
        :errors="errorMessages.firstName"
      />

      <FormInput
        v-model="lastName"
        fieldKey="lastName"
        label="Last name"
        ref="lastName"
        icon="user"
        @blur="$v.lastName.$touch()"
        inputPlaceholder="Please input your last name"
        :required="true"
        :vuelidateModel="$v.lastName"
        :hasError="$v.lastName.$error"
        :errors="errorMessages.lastName"
      />

      <FormInput
        v-model="email"
        fieldKey="email"
        label="Email"
        ref="email"
        icon="envelope"
        @blur="$v.email.$touch()"
        inputPlaceholder="Please input your email address"
        :required="true"
        :vuelidateModel="$v.email"
        :hasError="$v.email.$error"
        :errors="errorMessages.email"
      />

      <FormInput
        v-model="phone"
        fieldKey="phone"
        label="Phone number"
        ref="phone"
        @blur="$v.phone.$touch()"
        icon="phone"
        additionalInfo="Phone number must contain only numbers"
        :vuelidateModel="$v.phone"
        inputPlaceholder="Please input your phone number"
        :hasError="$v.phone.$error"
        :errors="errorMessages.phone"
      />

      <FormSelect
        v-model="country"
        fieldKey="country"
        label="Delivery Unit"
        ref="country"
        icon="flag"
        @blur="$v.country.$touch()"
        :required="true"
        :vuelidateModel="$v.country"
        :hasError="$v.country.$error"
        :errors="errorMessages.country"
        :options="countries"
        :defaultOption="defaultOption"
      />

      <div class="form-footer">
        <button type="button" @click="onCancel">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>

    <ModalComponent
      :show="showModal"
      @close="onClose"
      @discard="discardChanges"
    />
  </div>
</template>

<script>
import FormInput from "@/components/FormInput.vue";
import FormSelect from "@/components/FormSelect.vue";
import ModalComponent from "@/components/ModalComponent.vue";

import { required, email, numeric } from "vuelidate/lib/validators";

export default {
  name: "AccessibleForm",

  components: {
    FormInput,
    FormSelect,
    ModalComponent,
  },

  data() {
    return {
      showModal: false,
      focusedElBeforeOpen: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      errorMessages: {
        firstName: {
          required:
            "This is a required field. You must complete it in order to continue",
        },
        lastName: {
          required:
            "This is a required field. You must complete it in order to continue",
        },
        email: {
          required:
            "This is a required field. You must complete it in order to continue",
          email: "Please provide a valid email address",
        },
        phone: {
          numeric: "Please provide a valid phone number",
        },
        country: {
          required:
            "This is a required field. You must complete it in order to continue",
        },
      },
      defaultOption: " Choose your Delivery Unit ",
      countries: [
        {
          key: 0,
          value: "Romania",
        },
        {
          key: 1,
          value: "Moldova",
        },
        {
          key: 2,
          value: "Serbia",
        },
      ],
    };
  },

  validations: {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    phone: { numeric },
    country: { required },
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        // 1. Loop the keys
        for (let key in Object.keys(this.$v)) {
          // 2. Extract the input
          const input = Object.keys(this.$v)[key];
          // 3. Remove special properties
          if (input.includes("$")) return false;
          // 4. Check for errors
          if (this.$v[input].$error) {
            // 5. Focus the input with the error
            this.$refs[input].$refs[input].focus();

            // 6. Break out of the loop
            break;
          }
        }
      } else {
        // Submit the form here
        this.$notify({
          type: 'success',
          title: 'Registered!',
          text: 'Thank you! You will get notified about the next workshop.'
        });
      }
    },

    onCancel() {
      this.focusedElBeforeOpen = document.activeElement;
      this.showModal = true;
    },

    onClose() {
      this.showModal = false;
      this.focusedElBeforeOpen?.focus();
    },

    discardChanges() {
      this.firstName = "";
      this.lastName = "";
      this.country = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>

<style scoped>
form {
  border: 1px solid #003b49;
  border-radius: 5px;
  padding: 20px;
  color: #003b49;
}

.form-footer {
  display: flex;
  justify-content: space-between;
}

/* div[type="button"], */
.form-footer button {
  padding: 10px;
  background: none;
  border: none;
  font-size: 1em;
  color: #003b49;
  border-radius: 3px;
  font-weight: 600;
  border: 1px solid #003b49;
}

button[type="submit"] {
  color: #fff;
  background-color: #003b49;
}
</style>
