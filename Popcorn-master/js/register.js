$(function() {
    $("#signUp").click(function() {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const name = document.getElementById('name').value
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            ons.notification.alert(errorMessage)
        });
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var user = firebase.auth().currentUser
                user.updateProfile({
                    displayName: name,
                    photoURL: "../images/Profile.png"

                }).then(function() {
                    window.location.href = "popcorn.html";
                }).catch(function(error) {
                    // An error happened.
                });
            } else {

            }
        });

    })
})