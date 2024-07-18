<template>

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                Part of the layout
            </div>
            <router-view></router-view>
        </div>
    </div>


</template>

<script setup>
const { title } = defineProps({
    title: String
})
</script>


<style scoped></style>