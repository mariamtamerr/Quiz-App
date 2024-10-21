<script setup>
import { defineProps } from 'vue';

const { question } = defineProps(["question"]);
</script>

<template>
  <div class="mt-20 mb-6 max-w-[340px] sm:max-w-full">
    <h5 class="Header mt-10 mb-5 text-xl">
     {{question.question}}
    </h5>
  </div>
</template>

<style lang="scss" scoped></style>
