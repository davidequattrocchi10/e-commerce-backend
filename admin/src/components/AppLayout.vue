<template>

    <div class="flex min-h-full bg-gray-100">
        <!-- Sidebar Component -->
        <Sidebar :class="{ '-ml-[200px]': !sidebarOpened }"></Sidebar>

        <div class="flex-1">
            <TopHeader @toggle-sidebar="toggleSidebar"></TopHeader>

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
import { ref } from 'vue';
import Sidebar from './Sidebar.vue';
import TopHeader from './TopHeader.vue';

const { title } = defineProps({
    title: String
})

const sidebarOpened = ref(true);

function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value
    console.log(sidebarOpened.value)
}
</script>


<style scoped></style>