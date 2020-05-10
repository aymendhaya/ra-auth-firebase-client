
export const emailAndPasswordAuthProvider = (firebase) => {
  return {
    login: ({ username, password }) => {
      return firebase.auth().signInWithEmailAndPassword(username, password)
        .then(result => { localStorage.setItem('user', JSON.stringify(firebase.auth().currentUser)); return Promise.resolve() })
        .catch(function(error) {
          return Promise.reject(error.message) 
        })
    },
    logout: () => {
      return firebase.default.auth().signOut().then(function() {
        localStorage.removeItem('user')
        return Promise.resolve()
      }).catch(function(error) {
        return Promise.reject(error.message) 
      })
    },
    checkAuth: () => {
      if (localStorage.getItem('user')) { return Promise.resolve() }
      return Promise.reject({ redirectTo: '/login' })
    },
    // : Promise.reject()
    checkError: error => Promise.resolve(),
    getPermissions: params => Promise.resolve()
  }
}
