<template>
    <div>
        <div class="masthead clearfix">
            <div class="inner">
                <!--<h3 class="masthead-brand"><router-link to="/" class="link-no-underline">Sam Morrison</router-link></h3>-->
                <nav class="nav nav-masthead">
                    <router-link to="/" class="nav-link">Home</router-link>
                    <router-link to="/about" class="nav-link">About</router-link>
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                    <router-link to="/hello" class="nav-link">Hello</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default { name: "NavBar" }
</script>