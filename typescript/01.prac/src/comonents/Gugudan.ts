
   export const hello : string = 'hello world'
   export type nameType = string
    

   export const gugudan = (x : number) : string => {

    let result : string = ''

    for(let i : number = 1; i < 10; i++ ){
        result += `${x} X ${i} = ${x*i}\n`
    }


    return result
   }
    
