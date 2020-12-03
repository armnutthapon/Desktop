var db = firebase.firestore();
$(function() {
    db.collection("movieDetail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `<div class="col-4 col-md-2 areaMovie movieF center" id="${doc.data().id}">
                            <div class="user_thumbnail">
                                <img src="${doc.data().img}" alt="" class="searchPoster mt-5"> 
                            </div>
                        </div>
                `;
            $('#listMovie').append(row);
        });
        $("#listMovie .movieF").click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator_search').pushPage('views/detailmovie.html');
        })
    });
    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === 'search') {
            $("ons-carousel-item .button").click(function() {
                const category = $(this).attr('id')
                getmovieCategory(category)
            })
        }
    });
});



function Src() {
    const result = document.getElementById('Srcname').value;
    $('#listMovie').empty();
    db.collection("movieDetail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const titleMovie = doc.data().title;
            if (titleMovie.indexOf(result) != -1) {
                var row = `<div class="col-4 col-md-2 areaMovie movieSrc" id="${doc.data().id}">
                                <div class="user_thumbnail">
                                    <img src="${doc.data().img}" alt="" class="searchPoster mt-5"> 
                                </div>
                            </div>`;
                $('#listMovie').append(row);
            }
        });
        $("#listMovie .movieSrc").click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator_search').pushPage('views/detailmovie.html');
        })
    });
}

function getmovieCategory(Type) {
    $('#listMovie').empty();
    db.collection("movieDetail").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const typeMovie = doc.data().type;
            if (typeMovie === Type) {
                var row = `<div class="col-4 col-md-2 areaMovie movieCat" id="${doc.data().id}">
                                <div class="user_thumbnail">
                                    <img src="${doc.data().img}" alt="" class="searchPoster mt-5"> 
                                </div>
                            </div>`;
                $('#listMovie').append(row);
            }
        });
        $("#listMovie .movieCat").click(function() {
            const aa = $(this).attr('id')
            getmovieDetail(aa)
            document.querySelector('#myNavigator_search').pushPage('views/detailmovie.html');
        })
    });
}