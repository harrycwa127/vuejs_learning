<template>
	<div class="contentView">
		<h2 class="title">{{ activeView.name }}</h2>
		<div class="content">
			<router-view />
		</div>
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
	}
}
</script>

<style scoped>
div.contentView {
	padding: 20px;
	min-height: calc(100vh - 105px);
	/* height - navBar height 75px - content padding 16px - contentView 40px padding */
}

h2.title {
	margin: 0;
	padding-top: 0px;
	padding-bottom: 10px;
}

</style>

<style>
div.content {
	color: black;
}
</style>
