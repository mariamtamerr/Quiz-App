<script setup>
import { defineProps } from 'vue';

const { question } = defineProps(["question"]);
</script>

<template>
  <div class="mt-20 mb-6 ">
    <h5 class="Header mt-10 mb-5 text-xl">
     {{question.question}}
    </h5>
  </div>
</template>

<style lang="scss" scoped></style>
