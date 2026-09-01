document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const mobile = document.querySelector('input[placeholder="Mobile Number"]').value;
    const date = document.querySelector('input[type="date"]').value;
    const service = document.querySelector("select").value;

    const message =
        "💄 Shree Makeover - New Appointment%0A%0A" +
        "👤 Name: " + encodeURIComponent(name) + "%0A" +
        "📱 Mobile: " + encodeURIComponent(mobile) + "%0A" +
        "📅 Date: " + encodeURIComponent(date) + "%0A" +
        "💄 Service: " + encodeURIComponent(service);

    const whatsappNumber = "917977642903";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + message,
        "_blank"
    );
});