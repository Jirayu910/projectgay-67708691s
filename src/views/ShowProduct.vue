<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">รายการสินค้า</h2>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card shadow-sm mb-4">
          <img :src="product.image" class="card-img-top" :alt="product.name">
          <div class="card-body text-center">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }} บาท</p>
            <button class="btn btn-primary">รายละเอียด</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowProduct",
  data() {
    return {
      products: [
        { id: 1, name: "เตาไฟฟ้า", price: 1200, image: "https://picsum.photos/400/200?4" },
        { id: 2, name: "หม้อชาบู", price: 800, image: "https://picsum.photos/400/200?5" },
        { id: 3, name: "ชุดช้อนส้อม", price: 250, image: "https://picsum.photos/400/200?6" },
        { id: 4, name: "ปลาเผา", price: 300, image: "https://picsum.photos/400/200?7" },
        { id: 5, name: "ชุดผัก", price: 700, image: "https://picsum.photos/400/200?8" },
        { id: 6, name: "เป็ดย่าง", price: 950, image: "https://picsum.photos/400/200?9" }
      ]
    }
  }
}
</script>
