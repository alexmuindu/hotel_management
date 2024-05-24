function bookRoom() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;

    // Perform validation here if necessary

    var bookingStatus = document.getElementById("bookingStatus");
    bookingStatus.innerHTML = "<p>Booking Details:</p>" + 
                                "<p>Name: " + name + "</p>" +
                                "<p>Email: " + email + "</p>" +
                                "<p>Check-in Date: " + checkin + "</p>" +
                                "<p>Check-out Date: " + checkout + "</p>" +
                                "<p>Thank you for booking!</p>";
}
