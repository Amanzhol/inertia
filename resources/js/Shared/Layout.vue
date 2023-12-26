<script setup>
import Nav from "./Nav.vue";
import { computed } from 'vue'
import {usePage} from '@inertiajs/inertia-vue3'

defineProps({
    components: Nav,
},
)

const username = computed(() => {
    return usePage().props.value.auth.user.username;
});
</script>

<template>
    <section class="bg-gray-200 px-5 py-3">
        <header class="flex justify-between">
            <h1 class="font-bold text-lg text-blue-600">App <span>{{$page.url}}</span></h1>
            <Nav/>
        </header>
        <p>Hello, {{username}}</p>
    </section>

    <section class="pl-5 py-3">
        <slot/>
    </section>
</template>
