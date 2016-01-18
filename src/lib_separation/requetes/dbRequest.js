var dbRequest = {};


dbRequest.insert = function (nom, json) {

    $.ajax({
            url: "php/insert.php",
            type: "POST",
            data: {
                nom: nom,
                json: json
            },
            async: false,
            success: function (data) {
                //document.body.innerHTML = data;
                return true;
            },
            error: function() {
                alert("Impossible de stocker sur la base");
                //Menu.start();
            }
        });
}

dbRequest.get = function (key,val) {
    
    switch(key){
        case "id":
            return JSON.parse($.ajax({
                                url: "php/get.php",
                                type: "GET",
                                data: {
                                    key: key,
                                    val: val
                                },
                                async: false,
                                success: function (data) {
                                    //document.body.innerHTML = data;
                                    //console.log(data);
                                    return data;
                                },
                                error: function() {
                                    alert("Impossible d'accéder aux données");
                                    //Menu.start();
                                }
                            }).responseText).JSON;
        break;

        case "name":
            return JSON.parse($.ajax({
                                url: "php/get.php",
                                type: "GET",
                                data: {
                                    key: key,
                                    val: val
                                },
                                async: false,
                                success: function (data) {
                                    //document.body.innerHTML = data;
                                    console.log(data);
                                    return data;
                                },
                                error: function() {
                                    alert("Impossible d'accéder aux données");
                                    //Menu.start();
                                }
                            }).responseText.replace("\n",'')).ID;
        break;
    }

}

dbRequest.update = function(id,field,val){
    
     $.ajax({
            url: "php/update.php",
            type: "POST",
            data: {
                id: id,
                field: field,
                val: val
            },
            success: function (data) {
                //document.body.innerHTML = data;
                return true;
            },
            error: function() {
                alert("Impossible d'update la base");
                //Menu.start();
            }
        });
}
