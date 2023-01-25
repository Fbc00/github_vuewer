<template>
	<v-card
		max-width="700"
	>
		<v-card-text>
			<pre>{{ popupvalue }}</pre>
		</v-card-text>
	</v-card>
</template>

<script>
export default {
	props: {
		popupvalue: String
	},

}
</script>

<style scoped>

</style>