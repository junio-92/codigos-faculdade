
function carregar(){


    const msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    const data = new Date()
    //const hora=data.getHours()
   let hora = 13
    msg.innerHTML = ` Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) 
    {

            img.src='manha.png'
            body.style.background='	#00008B'

        }else if (hora >= 12 && hora <= 18) 
        
        {

     
            img.src='tarde.png'
            body.style.background='#DAA520'

         }else{
     
            img.src='noite.png'
            body.style.background='#1C1C1C'
        }
    

    //////img.src='tarde.png'
    
    
  //  if (hora >= 0 && hora < 12) {

   //    img.src='manha.png'
   //     body.style.background='	#00008B'
  //  }else if (hora >= 12 && hora < 18) {

  //      img.src='tarde.png'
   //     body.style.background='#DAA520'
  //  }else{

     //   img.src='noite.png'
    //    body.style.background='#1C1C1C'
   // }
    
    /////////// 
        
}

