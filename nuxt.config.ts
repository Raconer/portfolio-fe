import vuetifyOptions from "./vuetify.options";

// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    typescript: {
        typeCheck: false
    },
    modules: ["vuetify-nuxt-module"],
    plugins:[
        {src : "~/plugins/quill.client",
        mode: "client",
        ssr : false}
    ],
    vuetify: {
        moduleOptions: {
            /* module specific options */
        },
        vuetifyOptions,
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
})