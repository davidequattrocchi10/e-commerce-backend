<template>

    <div class="flex min-h-full bg-gray-100">
        <!-- Sidebar Component -->
        <!-- 
          If sidebarOpened is true, no class will be applied. 
          Otherwise it will be applied to the Sidebar component. 
          -->
        <Sidebar :class="{ '-ml-[200px]': !sidebarOpened }"></Sidebar>

        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar"></Navbar>

            <!-- Content  -->
            <main class="p-6">
                <div class="p-4 rounded bg-white shadow">
                    <router-view></router-view>
                </div>
            </main>

        </div>
    </div>


</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Sidebar from './Sidebar.vue';
import Navbar from './Navbar.vue';

const { title } = defineProps({
    title: String
})

const sidebarOpened = ref(true);

// Change the value of sidebarOpened
function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value
    console.log(sidebarOpened.value)
}

onMounted(() => {
    // After the component is inserted into the DOM call the handleSidebarOpened function
    handleSidebarOpened();
    // Whenever the browser window is resized call the handleSidebarOpened function
    window.addEventListener('resize', handleSidebarOpened)
})

onUnmounted(() => {
    // remove the event listener from the window so to prevent errors or unexpected behavior
    window.removeEventListener('resize', handleSidebarOpened)
})

/* Set the value of sidebarOpened equal true 
if the width of window more than 768 */
function handleSidebarOpened() {
    sidebarOpened.value = window.outerWidth > 768;
}

</script>


<style scoped></style>