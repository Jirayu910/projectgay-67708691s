<template>
  <div class="container mt-4">
    <h2 class="mb-3">รายชื่อลูกค้า</h2>
    
    <div class="mb-3">
      <a class="btn btn-primary" href="add_product" role="button">Add+</a>
    </div>

    <!-- ตารางแสดงข้อมูลลูกค้า -->
  <table class="table table-bordered table-striped">
  <thead class="table-primary">
    <tr>
      <th>รหัสสินค้า</th>
      <th>ชื่อสินค้า</th>
      <th>รายละเอียด</th>
      <th>ราคา</th>
      <th>คลังสินค้า</th>
      <th>รูป</th>
      <th>วันที่</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in products" :key="product.product_id">
      <td>{{ product.product_id }}</td>
      <td>{{ product.product_name }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.stock}}</td>
      <td><img
            :src="'http://localhost/projectgay-67708691/php_api/uploads/' + product.image"
            width="100"
            height="150"
            class="card-img-top"
            :alt="product.name"
          ></td>
      <td>{{ product.created_at }}</td>
    </tr>
  </tbody>
</table>
    <!-- Loading -->
    <div v-if="loading" class="text-center">
      <p>กำลังโหลดข้อมูล...</p>
    </div>

    <!-- Error -->
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "productList",
  setup() {
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);

    // ฟังก์ชันดึงข้อมูลจาก API ด้วย GET
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost/projectgay-67708691/php_api/show_product.php", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error("ไม่สามารถดึงข้อมูลได้");
        }

        const result = await response.json();
        if (result.success) {
          products.value = result.data;
        } else {
          error.value = result.message;
        }

      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      loading,
      error
    };
  }
};
</script>
