const item = document.getElementById('E');

function add() {
    let content = item.value;
    if (content.length == 0)
        return;
    let mainBlock = document.getElementById('naya');
    let nb = document.createElement('div');
    let nt = document.createElement('div');
    let bt = document.createElement('button');
    bt.innerText = 'delete';
    nt.innerText = content;
    nb.appendChild(nt);
    nb.appendChild(bt);
    nb.setAttribute('class', 'task');
    nt.setAttribute('class', 'task2');
    bt.setAttribute('class', 'bu2');
    mainBlock.appendChild(nb);
    removeTask(mainBlock,nb,bt);
    item.value = '';
};


function removeTask(mb, nb, bt) {
    bt.addEventListener('click', function (){
        mb.removeChild(nb);
    });
}