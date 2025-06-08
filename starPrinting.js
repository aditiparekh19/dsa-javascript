// function starPrinting_One(n)
// {
//    for(let row=1; row<=n; row++){
//     let str = ''
//     for(let col=1; col<=row; col++){
//         str+= '* '
//     }
//     console.log(str);
//    }
       
// }
// starPrinting_One(4)

// function starPrinting_Two(n)
// {
//    for(let row=1; row<=n; row++){
//     let str = ''
//     for(let col=1; col<=n-row+1; col++){
//         str+= '* '
//     }
//     console.log(str);
//    }
       
// }
// starPrinting_Two(4)

// function starPrinting_Three(n)
// {
//    for(let row=1; row<=n; row++){
//     let str = ''
//     for(let col=1; col<=n-row+1; col++){
//         str+= '* '
//     }
//     console.log(str);
//    }
//    for(let row=2; row<=n; row++){
//     let str = ''
//     for(let col=1; col<=row; col++){
//         str+= '* '
//     }
//     console.log(str);
//    }
       
// }
// starPrinting_Three(4)


// function starPrinting_Four(n)
// {
//    for(let row=1; row<=n; row++){
//         let str = ''
//         for(let col=1; col<=row; col++){
//             str+= '* '
//         }
//         console.log(str);  
//     }

//     for(let row=1; row<=n; row++){
//         let str = ''
//         for(let col=2; col<=n-row+1; col++){
//             str+= '* '
//         }
//         console.log(str);
//     }
// }
// starPrinting_Four(4)

// function starPrinting_Four(n)
// {
//    for(let row=0; row<n; row++){ //row
//         let str = ''
//         for(let col=0; col<n; col++){ //col
//             str+= '* '
//         }
//         console.log(str);  
//     }
// }
// starPrinting_Four(4)

// function starPrinting_Five(n)
// {
//    for(let row=0; row<n; row++){ //row
//         let str = ''
//         for(let col=0; col<=row; col++){ //col
//             str+= `${col+1} `
//         }
//         console.log(str);  
//     }
// }
// starPrinting_Five(5)

// function starPrinting_Six(n)
// {
//    for(let row=0; row<n; row++){ //row
//         let str = ''
//         for(let col=0; col<=row; col++){ //col
//             str+= `${row+1} `
//         }
//         console.log(str);  
//     }
// }
// starPrinting_Six(5)

// function starPrinting_Seven(n)
// {
//    for(let row=n; row>=1; row--){ //row
//         let str = ''
//         for(let col=1; col<=row; col++){ //col
//             str+= `${col} `
//         }
//         console.log(str);  
//     }
// }
// starPrinting_Seven(5)

// function starPrinting_Eight(n)
// {
//     for(let i=0; i<n; i++){
//         let str = '';
//         for(let j=0; j<n-i; j++){
//             str+= `${j+1} `
//         }
//         console.log(str);
//     }
// }
// starPrinting_Eight(5)

// function starPrinting_Nine(n)
// {
//     for(let row=1; row<=n; row++){ //row
//         let str = ''
//         for(let col=n; col>=row; col--){ //col
//             str+= `${col} `
//         }
//         console.log(str);  
//     }
// }
// starPrinting_Nine(5)

// function starPrinting_Ten(n)
// {
//     for(let i=0; i<n; i++){
//         let str = '';
//         for(let j=0; j<n-i; j++){
//             str+= `* `
//         }
//         console.log(str);
//     }
// }
// starPrinting_Ten(5)

// function starPrinting_Twelve(n)
// {
//     for(let row=1; row<=n; row++){
//         let str = "";
//         for(let col=1; col<=row; col++){
//             if(col%2==0){
//                 str += "0 ";
//             }else{
//             str += "1 ";
//             }
//         }
//         console.log(str);
//     }
// }
// starPrinting_Twelve(5)

// function starPrinting_13(n)
// {
//     for(let row=1; row<=n; row++){
//         let str = "";
//         let toggle = 1;
//         for(let col=1; col<=row; col++){
//             str+=toggle;
//             toggle = toggle == 1 ? 0 : 1;
//         }
//         console.log(str);
//     }
// }
// starPrinting_13(5)

function starPrinting_14(n)
{
    let toggle = 1;
    for(let row=1; row<=n; row++){
        let str = "";
        for(let col=1; col<=row; col++){
            str+=`${toggle} `;
            toggle = toggle == 1 ? 0 : 1;
        }
        console.log(str);
    }
}
starPrinting_14(5)