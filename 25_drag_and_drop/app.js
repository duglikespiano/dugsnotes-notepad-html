const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
});

function dragStart(e) {
	// some browsers require some data for drag to work (Firefox)
	if (e.dataTransfer) e.dataTransfer.setData('text/plain', '');
	// Defer hiding so browser creates drag image first
	setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd() {
	this.classList.remove('invisible');
}

function dragOver(e) {
	e.preventDefault(); // necessary to allow drop
}

function dragEnter(e) {
	e.preventDefault();
	e.currentTarget.classList.add('hovered');
}

function dragLeave(e) {
	e.currentTarget.classList.remove('hovered');
}

function dragDrop(e) {
	e.preventDefault();
	const target = e.currentTarget;
	target.classList.remove('hovered');
	target.appendChild(fill); // moves the existing node
	// appendChild() (and also append(), insertBefore(), etc.)
	// 👉 doesn’t copy the element — it moves it in the DOM.
	// target.appendChild(fill.cloneNode(true));
	// is needed when copy the element
}
