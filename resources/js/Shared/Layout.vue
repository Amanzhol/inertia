<script setup>
import Nav from "./Nav.vue";

defineProps({
    components: Nav
})
</script>

<template>
    <header>
    <h1 class="font-bold text-lg text-blue-600">App</h1>
        <Nav />
    </header>
    <slot />
</template>
