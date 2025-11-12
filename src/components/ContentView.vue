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
		deep: true
	}
}
</script>

<style scoped>
div.contentView {
	padding: 20px;
	background-color: #D9CFC7;
	height: calc(100vh - 131px);
	/* height - navBar height 75px - content padding 16px - contentView 40px padding */
}

h2.title {
	margin: 0;
	padding-top: 0px;
	padding-bottom: 10px;
}

/* div.content {
	width: 100%;
	height: 100%;
} */
</style>

<style>
div.content {
	background-color: #D9CFC7;
	color: black;
}
</style>
