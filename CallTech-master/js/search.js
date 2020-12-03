var db = firebase.firestore();
$(function() {
    db.collection("technician").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            var row = `
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
                </ons-carousel-item>
        `;
            $('#listTech').append(row);
        });
        $("#listTech ons-card").click(function() {
            const aa = $(this).attr('id')
            getTechDetail2(aa)
            document.querySelector('#Navigator_search').pushPage('views/contact.html');

        })
    });
    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === 'search') {
            $("ons-carousel-item .button").click(function() {
                const category = $(this).attr('id')
                getTechType(category)
            })
        }
    });
});



function Src() {
    const result = document.getElementById('Srcname').value;
    $('#listTech').empty();
    db.collection("technician").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const TechName = doc.data().name;
            if (TechName.indexOf(result) != -1) {
                var row = ` <ons-carousel-item>
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
                    </ons-carousel-item>
            `;
                $('#listTech').append(row);
            }
        });
        $("#listTech ons-card").click(function() {
            const aa = $(this).attr('id')
            getTechDetail2(aa)
            document.querySelector('#Navigator_search').pushPage('views/contact.html');


        })
    });
}

function getTechType(Type) {
    $('#listTech').empty();
    db.collection("technician").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const typeTech = doc.data().type;
            if (typeTech === Type) {
                var row = ` <ons-carousel-item>
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
                    </ons-carousel-item>
            `;
                $('#listTech').append(row);
            }
        });
        $("#listTech ons-card").click(function() {
            const aa = $(this).attr('id')
            getTechDetail2(aa)
            document.querySelector('#Navigator_search').pushPage('views/contact.html');
        })
    });
}


function getTechDetail2(Target) {
    db.collection("technician").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                const result =
                    `                    <img src="${doc.data().pic}" alt="Onsen UI"  class="picT">

            <div>
                <div class="detailName">
                ${doc.data().name} </div>
            </div>

            <div class="row mt-2">
                <div class="col-4 pl-5 detailLocal">${doc.data().location}</div>
                <div class="col-5 detailCat">${doc.data().type}</div>


                <div class="col-3 text-right">
                    <div class="detailRate" style="color: #FFAA00;">
                        <ons-icon icon="md-star" style="color: #FFAA00;">
                        </ons-icon>  ${doc.data().rate}
                    </div>
                </div>
            </div> `

                $("#Tcontact").append(result)
                nameTech = doc.data().name;

            } else {
                $('#goContact').click(function() {

                    document.querySelector('#Navigator_search').pushPage('views/createdeal.html', { data: { title: nameTech } });


                })
            }
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