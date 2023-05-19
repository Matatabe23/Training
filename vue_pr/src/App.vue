<template>
    <div class="login">
        <div class="form">
            <div v-if="!user">
              <span class="material-text">
                  Вход
              </span>
                <div class="login-form">
                    <input
                            type="text"
                            placeholder="Email"
                            v-model="email"
                            class="input-form">
                    <input
                            type="text"
                            placeholder="phone"
                            v-model="phone"
                            class="input-form">
                </div>
                <button class="form-button" @click="auth">login</button>
                <button class="form-button-Registration">Registration</button>
            </div>
            <span v-else class="material-text">
                Ты успешно авторизован! {{ users?.email }}
            </span>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            users: [],
            user: null,
            email: '',
            phone: '',
            isLoading: false,
        }
    },
    methods: {
        async auth() {
            this.isLoading = true
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = response.data;
                this.isLoading = false
            } catch (e){
                alert('Ошибка!')
            }
        }
    }
}
</script>

<style>

body {
    background: linear-gradient(90deg, teal 0%, green 100%);
}

.login {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
    font-family: 'Comfortaa', cursive;
}

.form {
    position: relative;
    z-index: 1;
    background: #fff;
    border-radius: 10px;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
}

.form input:focus {
    background: #dbdbdbdb;
}

.form-button {
    font-family: 'Comfortaa', cursive;
    text-transform: uppercase;
    outline: 0;
    background: green;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #fff;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
}

.input-form {
    width: 233px;
    border: none;
    border-bottom: 3px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
    box-sizing: border-box;

}

.form-button-Registration {
    font-family: 'Comfortaa', cursive;
    outline: 0;
    border: none;
    background-color: #fff;
    margin-top: 15px;
    cursor: pointer;
}
</style>