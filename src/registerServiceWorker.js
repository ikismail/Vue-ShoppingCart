/* eslint-disable no-console */

import {
    register
} from 'register-service-worker'
import {
    infoToaster,
    errorToaster
} from './components/shared/service/ErrorHandler'

if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                'For more details, visit https://goo.gl/AFskqB'
            )
        },
        cached() {
            console.log('Content has been cached for offline use.')
        },
        updated() {
            console.log('New content is available; please refresh.')
            infoToaster('Please refresh', 'New content is available')
        },
        offline() {
            console.log('No internet connection found. App is running in offline mode.')
        },
        error(error) {
            console.error('Error during service worker registration:', error)
            errorToaster('Error during service worker registration', error)
        }
    })
}