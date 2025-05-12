let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const getCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randInd=Math.floor(Math.random()*3);
    return options[randInd];
}

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw. Play Again";
    msg.style.backgroundColor="skyblue";
    msg.style.color="black";
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You won..! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You lose.. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}

const playGame=(userchoice)=>{
    console.log("userchoice",userchoice);
    const compchoice=getCompChoice();
    console.log("computer choice ",compchoice);

    if(userchoice==compchoice){
        drawGame();
    }
    else{
        let userwin=true;
        if (userchoice==="rock"){
            userwin=compchoice=="paper" ? false : true;
        }else if(userwin==="paper"){
            userwin=compchoice==="scissors"? false:true;
        }
        else{
            userwin=compchoice==="rock"? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        //console.log("choice was clicked",userchoice);
        playGame(userchoice);
    })
})
