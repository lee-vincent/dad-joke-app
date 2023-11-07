<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import axios from "axios";

	const props = defineProps<{
		url: string;
		temperature: number;
	}>();

	const placeholder = ref({});

	defineEmits(["submit"]);

	const form = reactive({
		url: props.url,
		temperature: props.temperature,
	});


	onMounted(async () => {
		const response = await axios.get(`http://54.224.83.122:3000/api/rand`);
		console.log(response.data);
		placeholder.value = response.data;
	});

</script>
<template>
	<form @submit.prevent="$emit('submit', form)" class="mb-10">
		<div class="flex">
			<input
				placeholder="What should we dad joke about? Cats? Dogs? Anything!"
				v-model="form.url"
				class="input input-bordered rounded-r-none w-full max-w-full"
				type="text" />
			<button class="btn rounded-l-none">Generate Dad Joke</button>
		</div>
	</form>
</template>
