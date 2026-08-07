// ======================================
// GET ALL PAGES
// ======================================

const page1 = document.getElementById("page1");

const page2 = document.getElementById("page2");

const page3 = document.getElementById("page3");

const page4 = document.getElementById("page4");


// ======================================
// GET BUTTONS
// ======================================

const readMore =
    document.getElementById("readMore");

const yesBtn =
    document.getElementById("yesBtn");

const laterBtn =
    document.getElementById("laterBtn");

const continueBtn =
    document.getElementById("continueBtn");

const againBtn =
    document.getElementById("againBtn");


// ======================================
// CHANGE PAGE
// ======================================

function showPage(page) {

    page1.classList.remove("active");

    page2.classList.remove("active");

    page3.classList.remove("active");

    page4.classList.remove("active");

    page.classList.add("active");
}


// ======================================
// PAGE 1 → PAGE 2
// ======================================

readMore.addEventListener("click", function () {

    showPage(page2);

});


// ======================================
// PAGE 2 → PAGE 3
// YES BUTTON
// ======================================

yesBtn.addEventListener("click", function () {

    showPage(page3);

    createConfetti();

});


// ======================================
// MAYBE LATER
//
// NO ALERT
// BUTTON MOVE KAREGA
// ======================================

laterBtn.addEventListener("click", function () {

    const card =
        document.querySelector(".question-card");


    const maxX =
        card.clientWidth -
        laterBtn.offsetWidth -
        20;


    const maxY =
        card.clientHeight -
        laterBtn.offsetHeight -
        20;


    const randomX =
        Math.random() * maxX - 20;


    const randomY =
        Math.random() * maxY - 20;


    laterBtn.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

});


// ======================================
// PAGE 3 → PAGE 4
// ======================================

continueBtn.addEventListener("click", function () {

    showPage(page4);

});


// ======================================
// PAGE 4 → PAGE 1
// ======================================

againBtn.addEventListener("click", function () {

    showPage(page1);

});


// ======================================
// HEART DECORATIONS
// ======================================

const items = [

    "❤️",
    "❤️",
    "❤️",
    "❤️",
    "🤍",
    "🌸"

];


// ======================================
// CREATE HEART RAIN
// ======================================

function createDecorations(
    containerId,
    amount
) {

    const container =
        document.getElementById(containerId);


    for (let i = 0; i < amount; i++) {

        const element =
            document.createElement("div");


        element.classList.add(
            "decoration"
        );


        // Random heart / flower

        element.innerHTML =
            items[
                Math.floor(
                    Math.random() *
                    items.length
                )
            ];


        // Random horizontal position

        element.style.left =
            Math.random() * 100 + "%";


        // Always start from top

        element.style.top =
            "-60px";


        // Random size

        element.style.fontSize =
            (15 + Math.random() * 18) + "px";


        // Random falling speed

        element.style.setProperty(
            "--speed",
            (4 + Math.random() * 5) + "s"
        );


        // Random delay

        element.style.animationDelay =
            Math.random() * 5 + "s";


        container.appendChild(element);

    }
}


// ======================================
// CREATE HEART RAIN ON ALL PAGES
// ======================================

createDecorations(
    "decorations1",
    40
);

createDecorations(
    "decorations2",
    40
);

createDecorations(
    "decorations3",
    35
);

createDecorations(
    "decorations4",
    40
);


// ======================================
// CONFETTI
// ======================================

function createConfetti() {

    const container =
        document.getElementById("confetti");


    // Remove old confetti

    container.innerHTML = "";


    const colors = [

        "#ff1744",
        "#00e5ff",
        "#76ff03",
        "#ffea00",
        "#7c4dff",
        "#ff4081"

    ];


    // Create 150 pieces

    for (let i = 0; i < 150; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti"
        );


        // Random horizontal position

        piece.style.left =
            Math.random() * 100 + "%";


        // Starting position

        piece.style.top =
            (-10 - Math.random() * 30) + "%";


        // Random color

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        // Random width

        piece.style.width =
            (5 + Math.random() * 5) + "px";


        // Random height

        piece.style.height =
            (8 + Math.random() * 7) + "px";


        // Random speed

        piece.style.setProperty(
            "--fall-time",
            (2 + Math.random() * 3) + "s"
        );


        // Random delay

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(piece);

    }
}
