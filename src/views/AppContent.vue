<template>
	<div id="appContent">
		<NavBar :navItems="navItems" @navItemClicked="handleNavItemClicked" />
		<ContentView :activeView="activeView" />
	</div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import ContentView from '@/components/ContentView.vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();

export default {
	name: 'AppContent',
	data() {
		return {
			navItems: userStore.$state.navItems,
			activeView: { name: 'Home', url: '/home' }
		}
	},
	components: {
		NavBar,
		ContentView
	},
	methods: {
		handleNavItemClicked(item) {
			if (item === 'Logout') {
				userStore.clearUser();
				this.$router.push('/');
			} else {
				this.activeView = item;
			}
		}
	},
}
</script>

<style>
#appContent {
	height: calc(100vh - 16px);
}
</style>
