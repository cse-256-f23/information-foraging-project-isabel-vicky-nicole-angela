export function setupSticky() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the header
    let header = document.getElementById("header1");
    let header2 = document.getElementById("header2");

    // Get the offset position of the navbar
    let sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
            console.log("add sticky to 1");
        } else {
            header.classList.remove("sticky");
            console.log("remove sticky to 1");
        }

        if (window.pageYOffset > 60) {
            header2.classList.add("sticky2");
            console.log("add sticky to 2");
        } else {
            header2.classList.remove("sticky2");
            console.log("remove sticky to 2");
        }
    }
 }

