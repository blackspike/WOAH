<template lang="pug">
.accordion(role='presentation')
  .js-accordion__panel(v-for='(item, index) in items')
    h3.accordion__heading
      button.btn-plain.accordion__trigger(
        @click='toggle(index)',
        :id='`item_title_${index}`',
        :aria-controls='`item_content_${index}`',
        :aria-expanded='expanded === index',
        tabindex='0',
        :aria-selected='expanded === index'
      )
        svg.accordion__icon(
          aria-hidden,
          height='27',
          width='18',
          alt='bin',
          style='display: inline-block; vertical-align: -5px; margin-inline: var(--m-xs)'
        )
          use(v-if='expanded === index', href='#icon_minus')
          use(v-else, href='#icon_plus')
        span.accordion__title {{ item.title }}

    .accordion__content(
      v-show='expanded === index',
      :id='`item_content_${index}`',
      role='region',
      :aria-hidden='expanded === index',
      :aria-labelledby='`item_title_${index}`',
      v-html='item.content'
    )
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      expanded: 0,
    }
  },
  methods: {
    toggle(index) {
      if (this.expanded === index) {
        this.expanded = null
      } else {
        this.expanded = index
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion {
  width: 100%;
  &__heading {
    border-bottom: 1px solid var(--gray-8);
  }

  &__trigger.btn-plain {
    align-items: center;
    display: flex;
    gap: var(--m-xs);
    padding: var(--m) 0 calc(var(--m-sm) * 1.4);
    width: 100%;
  }
  &__content {
    border-bottom: 1px solid var(--gray-8);
    padding: var(--m) 0;
    width: 100%;
  }
}
</style>
