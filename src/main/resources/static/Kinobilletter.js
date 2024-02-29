let tickets = [];

function buyTicket (){
    const movie = document.getElementById('movie').value.trim();

    const quantity=parseInt(document.getElementById('quantity').value);

    const name = document.getElementById('name').value.trim();

    const surname = document.getElementById('surname').value.trim();

    const phone = document.getElementById('phone').value.trim();

    const email = document.getElementById('email').value.trim();
   if (movie===" ") {
       alert(" Vennligst velg en av valgene ");
       return;
   }
   if (name === ""){
       alert ("Vennligst fyll ut dette feltet");
       return;
    }
    if(surname === ""){
        alert ("Vennligst fyll ut feltet for å gå videre");
        return;
    }
    if (phone === ""){
        alert("Vennligst oppgi et gyldig nummer");
        return;
    }
    if (email === ""){
        alert ("Feltet må fyllest ut riktig for å gå videre");
        return;
    }
    if(isNaN(quantity) <= 0){
       alert("Du må oppgi større antall enn 0");
       return;
   }

 const ticket = {
     movie: movie,
     quantity: quantity,
     name: name,
     surname:surname,
     phone: phone,
     email: email
 };
 tickets.push(ticket);
 displayTickets();
 document.getElementById(movie).value= "";
    document.getElementById(quantity).value= "";
    document.getElementById(name).value= "";
    document.getElementById(surname).value= "";
    document.getElementById(phone).value= "";
    document.getElementById(email).value= "";
}
function displayTickets() {
    const  ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = "";
    tickets.forEach( ticket=> {
        const listItem =document.createElement('li');
        listItem.textContent = 'Velg film: ${ticket.movie}, Antall: ${ticket.quantity}, Navn:${ticket.name}, Etternavn:${ticket.surname}, Telefonnr: ${ticket.phone}, Epost: ${ticket.email}';
ticketList.appendChild(listItem);
    });
}
function deleteAllTickets(){
    tickets = [];
    displayTickets();
}