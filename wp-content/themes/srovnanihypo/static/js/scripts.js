// Formulář
// ========

let step = 1;
document.querySelectorAll('.form-block__next-btn').forEach((nextButton) => {
	nextButton.addEventListener('click', nextStepClicked);
	nextButton.addEventListener('touch', nextStepClicked);
});

document.querySelector('.form-block__reset-btn').addEventListener('click', resetStepsClicked);
document.querySelector('.form-block__reset-btn').addEventListener('touch', resetStepsClicked);

let castka = document.querySelector('[name="castka-odhad"]');
let kolikPujcit = document.querySelector('[name="kolik-pujcit"]');

function nextStepClicked() {
	// Kolik si chcete půjčit
	if (step === 2) {
		//console.log(castka);
		if (castka.value === '') {
			castka.value = 2500000;
		}
		kolikPujcit.value = .9 * castka.value;
	}

	step ++;
	document.querySelectorAll('.form-block').forEach((formBlock) => {
		formBlock.classList.remove('active');
		document.querySelector('.form-block.step-' + step).classList.add('active');
	})
}

function resetStepsClicked() {
	step = 1;
	document.querySelectorAll('.form-block').forEach((formBlock) => {
		formBlock.classList.remove('active');
		document.querySelector('.form-block.step-' + step).classList.add('active');
	})
}

// Spočítání procenta půjčky
document.querySelectorAll('[name="procenta-pujcky"]').forEach(procentaItem => {
	procentaItem.addEventListener('change', procentaPujckyChanged);
});

function procentaPujckyChanged(e) {
	if (e.currentTarget.value === '') {
		kolikPujcit.focus();
	} else {
		kolikPujcit.value = e.currentTarget.value * castka.value / 100;
	}
}

kolikPujcit.addEventListener('click', kolikPujcitOtherClicked);
kolikPujcit.addEventListener('touch', kolikPujcitOtherClicked);

function kolikPujcitOtherClicked(e) {
	document.querySelector('#procenta-pujcky-other input').checked = true;
}