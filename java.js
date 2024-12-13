function Schizophrenia() {
    var photo= document.createElement("img");
    photo.setAttribute("src", "data:image/jpeg;base64,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");
    document.body.appendChild(photo);
    photo.setAttribute("style", "height: 500px; width: 700px; position:absolute; left: 370px; ");
    
    var dino= document.createElement("img")
    dino.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59a6349b-7a40-4af2-bf9a-3a13ddf42093/dcrj9y7-8e349c07-26dd-4cc7-8dac-bf932b33647a.png/v1/fill/w_1024,h_1030/predatory_dinosaur_on_a_transparent_background__by_zoostock_dcrj9y7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5YTYzNDliLTdhNDAtNGFmMi1iZjlhLTNhMTNkZGY0MjA5M1wvZGNyajl5Ny04ZTM0OWMwNy0yNmRkLTRjYzctOGRhYy1iZjkzMmIzMzY0N2EucG5nIiwiaGVpZ2h0IjoiPD0xMDMwIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNTlhNjM0OWItN2E0MC00YWYyLWJmOWEtM2ExM2RkZjQyMDkzXC96b29zdG9jay00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.c2SvuHUnJZWStswRNoHaVgJTWzSzooeGP0LXIBHOJ2U");
    document.body.appendChild(dino);
    dino.setAttribute("style", "height: 70px; width: 90px; position:absolute; left: 770px; bottom:180px; ");
    


};
function Dyslexia() {
    var spans = document.getElementsByTagName("span");

    // chat gpt fixed this code by adding the i
    for (var i = 0; i < spans.length; i++) {
        var randomX = Math.random() * (window.innerWidth - spans[i].offsetWidth);
        var randomY = Math.random() * (window.innerHeight - spans[i].offsetHeight); 

        spans[i].style.position = "absolute";
        spans[i].style.left = `${randomX}px`;
        spans[i].style.top = `${randomY}px`;
    }
};

function Dementia() {
    var list = document.querySelectorAll(".forget");
    var i = list.length - 1;
    function click(){
        console.log("work?");
        if(i>=0){
            list[i].remove();
        i--;
        console.log(i);
        }
    }
    var time = setInterval(click, 1000);
};



var money = 100;


function gamble() {
    var money = 10000000;

    var colorButton = document.createElement("button");
    colorButton.innerHTML ="red or black"
    document.body.appendChild(colorButton);

    var numButton = document.createElement("button");
    numButton.innerHTML = "specific number"
    document.body.appendChild(numButton);


    colorButton.setAttribute("style", "position: absolute; bottom: 40px; right: 600px");
    numButton.setAttribute("style", "position: absolute; bottom: 40px; left: 600px");

    colorButton.addEventListener("click", rob);
    numButton.addEventListener("click", pick);  
    
    var wealth = document.getElementById("wealth");
    wealth.innerHTML="money = " + money;

    function rob() {

        var red = document.createElement("button");
        red.innerHTML ="red";
        document.body.appendChild(red);

        var black = document.createElement("button");
        black.innerHTML = "black";
        document.body.appendChild(black);

        red.setAttribute("style", "position: absolute; bottom: 80px; left: 730px");
        black.setAttribute("style", "position: absolute; bottom: 80px; left: 680px");

        red.addEventListener("click", betred); 
        function betred(){
            
            var bet = prompt("how much do you want to bet, you have " + money);
            var answer = Math.floor(Math.random() * 32) + 1;
            if (answer % 2 == 0){
                color= black;
                alert("incorect it was black");
                money = money - bet;
                wealth.innerHTML="money = " + money;
                
            } else {
                color = red;
                alert("CORRECT! it was red")
                money= bet * 2 +  money;
                wealth.innerHTML="money = " + money;``
            };

        };
        black.addEventListener("click", betblack); 
        function betblack(){
            var bet = prompt("how much do you want to bet, you have " + money);
            var answer = Math.floor(Math.random() * 32) + 1;
            
            if (answer % 2 == 0){
                color= black;
                alert("CORRECT! it was black")
                money= bet * 2 +  money;
                wealth.innerHTML="money = " + money;

            } else {
                color = red;
                alert("incorect it was red")
                money = money - bet;
                wealth.innerHTML="money = " + money;

            }
        };

    };

    function pick() {
       
        var bet = prompt("how much do you want to bet, you have " + money);
        var guess = prompt("what number will it be(1-32)");
        var answer = Math.floor(Math.random() * 32) + 1;
        if (guess == answer ){
            money= bet * 32 +  money;
            wealth.innerHTML="money = " + money;
            console.log("correct")
            alert("correct the number was " + answer)
        } else{
            money = money - bet;
            wealth.innerHTML="money = " + money;
            alert("incorrect the number was " + answer)
        }

    };

};

