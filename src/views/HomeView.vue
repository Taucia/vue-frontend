<template>
<div class="swiper-container">
	<div class="swiper-wrapper">
		
		<div class="swiper-slide">
			<div class="card">
				<div class="slider-text">
					<h3>
						Slide One
					</h3>
				</div>

				<div class="content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					<a href="javascript:void(0);">
						Read More
					</a>
				</div>
			</div>
		</div>
		
		<div class="swiper-slide">
			<div class="card">
				<div class="slider-text">
					<h3>
						Slide Two
					</h3>
				</div>

				<div class="content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					<a href="javascript:void(0);">
						Read More
					</a>
				</div>
			</div>
		</div>
		
		<div class="swiper-slide">
			<div class="card">
				<div class="slider-text">
					<h3>
						Slide Three
					</h3>
				</div>

				<div class="content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					<a href="javascript:void(0);">
						Read More
					</a>
				</div>
			</div>
		</div>
		
		<div class="swiper-slide">
			<div class="card">
				<div class="slider-text">
					<h3>
						Slide Four
					</h3>
				</div>

				<div class="content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					<a href="javascript:void(0);">
						Read More
					</a>
				</div>
			</div>
		</div>
		
		<div class="swiper-slide">
			<div class="card">
				<div class="slider-text">
					<h3>
						Slide Five
					</h3>
				</div>

				<div class="content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>

					<a href="javascript:void(0);">
						Read More
					</a>
				</div>
			</div>
		</div>
		
	</div>
</div>
 
</template>

<script>


export default {
  
  name: 'HomeView',
  components: {
   
  },
   computed: {
        products() {
            return this.$store.state.products;
    },
  },
    mounted() {
        this.$store.dispatch("getProducts");
    },




    
}
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*:focus {
  outline: 0;
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
	align-items: center;
	background-color: #383838;
	display: flex;
	font-family: 'Poppins', sans-serif;
	justify-content: center;
	min-height: 100vh;
}

.swiper-slide {
	width: 400px;
}

.swiper-slide:nth-child(1) .slider-text {
	background-color: #2196f3;
}

.swiper-slide:nth-child(2) .slider-text {
	background-color: #e91e63;
}

.swiper-slide:nth-child(3) .slider-text {
	background-color: #c3d41a;
}

.swiper-slide:nth-child(4) .slider-text {
	background-color: #ff9800;
}

.swiper-slide:nth-child(5) .slider-text {
	background-color: #c33ada;
}

.card {
	background-color: #ffffff;
	height: 500px;
	margin: 0 auto;
	position: relative;
	width: 400px;
}

.card .content {
	padding: 30px;
	width: 400px;
}

.card .content a {
	border: 2px solid #000000;
	color: #262626;
	display: inline-block;
	font-weight: 600;
	margin: 10px 0 0;
	padding: 10px 20px;
	text-decoration: none;
}

.card .slider-text {
	align-items: center;
	background-color: #000000;
	display: flex;
	height: 200px;
	justify-content: center;
	position: relative;
	width: 100%;
}

.card .slider-text h3 {
	color: #ffffff;
	font-size: 3em;
}

</style>
