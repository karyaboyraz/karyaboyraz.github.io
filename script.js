var cards = [{
        id: 1,
        img: "https://picsum.photos/id/232/400/400"
    },
    {
        id: 2,
        img: "https://picsum.photos/id/233/400/400"
    },
    {
        id: 3,
        img: "https://picsum.photos/id/234/400/400"
    },
    {
        id: 4,
        img: "https://picsum.photos/id/235/400/400"
    },
    {
        id: 5,
        img: "https://picsum.photos/id/236/400/400"
    },
    {
        id: 6,
        img: "https://picsum.photos/id/237/400/400"
    },
]

var counter = 0
var firstDivCard
var firstImgCard
var secondDivCard
var secondImgCard
var fcc
var scc
var score = 0
var move = 10


function replaceRandomCard() {
    var location = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    var checklist = location
    for (let i = 0; i < 7; i++) {
        const random = location[Math.floor(Math.random() * location.length)];
        location = location.filter(function (item) {
            return item !== random
        })

        const random2 = location[Math.floor(Math.random() * location.length)];
        location = location.filter(function (item) {
            return item !== random2
        })

        var card_template = `<img src=" ` + cards[i].img + ` "class="` + i + ` ">`
        var idLocation = 'img-' + random
        document.getElementById(idLocation).innerHTML = card_template

        var idLocation = 'img-' + random2
        document.getElementById(idLocation).innerHTML = card_template
    }

}

function selectCard1(a) {
    let imgId = "#img-" + a
    let divId = "#block-" + a
    let check = $(divId).hasClass("d-none")

    if (counter == 0) {
        firstDivCard = divId
        firstImgCard = imgId
        fcc = $(firstImgCard).children().attr("class")

    }

    if (counter == 1) {
        secondDivCard = divId
        secondImgCard = imgId
        scc = $(secondImgCard).children().attr("class")
    }

    if (check == false) {
        $(imgId).removeClass("d-none")
        $(divId).addClass("d-none")
        counter = counter + 1
    }

    if (scc == fcc && counter == 2 && scc != undefined) {
        score = score + 1
        $("#scoreid").html(score)
        setTimeout(
            function () {
                $(imgId).addClass("d-none")
                $(firstImgCard).addClass("d-none")
                $(secondImgCard).addClass("d-none")
                $(divId).addClass("d-none")
                $(firstDivCard).addClass("d-none")
                $(secondDivCard).addClass("d-none")
                counter = 0
            }, 500);

    }


    if (counter == 2 && scc != fcc) {
        move = move - 1
        $("#moveid").html(move)
        setTimeout(
            function () {
                $(imgId).addClass("d-none")
                $(firstImgCard).addClass("d-none")
                $(secondImgCard).addClass("d-none")
                $(divId).removeClass("d-none")
                $(firstDivCard).removeClass("d-none")
                $(secondDivCard).removeClass("d-none")
                counter = 0

            }, 200);


    }

    if (move == 0) {
        alert("Kaybettin!")
        location.reload();
    }
    console.log(score);
    if (score > 5) {
        alert("Kazandın!")
        location.reload();
    }
}





replaceRandomCard()