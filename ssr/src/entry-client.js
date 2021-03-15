import { createApp } from './main';

const { app, store, router } = createApp();

router.onReady(() => {
    app.$mount('#app');
})