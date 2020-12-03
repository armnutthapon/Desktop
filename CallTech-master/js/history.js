var db = firebase.firestore();

$(function() {
    document.addEventListener('init', function(event) {
        var page = event.target;
        if (page.id == "historyPage") {
            showHistory();

        }

    });

})

function showHistory() {

    $('#showHistory').empty();

    db.collection("history").get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
            var row = `  <div id="hisID">
             <ons-card class="hisBorder"  id="${doc.data().id}">
            <div class="historyTopic">${doc.data().topic}</div>
            <div class="historyDetail">${doc.data().detail}</div>
            <div class="historyStatus" style="color: ${doc.data().statusColor};">
            <ons-icon icon="fa-wrench" class="historyIcon"></ons-icon>
            ${doc.data().status}
            </div>
            <div class="historyTech"> ช่างผู้รับผิดชอบ : <span class="historyTechName">${doc.data().Tname}</span> </div>
                </ons-card>      
            </div>
        `;
            $('#showHistory').append(row);

        });

        $("#hisID ons-card").click(function() {

            const aa = $(this).attr('id')
            getHistory(aa)
            document.querySelector('#Navigator_history').pushPage('views/showhistory.html');


        })

    });

}

function getHistory(Target) {
    var idHistory = "";
    var checkStatus = "";
    db.collection("history").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                const result =
                    `  <div id="hisID">
                <ons-card class="hisBorder"  id="${doc.data().id}">
               <div class="historyTopic">${doc.data().topic}</div>
               <div class="historyDetail">${doc.data().detail}</div>
               <div class="historyStatus" style="color: ${doc.data().statusColor};">
                   <ons-icon icon="fa-wrench" class="historyIcon"></ons-icon>
                   ${doc.data().status}
               </div>
               <div class="historyTech"> ช่างผู้รับผิดชอบ : <span class="historyTechName">${doc.data().Tname}</span> </div>
           </ons-card>      
           </div>
           <button type="button" class="btn btnContact" style="width: 80%;height: 50px;margin-top: 50px; "
           id="successHistory">ยืนยันการได้รับบริการ</button>
           `;

                $("#showHis").append(result)
                idHistory = doc.id;
                checkStatus = doc.data().status;
                console.log(checkStatus);
            }
        });

        if (checkStatus == "ได้รับการให้บริการแล้ว") {
            successHistory.setAttribute("hidden");
        }

        $('#successHistory').click(function() {
            console.log(idHistory);

            successConfirmed(idHistory);
        })
    });

}


// var successCheck = function () {
//     var dialog = document.getElementById('my-alert-dialog');
//     if (dialog) {
//         dialog.show();
//     } else {
//         ons.createElement('alert-dialog.html', { append: true })
//             .then(function (dialog) {
//                 dialog.show();
//             });
//     }
// };


const successConfirmed = (idHistory) => {

    ons.notification.alert('ทำรายการสำเร็จ!');
    showHistory();

    // document.querySelector('#Navigator_history').popPage();
    document.querySelector('#Navigator_history').popPage();


    db.collection("history").doc(idHistory).update({
        statusColor: "green",
        status: 'ได้รับการให้บริการแล้ว'

    })

};



var notnull = function() {
    var problem = document.getElementById('problem').value;
    var problemDetail = document.getElementById('problemDetail').value;
    if (problem === '' && problemDetail === '') {
        ons.notification.alert('กรุณากรอกข้อมูลให้ครบถ้วน!');
    } else if (problemDetail === '') {
        ons.notification.alert('กรุณาระบุรายละเอียดของปัญหา!');
    } else if (problem === '') {
        ons.notification.alert('กรุณาระบุปัญหา!');
    } else {

        createAlertDialog();
    }

}




var createAlertDialog = function() {
    var dialog = document.getElementById('my-alert-dialog');
    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('alert-dialog.html', { append: true })
            .then(function(dialog) {
                dialog.show();
            });
    }
};

var hideAlertDialog = function() {
    document.getElementById('my-alert-dialog').hide();

};


const notify = () => {

    showHistory();

    document.querySelector('#Navigator_home').popPage();
    document.querySelector('#Navigator_search').popPage();


    ons.notification.alert('ทำรายการสำเร็จ!');

    db.collection("history").get().then(snap => {
        db.collection("history").add({
            id: "HID" + (snap.size + 1),
            topic: document.getElementById('problem').value,
            detail: document.getElementById('problemDetail').value,
            Tname: $("#nameTech").val(),
            statusColor: "#FFAA00",
            status: "รอการดำเนินงาน"

        })
    });
};