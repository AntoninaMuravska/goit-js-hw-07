const fonSizeControlRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');
// console.dir(fonSizeControlRef)
// console.dir(textRef)

// textRef.style.fontSize

fonSizeControlRef.addEventListener("input", handleInputRange);

function handleInputRange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}