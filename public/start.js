function login(req, res) {
    var email = $("#email").val();
    var password = $("#password").val();

    var params = {
        email: email,
        password: password
    };

    $.post("/login", params, function(result) {
        if (result && result.success) {
            res.location('soak-start.html');
        } else {
            $("#status").text("Error logging in.");
        }
    });
}

function showOptions() {
    console.log("Getting Options");

    $.get("/getGoals", (req, res) => {
        console.log(data);

        for (var i = 0; i < data.list.length; i++) {
            var goal = data.list[i];

            $("#sel1").append("<option>" + goal.goal + "</option>");
        }

    });
}