let palavraemingles = document.querySelector('#palavraemingles')
let audioemingles = document.querySelector('#audioemingles')
let definicaoemingles = document.querySelector('#definicaoemingles')
let palavraemportugues = document.querySelector('#palavraemportugues')
let audioemportugues = document.querySelector('#audioemportugues')
let definicaoemportugues = document.querySelector('#definicaoemportugues')
let fraseingles = document.querySelector('.fraseingles')


const fundo = document.querySelector('#bodybody')
const modal = document.querySelector('#modal')

const p1 = document.querySelector('#p1')
p1.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    palavraemingles.textContent='Realignment';
    definicaoemingles.textContent='The action of changing or restoring something to a different or former position or state.';
    palavraemportugues.textContent='Realinhamento';
    definicaoemportugues.textContent='Era uma vez, em uma cidade que passava por um realinhamento político..';
    fraseingles.textContent='The scheme will require the realignment of local roads.'

    const audio1_1 = new Audio ('./áudios')
    audioemingles.addEventListener('click', (e) =>{
        audio1_1.load();
        audio1_1.play();    
    })

    const audio1_2 = new Audio ('./áudios')
    audioemingles.addEventListener('click', (e) =>{
        audio1_2.load();
        audio1_2.play();
    })

})
const p2 = document.querySelector('#p2')
p2.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    palavraemingles.textContent='Radially';
    definicaoemingles.textContent='Arranged or having parts arranged like rays';
    palavraemportugues.textContent='Radialmente';
    definicaoemportugues.textContent='uma dispersão imaginativa dos bancos radialmente a partir do foco central do púlpito. ';
    fraseingles.textContent='His radial arm saw was there and he built cabinets and plaques to mount his specimens on.'

    const audio1_1 = new Audio ('./áudios')
    audioemingles.addEventListener('click', (e) =>{
        audio1_1.load();
        audio1_1.play();
    })

    const audio1_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio1_2.load();
        audio1_2.play();
    })
})
const p3= document.querySelector('#p3')
p3.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    palavraemingles.textContent='Nutritionally';
    definicaoemingles.textContent='in a way that relates to nutrition';
    palavraemportugues.textContent='Nutricional';
    definicaoemportugues.textContent='Relativo à nutrição ou ao nutricionismo';
    fraseingles.textContent='So many snack foods are bad for you, nutritionally speaking.'
    const audio3_1 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})
const p4 = document.querySelector('#p4')
p4.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block'; 
    fundo.style.display='block';
    palavraemingles.textContent='Neglectfully';
    definicaoemingles.textContent='in a way that does not give enough care and attention to something or someone';
    palavraemportugues.textContent='Negligentemente';
    definicaoemportugues.textContent='Que tem negligência';
    fraseingles.textContent='The couple were accused of behaving neglectfully toward their four young children..'

    const audio3_1 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})
const p5 = document.querySelector('#p5')
p5.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    palavraemingles.textContent='Neoconservative';
    definicaoemingles.textContent='Neoconservatism refers to things that are pro-American in international affairs. This includes a bigger military, spreading democracy, and supporting Americannationalism and anti-communism. It started in the United States during the 1960s.';
    palavraemportugues.textContent='Neoconservador';
    definicaoemportugues.textContent='Neoconservadorismo é uma corrente da filosofia política que surgiu nos Estados Unidos a partir da rejeição do liberalismo social ';
    fraseingles.textContent='istorically speaking, the term neoconservative refers to.'

    const audio3_1 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})
const p6 = document.querySelector('#p6')
p6.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';

    palavraemingles.textContent='Inattentive';
    definicaoemingles.textContent='not attentive : not paying attention.';
    palavraemportugues.textContent='Desatento';
    definicaoemportugues.textContent='que ou o que não dá atenção àquele ou àquilo que vê, escuta ou faz; que se mostra absorvido por outra coisa; distraído.'
    fraseingles.textContent='uncertainty about the future is starting to breed a certain degree of instability, even among the most confident or inattentive.'

    const audio3_1 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})
const p7 = document.querySelector('#p7')
p7.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';

    palavraemingles.textContent='Incautiously';
    definicaoemingles.textContent='heedless of potential problems or risks.';
    palavraemportugues.textContent='descuidadamente';
    definicaoemportugues.textContent='De uma maneira descuidada (sem cuidado); em que há descuido; descuidosamente.';
    fraseingles.textContent='The cows got into the garden through a gate incautiously left open.'
    const audio3_1 = new Audio ('./áudios/Burglary.ogg')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})
const p8 = document.querySelector('#p8')
p8.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';

    palavraemingles.textContent='Effulgence';
    definicaoemingles.textContent='the ability to shine brightly.'
    palavraemportugues.textContent='Refulgência';
    definicaoemportugues.textContent='qualidade de refulgente; resplendor..;';
    fraseingles.textContent='The fire died down, marked only by a brief effulgence of a glowing ember.'

    const audio3_1 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })

})
const p9 = document.querySelector('#p9')
p9.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';

    palavraemingles.textContent='Papyrophobia';
    definicaoemingles.textContent='People who have papyrophobia have an illogical fear of paper';
    palavraemportugues.textContent='Papirofobia';
    definicaoemportugues.textContent='Indivíduos com medo de papel';
    fraseingles.textContent='This man has Papyrophobia.'

    const audio3_1 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})
const p10 = document.querySelector('#p10')
p10.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';

    palavraemingles.textContent='Bibliophobia';
    definicaoemingles.textContent='Bibliophobia is the fear or hatred of books.';
    palavraemportugues.textContent='Bibliophobia';
    definicaoemportugues.textContent='Medo de livros';
    fraseingles.textContent='My mom has Bibliophobia'
    const audio3_1 = new Audio ('./áudios/28.ogg')
    audioemingles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })

    const audio3_2 = new Audio ('./áudios/')
    audioemingles.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})

