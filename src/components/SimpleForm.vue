<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateForm">
            <md-card class="md-layout-item bg-light">
                <h3 class="text-center">{{ title }}</h3>
                <md-card-content>
                    <md-field :class="getValidationClass('firstName')">
                        <label>First Name</label>
                        <md-input v-model="firstName" required></md-input>
                        <span class="md-error" v-if="!$v.firstName.required">The first name is required</span>
                        <span class="md-error" v-else-if="!$v.firstName.minlength">Invalid first name</span>
                    </md-field>

                    <md-field :class="getValidationClass('lastName')">
                        <label>Last Name</label>
                        <md-input v-model="lastName" required></md-input>
                        <span class="md-error" v-if="!$v.lastName.required">The last name is required</span>
                        <span class="md-error" v-else-if="!$v.lastName.minlength">Invalid last name</span>
                    </md-field>

                    <md-field :class="getValidationClass('email')">
                        <label>Email</label>
                        <md-input type="email" v-model="email" required></md-input>
                        <span class="md-error" v-if="!$v.email.required">The email is required</span>
                        <span class="md-error" v-else-if="!$v.email.email">Invalid email</span>
                    </md-field>

                    <md-datepicker v-model="selectedDate">
                        <label>Select date</label>
                    </md-datepicker>

                    <md-field :class="getValidationClass('message')">
                        <label>Message</label>
                        <md-textarea v-model="message" required></md-textarea>
                        <span class="md-error" v-if="!$v.message.required">The first name is required</span>
                        <span class="md-error" v-else-if="!$v.message.minlength">Invalid first name</span>
                    </md-field>

                    <md-card-actions>
                        <md-button class="md-dense md-raised bg-primary text-light" type="submit">Send</md-button>
                    </md-card-actions>
                </md-card-content>
                <md-progress-bar md-mode="indeterminate" v-if="sending"/>
            </md-card>
            <md-snackbar :md-active.sync="messageSent">Your message has been sent!</md-snackbar>
        </form>
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import {
        required,
        email,
        minLength,
        maxLength
    } from 'vuelidate/lib/validators'
    export default {
        name: "SimpleForm",
        mixins: [validationMixin],
        props: ['title'],
        data() {
            return {
                firstName: null,
                lastName: null,
                email: null,
                selectedDate: null,
                message: null,
                messageSent: false,
                sending: false,
                formDisabled: false,
                hasErrors: false
            }
        },
        validations: {
            firstName: {
                required,
                minLength: minLength(3)
            },
            lastName: {
                required,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            message: {
                required,
                minLength: minLength(1)
            }
        },
        methods: {
            getValidationClass(fieldName) {
                const field = this.$v[fieldName];
                if(field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            send() {
                this.sending = true;
                this.messageSent = true;
                window.setTimeout(() => {
                    this.resetForm();
                }, 1500);
            },
            resetForm() {
                this.$v.$reset();
                this.firstName = null;
                this.lastName = null;
                this.email = null;
                this.message = null;
                this.messageSent = false;
                this.sending = false;
                this.selectedDate = null;
            },
            validateForm () {
                this.$v.$touch();
                if(!this.$v.$invalid) {
                    this.send();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .md-progress-bar {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }
</style>