<template>
	<div class="contentView">
		<h1>{{ activeView }}</h1>
	</div>
</template>

<script>
export default {
	name: 'ContentView',
	props: {
		activeView: String
	}
}
</script>

<style scoped>
/* div.contentView {
	padding: 10px;
	display: flex;
	align-items: center;
} */
</style>
