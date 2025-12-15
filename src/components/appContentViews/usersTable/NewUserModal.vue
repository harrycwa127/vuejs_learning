<template>
    <teleport to="body">
        <div v-if="visible" class="modal-overlay" @click.self="close">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">✍ Create User</h3>
                    <button class="close-btn" @click="close">×</button>
                </div>

                <div class="modal-body">
                    <form class="create-form">
                        <div class="form-section">
                            <div class="form-row">
                                <label for="name">Name:</label>
                                <input type="text" id="name" v-model="formData.name" required />
                            </div>

                            <div class="form-row">
                                <label for="role">Role:</label>
                                <input type="text" id="role" v-model="formData.role" required />
                            </div>

                            <div class="form-row">
                                <label for="new-password">Password:</label>
                                <input type="password" id="new-password" v-model="formData.password" required />
                            </div>

                            <div class="form-row">
                                <label for="confirm-password">Confirm Password:</label>
                                <input type="password" id="confirm-password" v-model="formData.confirmPassword" required />
                            </div>
                        </div>

                        <div class="form-actions">
                            <button type="button" class="cancel-btn" @click="close">Cancel</button>
                            <button type="submit" class="create-btn" @click="submitUser">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </teleport>
</template>
<script>
    import accounts from '@/assets/account.json';

    export default {
        name: "NewUserModal",
        props: {
            visible: { type: Boolean, default: false }
        },
        emits: ['close', 'submit'],
        data() {
            return {
                formData: {
                    name: '',
                    role: '',
                    password: '',
                    confirmPassword: ''
                },
            };
        },
        methods: {
            close() {
                this.$emit('close');
                this.resetForm();
            },
            resetForm() {
                this.formData = {
                    name: '',
                    role: '',
                    password: '',
                    confirmPassword: ''
                };
            },
            submitUser() {

                if(this.formData.password !== this.formData.confirmPassword){
                    alert("Passwords do not match!");
                    return;
                }

                const users = localStorage.users ? JSON.parse(localStorage.users) : [...accounts];

                if(users.find(acc => acc.name === this.formData.name)){
                    alert("Username already exists!");
                    return;
                }

                const newUser = {
                    name: this.formData.name,
                    role: this.formData.role,
                    password: this.formData.password
                }


                this.$emit('submit', newUser)

                this.close()
                this.resetForm()
            }
        }
    };
</script>

<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        z-index: 1000;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        max-width: 600px;
        max-height: 85%;
        overflow-y: auto;
        position: relative;

        & * {
            white-space: pre-wrap;
        }
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        & h3 {
            margin-top: 0.5em;
            margin-bottom: 0.5em;
        }
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 1.5em;
        cursor: pointer;
        color: black;
    }

    .cancel-btn {
        background-color: #ccc;
        color: black;
        margin-right: 10px;
    }

    .form-row {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        & label {
            margin-bottom: 5px;
            font-weight: bold;
        }

        & input, & textarea {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 1em;
        }
    }
</style>