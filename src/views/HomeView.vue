<template>
  <div id="home">
		<NavBar :navItems="navItems" @navItemClicked="handleNavItemClicked" />
		<ContentView :activeView="activeView" />
	</div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import ContentView from '@/components/ContentView.vue';

export default {
  name: 'HomeView',
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
