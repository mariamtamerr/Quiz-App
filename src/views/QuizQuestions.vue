<script setup>
import Header from "@/components/Header.vue";
import Options from "@/components/Options.vue";
import Result from "@/components/Result.vue";
import { computed, ref } from "vue";
import { useRoute} from "vue-router";
import quizzesData from "../database/quizzes.json";

const route = useRoute();
const quizId = route.params.id;
const currentQuestionIndex = ref(0);
// see which quiz from db matches this current page quiz
const quiz = quizzesData.quizzes.find((q) => q.id === quizId);


// ---------------------------------------------------
const nextQuestion = () => {
  // Check if there are more questions
  if (currentQuestionIndex.value < quiz.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    alert("You've reached the end of the quiz!");
  }
};
// ---------------------------------------------------




// ---------------------------------------------------
// const barPercentage = computed( () => `${currentQuestionIndex.value + 1 / quiz.questions.length * 100}%`)
const barPercentage = computed(() => {
  return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`;
});
// ---------------------------------------------------

// results
const showResults = ref(false)


// ---------------------------------------------------
// listen to emitted event from option
const numberOfCorrectAnswers = ref(0)

const onOptionSelected = (isCorrect) => {
  // console.log("emiited ", isCorrect)
  if (isCorrect) {
    numberOfCorrectAnswers.value++
  }
  // currentQuestionIndex.value++;
  if (currentQuestionIndex.value < quiz.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    showResults.value = true;
  }
}
// ---------------------------------------------------------------



</script>

<template>
  <div class="py-5 px-6">
    <h3 class="text-center text-3xl">
      Questions: {{ currentQuestionIndex + 1 }}/{{ quiz.questions.length }}
    </h3>
    <div
      class="text-center relative mt-4 mx-auto border-2 border-orange-300 w-64 h-8"
    >
      <div
        class="absolute top-0 left-0 h-full border-2 border-orange-300 bg-orange-300"
        :style="{ width: barPercentage }"
      ></div>
    </div>

    <div class="question mx-auto w-96">
      <Header 
        v-if="!showResults" 
        :question="quiz.questions[currentQuestionIndex]" />
      
      <Options
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected" />
        
       <Result v-else
       :question="quiz.questions.length "
       :numberOfCorrectAnswers="numberOfCorrectAnswers"/>
      
       <button
          v-if="currentQuestionIndex<quiz.questions.length-1"
          @click="nextQuestion"
          class="text-white bg-gray-700 hover:bg-gray-400 ease-in-out duration-300 p-4 py-2 mt-10"
      >
        Next Question
      </button>
    
    </div>
  </div>
</template>
