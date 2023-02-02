
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
       






        
        function playmusic(){
            let audio1 = new Audio("one.mpeg");
            audio1.play()
        }
        function playmusic2(){

            let audio2 = new Audio("two.mpeg");
            audio2.play()
        }
        function playmusic3(){

            let audio3 = new Audio("three.mpeg");
            audio3.play()
        }
        function writediv1(){
            details.innerHTML+="One ";
        }
        function writediv2(){
            details.innerHTML+="Two ";
        }
        function writediv3(){
            details.innerHTML+="Three ";
        }
        function writediv4(){
            details.innerHTML+="Four ";
        }
        function writediv5(){
            details.innerHTML+="Five ";
        }
        function writediv6(){
            details.innerHTML+="Six ";
        }
        function writediv7(){
            details.innerHTML+="Seven ";
        }
        function writediv8(){
            details.innerHTML+="Eight ";
        }
        function writediv9(){
            details.innerHTML+="Nine ";
        }
        function writediv0(){
            details.innerHTML+="Zero ";
        }

     
         
        play.addEventListener("click", playmusic)
        play.addEventListener("click", writediv1)
        play2.addEventListener("click", playmusic2)
        play2.addEventListener("click", writediv2)
        play3.addEventListener("click", playmusic3)
        play3.addEventListener("click", writediv3)

        play4.addEventListener("click", writediv4)

        play5.addEventListener("click", writediv5)

        play6.addEventListener("click", writediv6)

        play7.addEventListener("click", writediv7)

        play8.addEventListener("click", writediv8)

        play9.addEventListener("click", writediv9)

        play0.addEventListener("click", writediv0)

        
        