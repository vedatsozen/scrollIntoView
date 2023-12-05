$(document).ready(function() {
    let section1 = document.getElementById("section1");
    let section2 = document.getElementById("section2");

    $(".btn1").click(function() {
        section1.scrollIntoView({ behavior: 'smooth',block:"start",duration:2000 });
    });

    $(".btn2").click(function() {
        section2.scrollIntoView({ behavior: 'smooth',block:"start",duration:2000 });
    });

    $(".btn3").click(function() {
        section3.scrollIntoView({ behavior: 'smooth',block:"start",duration:2000 });
    });

    $(".btn4").click(function() {
        section4.scrollIntoView({ behavior: 'smooth',block:"start",duration:2000 });
    });
});
