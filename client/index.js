function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;
  axios({
    method: "post",
    url: "http://localhost:3000/users/googleSignIn",
    headers: {
      token: id_token
    }
  })
    .then(({ data }) => {
      localStorage.setItem("token", data.token);
    })
    .catch(err => console.log(err));
}

$(document).ready(function() {
  $("#logout").click(function() {
    const auth = gapi.auth2.getAuthInstance();
    auth.signOut().then(response => {
      localStorage.clear();
    });
  });
});
