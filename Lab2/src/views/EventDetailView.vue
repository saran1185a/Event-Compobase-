<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Event from '@/type/Event'
const event = ref<Event> (null)

onMounted(() => {

})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
