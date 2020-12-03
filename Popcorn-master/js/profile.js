$(function() {

    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id === 'profile') {
            page.querySelector('#editprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/editprofile.html');
            };
            page.querySelector('#packageprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/package.html');
            };
            page.querySelector('#settingprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/setting.html');
            };
            page.querySelector('#helpprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/help.html');
            };
            page.querySelector('#reportprofile').onclick = function() {
                document.querySelector('#Navigator_profile').pushPage('views/profile/report.html');
            };
        } else if (page.id === "packagePage") {
            checkPackage()
        }

    });

})

function checkPackage() {
    $("#btnPackage input").click(function() {
        if ($(this).attr("checked", true)) {
            if ($(this).attr('id') == "packWeek") {
                $(".Week").css("color", "#00FF0B")
                $('.Week-close').css("color", "#ff0000")
                $(".Stan , .Deluxe , .Premium , .Premium-close , .Stan-close , .Deluxe-close").css("color", "#fff")
                $("#packageDetail").html("WEEK")
                $("#price").html("39 Baht")
                $("#days").html("7 Days")
            } else if ($(this).attr('id') == "packStan") {
                $(".Stan").css("color", "#00FF0B")
                $('.Stan-close').css("color", "#ff0000")
                $(".Week , .Deluxe , .Premium, .Week-close , .Premium-close , .Deluxe-close").css("color", "#fff")
                $("#packageDetail").html("STANDARD")
                $("#price").html("89 Baht")
                $("#days").html("30 Days")
            } else if ($(this).attr('id') == "packDeluxe") {
                $(".Deluxe").css("color", "#00FF0B")
                $('.Deluxe-close').css("color", "#ff0000")
                $(".Stan , .Week , .Premium , .Week-close , .Premium-close , .Stan-close").css("color", "#fff")
                $("#packageDetail").html("DELUXE")
                $("#price").html("139 Baht")
                $("#days").html("30 Days")
            } else if ($(this).attr('id') == "packPremium") {
                $(".Premium").css("color", "#00FF0B")
                $('.Premium-close').css("color", "#ff0000")
                $(".Stan , .Deluxe , .Week , .Week-close , .Stan-close , .Deluxe-close").css("color", "#fff")
                $("#packageDetail").html("PREMIUM")
                $("#price").html("189 Baht")
                $("#days").html("30 Days")
            }
        }
    })

}