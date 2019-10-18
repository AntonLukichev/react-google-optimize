import firebase from 'firebase/app';
import 'firebase/database';
import { firebaseConfig } from './config';

firebase.initializeApp(firebaseConfig);

export const experimentRef = firebase.database().ref('experiments');

export const getExperiments = async () => {
  const res = await experimentRef.once('value').then((snapshot) => snapshot.val());
  return res;
};
