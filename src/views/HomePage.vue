<template>
  <article>
    <h2>Home page</h2>
    <p class="page-description">
      This page contains shallow information with regards to the current
      accessibility worhshop.
    </p>

    <section>
      <h3>Accessibility in a nutshell</h3>
      <p>
        Accessibility is one of the most discussed topics in modern frontend
        applications nowadays. It is defined as the practice of making websites
        usable by everyone. Although accessibility is often overlooked, it is an
        important part, if not a vital part of maintaining a successful website.
        After all, consider that a website that is accessible to a larger range
        of users will get more views than one that isn’t.
      </p>

      <img
        alt="An image representing the globe which highlights the proportion of people with disabilities similar to a pie chart"
        src="../assets/accessibility.png"
      />
    </section>

    <section>
      <h3>Accessibility course</h3>
      <h4>About the accessibility course</h4>
      <p>
        This workshop is designed to understand what accessibility is, what
        topics need to be covered within a frontend implementation and how to
        implement first-hand some of these features within Vue.js.
      </p>

      <h4>Target audience</h4>
      <p>
        Frontend developers, people interested in frontend development with a
        minimum frontend development knowledge: HTML, CSS, JavaScript, Vue.js
      </p>
    </section>
  </article>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>