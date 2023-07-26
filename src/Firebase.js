import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyD_WNeRgo-4e_mQnq1Yi9CSeVgRCrWfTJY",
    authDomain: "fir-crud-operation-158e6.firebaseapp.com",
    projectId: "fir-crud-operation-158e6",
    storageBucket: "fir-crud-operation-158e6.appspot.com",
    messagingSenderId: "887466199962",
    appId: "1:887466199962:web:f289d777836679f5f48823",
    measurementId: "G-GY1RG5TS6K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);