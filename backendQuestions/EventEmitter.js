function printName(emitter,personEvent) {
 
    emitter.on(personEvent,(person)=>{
       console.log(`My name is  ${person}`)
    }) 
      
    }