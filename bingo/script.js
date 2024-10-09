const messages = [
'Footprint',
'Best Practice',
'Customer Centric',
'AI',
'ChatGPT',
'Machine Learning',
'Sustainability',
'Ecosystem',
'Lead',
'Empower',
'Holistic',
'Streamline',
'SAP',
'End-To-End',
'Result(s) Driven',
'Siloed',
'Strategic Fit',
'Strategic Gap',
'Synergy',
'Task Force',
'Sprint',
'War For Talent',
'Bandwidth',
'Value Chain',
'Vision Statement',
'Scenario(s)',
'Agile',
'Velocity',
'Strategic Fit',
'Core Competencies',
'Disruptive',
'Out Of The Box',
'Value Add',
'DNA',
'Big Data',
'Were On It',
'Reinvent(ing)'];


const bingo = document.getElementById('bingo');
const cells = document.getElementById('cells');
const welcome = document.getElementById('welcome');

function play(CELL_COUNT) {
  welcome.classList.add('hidden');
  cells.className = '';
  cells.classList.add('items-' + CELL_COUNT);

  function checkIfBingo() {
    const checkedItems = Array.from(document.getElementsByClassName('selected'));
    if (checkedItems.length === CELL_COUNT) {
      bingo.classList.add('visible');
    }
  }

  function createCell(text) {
    const cellN = document.createElement('div');
    cellN.classList.add('cell');
    const contentN = document.createElement('div');
    contentN.classList.add('content');
    const textN = document.createElement('div');
    textN.classList.add('text');
    const textContentN = document.createTextNode(text);
    textN.appendChild(textContentN);
    contentN.appendChild(textN);
    cellN.appendChild(contentN);
    cells.appendChild(cellN);
    return cellN;
  }

  function selectItems(items) {
    return Array.apply(null, { length: CELL_COUNT }).
    map(Number.call, Number).
    reduce(function (selected) {
      let item;
      do {
        item = items[Math.floor(Math.random() * items.length)];
      } while (selected.includes(item));
      return selected.concat([item]);
    }, []);
  }

  Array.from(document.getElementsByClassName('cell')).
  forEach(n => n.parentNode.removeChild(n));
  bingo.classList.remove('visible');

  selectItems(messages).
  map(createCell).
  map(function (cell) {
    cell.addEventListener('click', function () {
      this.classList.toggle('selected');
      checkIfBingo();
    });
    return cell;
  });
}

document.getElementById('retry').addEventListener('click', reset);
Array.from(document.getElementsByClassName('button')).
forEach(function (button) {
  button.addEventListener('click', () => {
    play(parseInt(button.dataset["cells"]));
  });
});

function reset() {
  welcome.classList.remove('hidden');
}