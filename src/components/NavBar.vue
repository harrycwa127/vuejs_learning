<template>
	<div class="navBar">
		<img class="navIcon" src="../assets/logo.png" alt="Logo" height="50" />
		<div class="navItems">
			<div class="navItem" v-for="(item, index) in navItems" :key="index">
				<button class="navItemBtn" @click="handelNavItemClicked(item)">
					{{ item.name }}
				</button>
			</div>
		</div>
		<div class="navItems-right">
			<div class="navItem">
				<button class="navItemBtn" @click="handelNavItemClicked({ name: 'Logout', url: '/' })">
					<img src="../assets/logout.svg" alt="Logout" height="40" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavBar',
	props: {
		navItems: {
			type: Array,
			default: () => [{
				name: 'Home',
				url: '/home'
			}]
		}
	},
	methods: {
		handelNavItemClicked(item) {
			this.$emit('navItemClicked', item);
			window.$('div.navItems div.navItem button.navItemBtn').removeClass('active');
			window.$(`div.navItems div.navItem button.navItemBtn:contains(${item.name})`).addClass('active');
		}
	},
	emits: ['navItemClicked'],
	mounted() {
		window.$('div.navItems div.navItem button.navItemBtn:contains(Home)').addClass('active');
	}
}
</script>

<style scoped>
div.navBar {
	background-color: #d9cfc7;
	padding: 5px 10px 5px 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
}

div.navItems {
	display: flex;
	height: calc(1rem + 2vh);
	justify-content: flex-start;
	flex-grow: 1;
}

div.navItems div.navItem {
	padding-left: 0.5vw;
	padding-right: 0.5vw;
	padding-bottom: 0.5vh;
	padding-top: 0.5vh;
	height: 1.2rem;

	&:not(:last-child) {
		border-right: black 1px solid;
	}
}

button.navItemBtn {
	background-color: inherit;
	border: none;
	color: black;
	cursor: pointer;
}

div.navItems button.navItemBtn {
	padding-left: 1vw;
	padding-right: 1vw;
	padding-bottom: 1vh;
}

div.navItems button.navItemBtn.active {
	border-bottom: 3px solid #53629e;
}

img.navIcon {
	margin-right: 20px;
}
</style>
