<template>
	<div id="app-container">
		<NavBar :navItems="navItems" @navItemClicked="handleNavItemClicked" />
		<ContentView :activeView="activeView" />
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ContentView from './components/ContentView.vue';

export default {
	name: 'App',
	data() {
		return {
			navItems: ['Home', 'About', 'Services', 'Contact', 'Help'],
			activeView: 'Home'
		}
	},
	components: {
		NavBar,
		ContentView
	},
	methods: {
		handleNavItemClicked(item) {
			this.activeView = item;
		}
	}
}
</script>

<style>
body {
	background-color: #121212;
}
</style>
