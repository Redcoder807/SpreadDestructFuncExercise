const jPDinos = [`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosaurus`]

function seeDinos(a, b, c){
    console.log(a);
    console.log(b, c);
}

seeDinos(...jPDinos);

const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}

seeCharacters(jPCharacters);