<template>
      <router-view/>
</template>

<script>
export default {
  name: 'App',
  data: () => ({

  }),

  metaInfo: {
    title: 'Microblading by Pigmentus Academy',
    titleTemplate: '%s | Pigmentus Puerto Rico',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Microblading by Pigmentus is a beauty academy and store with Headquarter in Puerto Rico. Best Microblading in Puerto Rico.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]

  },
}
</script>