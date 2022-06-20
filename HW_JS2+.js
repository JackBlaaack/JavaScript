** 1 task
function degree(j) {
      for (let i=1; i<=j; i++) {
          console.log(2**i);
     }
  }
 degree(10);

** 2 task
  function AddSmiles(smile, i){
  for(let j=0; j<=i; j++){   
          console.log(smile.repeat(j));
   }
 }
   AddSmiles(':)', 7);
** 3 task
  function getWordStructure(word) {
      word = word.toLowerCase().split('');
     let vowel = ['a','i','e','o'];
      let cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
     let vCount = 0;
     let cCount = 0;

     word.forEach(el => {
      if(vowel.includes(el)) vCount ++
      else if (cons.includes(el)) cCount ++
      })
console.log(`Слово ${word.join('')} состоит из ${vCount} гласных и ${cCount} согласных`)
  }
  getWordStructure('Check-List');

// function isPalindrom(word) 

        // Измените строку на нижний регистр и удалите все не буквенно-цифровые символы
           let w = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
          let ccount = 0;
        // Проверить пуста ли строка или нет
          if(w==="") {
            console.log("Ничего не найдено!");
            return false;
          }
         // Проверьте четная или нечетная длина строки
          if ((w.length) % 2 === 0) {
            ccount = (w.length) / 2;
           } else {
         // Если длина строки равна 1, она становится палиндромом.
             if (w.length === 1) {
              console.log.writeln("Вход - это палиндром.");
               return true;
             } else {
         // Если длина строки нечетная, игнорируйте средний символ
                  ccount = (w.length - 1) / 2;
             }
          }
         // Проциклуем, чтобы проверить первый символ до последнего символа, а затем перейдём к следующему
           for (let x = 0; x < ccount; x++) {
        // Сравните символы и отбросьте их, если они не совпадают
            if (w[x] != w.slice(-1-x)[0]) {
               console.log("Вход - это не палиндром.");
              return false;
            }
           }
          console.log("Запись - палиндром.");
         return true;
         }
        isPalindrom('Abba')

**4 task
  function isPalindrom(word) {
  
 let w = word.toLowerCase().replace(/\s/g, '');
 return w === w.split('').reverse().join('');
 }
 console.log(isPalindrom('abba'));
