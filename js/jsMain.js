var buttonprod = document.getElementById("prodcutosbtn");
var buttonabout = document.getElementById("aboutbtn");
var buttoncontact = document.getElementById("contactobtn");

buttonprod.addEventListener('click', function (event) {
    event.preventDefault();
    var section1 = document.getElementById("featured-products");
    section1.scrollIntoView({ behavior: 'smooth' });
});

buttonabout.addEventListener('click', function(event) {
    event.preventDefault();
    var section2 = document.getElementById("about");
    section2.scrollIntoView({ behavior: 'smooth' });
});

buttoncontact.addEventListener('click', function (event) {
    event.preventDefault();
    var section3 = document.getElementById("contactanos");
    section3.scrollIntoView({ behavior: 'smooth' });
});