<template>
    <div>
        <header class="hero">
            <nav class="navbar">
                <div class="navbar-left">
                    <h1 class="store-name">DeiaMandalas</h1>
                </div>
                <div class="navbar-right">
                    <ul class="nav-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Loja</a></li>
                        <li><a href="#">Contato</a></li>
                        <li>
                            <a href="#">
                                <i class="fas fa-shopping-bag"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-user"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <div class="content">
                    <h2>Bem-vindo à Nossa Loja</h2>
                    <p>Explore nossos produtos e aproveite as ofertas!</p>
                    <button class="buy-button" @click="scrollToMain">Ver Destaques</button>
                </div>
            </div>
        </header>
        <main id="main">
            <h2 class="title-main">Veja os Produtos em destaque</h2>
            <section class="carousel-container">
                <Carousel 
                    :items-to-show="3" 
                    :wrap-around="true" 
                    :autoplay="true" 
                    :navigation-enabled="true"
                    :pauseAutoplayOnHover="true"
                    :transition= "4000"
                >
                    <Slide v-for="product in products" :key="product.id">
                        <div class="product">
                            <a :href="'/product/' + product.id">
                                <img :src="product.image" :alt="product.name" />
                            </a>
                            <div class="product-info">
                                <h3>{{ product.name }}</h3>
                                <p>{{ product.price }}</p>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                        <Pagination />
                    </template>
                </Carousel>
            </section>
        </main>
        <footer>
        </footer>
    </div>
</template>
<script>
import axios from 'axios';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    name: 'HomePage',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            products: []
        };
    },
    created() {
        console.log('Fetching products...');
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                console.log('Products fetched successfully:', response.data);
                this.products = response.data;
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    },
    methods: {
    scrollToMain() {
      const element = document.getElementById('main')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/views/style.scss';
</style>