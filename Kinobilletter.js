

function buyTicket (){
    const movie = $("#movie").val();
    const antall = $("#antall").val();
    const name = $("#name").val();
    const surname = $("#surname").val();
    const phone = $("#phone").val();
    const email = $("#email").val();

    $("#movie").removeClass(" error");
    $("#antall").removeClass(" error");
    $("#name").removeClass(" error");
    $("#surname").removeClass(" error");
    $("#phone").removeClass(" error");
    $("#email").removeClass(" error");


   if (!movie) {
       $("#film").addClass(" error");
       return;
   }
    if (!quantity) {
        $("#quantity").addClass(" error");
        return;
    }
       if (!name) {
            $("#name").addClass(" error");
       return;
    }

    if (!surname) {
        $("#surname").addClass(" error");
        return;
    }

    if (!phone) {
        $("#phone").addClass(" error");
        return;
    }
    if (!email) {
        $("#email").addClass(" error");
        return;
    }
    else {

 const ticket = {
     movie: movie,
     antall: antall,
     name: name,
     surname:surname,
     phone: phone,
     email: email,
 }

        $.post("/saveTicket", ticket, function (customer) {
            let ut = "<table class='table table-striped'>" +
                "<tr><th>Name</th>" +
                "<th>Movie</th>" +
                "<th>Quantity</th>" +
                "<th>Email</th>" +
                "<th>Phone</th></tr>";
            for (let ticket of customer) {
                ut += "<tr>" +
                    "   <td>" + ticket.name + " " + ticket.surname + "</td>" +
                    "   <td>" + ticket.movie + "</td>" +
                    "   <td>" + ticket.antall + "</td>" +
                    "   <td>" + ticket.email + "</td>" +
                    "   <td>" + ticket.phone + "</td></tr>";
            }
            ut += "</table>"

            $("#result").html(ut);
        })

        $("#movie").val("");
        $("#name").val("");
        $("#surname").val("");
        $("#phone").val("");
        $("#email").val("");
        $("#antall").val("");
    }
}

function deleteTicket() {
    $.get("/slett", function () {
        $("#result").html("");
    })
}