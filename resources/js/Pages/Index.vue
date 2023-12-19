<script setup>
//
defineProps({ message: String })
</script>

<template>
    <header>
        <h1>Kinsta Blog</h1>
    </header>

    <main>
        <h2>Read our latest articles</h2>

        <section>
            <article>
                <div>
                    <h1>Home Page {{message}}</h1>
                </div>

                <h3>Title for the blog</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum rem
                    itaque error vel perferendis aliquam numquam dignissimos, expedita
                    perspiciatis consectetur!
                </p>

                <a href="#">Read more</a>
            </article>
        </section>
    </main>

    <footer>

    </footer>
</template>
