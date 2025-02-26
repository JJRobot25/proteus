window.onload = function () {
    var contents = document.getElementById("content");


    // ====================== SIDE NAV ======================
    var toc = "";
    var level = 1;

    if (document.getElementById("toc")) {
        contents.innerHTML =
            contents.innerHTML.replace(
                /<h([2-6])>([^<]+)<\/h([2-6])>/gi,
                function (str, openLevel, titleText, closeLevel) {
                    if (openLevel != closeLevel) {
                        return str;
                    }
    
                    if (openLevel > level) {
                        toc += (new Array(openLevel - level + 1)).join("<ol>");
                    } else if (openLevel < level) {
                        toc += (new Array(level - openLevel + 1)).join("</ol>");
                    }
    
                    level = parseInt(openLevel);
    
                    var anchor = titleText.replace(/ /g, "-");
                    toc += "<li><a href=\"#" + anchor + "\">" + titleText
                        + "</a></li>";
    
                    return "<h" + openLevel + " id=\"" + anchor + "\">"
                        + titleText + "</h" + closeLevel + ">";
                }
            );
    
        if (level - 1) {
            toc += (new Array(level + 1)).join("</ol>");
        }
        if (toc) {
            document.getElementById("toc").innerHTML += toc;
        } else {
            document.querySelector("nav").classList.toggle("hidenav");
        }
    }

    // ====================== TABLE SIDE SCROLL ======================
    contents.innerHTML = contents.innerHTML.replaceAll(/<table.*?>[\S\s]*?<\/table>/g,
        '<div class="table-container">$&</div>'
    )
};

// ====================== TOP NAV ======================
function toggleNav() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// ====================== SCROLL BUTTON ======================
let topButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}