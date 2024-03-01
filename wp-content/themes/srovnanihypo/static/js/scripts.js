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
	document.getElementById('estimatedAmount').textContent = estimatedAmount;


	const borrowAmount = urlParams.get('kolik-pujcit');
	console.log('Borrow Amount:', borrowAmount);
	document.getElementById('borrowAmount').textContent = borrowAmount;

	const repaymentPeriod = urlParams.get('doba-splaceni');
	console.log('Repayment Period:', repaymentPeriod);
	document.getElementById('repaymentPeriod').textContent = repaymentPeriod;

	const repaymentAmount = urlParams.get('doba-splaceni-castka');
	console.log('Repayment Amount:', repaymentAmount);
	document.getElementById('repaymentAmount').textContent = repaymentAmount;
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

lengthRange.value = 10;
function lengthRangeChanged(e) {
	loanPayment.value = (kolikPujcit.value / (e.currentTarget.value * 12)).toFixed(0);
	lengthRangeInfo.innerHTML = e.currentTarget.value;
}


