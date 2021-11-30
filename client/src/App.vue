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
      { name: 'description', content: 'Microblading by Pigmentus is a beauty academy and store with Headquarter in Puerto Rico. Best Microblading Puerto Rico Academy.'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Microblading Puerto Rico'},
      { property: 'og:site_name', content: 'Pigmentus Academy'},
      { property: 'og:url', content: 'https://pigmentus.herokuapp.com/home'},
      { property: 'og:description', content: 'Microblading by Pigmentus is a Microblading Puerto Rico Academy'},
      // { property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
      { property: 'og:type', content: 'website'},

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'Microblading by Pigmentus Academy ← Pigmentus Puerto Rico'},
      { itemprop: 'description', content: 'Microblading by Pigmentus is a beauty academy and store with Headquarter in Puerto Rico. Best Microblading in Puerto Rico.'},
    ],
    link: [
      {rel: 'canonical', href: 'https://pigmentus.herokuapp.com/home'}
    ]

  },

}
</script>