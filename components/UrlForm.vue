<script setup lang="ts">
	const props = defineProps<{
		url: string;
		temperature: number;
	}>();
	defineEmits(["submit"]);
	const form = reactive({
		url: props.url,
		temperature: props.temperature,
	});
</script>
<template>
	<form @submit.prevent="$emit('submit', form)" class="mb-10">
		<div class="flex">
			<input
				placeholder="What should we 'Dad Joke' about? Cats? Dogs? Anything!"
				v-model="form.url"
				class="input input-bordered rounded-r-none w-full max-w-full"
				type="text" />
			<button class="btn rounded-l-none">Generate Dad Joke</button>
		</div>
	</form>
</template>
