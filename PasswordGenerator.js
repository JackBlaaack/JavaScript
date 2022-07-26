function getPassword(length) {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let numbers = ['0','1','2','3','4','5','6','7','8','9'];
   let  symbols = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
   let password = ''
    for(let el = 0; el < length; ++i){
       password += letters[
           Math.floor(
               Math.random() * letters.length
          )
      ];
    }
    for(let el = 0; el < length; ++i){
        password += numbers[
            Math.floor(
                Math.random() * numbers.length
           )
       ];
    }
    for(let el = 0; el < length; ++i){
        password += symbols[
            Math.floor(
                Math.random() * symbols.length
           )
       ];
    }
    return password;
 }
 console.log(getPassword(6));