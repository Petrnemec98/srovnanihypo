// Navigation toggle
// =================


document.querySelector('.navigation__toggle').addEventListener('click', toggleNavigation);

function toggleNavigation()
{
	document.querySelector('.main-nav').classList.toggle('open');
	document.querySelector('.navigation__toggle').classList.toggle('open');
}

//Výsledek
//========
document.addEventListener('DOMContentLoaded', function () {
	const queryString = window.location.search;
	console.log('QueryString:', queryString);
	const urlParams = new URLSearchParams(queryString);

	// Získání hodnot z URL a nastavení do HTML
	const propertyType = urlParams.get('typ-nemovitosti[0]');
	console.log('Property Type:', propertyType);
	document.getElementById('propertyType').textContent = propertyType;

	const estimatedAmount = urlParams.get('castka-odhad');
	console.log('Estimated Amount:', estimatedAmount);
	document.getElementById('estimatedAmount').textContent = new Intl.NumberFormat('cs-CZ').format(estimatedAmount);


	const borrowAmount = urlParams.get('kolik-pujcit');
	console.log('Borrow Amount:', borrowAmount);
	document.getElementById('borrowAmount').textContent = new Intl.NumberFormat('cs-CZ').format(borrowAmount);

	const repaymentPeriod = urlParams.get('doba-splaceni');
	console.log('Repayment Period:', repaymentPeriod);
	document.getElementById('repaymentPeriod').textContent = repaymentPeriod;

	const repaymentAmount = urlParams.get('doba-splaceni-castka');
	console.log('Repayment Amount:', repaymentAmount);
	document.getElementById('repaymentAmount').textContent = new Intl.NumberFormat('cs-CZ').format(repaymentAmount);
});

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


function toggleAccordion(element) {
	var content = element.nextElementSibling;
	var accordionItem = element.parentNode; // Získá rodičovský prvek

	if (content.style.display === "block") {
		content.style.display = "none";
		accordionItem.classList.remove("active"); // Odebrání třídy active
	} else {
		content.style.display = "block";
		accordionItem.classList.add("active"); // Přidání třídy active
	}
}

let lengthRange = document.querySelector('[name="doba-splaceni"]');
let lengthRangeInfo = document.querySelector('#doba-splaceni-value-info');
let loanPayment = document.querySelector('[name="doba-splaceni-castka"]');
lengthRange.addEventListener('input', lengthRangeChanged);
lengthRange.value = 1;
function lengthRangeChanged(e) {
	loanPayment.value = (kolikPujcit.value / (e.currentTarget.value * 12)).toFixed(0);
	lengthRangeInfo.innerHTML = e.currentTarget.value;
}

kolikPujcit.addEventListener('input', lengthRangeChanged);
kolikPujcit.addEventListener('change', lengthRangeChanged);



document.addEventListener('DOMContentLoaded', function() {

	const range = document.querySelector('input[type="range"]');
	const dobaSplaceniValueInfo = document.querySelector('#doba-splaceni-value-info');
	const dobaSplaceniValueInfoWrapper = document.querySelector('.doba-splaceni-value-info');

	function updateRangeBackground() {
		const minValue = parseInt(range.min) || 0; // Minimální hodnota range
		const maxValue = parseInt(range.max) || 100; // Maximální hodnota range
		const currentValue = parseInt(range.value); // Aktuální hodnota range
		const percentage = ((currentValue - minValue) / (maxValue - minValue)) * 100;

		range.style.background = `linear-gradient(to right, black 0%, black ${percentage}%, var(--yellow-color) ${percentage}%, var(--yellow-color) 100%)`;
	}

	function updateValueInfoPosition() {
		const rangeWidth = range.offsetWidth;
		const minValue = parseInt(range.min) || 0;
		const maxValue = parseInt(range.max) || 100;
		const currentValue = parseInt(range.value);
		const percentage = ((currentValue - minValue) / (maxValue - minValue));
		const position = (percentage * rangeWidth) - (dobaSplaceniValueInfoWrapper.offsetWidth / 2) + (range.getBoundingClientRect().left - range.parentElement.getBoundingClientRect().left);

		dobaSplaceniValueInfoWrapper.style.left = `${position}px`;
		dobaSplaceniValueInfo.textContent = currentValue;
	}

	// Aktualizace při posunu posuvníkem
	range.addEventListener('input', function() {
		updateRangeBackground();
		updateValueInfoPosition();
	});

	// Inicializace při načtení stránky
	updateRangeBackground();
	updateValueInfoPosition();
});

document.querySelector('.odeslatbutton').setAttribute('disabled', 'true');
document.querySelectorAll('.form-last-step input[type="text"]').forEach((item) => {
	item.addEventListener('input', isReadyToSend);
	item.addEventListener('onkeypress', isReadyToSend);
});

function isReadyToSend() {
	let readyToSend = true;
	document.querySelectorAll('.form-last-step input').forEach((item) => {
		if (item.value === '') {
			readyToSend = false;
		}
	});

	console.log(readyToSend);
	if (readyToSend) {
		document.querySelector('.odeslatbutton').removeAttribute('disabled');
	} else {
		document.querySelector('.odeslatbutton').setAttribute('disabled', 'true');
	}
}




