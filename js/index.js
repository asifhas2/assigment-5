function getEliment(id){
    const eliment = document.getElementById(id);
    return eliment;
}
const loveBtn = document.getElementsByClassName("heart-btn");
for(const lovebtn of loveBtn){
    lovebtn.addEventListener("click",function(){
        const loveCount1 = document.getElementById("love-count");
        let count = parseInt(loveCount1.innerText)
        count = parseInt(count+1);
         document.getElementById("love-count").innerText=count;
    })
}

 