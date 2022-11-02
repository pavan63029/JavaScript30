let a=document.getElementById("p")
let b=document.getElementById("a")
let c=document.getElementById("v")
let d=document.getElementById("n")
function Name(){
a.innerHTML=""
}
function Name1(){
    a.innerHTML="haii"
    a.classList.add("images1")
    }
a.addEventListener("mouseover",Name)
a.addEventListener("mouseleave",Name1)

function Name01(){
    b.innerHTML=""
    }
    function Name2(){
        b.innerHTML="who"
        b.classList.add("images1")
        }
b.addEventListener("mouseover",Name01)
    b.addEventListener("mouseleave",Name2)

    function Name02(){
        c.innerHTML=""
        }
        function Name3(){
            c.innerHTML="are"
            c.classList.add("images1")
            }
        c.addEventListener("mouseover",Name02)
        c.addEventListener("mouseleave",Name3)

        function Name03(){
            d.innerHTML=""
            }
            function Name4(){
                d.innerHTML="you"
            d.classList.add("images1")
                }
            d.addEventListener("mouseover",Name03)
            d.addEventListener("mouseleave",Name4)