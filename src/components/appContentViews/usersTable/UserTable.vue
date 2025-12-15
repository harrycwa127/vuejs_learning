<template>
    <table class="userTable">
        <thead>
            <tr>
                <th>Username</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(account, index) in accounts" :key="index" @click="rowClickHandler">
                <td>{{ account.name }}</td>
                <td>{{ account.role }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>

    export default {
        name: "UserTable",
        data() {
            return {
                selectedUsers: []
            };
        },
        props: {
            accounts: {
                type: Array,
                required: true
            },
            itemsPerPage: {
                type: Number,
                default: 10
            }
        },
        expose: ['selectedUsers'],
        methods: {
            rowClickHandler(event) {
                const clickedRow = event.currentTarget;
                const username = clickedRow.cells[0].innerText;

                if (this.selectedUsers.includes(username)) {
                    this.selectedUsers = this.selectedUsers.filter(user => user !== username);
                    clickedRow.classList.remove("selected");
                } else {
                    this.selectedUsers.push(username);
                    clickedRow.classList.add("selected");
                }
            }
        },
        watch: {
            accounts: {
                handler() {
                    this.$nextTick(() => {
                        document.querySelectorAll("table.userTable tr").forEach(row => {
                            row.classList.remove("selected");
                        });

                        document.querySelectorAll("table.userTable tr").forEach(row => {
                            if(this.selectedUsers.includes(row.cells[0].innerText)){
                                row.classList.add("selected");
                            }
                        });
                    });
                },
                deep: true,
                immediate: true
            }
        }
    };
</script>

<style scoped>
    table.userTable {
        width: 50%;
		min-width: 40rem;
        border-collapse: collapse;
    }

    table.userTable th, table.userTable td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    table.userTable th {
        background-color: #d9cfc7;
    }

    table.userTable tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    table.userTable tr{
        &:hover {
            background-color: #e9e9e9;
        }

        &.selected {
            background-color: #b0c4de;
        }
    }
</style>