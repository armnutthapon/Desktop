function getTechName(Target) {
    db.collection("technician").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (doc.data().id == Target) {
                const result =
                    `<input type="text" id="Tname" class="form-control inputBorder mt-5" name="" value="${doc.data().name}" readonly
                aria-describedby="helpId" style="height: 60px;" required="required">`
                $("#NameContact").append(result)
            }
        });
    });
}


