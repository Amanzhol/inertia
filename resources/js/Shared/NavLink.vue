<script setup>

import {Link} from "@inertiajs/inertia-vue3";
defineProps({
    components: Link,
    active:Boolean
})
</script>

<template>
    <Link :class="{'font-bold underline': active}"><slot /></Link>
</template>


