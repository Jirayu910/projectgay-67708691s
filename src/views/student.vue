<template>
  <div class="container mt-4">
    <h2 class="mb-3">student</h2>
    
    <div class="mb-3">
      <a class="btn btn-primary" href="/add_student" role="button">Add+</a>
    </div>

    <!-- ตารางแสดงข้อมูลลูกค้า -->
  <table class="table table-bordered table-striped">
  <thead class="table-primary">
    <tr>
      <th>ID</th>
      <th>ชื่อ</th>
      <th>นามสกุล</th>
      <th>อีเมล</th>
      <th>เบอร์โทร</th>
      <th>ลบ</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="student in students" :key="student.student_id">
      <td>{{ customer.student_id }}</td>
      <td>{{ customer.first_Name }}</td>
      <td>{{ customer.last_Name }}</td>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      <td>{{ customer.email }}</td>
      <td>{{ customer.phone }}</td>
      <!--เพิ่มปุ่มลบ -->
      <td>  
  <button class="btn btn-danger btn-sm" @click="deleteCustomer(student.student_id)">ลบ</button>
</td>
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
  name: "CustomerList",
  setup() {
    const customers = ref([]);
    const loading = ref(true);
    const error = ref(null);

    // ฟังก์ชันดึงข้อมูลจาก API ด้วย GET
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost/projectgay-67708691/php_api/api_student.php", {
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
          customers.value = result.data;
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
      fetchCustomers();
    });


    //ฟังก์ชั่นการลบข้อมูล ***                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
const deleteCustomer = async (id) => {
  if (!confirm("คุณต้องการลบข้อมูลนี้ใช่หรือไม่?")) return;

  try {
    const response = await fetch("http://localhost/projectgay-67708691/php_api/api_student.php", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ customer_id: id })
    });

    const result = await response.json();

    if (result.success) {
      // ลบออกจาก customers ทันที (ไม่ต้องโหลดใหม่)
      customers.value = customers.value.filter(c => c.customer_id !== id);
      alert(result.message);
    } else {
      alert(result.message);
    }

  } catch (err) {
    alert("เกิดข้อผิดพลาด: " + err.message);
  }
};

    return {
      customers,
      loading,
      deleteCustomer,
      error
    };
  }
};
</script>
