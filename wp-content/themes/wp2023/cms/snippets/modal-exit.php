<? if (get_field('modal_exit','options')) { ?>
    <div class="modal" id="nezdrzujte-se">
        <div class="modal-box-wrap">
            <div class="modal-box modal-exit">
                <div class="modal-close">
                    <a href="javascript:void(0)" class="modal-close-inner" aria-label="<? _e('Zavřít','ari'); ?>">
                        <img src="<?=get_template_directory_uri(); ?>/static/filles/x-close.svg" alt="<? bloginfo('name'); ?>">
                    </a>
                </div>


                <div class="modal-content">
                    <div class="section-head">
                        <h2><?=get_field('nadpis_exit','options'); ?></h2>
                    </div>
                    <div class="intro">
                        <?=get_field('text_exit','options'); ?>
                    </div>
                    <?=do_shortcode('[contact-form-7 id="726" title="Exit popup" html_class="std form-exit"]'); ?>
                    <? if (get_field('poznamka_exit_zobrazit','options')) { ?>
                        <div class="intro text-small last">
                            <?=get_field('poznamka_exit','options'); ?>
                        </div>
                    <? } ?>
                </div>
            </div>
        </div>
    </div>
    <a href="#nezdrzujte-se" class="modal-trigger"></a>
    <script>
        // Exit intent
        jQuery(function() {
            var cookie = 'modalExit';

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                setTimeout(function() {
                    if (ReadCookie(cookie) != 'true') {
                        jQuery('[href="#nezdrzujte-se"]').click();

                        SetCookie(cookie, 'true', 365);
                    }
                }, 8000);
            } else {
                jQuery.exitIntent('enable');

                jQuery(document).on('exitintent', function() {
                    if (ReadCookie(cookie) != 'true') {
                        jQuery('[href="#nezdrzujte-se"]').click();
                        SetCookie(cookie, 'true', 365);
                    }
                });
            }
        });
    </script>
<? } ?>
