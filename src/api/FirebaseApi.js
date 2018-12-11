import { firebaseDatabase } from '../utils/firebaseUtils';

export default class FirebaseApi {
  static getStatus = (nodePath, callback) => {
    const query = firebaseDatabase.ref('banheiros/geral-23');

    query.on('value', dataSnapshot => {
      const { ocupado } = dataSnapshot.val();

      if (typeof callback === 'function') callback(ocupado);
    });
  };

  static setStatus = (nodePath, status) => {
    firebaseDatabase.ref(nodePath).set({ ocupado: status });
  };
}
