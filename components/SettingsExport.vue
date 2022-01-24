<template lang="pug">
.import-export
  h3.import-export__title Import / Export data
  p.import-export__info Export your workouts and warmups to transfer to another device

  //- Import
  //- Upload label button
  label.btn.import-export__import(role='menuitem', for='importJson') {{ importBtnText }}
  //- Hidden file input
  input#importJson(
    v-show='false',
    @change='importFn',
    type='file',
    name='importJson',
    accept='application/json, text/plain'
  )

  //- Export
  button.btn.import-export__export(v-on:click='exportFn') {{ exportBtnText }}

  //- Webshare
  client-only
    button.btn.import-export__share(
      v-if='navigatorShareEnabled',
      v-on:click='share'
    ) Share link to app
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'SettingsExport',
  data() {
    return {
      navigatorShareEnabled: false,
      exportable: {},
      importedJson: {},
      importBtnText: 'Import',
      exportBtnText: 'Export',
    }
  },

  computed: {
    ...mapState({
      warmup: (state) => state.warmup,
      workouts: (state) => state.workouts,
    }),
  },

  mounted() {
    if (process.browser) {
      if (navigator.share) {
        this.navigatorShareEnabled = true
      }
    }
  },
  methods: {
    ...mapMutations(['IMPORT_DATA']),

    // Export spike
    exportFn() {
      const blob = new Blob(
        [
          JSON.stringify({
            warmup: this.warmup,
            workouts: this.workouts,
          }),
        ],
        {
          type: 'application/json',
        }
      )
      const date = new Date()
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = `woah.monster-export_${date
        .toISOString()
        .substring(0, 10)}.json`
      link.click()
    },

    // Import spike
    importFn(e) {
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = function (event) {
        this.importedJson = JSON.parse(event.target.result)
        this.IMPORT_DATA(this.importedJson)
        this.importBtnText = 'Imported!'
      }.bind(this)

      reader.readAsText(file)
    },

    // Share
    share() {
      if (process.browser) {
        if (navigator.share) {
          navigator
            .share({
              title: this.$store.state.title,
              url: 'https://woah.monster',
            })
            .then(() => {
              console.info('Thanks for sharing!')
            })
            .catch(console.error)
        } else {
          // fallback
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.import-export {
  display: grid;
  grid-template-areas: 'title title' 'info info' 'import export' 'share share';
  grid-template-columns: 1fr 1fr;
  gap: var(--m);
  margin-bottom: var(--m);

  .btn {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  &__title {
    grid-area: title;
    margin-top: var(--m-lg);
  }

  &__info {
    grid-area: info;
    margin-bottom: var(--m);
  }

  &__export {
    grid-area: export;
  }
  &__import {
    grid-area: import;
  }
  &__share {
    margin-top: var(--m-lg);
    grid-area: share;
  }
}
</style>
