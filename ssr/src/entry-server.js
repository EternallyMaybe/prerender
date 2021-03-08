import { createApp } from './main';

export default (context) => {
    return new Promise((resolve, reject) => {
        const { app, store, router } = createApp();
        
        router.push(context.url);

        router.onReady(() => {
            const matcherComponents = router.getMatchedComponents();

            if (!matcherComponents.length) {
                return reject({
                    code: 404
                })
            }

            // Promise.all(matcherComponents.map((Component) => {
            //     if (Component.extendOptions.asyncData) {
            //         const result = Component.extendOptions.asyncData({
            //             store,
            //             route: router.currentRoute,
            //             options: {},
            //         })
            //     }
            // })).then(() => {
            //     context.state = store.state;
            //     resolve(app);
            // }).catch(reject)
            resolve(app);
        }, reject)
    })
}