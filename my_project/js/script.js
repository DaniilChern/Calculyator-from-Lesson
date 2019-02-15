function plus(){
   let num1,num2,rezult;// назначаем переменные
   num1 = document.getElementById("n1").value ;// присваиваем переменной значение 
                                                //которое ввел пользователь 
                                             //   ищем его по идентификатору
   num1 = parseInt(num1);//строки переводим в число
   num2 = document.getElementById("n2").value ;
   num2 = parseInt(num2);
   rezult = num1 + num2;// присваиваем значение результату
   document.getElementById("out").innerHTML = rezult;// ищем в HTML-документе элемент
                                                      // c идентификатором "out"
                                                      //находим в нем значение HTML 
                                                      //это слово"Результат" и присваиваем
                                                        // ему новое значение rezult 
};
function minus(){
   let num1,num2,rezult;
   num1 = document.getElementById("n1").value ;
   num1 = parseInt(num1);
   num2 = document.getElementById("n2").value ;
   num2 = parseInt(num2);
   rezult = num1 - num2;
   document.getElementById("out").innerHTML = rezult;
};
function umn(){
   let num1,num2,rezult;
   num1 = document.getElementById("n1").value ;
   num1 = parseInt(num1);
   num2 = document.getElementById("n2").value ;
   num2 = parseInt(num2);
   rezult = num1 * num2;
   document.getElementById("out").innerHTML = rezult;
};
function razd(){
   let num1,num2,rezult;
   num1 = document.getElementById("n1").value ;
   num1 = parseInt(num1);
   num2 = document.getElementById("n2").value ;
   num2 = parseInt(num2);
   rezult = num1 / num2;
   document.getElementById("out").innerHTML = rezult;
};