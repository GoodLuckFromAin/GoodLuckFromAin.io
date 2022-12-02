
const quotes = ["When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
                "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.",
                "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together."];

const quote_box = document.getElementsByClassName("quote")[0];
const index = Math.floor(Math.random() * 3);


quote_box.innerHTML = quotes[index];

