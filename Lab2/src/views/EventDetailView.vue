<script setup lang="ts">
import { onMounted, ref , defineProps} from 'vue'
import Event from '@/types/Event'
import EventService from '@/services/EventService';

const event = ref<Event>(null)
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
      EventService.getEvent(props.id)
      .then((response) => {
        event.value = response.data
      })
      .catch((error) => {
        console.error('There was an error!' , error)
      })
  })
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>
