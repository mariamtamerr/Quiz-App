<script setup>
import { defineProps, ref, defineEmits } from "vue";

const { question } = defineProps(["question"]);

const emit = defineEmits(["selectOption"]);


const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect)
}
</script>

<template>
  <div class="Options container mx-auto">
    <div
    @click="emitSelectedOption(option.isCorrect)"
      v-for="option in question.options"
      :key="option.id"
      class="choice flex items-center mb-6 hover:scale-105 ease-in-out duration-300 cursor-pointer "
    >
      <div class="left w-fit px-3 text-black bg-orange-300 p-2">
        {{ option.label }}
      </div>
      <div class="right w-64 text-black bg-gray-300 p-2">{{ option.text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
