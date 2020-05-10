var emailAndPasswordAuthProvider = function emailAndPasswordAuthProvider(firebase) {
  return {
    login: function login(_ref) {
      var username = _ref.username,
          password = _ref.password;

      return firebase.auth().signInWithEmailAndPassword(username, password).then(function (result) {
        localStorage.setItem('user', JSON.stringify(firebase.auth().currentUser));return Promise.resolve();
      }).catch(function (error) {
        return Promise.reject(error.message);
      });
    },
    logout: function logout() {
      return firebase.default.auth().signOut().then(function () {
        localStorage.removeItem('user');
        return Promise.resolve();
      }).catch(function (error) {
        return Promise.reject(error.message);
      });
    },
    checkAuth: function checkAuth() {
      if (localStorage.getItem('user')) {
        return Promise.resolve();
      }
      return Promise.reject({ redirectTo: '/login' });
    },
    // : Promise.reject()
    checkError: function checkError(error) {
      return Promise.resolve();
    },
    getPermissions: function getPermissions(params) {
      return Promise.resolve();
    }
  };
};

export { emailAndPasswordAuthProvider };
//# sourceMappingURL=index.es.js.map
