<template>
	<div class="navBar">
		<img class="navIcon" src="../assets/logo.png" alt="Logo" height="30" />
		<button class="navItem" v-for="(item, index) in navItems" :key="index">{{ item }}</button>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	props: {
		navItems: Array
	}
}
</script>

<style scoped>
div.navBar {
	background-color: #333;
	padding: 10px;
	color: white;
	display: flex;
	align-items: center;
}

button.navItem {
	background-color: inherit;
	border: none;
	color: white;
	margin-left: 10px;
	margin-left: 10px;
	cursor: pointer;
}

img.navIcon {
	margin-right: 20px;
}
</style>
