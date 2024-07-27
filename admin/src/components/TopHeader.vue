<template>

    <header class="flex justify-between items-center h-16 shadow bg-white">
        <button class="p-3">
            <Bars3Icon class="h-6 w-6" />
        </button>



        <Menu as="div" class="relative inline-block text-left p-3">

            <MenuButton class="flex items-center p-2">
                <img src="https://randomuser.me/api/portraits/men/11.jpg" class="rounded w-8 m-2">
                <small>John Wick</small>
                <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>


            <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                    class="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="py-1">
                        <MenuItem v-slot="{ active }">
                        <a href="#"
                            :class="[active ? 'bg-blue-800 text-white' : 'text-gray-700', 'px-4 py-2 text-sm flex items-center ']">
                            <UserIcon class="h-6 w-6 mr-2" />Profile
                        </a>
                        </MenuItem>
                        <form method="POST" action="#">
                            <MenuItem v-slot="{ active }">
                            <button type="submit" class="w-full"
                                :class="[active ? 'bg-blue-800 text-white' : 'text-gray-700', 'px-4 py-2 text-sm flex items-center']">
                                <ArrowRightStartOnRectangleIcon class="h-6 w-6 mr-2" />Logout
                            </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { Bars3Icon, UserIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/solid';

</script>



<style scoped></style>