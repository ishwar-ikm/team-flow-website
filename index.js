/***********Testimpnial ***********/

const manualBtns = document.querySelectorAll('.manual-btn');

manualBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        manualBtns.forEach(otherBtn => {
            if (otherBtn !== btn) {
                otherBtn.classList.remove('active');
            }
        });

        btn.classList.add('active');
    });
});

const labels = document.querySelectorAll('.manual-btn');

labels.forEach(label => {
    label.addEventListener('click', () => {
        labels.forEach(l => l.classList.remove('selected'));
    });
});




/******************Email checker ****************/
document.querySelector(".jsselect").addEventListener("click", function () {
    var email = document.querySelector(".emailText").value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.match(validRegex)){
        document.querySelector(".emailText").value = "";
        alert("Email registered!");
    }
    
    else if(email === ""){
        alert("Field can not be empty")
    }

    else{
        alert("Invalid Email please try again");
    }

});



/**************** Benifit button for mobile ***************/
document.querySelector(".benifit-btn").addEventListener("click", function(){
    document.querySelector(".jsrowSelect").classList.toggle("hideClass");
    this.textContent = this.textContent === "Hide Benefits" ? "View more benifits" : "Hide Benefits";
})



/*************** Mobile Footer *******************/
document.querySelector(".phoneF1").addEventListener("click", function(){
    document.querySelector(".drop1").classList.toggle("hideClass");
    document.querySelector(".topArrow").classList.toggle("hideClass");
    document.querySelector(".topArrow1").classList.toggle("hideClass");
})
document.querySelector(".phoneF2").addEventListener("click", function(){
    document.querySelector(".drop2").classList.toggle("hideClass");
    document.querySelector(".middleArrow").classList.toggle("hideClass");
    document.querySelector(".middleArrow1").classList.toggle("hideClass");
})
document.querySelector(".phoneF3").addEventListener("click", function(){
    document.querySelector(".drop3").classList.toggle("hideClass");
    document.querySelector(".bottomArrow").classList.toggle("hideClass");
    document.querySelector(".bottomArrow1").classList.toggle("hideClass");
})
