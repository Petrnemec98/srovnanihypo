<?php
/* Template Name: Děkujeme - coffee digital*/
get_header();
?>



<div class="section intro">
    <div class="container intro-block">
        <h1><?=get_field('nadpis');?></h1>
        <?=get_field('perex');?>


    </div>
</div>

<!--Výsledek z kalkulačky-->
<div class="section calculator-result">
    <div class="container">
        <div class="row m-720">
            <div class="col-12 col-md-4">
                <div class="yellow-circle">
                    <span>Úrok</span>
                    <h3 id="urok"><?=get_field('urok_1','option');?></h3>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <div class="row info-area">
                    <div class="col-12">
                        <span>Měsíční splátka</span>
                        <h3><span id="repaymentAmount"></span>,- Kč</h3>
                    </div>
                    <div class="col-12">
                        <span>Doba splácení</span>
                        <h3><span id="repaymentPeriod"></span> let</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="row info-area m-720">
            <div class="col-12 col-md-4">
                <span>Typ nemovitosti</span>
                <h3><span id="propertyType"></span></h3>
            </div>
            <div class="col-12 col-md-4">
                <span>Odhad částky</span>
                <h3><span id="estimatedAmount"></span>,- Kč</h3>
            </div>
            <div class="col-12 col-md-4">
                <span>Kolik půjčit</span>
                <h3><span id="borrowAmount"></span>,- Kč</h3>
            </div>
        </div>
        <div class="row m-auto">

            <a href="<?= home_url(); ?>" class="btn primary">
                &#x1F3E0; Zpět na domovskou obrazovku
            </a>

        </div>
    </div>

</div>

<!--How-to-->
<?php include(get_template_directory() . "/cms/snippets/how-to.php"); ?>

<!--Partneři-->
<?php include(get_template_directory() . "/cms/snippets/partneri-light.php"); ?>

<script>
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

<?php
get_footer();
?>
