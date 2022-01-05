<template>
  <div :class="['form-input', { required: required }]">
    <Icon v-if="icon" class="icon" :icon="icon" />
    <label v-if="label" :for="fieldKey" class="label" :id="`${fieldKey}-label`">
      {{ label }}
    </label>

    <input
      :ref="fieldKey"
      class="field"
      v-bind="$attrs"
      @blur="$emit('blur')"
      @input="
        $emit('update', $event.target.value);
        $emit('input', $event.target.value);
      "
      :id="fieldKey"
      :aria-label="label"
      :placeholder="inputPlaceholder"
      :aria-invalid="hasError"
      :aria-required="required"
      :aria-labelledby="`${fieldKey}-label`"
      :aria-describedby="`${fieldKey}-error ${fieldKey}-additional`"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
    />

    <p v-if="additionalInfo" :id="`${fieldKey}-additional`">
      {{ additionalInfo }}
    </p>

    <p
      v-if="vuelidateModel && !vuelidateModel.required && vuelidateModel.$dirty"
      class="error"
      :id="`${fieldKey}-error`"
    >
      {{ errors.required }}
    </p>

    <p
      v-if="vuelidateModel && !vuelidateModel.email && vuelidateModel.$dirty"
      class="error"
      :id="`${fieldKey}-error`"
    >
      {{ errors.email }}
    </p>

    <p
      v-if="vuelidateModel && !vuelidateModel.numeric && vuelidateModel.$dirty"
      class="error"
      :id="`${fieldKey}-error`"
    >
      {{ errors.numeric }}
    </p>
  </div>
</template>

<script>
import Icon from "./IconComponent.vue";

export default {
  name: "FormInput",

  components: {
    Icon,
  },

  props: {
    label: {
      type: String,
    },

    additionalInfo: {
      type: String,
    },

    icon: {
      type: String,
    },

    errors: {
      type: Object,
    },

    required: {
      type: Boolean,
      default: false,
    },

    vuelidateModel: {
      type: Object,
    },

    hasError: {
      type: Boolean,
      default: false,
    },

    inputPlaceholder: {
      type: String,
      default: "Input value",
    },

    fieldKey: {
      type: String,
    },
  },
};
</script>

<style scoped>
.form-input {
  margin-bottom: 20px;
}

.field {
  padding: 10px;
  border-radius: 4px;
  display: flex;
  width: 50%;
  margin-top: 5px;
}

.label {
  margin-right: 20px;
}

.icon {
  margin-right: 10px;
}

.error {
  color: #d3273e;
  font-weight: 600;
}

.required:before {
  content: "* ";
  color: #d3273e;
  font-weight: 900;
}

::placeholder {
  color: #003b49;
}
</style>
