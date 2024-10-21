<script setup>
const {quiz} = defineProps(["quiz"]); // const { 1 } = defineProps( ["1","2"] )
// OR using type specially for TypeScript
// const props = defineProps({
//   quiz: Object
// });

</script>

<template>
  <div>
    <img
      class="w-full h-52 rounded-t-xl"
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
    </div>
  </div>
</template>
