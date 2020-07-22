/* eslint-disable no-undef */
const DEV = 'http://localhost:9000'
const PROD = 'https://https://obscure-brushlands-37968.herokuapp.com/'
export const URL = process.env.NODE_ENV === 'development' ? DEV : PROD
