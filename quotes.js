
const quotes = [["When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.","Efont1"],
                ["It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.","Efont1"],
                ["Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.","Efont1"],
                ["لا يمكنك أن تخشى من الفشل , لانه الطريق الوحيد الذي يوصلك الى النجاح","Afont1"],
                ["قمة المجد ليست في عدم الإخفاق أو الفشل .. بل في القيام بعد كل عثرة.","Afont1"],
                ["لقد خلقنا لنمارس الإصرار، هكذا نستطيع ان نعرف من نحن.","Afont1"],
                ["الحلم هو مجرد حلم أما الهدف فهو حلم له خطه وموعد نهائي لتحقيقه. حقق هدفك","Afont1"],
                ["YOUR FUTURE NEEDS YOU, YOUR PAST DOESNT","Efont1"],
                ["I WANNA SEE WHAT HAPPENS IF I DON'T GIVE UP","Efont1"]
            ];

const quote_box = document.getElementsByClassName("quote")[0];
const index = Math.floor(Math.random() * quotes.length);


quote_box.innerHTML = quotes[index][0];
quote_box.style.fontFamily = quotes[index][1];
