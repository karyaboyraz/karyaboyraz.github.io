var cards = [{
        id: 1,
        img: "https://picsum.photos/id/250/400/400"
    },
    {
        id: 2,
        img: "https://picsum.photos/id/456/400/400"
    },
    {
        id: 3,
        img: "https://picsum.photos/id/488/400/400"
    },
    {
        id: 4,
        img: "https://picsum.photos/id/433/400/400"
    },
    {
        id: 5,
        img: "https://picsum.photos/id/400/400/400"
    },
    {
        id: 6,
        img: "https://picsum.photos/id/237/400/400"
    },
]

var counter = 0
var score = 0
var move = 10
var firstDivCard
var firstImgCard
var secondDivCard
var secondImgCard
var fcc
var scc
var coverTemplate = `<img src="https://uretkenakademi.com/wp-content/uploads/2021/12/logo.svg">`


function replaceRandomCard() {
    let location = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    for (let i = 0; i < 7; i++) {
        let cardTemplate = `<img src=" ` + cards[i].img + ` "class="` + i + ` ">`
        let coverTemplate = `<img src="https://uretkenakademi.com/wp-content/uploads/2021/12/logo.svg">`

        const random = location[Math.floor(Math.random() * location.length)];
        location = location.filter(function (item) {
            return item !== random
        })

        const random2 = location[Math.floor(Math.random() * location.length)];
        location = location.filter(function (item) {
            return item !== random2
        })

        
        var idLocation = 'img-' + random
        var coverLocation = 'block-' + random
        document.getElementById(idLocation).innerHTML = cardTemplate
        document.getElementById(coverLocation).innerHTML = coverTemplate

        var idLocation = 'img-' + random2
        var coverLocation = 'block-' + random2
        document.getElementById(idLocation).innerHTML = cardTemplate
        document.getElementById(coverLocation).innerHTML = coverTemplate
    }
}

function selectCard(a) {
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
    // Match Card
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
            }, 300);
    }
    // Unmatch Card
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
    // Lose Sitiation (ALERT)
    if (move == 0) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success ml-3',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })          
          swalWithBootstrapButtons.fire({
            title: 'Loser!',
            text: "Another Game?",
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, Im a coward...',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title:'Ok Than',
                text:'Go back to safe live!',
                confirmButtonText: 'OK',                
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'https://www.google.com/';
                } 
              })
            }
          })
    }
    // Win Situation (ALERT)
    if (score > 5) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success ml-3',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })          
          swalWithBootstrapButtons.fire({
            title: 'We Have A Winner!',
            text: "Another Game?",
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Yes, do it!',
            cancelButtonText: 'No, Im a coward...',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title:'Ok Than',
                text:'Go back to safe live!',
                confirmButtonText: 'OK',                
              }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'https://www.google.com/';
                } 
              })
            }
          })
    }
}

$(document).ready(function () {
    // After reload check status at LocalStorage
    if (localStorage.getItem("Mode") == "copyrightOff") {
        for (let i = 0; i < 12; i++) {
            $("body").removeClass("copyrightMode")            
            let coverLocation = 'block-' + i
            document.getElementById(coverLocation).innerHTML = coverTemplate
        }
    } else if (localStorage.getItem("Mode") == "copyrightOn") {
        for (let i = 0; i < 12; i++) {
            $("body").addClass("copyrightMode")
            $("#copyrightStatus").prop("checked", true);
            let coverLocation = 'block-' + i
            let coverTemplate = `<img src="https://iconape.com/wp-content/png_logo_vector/smile.png">`
            document.getElementById(coverLocation).innerHTML = coverTemplate
        }
    }

    if (localStorage.getItem("Darkmode") == "darkModeOn") {
        $("#darkModeStatus").prop("checked", true);
        $("body").addClass("bg-dark")
        $("body").removeClass("bg-light")
    } else if (localStorage.getItem("Darkmode") == "darkModeOff") {
        $("body").removeClass("bg-dark")
        $("body").addClass("bg-light")
    }

    $("#darkModeStatus").click(function () {
        if ($("body").hasClass("bg-dark")) {
            localStorage.setItem("Darkmode", "darkModeOff");
            $("body").removeClass("bg-dark")
            $("body").addClass("bg-light")
        } else {
            localStorage.setItem("Darkmode", "darkModeOn");
            $("body").addClass("bg-dark")
            $("body").removeClass("bg-light")
        }
    });

    $("#copyrightStatus").click(function () {
        if ($("body").hasClass("copyrightMode")) {
            for (let i = 0; i < 12; i++) {
                $("body").removeClass("copyrightMode")
                localStorage.setItem("Mode", "copyrightOff");
                let coverLocation = 'block-' + i
                document.getElementById(coverLocation).innerHTML = coverTemplate
            }
        } else {
            for (let i = 0; i < 12; i++) {
                $("body").addClass("copyrightMode")
                localStorage.setItem("Mode", "copyrightOn");
                let coverTemplate = `<img src="https://iconape.com/wp-content/png_logo_vector/smile.png">`
                let coverLocation = 'block-' + i
                document.getElementById(coverLocation).innerHTML = coverTemplate
            }
        }
    });
});

AOS.init();
replaceRandomCard();