<template>
  <focus-trap v-model="isVisible" v-if="isVisible">
    <div>
      <div
        ref="dialog"
        class="dialog"
        role="dialog"
        aria-labelledby="dialog-title"
        @keydown.esc="onClose"
      >
        <div class="dialog-header">
          <h3 id="dialog-title">Are you sure you want to leave?</h3>
          <button
            type="button"
            aria-label="Close dialog"
            @click="onClose"
            class="close-dialog"
          >
            <Icon icon="times" />
          </button>
        </div>
        <div class="dialog-content">
          <p>All you changes will be discarded!</p>
        </div>
        <div class="dialog-footer">
          <button type="submit" @click="onDiscard">Yes</button>
          <button type="button" @click="onClose">No</button>
        </div>
      </div>
      <div class="dialog-overlay" tabindex="-1"></div>
    </div>
  </focus-trap>
</template>

<script>
import Vue from "vue";
import { FocusTrap } from "focus-trap-vue";

Vue.component("FocusTrap", FocusTrap);

import Icon from "@/components/IconComponent.vue";

export default {
  components: {
    Icon,
  },

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Dialog title",
    }
  },

  updated () {
    this.$refs?.dialog?.querySelector('.close-dialog').focus();
  },

  computed: {
    isVisible: {
      get: function () {
        return this.show;
      },
      set: function () {},
    },
  },

  methods: {
    onClose() {
      this.$emit("close");
    },

    onDiscard() {
      this.$emit("discard");
      this.onClose();
    }
  }
};
</script>

<style scoped>
.dialog-overlay {
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.dialog {
  z-index: 3;
  background-color: #fff;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.dialog-header {
  display: flex;
  align-items: center;
}

.dialog-header h3 {
  flex: 1;
  margin: 0;
}

.dialog-content {
  padding: 20px 0;
}

.dialog-footer {
  display: flex;
  justify-content: space-between;
}

.dialog-footer button {
  padding: 10px;
  background: none;
  border: none;
  font-size: 1em;
  color: #003b49;
  border-radius: 3px;
  font-weight: 600;
  border: 1px solid #003b49;
}

.dialog-footer button[type="submit"] {
  color: #fff;
  background-color: #003b49;
}

.dialog-overlay[aria-hidden="true"],
.dialog[aria-hidden="true"] {
  display: none;
}

.dialog-overlay:not([aria-hidden="true"]),
.dialog:not([aria-hidden="true"]) {
  display: block;
}

.close-dialog {
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
}
</style>
