<template>
    <div>
        <form class="md-layout">
            <md-card class="md-layout-item bg-light">
                <md-card-content>
                    <md-field>
                        <label>First Name</label>
                        <md-input v-model="firstName" required></md-input>
                    </md-field>

                    <md-field>
                        <label>Last Name</label>
                        <md-input v-model="lastName" required></md-input>
                    </md-field>
                    <md-field>
                        <label>Email</label>
                        <md-input v-model="email" required></md-input>
                    </md-field>
                    <md-field>
                        <label>Message</label>
                        <md-textarea v-model="message" required></md-textarea>
                    </md-field>
                    <md-card-actions>
                        <md-button class="md-dense md-raised" :class="sendEnabled" @click="send" @keyup.enter="send" :disabled="disabled">Send</md-button>
                    </md-card-actions>
                </md-card-content>
                <md-progress-bar md-mode="indeterminate" v-if="sending"/>
            </md-card>
            <md-snackbar :md-active.sync="messageSent">Your message has been sent!</md-snackbar>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SimpleForm",
        data() {
            return {
                firstName: null,
                lastName: null,
                email: null,
                message: null,
                messageSent: false,
                sending: false,
                formDisabled: false
            }
        },
        methods: {
            send() {
                this.sending = true;
                this.messageSent = true;
                window.setTimeout(() => {
                    this.resetForm();
                }, 1500);
            },
            resetForm() {
                this.firstName = null;
                this.lastName = null;
                this.email = null;
                this.message = null;
                this.messageSent = false;
                this.sending = false;
            }
        },
        computed: {
            disabled() {
                return this.formDisabled = (this.firstName === null || this.firstName === "" || this.lastName === null || this.lastName === "" || this.email === null || this.email === "" || this.message === null || this.message === "");
            },
            sendEnabled() {
                if(!this.formDisabled) {
                    return {
                        'bg-primary': true,
                        'text-light': true
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    small {
        display: block;
    }
</style>