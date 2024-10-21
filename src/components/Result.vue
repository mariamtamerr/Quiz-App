<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const { question, numberOfCorrectAnswers } = defineProps([
  "question",
  "numberOfCorrectAnswers",
]);

const router = useRouter();

const goHome = () => {
   router.push('/');
}
</script>

<template>
  <div class="mx-auto mt-20 text-center">
    <h1 class="text-3xl mb-5">Your Results ....</h1>

    <h1 class="text-4xl font-bold">
      {{ numberOfCorrectAnswers }}/{{ question }}
    </h1>
  </div>

  <div class="button mx-auto text-center">
    <button
    @click="goHome"
        class="text-white mt-44  bg-gray-700 hover:bg-gray-400 ease-in-out duration-300 p-4 py-2"
      >
        Back To Home Page
      </button>
  </div>
  
</template>
