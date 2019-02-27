<template>
    <div>
        <!--<h3 class="masthead-brand"><router-link to="/" class="link-no-underline">Sam Morrison</router-link></h3>-->
        <nav class="nav nav-tabs justify-content-center nav-background">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
        </nav>
    </div>
</template>

<script>
    export default { name: "NavBar" }
</script>