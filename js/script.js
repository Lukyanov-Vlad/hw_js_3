console.log('Задание 1');
    let i=1;
    while(i<=50){
        console.log(i);
        i++;
    }
    console.log('----------------------------------------');
    for(let i=35; i>=8; i--){
        console.log(i);
    }

console.log('----------------------------------------');

console.log('Задание 2');
   i=89;
   while(i>=11){
    document.write(`${i}<br>`);
    i--;
   }
console.log('----------------------------------------');

console.log('Задание 3');
   let sum=0;
   for(let i=0;i<=100;i++){
        sum+=i;
   }
   console.log(`Сумма чисел от 0 до 100 равна ${sum}`);
console.log('----------------------------------------');

console.log('Задание 4');
   let str='12345';
   let sumInNumber=0;
   for(let i=0; i<str.length;i++){
    
     for(let j=0; j<=+str[i];j++){
        sumInNumber+=j;
     }
     console.log(`Сумма чисел в числе ${+str[i]} равна ${sumInNumber}`);
     sumInNumber=0;
   }
console.log('----------------------------------------');


console.log('Задание 5');
  i=8;
  console.log('Через while');
    while(i<=56){
        if(i%2===0){
            console.log(i);
            i++;
        }else{
        i++; 
        }
    
    }
  console.log('Через for');
    for(let i=8; i<=56;i++){
        if(i%2===0){
            console.log(i);
        }
       
    }
console.log('----------------------------------------');


console.log('Задание 6');
   for(let i=2;i<=10;i++){
    for(let j=2;j<=10;j++){
        console.log(`${i}*${j}=${i*j}`);
    }
    console.log('\n');
   }
console.log('----------------------------------------');

console.log('Задание 7');
   let n=1000;
   let num=0;
   do{
       n=n/2;
       
       num++;
   }while(n>50)
   console.log(`Получится число ${n}`);
   console.log(`Понадобиться ${num} итераций`)
console.log('----------------------------------------');

console.log('Задание 8');
   let sumAll=0,
       arAll=0;
       arrCounter=0;
    let number;
   while(true){
       number=+prompt('Введите число');
       if(isNaN(number) && number!==''){
            alert('Введено не число'); 
       }else if(number===0 || number===''){
            console.log('Цикл остановлен'); 
            break; 
       }else{
        sumAll+=number;
        arrCounter++;
       }     
   }
   arrAll=sumAll/arrCounter;
   console.log(`Сумма равна ${sumAll}`);   
   console.log(`Среднее арифметическое равно ${arrAll}`);
console.log('----------------------------------------');
console.log('Задание 9');
   let strTask9='4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
   let arrTask9=strTask9.split(' ');
   let minValue=arrTask9[0];
   let maxValue=arrTask9[0];

   for(let i=0; i<arrTask9.length;i++){
   
    if(arrTask9[i]>maxValue){
        maxValue=arrTask9[i];
    }else if(arrTask9[i]<minValue){
        minValue=arrTask9[i];
    }
   }
   console.log(`Максимальное значение равно ${maxValue}`);   
   console.log(`Минимальное значение равно ${minValue}`);
console.log('----------------------------------------');

console.log('Задание 10');
   let numTask10=12345;
   console.log(`Число ${numTask10}`);
   let strTask10=String(numTask10);
   
   console.log('Пункт a-разбить число n на цифры и выводит их на экран');
   let arrTask10=strTask10.split('');

   for(let i=0; i<arrTask10.length;i++){
    console.log(`${arrTask10[i]}`);
   }
   console.log('Пункт b-подсчитывает сколько цифр в числе n');

   console.log(`Цифр в числе: ${strTask10.length}`);

   console.log('Пункт с-находит сумму цифр числа n');

   let sumTask10=0;
   for(let i=0; i<strTask10.length;i++){
    sumTask10+=+strTask10[i];
   }
   console.log(`Сумма цифр числа n: ${sumTask10}`);
   console.log('Пункт d-меняет порядок цифр числа n на обратный');

   arrTask10.reverse();
   strTask10=arrTask10.join('');
   console.log(`Обратный порядок: ${strTask10}`);


console.log('----------------------------------------');
