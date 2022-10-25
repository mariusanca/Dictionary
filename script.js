const dictionar = [];

function save() {
    let inputWord = document.getElementById('confirmInput').value;
    dictionar.push(inputWord);
    document.getElementById('output-text').innerHTML = `Cuvantul "${inputWord}" a fost salvat cu succes!`
}

function search() {
    let inputWord = document.getElementById('searchInput').value;
    let found = false;
    for (let index = 0; index < dictionar.length; index++) {
        if (dictionar[index] == inputWord) {
            document.getElementById('search-output-text').innerHTML = `Cuvantul "${inputWord}" exista in dictionar!`;
            found = true;
            break;
        }
    }
    if (found == false) {
        document.getElementById('search-output-text').innerHTML = `Cuvantul "${inputWord}" nu exista in dictionar!`;
    }
}