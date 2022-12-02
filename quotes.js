
const quotes = [["When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.","Efont1"],
                ["It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.","Efont1"],
                ["Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.","Efont1"],
                ["إذا كنت تستطيع تخيل صورة ما فذلك يعني أنّه يمكنك أن تجعلها واقعاً، وإذا كنت تستطيع أن تحلم فهذا يعني أنّك تستطيع تحقيق حلمك","Afont1"]
            ];

const quote_box = document.getElementsByClassName("quote")[0];
const index = Math.floor(Math.random() * quotes.length);


quote_box.innerHTML = quotes[index][0];
quote_box.style.fontFamily = quotes[index][1];
