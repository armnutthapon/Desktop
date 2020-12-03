$(function () {

    document.addEventListener('init', function (event) {
        var page = event.target;
        if (page.id === "createdeal") {
            const nameTech = page.data.title;
            const result =
                `<input type="text" id="nameTech" class="form-control inputBorder mt-5" name="" value="${nameTech}" readonly
            aria-describedby="helpId" style="height: 60px;" required="required">`;
            $("#showName").append(result)
        } else if (page.id === "profile") {

            $('#changeLanguage').click(function () {
                document.querySelector('#Navigator_profile').pushPage('views/profile_language.html');
            })

            $('#privacy').click(function () {
                document.querySelector('#Navigator_profile').pushPage('views/profile_privacy.html');
            })

            $('#service').click(function () {
                document.querySelector('#Navigator_profile').pushPage('views/profile_service.html');
            })


            $('#setting').click(function () {
                document.querySelector('#Navigator_profile').pushPage('views/profile_setting.html');
            })
        } else if (page.id === "successhistory") {

            const idHistory = page.data.title;
           console.log(idHistory);

           
        }

    });


})