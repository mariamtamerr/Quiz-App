<script setup>
import { ref } from "vue";
import quizzes from "../database/quizzes.json";
import Card from '../components/Card.vue'
import Search from '../components/Search.vue'

const search = ref("");

// search filter & display results
const filteredQuizzes = () => {
    // console.log(quizzes.quizzes.filter(el => el.title.toLowerCase().includes(search.value.toLowerCase() )) )
    return quizzes.quizzes.filter(el => el.title.toLowerCase().includes(search.value.toLowerCase())) 
};
</script>

<template>
  <div class="all p-10 px-20 ">

    <!-- start : search input -->
    <div class="search sm:flex justify-center sm:gap-5">
      <div class="title">
        <h4 class="font-bold text-2xl mb-5 sm:mb-auto text-center">Quizzes</h4>
      </div>
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
          v-model.trim="search"
          class="py-3 ps-10 pe-4 block w-full border border-gray-500 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          type="text"
          role="combobox"
          aria-expanded="false"
          placeholder="Type a quiz name"
        />
      </div>
    </div>
    <!-- <Search :search="search" /> -->
  <!-- end : search input -->


   <!-- start : quizzes -->
    <div
   v-if="filteredQuizzes().length"
    class="cards xl:ps-44  flex flex-wrap mt-20 gap-20 ">

      <div
        v-for="quiz in filteredQuizzes()"
        :key="quiz.id"
        class="w-64 mx-auto  flex flex-col bg-white border shadow-sm rounded-xl"
      >
        <!-- <img
          class="w-full h-full rounded-t-xl"
          :src="quiz.image"
          alt="Card Image"
        />
        <div class="p-4 md:p-5 text-center">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            {{ quiz.title }}
          </h3>
          <p class="text-gray-500 font-medium">
            {{ quiz.numberOfQuestions }} Questions
          </p>
        </div> -->
        <RouterLink :to="`/quiz/${quiz.id}`" class="hover:scale-105 ease-in-out duration-300  hover:shadow-md hover:shadow-slate-800 ">
            <Card :quiz="quiz"/>
        </RouterLink>
        
      </div>
    </div>
    <!-- end : quizzes -->

    <!-- in case of no search results -->
    <div v-else class="text-center col-span-full grid gap-5 mt-20">
        <p class="text-xl font-bold text-red-500">No results found</p>
    </div>
  </div>
</template>

<style scoped></style>
