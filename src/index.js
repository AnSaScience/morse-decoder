const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morzeCode= expr.match(/.{1,10}/g).map((x,i)=> { return x.match(/.{1,2}/g).filter(y=> {
        if(y==="11" || y==="**" || y==="10")
        {return true}
       
        else{
          return false
        }
        
      }).map(x=>{
        if(x==="10"){
          return "."
        }
        else if(x==="11"){
          return "-"
        }
        else if(x==="**"){
          return " "
        }
      })})
      let morzeLeters=morzeCode.map(x=> {return x.join("")})
      let answer=morzeLeters.map(x=>{
         if(MORSE_TABLE[x]===undefined){
          return " ";
        }
        else{
          return MORSE_TABLE[x]
        }
      })
      return answer.join("")
}

module.exports = {
    decode
}