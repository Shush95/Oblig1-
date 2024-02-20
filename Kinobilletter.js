let tickets = [];
function buyTickets(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
 const movie = document.getElementById('movie').value.trim();
const quantity = parseInt(document.getElementById('quantity').value);
if (name === "" || email ==="" || movie===""|| isNaN(quantity)|| quantity<=0){
    alert ("vennligst fyll ut feltene riktig ");
    return;
}
const ticket = {
    name:name,
    email: email,
    movie:movie,
    quantity:quantity
};
ticket.push(ticket);
document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('movie').value="";
    document.getElementById('quantity').value="";
}
function displayTickets(){
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML ="";
    tickets.forEach(ticket => {
        const listItem = documen.createElement('li');
        listItem.textContent = `Navn: ${ticket.name}, E-post: ${ticket.email}, Film: ${ticket.movie}, Antall: ${ticket.quantity}`;
   ticketList.appendChild(listItem);
    });
}
function deleteAllTickets(){
    tickets= [];
    displayTickets();
}