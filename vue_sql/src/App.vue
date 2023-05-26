<template>
    <div>
        <div class="main">
            Вход
            <input class="enter-main" placeholder="email">
            <input class="enter-main" placeholder="password">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            posts: [
                {id: 1, name: 'Олег', email: 'vnsjd@mail.ru', password: 'dsfkmdfnviuern304u89hdhd'}
            ],

        };
    },
    async mounted() {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        // this.posts = response.data;


    },
};
</script>

<style>
*{
    margin: 0;
}
.main{
    display: flex;
    
    justify-content: center;
}


</style>