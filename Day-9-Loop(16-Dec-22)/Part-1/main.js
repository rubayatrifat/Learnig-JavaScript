// While Loop

let loop = 0; 
while (loop < 10) {
  const realcount = loop + 1;
  console.log(`I Love Bangladesh ${realcount}`);
  loop++;
}

//Do While

let do_while = 0;

do {
  console.log(do_while);
  do_while++;
} while (do_while < 0);

//For Loop

for(let x = 0; x < 10; x++){
    console.log(`${x + 1} Argentina loves BD and BD also love Arg`)
}

// Continue

for(let y = 0; y < 7; y++){
    if(y === 5){
        continue
    }
    console.log(y)
}

// Break

for(i = 0; i < 5; i++){
    if(i === 3){
        break
    }
    console.log(i)
}

