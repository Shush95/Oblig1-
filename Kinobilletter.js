let tickets = [];{

}
function buyTicket (){
    const movie = document.getElementById('movie').value.trim();

    const quantity =parseInt(document.getElementById('quantity').value);

    const name = document.getElementById('name').value.trim();

    const surname = document.getElementById('surname').value.trim();

    const phone = document.getElementById('phone').value.trim();

    const email = document.getElementById('email').value.trim();
   if(!movie === ""|| name === ""|| surname === ""|| phone === "" || email === ""|| isNaN(quantity) <= 0){
       alert("vennligst fyll ut feltene korrekt");
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
 document.getElementById(movie).value= " ";
    document.getElementById(quantity).value= " ";
    document.getElementById(name).value= " ";
    document.getElementById(surname).value= " ";
    document.getElementById(phone).value= " ";
    document.getElementById(email).value= " ";
}
function displayTickets() {
    const  ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = "";
    tickets.forEach(ticket => {
        const listItem = document.createElement('li');
        for (const emailElement of listItem.textContent = 'Velg film: ${ticket
