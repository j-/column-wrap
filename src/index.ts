import { columnWrap } from './column-wrap';

const elements = {
  form: document.getElementById('form') as HTMLFormElement,
  input: document.getElementById('input') as HTMLTextAreaElement,
  output: document.getElementById('output') as HTMLTextAreaElement,
  columns: document.getElementById('columns') as HTMLInputElement,
};

const values = Object.defineProperties({}, {
  input: {
    get: () => elements.input.value,
  },
  output: {
    set: (value) => elements.output.value = value,
  },
  columns: {
    get: () => elements.columns.valueAsNumber,
  },
});

function updateUI () {
  values.output = columnWrap(
    values.input,
    values.columns,
  );
}

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();
  updateUI();
});

updateUI();
