<template>
    <div class="w-[200px] transition-all bg-blue-800 text-gray-300 py-4 px-2">
        <router-link :to="{ name: 'app.dashboard' }"
            class="flex items-center py-2 px-3 rounded transition-colors hover:bg-black/30 mb-2">
            <span class="mr-2">
                <!-- For the icon there are two ways:
                1. Copy the icon from https://heroicons.com-->
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg> -->
                <!-- 2. Import the Icon from @heroicons -->
                <HomeIcon class="h-6 w-6" />

            </span>
            <span>
                Dashboard
            </span>
        </router-link>

        <router-link :to="{ name: 'app.products' }"
            class="flex items-center py-2 px-3 rounded transition-colors hover:bg-black/30 mb-2">
            <span class="mr-2">
                <ListBulletIcon class="h-6 w-6" />
            </span>
            <span>
                Products
            </span>
        </router-link>

        <router-link :to="{ name: 'app.dashboard' }"
            class="flex items-center py-2 px-3 rounded transition-colors hover:bg-black/30 mb-2">
            <span class="mr-2">
                <UserIcon class="h-6 w-6" />
            </span>
            <span>
                Users
            </span>
        </router-link>

        <router-link :to="{ name: 'app.dashboard' }"
            class="flex items-center py-2 px-3 rounded transition-colors hover:bg-black/30 mb-2">
            <span class="mr-2">
                <ChartBarIcon class="h-6 w-6" />
            </span>
            <span>
                Reports
            </span>
        </router-link>
    </div>

</template>

<script setup>

import { HomeIcon, UserIcon, ChartBarIcon, ListBulletIcon } from '@heroicons/vue/24/solid';

</script>


<style scoped></style>