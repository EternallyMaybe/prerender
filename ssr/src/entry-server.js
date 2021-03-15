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

            resolve(app);
        }, reject)
    })
}