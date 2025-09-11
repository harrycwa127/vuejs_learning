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
div.contentView {
	background-color: #2e2e2e;
	padding: 10px;
	color: #e4e4e4;
	display: flex;
	align-items: center;
}
</style>
