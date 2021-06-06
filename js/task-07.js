const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

const onFontStyleChange = event => {
  const fontSize = event.currentTarget.value;
  textRef.style.fontSize = `${fontSize}px`;
};

inputRef.addEventListener('input', onFontStyleChange);
