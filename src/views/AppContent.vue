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
	name: 'AppContent',
	data() {
		return {
			navItems: [{ name: 'Home', url: '/home' },
			{ name: 'About', url: '/home/about' },
			{ name: 'Services', url: '/home/services' },
			{ name: 'Contact', url: '/home/contact' },
			{ name: 'Help', url: '/home/help' },
			{ name: 'Logout', url: '/' }],
			activeView: 'Home'
		}
	},
	components: {
		NavBar,
		ContentView
	},
	methods: {
		handleNavItemClicked(item) {
			if (item === 'Logout') {
				this.$router.push('/');
			} else {
				this.activeView = item;
			}
		}
	}
}
</script>

<style scoped></style>
