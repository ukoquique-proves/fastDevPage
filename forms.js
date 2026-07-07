(function () {
    window.formspree = window.formspree || function () {
        (formspree.q = formspree.q || []).push(arguments);
    };

    document.addEventListener('DOMContentLoaded', function () {
        const forms = [
            { selector: '#puppyteach-waitlist-form', formId: 'mnjyeeod' },
            { selector: '#puppyteach-capture-form', formId: 'mnjyeeod' }
        ];

        forms.forEach(function (formConfig) {
            const form = document.querySelector(formConfig.selector);
            if (form) {
                formspree('initForm', {
                    formElement: formConfig.selector,
                    formId: formConfig.formId
                });
            }
        });
    });
})();
