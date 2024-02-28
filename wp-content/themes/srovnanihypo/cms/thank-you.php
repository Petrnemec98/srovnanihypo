<?php
/* Template Name: Děkujeme - coffee digital*/
get_header();
?>
<script>
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    // Opravený název parametru z 'protyp-nemovitosti' na 'typ-nemovitosti[0]'
    const propertyType = urlParams.get('typ-nemovitosti[0]')
    console.log('Typ nemovitosti:', propertyType);

    // Správně
    const estimatedAmount = urlParams.get('castka-odhad')
    console.log('Odhad částky:', estimatedAmount);

    // Opravený název parametru z 'procenta-pujcky' na 'procenta-pujcky[0]'
    const loanPercentage = urlParams.get('procenta-pujcky[0]')
    console.log('Procenta půjčky:', loanPercentage);

    // Správně
    const borrowAmount = urlParams.get('kolik-pujcit')
    console.log('Kolik půjčit:', borrowAmount);

    // Přidání dalších parametrů
    const repaymentPeriod = urlParams.get('doba-splaceni')
    console.log('Doba splacení:', repaymentPeriod);

    const repaymentAmount = urlParams.get('doba-splaceni-castka')
    console.log('Doba splacení částka:', repaymentAmount);

    const fixationLength = urlParams.get('delka-fixace[0]')
    console.log('Délka fixace:', fixationLength);

    const name = urlParams.get('jmeno')
    console.log('Jméno:', name);

    const email = urlParams.get('email')
    console.log('Email:', email);

    const phoneNumber = urlParams.get('phone-number')
    console.log('Telefonní číslo:', phoneNumber);

    const postalCode = urlParams.get('PSC')
    console.log('PSČ:', postalCode);

        document.addEventListener('DOMContentLoaded', function() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const borrowAmount = parseFloat(urlParams.get('kolik-pujcit'));
        const estimatedAmount = parseFloat(urlParams.get('castka-odhad'));

        const ratio = borrowAmount / (estimatedAmount / 100);
        let interestContent;

        // Předpokládané hodnoty z PHP - tady musíte doplnit skutečné hodnoty
        const interest1 = "<?=get_field('urok_1','option');?>";
        const interest2 = "<?=get_field('urok_2','option');?>";
        const interest3 = "<?=get_field('urok_3','option');?>";

            if (ratio >= 0 && ratio <= 70) {
            interestContent = interest1;
        } else if (ratio >= 71 && ratio <= 80) {
            interestContent = interest2;
        } else if (ratio >= 81) {
            interestContent = interest3;
        }

        const interestElement = document.getElementById('urok');
        if (interestElement) {
        interestElement.innerHTML = interestContent;
    }
    });

</script>


<div class="section">
    <div class="container intro-block">
        <h1><?=get_field('nadpis');?></h1>
        <?=get_field('perex');?>

        <p id="urok"><?=get_field('urok_1','option');?></p>
    </div>
</div>

<?php
get_footer();
?>
