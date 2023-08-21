<script setup>
import Title from './components/Title.vue';
import Text from './components/Text.vue';
import Card from './components/Card.vue';
</script>

<template>
  <main class="font-qr-font">
    <Card>
      <template #header>
        <Title />
      </template>
      <template #content>
        <Text />
      </template>
    </Card>
  </main>
</template>