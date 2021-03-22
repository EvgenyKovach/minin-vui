/* eslint-disable */ 
import firebase from 'firebase/app'

export default {
    actions: {
        async login({dispatch, comit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                throw e
            }

        }
    }
}