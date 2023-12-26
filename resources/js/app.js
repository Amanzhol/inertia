import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

import NProgress from 'nprogress'
import { router } from '@inertiajs/vue3'
import Layout from "@/Shared/Layout.vue";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
        resolve: async (name) => {
            const page = await resolvePageComponent(
                `./Pages/${name}.vue`,
                     import.meta.glob("./Pages/**/*.vue")
            )

            page.default.layout = page.default.layout || Layout

            return page
        },
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el);
    },
    progress: false,
});


let timeout = null

router.on('start', () => {
    timeout = setTimeout(() => NProgress.start(), 250)
})

router.on('progress', (event) => {
    if (NProgress.isStarted() && event.detail.progress.percentage) {
        NProgress.set((event.detail.progress.percentage / 100) * 0.9)
    }
})

router.on('finish', (event) => {
    clearTimeout(timeout)
    if (!NProgress.isStarted()) {
        return
    } else if (event.detail.visit.completed) {
        NProgress.done()
    } else if (event.detail.visit.interrupted) {
        NProgress.set(0)
    } else if (event.detail.visit.cancelled) {
        NProgress.done()
        NProgress.remove()
    }
})
