<template>
	<div class="contentView">
		<h1>{{ activeView.name }}</h1>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'ContentView',
	props: {
		activeView: {
			type: Object,
			default: () => ({ name: 'Home', url: '/home' })
		}
	},
	watch: {
		activeView(newVal) {
			this.$router.push(newVal.url);
		},
		deep: true
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
