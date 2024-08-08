<script setup lang="ts">
import { toRefs , defineProps} from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';

const props = defineProps<{
  event: Event
  id: String
}>()
//eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
    store.updateMessage('You are successufully registered for ' + props.event.title)
    setTimeout(() => {
        store.resetMessage()
    },3000)
    router.push({ name: 'event-detail-view' , params: { id: props.event.id}})
}
</script>

<template>
    <p>Register event here</p>
    <button @click="register" class="bg-gray-400 rounded hover:bg-purple-500 text-white py-2 px-2 my-4">Register Me!</button>
</template>
