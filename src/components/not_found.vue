<template>
    <div>
        <p><b>{{fullPath}}</b></p>
        <p><b>Error 404:</b> not found.</p>
    </div>
</template>

<script>
    export default
    {
        name: "not_found",
        data(){ return { fullPath: window.location.href }},
        methods: {},
        props: []
    }
</script>