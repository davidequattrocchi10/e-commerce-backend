<template>
    <div class="flex justify-center items-center min-h-full">
        <div class="flex">
            <div class="text-blue-600 self-start text-5xl font-bold px-8 pb-8 "> 404</div>
            <div class="text-black border-l border-blue-600 px-8">
                <h1 class="text-5xl font-bold mb-4"> Page Not Found</h1>
                <p class="text-gray-500 mb-4">Please check the URL in address bar and try again</p>
                <div>
                    <router-link :to="{ name: 'app.dashboard' }"
                        class="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Go Back Home</router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'notfound'
}
</script>


<style scoped></style>