// header blur efect
window.addEventListener("scroll", navresizer , false);

function navresizer () {
    let nav = document.querySelector("#section1");
    function navStyleChange(){
        nav.style.height="5rem";
        nav.style.boxShadow="0px 0px 4px rgb(0, 0, 0, .1)";
        nav.style.background="rgba(255, 255, 255, .1)";
    }
    function navStyleChangeReverse(){
        nav.style.height="7rem";
        nav.style.boxShadow="none";
        nav.style.background="#fff";
    }
    this.scrollY > 50 ? navStyleChange() : navStyleChangeReverse();
}

// header responsive
let ResNavContainer = document.getElementById("navbar");
let NavBtnOpen = document.getElementById("navOpenBtn");
let NavBtnClose = document.getElementById("navCloseBtn");

function menubtnclose(){
    // ResNavContainer.style.visibility = "hidden";
    NavBtnClose.style.visibility = "hidden"
    ResNavContainer.style.right = "-30rem";
}

function menubtnopen(){
    // ResNavContainer.style.visibility = "visible";
    ResNavContainer.style.right = "0rem";
    NavBtnClose.style.visibility = "visible"
}

function resCloseNav(){
    ResNavContainer.style.right = "-30rem";
    NavBtnClose.style.visibility = "hidden"
}

let = NavHome = document.getElementById("navHome");
function resCloseNav2(){
    ResNavContainer.style.right = "-30rem";
    NavBtnClose.style.visibility = "hidden"
}


// smtp js mailing starts here
function sendmail() {
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    var Body = 'Name : ' + name + '<br />Email : ' + email + '<br />Subject : ' + subject + '<br />Message : ' + message;

    Email.send({
        SecureToken: "c39a57e5-935b-4fd0-9a64-9ffdad6640e3",
        To: 'nxt12hulk@gmail.com',
        From: "edu.educationplus@gmail",
        Subject: "Message in ContactUs page From " + name,
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
                document.getElementById("portfolioContactUs").reset();
            }
            else {
                console.error(message);
                alert('There is error at sending message.')
            }
        }
    );
}
