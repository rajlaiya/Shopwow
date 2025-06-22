<template>
    <div class="man-clothes-page">
        <h1>Men's Clothing Shop</h1>
        <div class="section-list">
            <ul class="section-nav">
                <li v-for="section in sections" :key="section.title">
                    <a :href="'#' + section.title.replace(/\s+/g, '')">{{ section.title }}</a>
                </li>
            </ul>
        </div>
        <section v-for="section in sections" :key="section.title" class="clothing-section" :id="section.title.replace(/\s+/g, '')">
            <h2>{{ section.title }}</h2>
            <div class="cards">
                <div v-for="item in section.items" :key="item.id" class="card">
                    <img :src="item.image" :alt="item.name" class="card-img" />
                    <h3>{{ item.name }}</h3>
                    <p class="price">${{ item.price }}</p>
                    <button @click="addToCart(item)">Add to Cart</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "ManClothesPage",
    data() {
        return {
            sections: [
                {
                    title: "T-Shirts",
                    items: [
                        { id: 1, name: "Classic White Tee", price: 19.99, image: "https://via.placeholder.com/150" },
                        { id: 2, name: "Black Graphic Tee", price: 24.99, image: "https://via.placeholder.com/150" },
                        { id: 3, name: "Blue Polo Tee", price: 22.99, image: "https://via.placeholder.com/150" },
                        { id: 4, name: "Red Sports Tee", price: 21.99, image: "https://via.placeholder.com/150" },
                    ],
                },
                {
                    title: "Shirts",
                    items: [
                        { id: 5, name: "Formal Blue Shirt", price: 34.99, image: "https://via.placeholder.com/150" },
                        { id: 6, name: "Checked Casual Shirt", price: 29.99, image: "https://via.placeholder.com/150" },
                        { id: 7, name: "White Linen Shirt", price: 39.99, image: "https://via.placeholder.com/150" },
                        { id: 8, name: "Black Slim Shirt", price: 32.99, image: "https://via.placeholder.com/150" },
                    ],
                },
                {
                    title: "Shorts",
                    items: [
                        { id: 9, name: "Denim Shorts", price: 19.99, image: "https://via.placeholder.com/150" },
                        { id: 10, name: "Cotton Cargo Shorts", price: 24.99, image: "https://via.placeholder.com/150" },
                        { id: 11, name: "Black Sports Shorts", price: 17.99, image: "https://via.placeholder.com/150" },
                        { id: 12, name: "Grey Lounge Shorts", price: 15.99, image: "https://via.placeholder.com/150" },
                    ],
                },
                {
                    title: "Jeans",
                    items: [
                        { id: 13, name: "Slim Fit Jeans", price: 39.99, image: "https://via.placeholder.com/150" },
                        { id: 14, name: "Regular Fit Jeans", price: 35.99, image: "https://via.placeholder.com/150" },
                        { id: 15, name: "Blue Washed Jeans", price: 42.99, image: "https://via.placeholder.com/150" },
                        { id: 16, name: "Black Stretch Jeans", price: 44.99, image: "https://via.placeholder.com/150" },
                    ],
                },
            ],
        };
    },
    methods: {
        addToCart(item) {
            alert(`Added "${item.name}" to cart!`);
            // Implement actual cart logic here
        },
    },
};
</script>

<style scoped>
.man-clothes-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 8px;
    font-family: Arial, sans-serif;
}
h1 {
    text-align: center;
    margin-bottom: 32px;
}
.section-list {
    margin-bottom: 24px;
    text-align: center;
}
.section-nav {
    display: inline-flex;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0;
}
.section-nav li a {
    color: #1976d2;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.2s;
}
.section-nav li a:hover {
    color: #e67e22;
    text-decoration: underline;
}
.clothing-section {
    margin-bottom: 40px;
}
.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}
.card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    width: 200px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 2px 8px #f0f0f0;
}
.card-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 12px;
}
.price {
    font-weight: bold;
    margin: 8px 0;
}
button {
    background: #1976d2;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}
button:hover {
    background: #1565c0;
}
@media (max-width: 1024px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 600px) {
    .cards {
        grid-template-columns: 1fr;
    }
}
</style>