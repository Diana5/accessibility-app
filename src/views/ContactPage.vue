<template>
  <article class="">
    <h2>Contact Page</h2>
    <p class="page-description">Are you interested in learning more about accessibility?</p>
    <section>
      <h3>Get notified</h3>
      <p>
        Add your details in the below form so that you will be notified about
        the next workshop.
      </p>
      <AccessibleForm />
    </section>
  </article>
</template>

<script>
import AccessibleForm from "../components/AccessibleForm.vue";

export default {
  name: "ContactPage",

  components: {
    AccessibleForm,
  }
};
</script>

<style scoped>
</style>