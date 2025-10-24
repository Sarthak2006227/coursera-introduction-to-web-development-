function showProject(name) {
    alert("You clicked " + name + "!");
}

var form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var userName = document.getElementById("name").value;
    alert("Thanks for your message, " + userName + "!");
});
