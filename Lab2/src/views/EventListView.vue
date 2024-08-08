<script setup lang="ts">
  import EventCard from '@/components/EventCard.vue';
  import { type Event } from '@/types'
  import { ref , onMounted , computed , watchEffect} from 'vue'
  import EventService from '@/services/EventService'

  const events = ref<Event[] | null>(null)
  const totalEvents = ref(0)
  const props = defineProps({
    page: {
      type: Number,
      required: true
    }
  })
  const page = computed(() => props.page)

  const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / 3)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(3, page.value)
    .then((response) => {
      console.log(response.data);
      events.value = response.data; 
      totalEvents.value = response.headers['x-total-count']
    })
    .catch((error) => {
      console.error('There was an error!', error);
    })
  })
});
</script>

<template>
  <h1>Events For Good</h1>
    <!-- new element -->
    <div class="flex flex-col items-center">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="flex w-[290px]">
        <RouterLink class="flex-1 no-underline text-gray-600 text-left" :to="{ name: 'event-list-view' , query: { page: page - 1 }}" rel="prev" v-if="page != 1">
          Prev Page
        </RouterLink>
        <RouterLink class="flex-1 no-underline text-gray-600 text-right" :to="{ name: 'event-list-view' , query: { page: page + 1 }}" rel="next" v-if="hasNextPage">
          Next Page
        </RouterLink>
      </div>
    </div>
</template>