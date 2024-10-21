<script setup>
import { defineProps } from "vue";

const { question } = defineProps(["question"]);
</script>

<template>
  <div class="Options container mx-auto">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="choice flex items-center mb-4"
    >
      <div class="left w-fit px-3 text-black bg-orange-300 p-2">
        {{ option.label }}
      </div>
      <div class="right w-64 text-black bg-gray-300 p-2">{{ option.text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
