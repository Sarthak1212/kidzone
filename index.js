
        let play = document.getElementById("one");
        let play2 = document.getElementById("two");
        let play3 = document.getElementById("three");
        let play4 = document.getElementById("four");
        let play5 = document.getElementById("five");
        let play6 = document.getElementById("six");
        let play7 = document.getElementById("seven");
        let play8 = document.getElementById("eight");
        let play9 = document.getElementById("nine");
        let play0 = document.getElementById("zero");

        let details = document.getElementById("details");
        let dis = document.getElementById("dis");






        
        function playmusic(){
            let audio1 = new Audio("1.mp3");
            audio1.play()
        }
        function playmusic2(){

            let audio2 = new Audio("2.mp3");
            audio2.play()
        }
        function playmusic3(){

            let audio3 = new Audio("3.mp3");
            audio3.play()
        }
        function playmusic4(){

            let audio4 = new Audio("4.mp3");
            audio4.play()
        }
        function playmusic5(){

            let audio5 = new Audio("5.mp3");
            audio5.play()
        }
        function playmusic6(){

            let audio6 = new Audio("6.mp3");
            audio6.play()
        }
        function playmusic7(){

            let audio7 = new Audio("7.mp3");
            audio7.play()
        }
        function playmusic8(){

            let audio8 = new Audio("8.mp3");
            audio8.play()
        }
        function playmusic9(){

            let audio9 = new Audio("9.mp3");
            audio9.play()
        }
        function playmusic0(){

            let audio0 = new Audio("0.mp3");
            audio0.play()
        }








        function writediv1(){
            details.querySelector("span").innerHTML="One ";
            dis.innerHTML= "*";
        }
        function writediv2(){
            details.querySelector("span").innerHTML="Two ";
            dis.innerHTML= "* *";
        }
        function writediv3(){
            details.querySelector("span").innerHTML="Three ";
            dis.innerHTML= "* * *";
        }
        function writediv4(){
            details.querySelector("span").innerHTML="Four ";
            dis.innerHTML= "* * * *";
        }
        function writediv5(){
            details.querySelector("span").innerHTML="Five ";
            dis.innerHTML= "* * * * *";
        }
        function writediv6(){
            details.querySelector("span").innerHTML="Six ";
            dis.innerHTML= "* * * * * *";
        }
        function writediv7(){
            details.querySelector("span").innerHTML="Seven ";
            dis.innerHTML= "* * * * * * *";
        }
        function writediv8(){
            details.querySelector("span").innerHTML="Eight ";
            dis.innerHTML= "* * * * * * * *";
        }
        function writediv9(){
            details.querySelector("span").innerHTML="Nine ";
            dis.innerHTML= "* * * * * * * * *";

        }
        function writediv0(){
            details.querySelector("span").innerHTML="Zero ";
            dis.innerHTML= "No stars for zero";
        }

     
         
        play.addEventListener("click", playmusic)
        play.addEventListener("click", writediv1)

        play2.addEventListener("click", playmusic2)
        play2.addEventListener("click", writediv2)

        play3.addEventListener("click", playmusic3)
        play3.addEventListener("click", writediv3)

        play4.addEventListener("click", writediv4)
        play4.addEventListener("click", playmusic4)

        play5.addEventListener("click", writediv5)
        play5.addEventListener("click", playmusic5)
        
        play6.addEventListener("click", writediv6)
        play6.addEventListener("click", playmusic6)

        play7.addEventListener("click", writediv7)
        play7.addEventListener("click", playmusic7)

        play8.addEventListener("click", writediv8)
        play8.addEventListener("click", playmusic8)

        play9.addEventListener("click", writediv9)
        play9.addEventListener("click", playmusic9)

        play0.addEventListener("click", writediv0)
        play0.addEventListener("click", playmusic0)

        
        
