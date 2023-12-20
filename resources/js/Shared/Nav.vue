<script setup>

import NavLink from "./NavLink.vue";

defineProps({
    components: NavLink
})
</script>

<template>
    <nav>
        <ul class="list-disc">
            <li>
                <NavLink href="/" :active="$page.component==='Home'">Home</NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component==='Users'">Users</NavLink>
            </li>
            <li>
                <NavLink href="/settings" :active="$page.component==='Settings'">Settings</NavLink>
            </li>
        </ul>
    </nav>
</template>

