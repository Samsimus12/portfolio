<template>
    <div>
        <simple-form class="simple-form" :title="'Contact Me'"></simple-form>
    </div>
</template>

<script>
    import SimpleForm from './SimpleForm.vue'
    export default { name: "Contact", components: { SimpleForm } }
</script>