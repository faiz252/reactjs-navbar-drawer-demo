import fs from 'fs';

let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });

function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}

const isLocalHost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function registerServiceWorker() {
    try {
        if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
            const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
            if (publicUrl.origin !== window.location.origin) {
                return;
            }

            window.addEventListener('load', () => {
                const serviceWorkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

                if (isLocalHost) {
                    checkServiceWorkerValidity(serviceWorkerUrl);
                    navigator.serviceWorker.ready.then(() => {
                        logToFile(
                            'This web app is being served cache-first by a service ' +
                            'worker. To learn more, visit https://goo.gl/SC7cgQ'
                        );
                    });
                } else {
                    registerValidServiceWorker(serviceWorkerUrl);
                }
            });
        }
    } catch (error) {
        logToFile('Register Service Worker Error: ' + error);
        throw error;
    }
}

function registerValidServiceWorker(serviceWorkerUrl) {
    navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then(registration => {
            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            logToFile('New content is available; please refresh.');
                        } else {
                            logToFile('Content is cached for offline use.');
                        }
                    }
                };
            };
        })
        .catch(error => {
            logToFile('Error during service worker registration: ' + error);
        });
}

function checkServiceWorkerValidity(serviceWorkerUrl) {
    fetch(serviceWorkerUrl)
        .then(response => {
            if (
                response.status === 404 ||
                response.headers.get('content-type').indexOf('javascript') === -1
            ) {
                navigator.serviceWorker.ready.then(registration => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                registerValidServiceWorker(serviceWorkerUrl);
            }
        })
        .catch(() => {
            logToFile(
                'No internet connection found. App is running in offline mode.'
            );
        });
}

export function unregisterServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        }).catch(error => {
            logToFile('Unregister Service Worker Error: ' + error);
            throw error;
        });
    }
}