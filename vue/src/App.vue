<template>
	<navBar></navBar>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
import navBar from "@/components/NavBar.vue";

export default {
	components: {
		navBar
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
</style>