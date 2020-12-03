var db = firebase.firestore();

$(function() {
    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === 'page1') {
            getmovie();
            getmovie2();
            getmovie3();
        } else if (page.id === 'profile') {
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
            var img = `<img class="list-material__thumbnail" src="${user.photoURL}">`
            $("#userProfile").append(img)
            $("#userName").html(displayName)

        } else {
            window.location.href = "login.html";
        }
    });

    db.collection("carousel").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="text-center NewMovie">
                            <ons-carousel-item>
                            <img class="card-img-top carouselPoster"  src="${doc.data().img}" alt=""  id="${doc.data().id}">
                            </ons-carousel-item>
                        </div>`;
            $('#carousel').append(row);
        });
        $('.NewMovie img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })
    });




})

function getmovie() {

    var continueCarousel = document.createElement('ons-carousel');
    continueCarousel.setAttribute("swipeable", "");
    continueCarousel.setAttribute("auto-scroll", "");
    continueCarousel.setAttribute("overscrollable", "");
    continueCarousel.setAttribute("item-width", "150px");
    continueCarousel.setAttribute("id", "CarouselMovie");
    $('#continue').append(continueCarousel);

    db.collection("continue").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="continue">
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie').append(row);
        });
        $('#continue img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })


    });
}

function getmovie2() {

    var recommendCarousel = document.createElement('ons-carousel');
    recommendCarousel.setAttribute("swipeable", "");
    recommendCarousel.setAttribute("auto-scroll", "");
    recommendCarousel.setAttribute("overscrollable", "");
    recommendCarousel.setAttribute("item-width", "150px");
    recommendCarousel.setAttribute("id", "CarouselMovie2");
    $('#recommend').append(recommendCarousel);



    db.collection("recommend").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="recommend" >
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie2').append(row);
        });
        $('#recommend img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })
    });
}

function getmovie3() {

    var trendsCarousel = document.createElement('ons-carousel');
    trendsCarousel.setAttribute("swipeable", "");
    trendsCarousel.setAttribute("auto-scroll", "");
    trendsCarousel.setAttribute("overscrollable", "");
    trendsCarousel.setAttribute("item-width", "150px");
    trendsCarousel.setAttribute("id", "CarouselMovie3");
    $('#trends').append(trendsCarousel);



    db.collection("trends").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = ` <div style="width:150px;" id="trends">
                <ons-carousel-item>
                    <img src="${doc.data().img}" id="${doc.data().id}"width="100%" style="padding-right:15px" class="smallposter">
                </ons-carousel-item>
            </div>`
            $('#CarouselMovie3').append(row);
        });
        $('#trends img').click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator').pushPage('views/detailmovie.html');
        })
    });
}

function getmovieDetail(Target) {
    db.collection("movieDetail").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                const result =
                    `<div class="text-center">
                        <img class="card-img-top carouselPoster" src="${doc.data().preview}" alt="" style="padding-top: 20px;">
                    </div>
                    <div class="container">
                        <div>
                            <div style="color: #33ccff; font-size: 20px; margin-top: 10px;"><b>${doc.data().title}</b></div>
                            <div class="row" style="color: grey; font-size: 16px; margin-top: 5px;">
                            <div class="col-8">${doc.data().type}</div>                                
                            <div class="col-8">${doc.data().detail}</div>
                        </div>
                            <div style="color: white;font-size: 16px; margin-top: 5px; ">
                            ${doc.data().story}
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <button name="" id="playmovie" class="btn btn-primary playbtn" style="background-color: #33ccff;">Play Movie</button>
                        <div class="container" id="autoplay"></div>
                    </div>`
                $("#movieDetail").append(result)

                $('#playmovie').click(function() {
                    $('#autoplay').empty();
                    const movie = `<video id="my-video" class="watchvideo" controls autoplay preload="auto" width="640" height="264" data-setup="{}"> 
                    <source src="${doc.data().video}" type="video/mp4" />
                    </video>`
                    $("#autoplay").append(movie)

                    var Video = document.getElementById('my-video')
                    Video.requestFullscreen();
                })
            }
        });
    });
    db.collection("video").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `< source src = "${doc.data().video}"
            type = "video/mp4" / >`
            $("#my-video").append(row)

        });

    });


}