function display() {
    var divGeekHidden = document.getElementById("geekHidden");
    if (divGeekHidden.style.display === "none") {
        divGeekHidden.style.display = "block";
    } else {
        divGeekHidden.style.display = "none";

        `<h1>
        <h1 style="color:green">
            GeeksforGeeks
        </h1>
        </h1>


        `
    }
}

function visibility() {

    var divGeekVisibility = document.getElementById("geekVisibility");
    if (divGeekVisibility.style.visibility === "hidden") {
        divGeekVisibility.style.visibility = "visible";
    } else {
        divGeekVisibility.style.visibility = "hidden";
    }
}