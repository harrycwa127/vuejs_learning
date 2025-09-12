<template>
	<div class="contentView">
		<h3 class="title">{{ activeView.name }}</h3>
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
		deep: true
	}
}
</script>

<style scoped>
div.contentView {
	padding: 20px;
	background-color: #393e46;
	min-height: 600px;
}

h3.title {
	margin: 0;
	padding-top: 0px;
	padding-bottom: 10px;
}

div.content {
	width: 100%;
	height: 100%;
}
</style>

<style>
div.content {
	background-color: #393e46;
	color: #e6e6e6;
}
</style>
