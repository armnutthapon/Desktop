var db = firebase.firestore();

$(function() {
    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === 'profile') {
            $('#signout').click(function() {
                firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                }).catch(function(error) {
                    // An error happened.
                });
            })

        }
    });



    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var email = user.email;
            var displayName = user.displayName;
            var img = `<img class="list-material__thumbnail profilePic" src="${user.photoURL}">`
            $("#userProfile").append(img)
            $("#userName").html(displayName)

        } else {
            window.location.href = "login.html";
        }
    });

    db.collection("popular").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div id="pop">
            <ons-carousel-item>
            <ons-card id="${doc.data().id}">
                <img src="${doc.data().pic}" alt="Onsen UI" class = "picCard" >

                <div class="row">
                    <div class="col-8">
                        <div class="cardTechName">
                        ${doc.data().name} </div>
                    </div>

                    <div class="col-4 text-right">
                        <div class="cardTechName">
                            <ons-icon icon="md-star" style="color: #FFAA00;">
                            </ons-icon> ${doc.data().rate}
                        </div>
                    </div>
                </div>
                <div class="row ml-1">
                    <div class="col-5">
                        <div class="detailLocation">${doc.data().location}</div>
                    </div>

                    <div class="col-7">
                        <div class="detailCategory text-right">${doc.data().type}</div>
                    </div>
                </div>        </ons-card>
                </ons-carousel-item></div>        
        `;
            $('#popular').append(row);
        });
        $('#pop ons-card').click(function() {
            const aa = $(this).attr('id')
            getTechDetail(aa);
            const bb = $(this).attr('id')
            getTechName(bb);
            document.querySelector('#Navigator_home').pushPage('views/contact.html');
        })
    });


    db.collection("near").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div id="near">        
            <ons-carousel-item>
            <ons-card id="${doc.data().id}">
                <img src="${doc.data().pic}" alt="Onsen UI" class = "picCard" >

                <div class="row">
                    <div class="col-6">
                        <div class="cardTechName">
                        ${doc.data().name} </div>
                    </div>

                    <div class="col-6 text-right">
                        <div class="cardTechName">
                            <ons-icon icon="md-star" style="color: #FFAA00;">
                            </ons-icon> ${doc.data().rate}
                        </div>
                    </div>
                </div>
                <div class="row ml-1">
                    <div class="col-5">
                        <div class="detailLocation">${doc.data().location}</div>
                    </div>

                    <div class="col-7">
                        <div class="detailCategory text-right">${doc.data().type}</div>
                    </div>
                </div>        </ons-card>
                </ons-carousel-item>
                </div>        
        `;
            $('#near').append(row);
        });

        $('#near ons-card').click(function() {
            const aa = $(this).attr('id')
            getTechDetail(aa);
            const bb = $(this).attr('id')
            getTechName(bb);
            console.log(bb);
            document.querySelector('#Navigator_home').pushPage('views/contact.html');
        })
    });










})

function getTechDetail(Target) {
    var nameTech = "";
    db.collection("technician").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                const result =
                    `
                    <img src="${doc.data().pic}" alt="Onsen UI"  class="picT">
                <div>
                <div class="detailName">
                ${doc.data().name} </div>
                </div>

                 <div class="row mt-2">
                <div class="col-4 pl-5 detailLocal">${doc.data().location}</div>
                <div class="col-5 detailCat">${doc.data().type}</div>


                <div class="col-3 text-right">
                    <div class="detailRate" style="">
                        <ons-icon icon="md-star">
                        </ons-icon>  ${doc.data().rate}
                    </div>
                </div>
                 </div> `

                $("#Tcontact").append(result)
                nameTech = doc.data().name;

            } else {}

            $('#goContact').click(function() {
                document.querySelector('#Navigator_home').pushPage('views/createdeal.html', { data: { title: nameTech } });
            })



        });



    });

    db.collection("comment").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div>
                    <div class="row pl-2">
                         <div class="col-3"><img src="${doc.data().pic}" class="commentPic" alt=""></div>
                        <div class="col-9">${doc.data().text}</div>
                    
                     </div> 
                    <div class="commentRate">
                        <ons-icon icon="md-star">
                        </ons-icon>  ${doc.data().rate}
                    </div>
                </div>`;
            $('#showComment').append(row);
        });


    });



}