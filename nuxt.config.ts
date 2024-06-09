import vuetifyOptions from "./vuetify.options";

export default defineNuxtConfig({
    devtools: {enabled: true},
    typescript: {
        typeCheck: false
    },
    modules: ["vuetify-nuxt-module"],
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
})