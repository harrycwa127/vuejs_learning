<template>
	<div class="navBar">
		<img class="navIcon" src="../assets/logo.png" alt="Logo" height="30" />
		<button class="navItem" v-for="(item, index) in navItems" :key="index" @click="$emit('navItemClicked', item)">
			{{ item }}
		</button>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	props: {
		navItems: Array
	},
	emits: ['navItemClicked']
}
</script>

<style scoped>
div.navBar {
	background-color: #2e2e2e;
	padding: 10px;
	color: #e4e4e4;
	display: flex;
	align-items: center;
	margin-bottom: 5px;
}

button.navItem {
	background-color: inherit;
	border: none;
	color: #e4e4e4;
	margin-left: 10px;
	margin-left: 10px;
	cursor: pointer;
}

img.navIcon {
	margin-right: 20px;
}
</style>
