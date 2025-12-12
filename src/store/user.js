import { defineStore } from 'pinia';

const navItems =[
	{ name: 'Home', url: '/home' },
	{ name: 'About', url: '/home/about' },
	{ name: 'Services', url: '/home/services' },
	{ name: 'Contact', url: '/home/contact' },
	{ name: 'Help', url: '/home/help' },
];

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        role: '',
        navItems: [...navItems]
    }),
    actions: {
        setUser(user) {
            this.name = user.name;
            this.role = user.role;

            this.navItems = [...navItems];
            if (this.role === 'admin') {
                this.navItems.push({ name: 'Users', url: '/home/users' });
            }
        },
        clearUser() {
            this.name = '';
            this.role = '';
            this.navItems = [...navItems];
        }
    }
});