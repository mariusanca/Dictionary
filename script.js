const dictionar = [];

function save() {
    let inputWord = document.getElementById('confirmInput').value;
    dictionar.push(inputWord);
    document.getElementById('output-text').innerHTML = `Cuvantul "${inputWord}" a fost salvat cu succes!`
}

function search() {
    let searchWord = document.getElementById('searchInput').value;
    let found = false;
    for (let index = 0; index < dictionar.length; index++) {
        if (dictionar[index] == searchWord) {
            found = true;
            break;
        }
    }
    if (found == true) {
        document.getElementById('search-output-text').innerHTML = `Cuvantul "${searchWord}" exista in dictionar!`;
    } else {
        document.getElementById('search-output-text').innerHTML = `Cuvantul "${searchWord}" nu exista in dictionar!`;
    }
}
