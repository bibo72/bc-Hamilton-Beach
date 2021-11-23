import PageManager from './page-manager';
import nod from './common/nod';
import forms from './common/models/forms';

export default class ContactUs extends PageManager {
    onReady() {
        if ($('.newsletterContact').length) {
            this.registerNewsletterContactFormValidation();
        } else {
            this.registerContactFormValidation();
        }
    }

    registerContactFormValidation() {
        const formSelector = 'form[data-contact-form]';
        const contactUsValidator = nod({
            submit: `${formSelector} input[type="submit"]`,
        });
        const $contactForm = $(formSelector);

        contactUsValidator.add([
            {
                selector: `${formSelector} input[name="contact_email"]`,
                validate: (cb, val) => {
                    const result = forms.email(val);

                    cb(result);
                },
                errorMessage: this.context.contactEmail,
            },
            {
                selector: `${formSelector} textarea[name="contact_question"]`,
                validate: (cb, val) => {
                    const result = forms.notEmpty(val);

                    cb(result);
                },
                errorMessage: this.context.contactQuestion,
            },
        ]);

        $contactForm.on('submit', event => {
            contactUsValidator.performCheck();

            if (contactUsValidator.areAll('valid')) {
                return;
            }

            event.preventDefault();
        });
    }
    registerNewsletterContactFormValidation() {
        const formSelector = 'form[data-contact-form]';
        const contactUsValidator = nod({
            submit: `${formSelector} input[type="submit"]`,
        });
        const $contactForm = $(formSelector);

        contactUsValidator.add([
            {
                selector: `${formSelector} input[name="contact_email"]`,
                validate: (cb, val) => {
                    const result = forms.email(val);

                    cb(result);
                },
                errorMessage: this.context.contactEmail,
            },
        ]);

        $contactForm.on('submit', event => {
            event.preventDefault();
            contactUsValidator.performCheck();

            if (contactUsValidator.areAll('valid')) {
                const $contactForm = $('form[data-contact-form]');
                const $contactEmail = $('input[name="contact_email"]', $contactForm);
                const $contactSubmit = $('input[type="submit"]', $contactForm);
                $contactSubmit.prop('disabled', true);
                $('.footer #nl_email').val($contactEmail.val());
                $('.footer input[type="submit"]').trigger('click');
            }
        });
    }
}
