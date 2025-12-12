<template>
    <table class="userTable">
        <thead>
            <tr>
                <th>Username</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(account, index) in accounts" :key="index">
                <td>{{ account.name }}</td>
                <td>{{ account.role }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: "UserTable",
        props: {
            accounts: {
                type: Array,
                required: true
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

    table.userTable tr:hover {
        background-color: #e9e9e9;
    }
</style>