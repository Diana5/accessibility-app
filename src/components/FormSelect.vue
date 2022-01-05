<template>
  <div :class="['form-select', { required: required }]">
    <Icon v-if="icon" class="icon" :icon="icon" />
    <label v-if="label" class="label" :id="`${fieldKey}-label`">{{
      label
    }}</label>
    <select
      :id="fieldKey"
      class="field"
      :ref="fieldKey"
      @blur="$emit('blur')"
      :aria-invalid="hasError"
      :aria-required="required"
      :aria-labelledby="`${fieldKey}-label`"
      :aria-describedby="`${fieldKey}-error`"
      @change="$emit('input', $event.target.value)"
    >
      <option v-if="defaultOption" :value="null">
        {{ defaultOption }}
      </option>
      <option v-for="option in options" :value="option.key" :key="option.key">
        {{ option.value }}
      </option>
    </select>

    <p
      v-if="vuelidateModel && !vuelidateModel.required && vuelidateModel.$dirty"
      class="error"
      :id="`${fieldKey}-error`"
    >
      {{ errors.required }}
    </p>
  </div>
</template>

<script>
import Icon from "./IconComponent.vue";

export default {
  name: "FormSelect",
  components: {
    Icon,
  },
  props: {
    options: {
      type: Array,
    },

    required: {
      type: Boolean,
      default: false,
    },

    defaultOption: {
      type: String,
      default: "--- Select ---",
    },

    hasError: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
    },
    vuelidateModel: {
      type: Object,
    },
    icon: {
      type: String,
      default: "",
    },

    fieldKey: {
      type: String,
    },

    errors: {
      type: Object,
    }
  }
};
</script>

<style scoped>
.form-select {
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
</style>
