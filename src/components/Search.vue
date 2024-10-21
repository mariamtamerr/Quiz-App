<script setup>
import { ref } from "vue";

const search = defineProps(['search']);
const sss = () => {
    console.log(search);
}

// const searchInput = ref(search)
</script>

<template>
    <div>
        <div class="search sm:flex justify-center sm:gap-5">
            <div class="title">
                <h4 class="font-bold text-2xl mb-5 sm:mb-auto text-center">Quizzes</h4>
            </div>
            <!-- SearchBox -->
            <div class="relative">
                <div
                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5"
                >
                    <svg
                        class="shrink-0 size-4 text-gray-400 dark:text-white/60"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
                <input
                    @input="sss"
                    v-model.trim="search" 
                    class="py-3 ps-10 pe-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    type="text"
                    role="combobox"
                    aria-expanded="false"
                    placeholder="Type a quiz name"
                />
            </div>
            <!-- End SearchBox -->
        </div>
    </div>
</template>
