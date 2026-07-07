(function () {
    const defaultEndpoint = 'https://formspree.io/f/mnjyeeod';

    window.PUPPYTEACH_FORM_CONFIG = window.PUPPYTEACH_FORM_CONFIG || {
        formspreeEndpoint: defaultEndpoint
    };

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('form[data-formspree-form]').forEach(function (form) {
            form.action = form.dataset.formspreeEndpoint || window.PUPPYTEACH_FORM_CONFIG.formspreeEndpoint;
        });
    });
})();
