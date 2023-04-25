<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<div class="app_btns">
			<my-button
					@click="showDialog"
					style="margin: 15px 0;"
			>Создать пользователя</my-button>
			<my-select></my-select>
		</div>
	
		<my-dialog v-model:show="dialogVisible">
			<PostForm 
		@create="createPost"
		/>
		</my-dialog>
		<postList
		 :posts="posts"
		 @remove="removePost"
		 v-if="!isPostsLoading"
		 />
		<div v-else>Идёт загрузка... </div>
	</div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import postList from './components/postList.vue';
import axios from 'axios';

export default {
	components: {
		postList, PostForm
	},
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostsLoading: false
		}
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showDialog(){
			this.dialogVisible = true;
		},
		async fetchPosts() {
				try {
					this.isPostsLoading = true;
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
					this.posts = response.data;
				} catch (e) {
					alert ('Ошибка')
				} finally {
					this.isPostsLoading = false;
				}
		}
	},
	mounted() {
		this.fetchPosts();
	}
}
</script>




<!-- стили -->
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}

.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
}

.app_btns{
	display: flex;
	justify-content: space-between;
}
</style>