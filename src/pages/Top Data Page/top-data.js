import './top-data.css'
import React, {useState, useEffect} from 'react'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './/../../firebase-db'
import Credentials from '../../Credentials/Credentials'
import axios from 'axios'
// const express = require('express');

const CLIENT_ID = Credentials.CLIENT_ID
const REDIRECT_URI = Credentials.REDIRECT_URI
const CLIENT_SECRET = Credentials.CLIENT_SECRET
const URL = 'https://accounts.spotify.com/api/token'
const AUTH_CODE = localStorage.getItem('code')
console.log(AUTH_CODE);
// console.log(CLIENT_ID);
// console.log(REDIRECT_URI);
// console.log(CLIENT_SECRET);

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)
  }
}
console.log(CLIENT_ID + ' ' + CLIENT_SECRET)
const parameters = {
  param: {
    grant_type: 'authorization_code',
    code: AUTH_CODE,
    redirect_uri: REDIRECT_URI
  }
}

const getAccessToken = async () => {
  const res =  await axios.post(URL + parameters, config);
  // return res.data
  console.log(res.data);
}

const Song = () => {
  // const [CODE, setCODE] = useState([])
  // const addCode = () => {
  //   const code = localStorage.getItem('code');
  //   try {
  //       addDoc(collection(db, 'users'), {
  //       code: code,
  //       created: Timestamp.now()
  //     })
  //     // onClose()
  //   } catch (err) {
  //     alert(err)
  //   }
  //   return
  // }

  // window.addEventListener('load', (event) => {
  //   addCode()
  // });

  // async function readCode() {
  //   const q = query(collection(db, 'users'), orderBy('created', 'desc'))
  //   onSnapshot(q, (querySnapshot) => {
  //     setCODE(querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       data: doc.data()
  //     })))
  //   })
  // }
  // const runSomething = () => {
  //   readCode().then(
  //     function() { 
  //       console.log('This is the code')
  //       console.log(CODE[0].data.code)
  //     }
  //   )
  // }
  
  return (
    <div id='container'>
      <div id='text'>
        {/* <button onClick={ runSomething }> Read Code </button> */}
        <button onClick={ getAccessToken }> Get Access Token </button>

      </div>
    </div>
  );
};
  
export default Song;