<template>
  <article>
    <h2>About page</h2>
    <p class="page-description">
      This page provides details of what you'll be learning in this course.
    </p>

    <section>
      <h3><Icon icon="landmark" /> Introduction</h3>
      <p>
        Accessibility for frontend applications course will start with defining
        accessibility, followed by a little history about how accessibility was
        born.
      </p>
    </section>

    <section>
      <h3><Icon icon="wheelchair" /> Why considering accessibility?</h3>
      <p>
        This section is meant to give you an overview of the problems people
        with disabilities face online, as well as how the lack of accessibility
        could harm a business.
      </p>
    </section>

    <section>
      <h3>
        <Icon icon="question-circle" /> How can we make a frontend application
        accessible?
      </h3>
      <p>
        Here we will tackle aspects like principles and standards imposed by
        WCAG to make applications accessible. W3C documentation being so
        complex, it is structured based on their principles and standards.
        Because of this, you need first to learn what they are, so you could
        easily follow the documentation. In the end we will provide a list with
        standards everyone aiming for an accessible application should follow,
        as well as the aspects that will be covered in the workshop part.
      </p>
    </section>

    <section>
      <h3><Icon icon="laptop-code" /> Good and bad practices</h3>
      <p>
        There are, of course, good and bad practices when comes to
        accessibility. We will cover them in this section. We will then talk
        about tools that help us inspect accessibility aspects and we will use
        them to either audit or inspect known websites.
      </p>
    </section>

    <section>
      <h3><Icon icon="code" /> Workshop</h3>
      <p>
        Using a small Vue.JS application we will apply some of the accessibility
        aspects covered in previous sections.
      </p>
    </section>

    <section>
      <h3><Icon icon="exclamation" /> Conclusions</h3>
      <p>
        We will end this course with some conclusions based on topics we covered
        during the presentation.
      </p>
    </section>

    <section>
      <h3>Start planning your next accessible application</h3>
      <a
        href="https://www.w3.org/WAI/planning-and-managing/"
        aria-label="Start planning your next accessibile application by visiting the official W3C documentation about planning and managing you next accessibile website"
      >
        <div class="visual">
          <img src="../assets/thinking.jpg" />
          <p class="visual-description">Start planning</p>
        </div>
        <div class="content">
          <h4>Don't know where to start?</h4>
          <p class="content-description">
            Check this if you are looking to make your application accessible
            but you do not know where to start.
          </p>
        </div>
      </a>
    </section>
  </article>
</template>

<script>
import Icon from "@/components/IconComponent.vue";

export default {
  name: "AboutPage",

  components: {
    Icon,
  },
};
</script>

<style scoped>
/* #a5ddf8 */

a {
  background: #fff;
  border-radius: 5px;
  display: block;
  margin: 0 0 1.66667em;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.2s linear;
  text-decoration: none;
  border: 1px solid #94a596;
}

.visual {
  overflow: hidden;
  padding-top: 55%;
  position: relative;
}

.content {
  position: relative;
  padding: 20px;
  color: #003b49;
}

.visual-description {
  color: #fff;
  background: #003b49;
  border-top-right-radius: 2.25em;
  bottom: 0;
  padding: 0.75em;
  position: absolute;
}

.content-description {
  margin-bottom: 0;
  line-height: 1.75em;
}

/* .icon-container {
  color: #d0d3d4;
} */

h4 {
  margin-bottom: 20px;
}

img {
  height: 100%;
  position: absolute;
  left: 50%;
  top: 5px;
  transform: translateX(-50%);
}
</style>
