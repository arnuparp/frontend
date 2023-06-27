<template>
  <div class="q-pa-md">
    <q-table title="Product" :rows="rows" :columns="columns" row-key="id">
      <template v-slot:body-cell-Shopping_Cart="props">
        <q-td :props="props">
          <q-btn icon="add" @click="AddCart(props.row)"></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>

  <div class="q-pa-md q-mt-xl">
    <q-table title="Shopping" :rows="rowst" :columns="columnst" row-key="id">
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <q-btn icon="delete" @click="DeleteCart(props.row.id_tran)"></q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
  <div class="q-mb-sm">
    <q-btn class="q-mr-sm" color="secondary" label="Save" @click="SaveCart()" />
    <q-btn color="purple" label="Clear" @click="ClearCart()" />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import {
  getProduct,
  GetTransectionAll,
  createTransection,
  deleteTransection,
  updateTransection,
} from "@/api/Product";

export default {
  name: "HomeView",
  setup() {
    const columns = ref([
      { name: "Product_Name", label: "Product_Name", field: "Product_Name" },
      { name: "Price", label: "Price", field: "Price" },
      { name: "Input", label: "InputQty", field: "Input" },
      { name: "Outpu", label: "OutputQty", field: "Outpu", sortable: true },
      { name: "Outpu", label: "OutputQty", field: "Outpu", sortable: true },
      { name: "OutC", label: "OutCartQty", field: "OutC", sortable: true },
      { name: "Remain", label: "RemainQty", field: "Remain", sortable: true },
      {
        name: "Shopping_Cart",
        label: "Shopping Cart",
        field: "Shopping_Cart",
        sortable: true,
      },
    ]);

    const columnst = ref([
      { name: "transectionId", label: "transectionId", field: "id_tran" },
      { name: "Product_Name", label: "Product_Name", field: "product_Name" },
      { name: "Price", label: "Price", field: "price" },
      {
        name: "cre_date",
        label: "cre_date",
        field: "cre_date",
        sortable: true,
      },
      {
        name: "action",
        label: "action",
        field: "action",
        sortable: true,
      },
    ]);

    const rows = ref([]);
    const rowst = ref([]);
    //เริ่มต้น
    onMounted(async () => {
      await fetchUserall();
      await fetchTransecionall();
    });

    const fetchUserall = async () => {
      try {
        const response = await getProduct();
        console.log(response.data);
        rows.value = response.data;
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    const fetchTransecionall = async () => {
      try {
        const response = await GetTransectionAll();
        console.log(response.data);
        rowst.value = response.data;
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    const SaveCart = async () => {
      console.log(rowst.value);
      var sump = 0;
      for (var i = 0; i < rowst.value.length; i++) {
        console.log(rowst.value[i]);
        sump = parseInt(sump) + parseInt(rowst.value[i].price);

        var datay = {
          id_tran: rowst.value[i].id_tran,
          product_Name: rowst.value[i].id_tran,
          status: 2,
          price: rowst.value[i].price,
          //  cre_date: Date.now(),
        };

        try {
          updateTransection(datay);
          //location.reload();
        } catch (error) {
          console.error("Error fetching API:", error);
        }
      }
      alert("ยอดรวมทั้งหมด : " + sump + " บาท");
      location.reload();
    };

    const ClearCart = async () => {
      console.log(rowst.value);
      for (var i = 0; i < rowst.value.length; i++) {
        console.log(rowst.value[i]);
        try {
          await deleteTransection(rowst.value[i].id_tran);
        } catch (error) {
          console.error("Error fetching API:", error);
        }
      }
      alert("ทำการ Clear ตะกร้า");
      location.reload();
    };

    const AddCart = (data) => {
      if (data.Remain == 0) {
        alert("สินค้าไม่พอ");
        return;
      }

      var datat = {
        product_Name: data.Product_Name,
        status: 1,
        price: data.Price,
        //  cre_date: Date.now(),
      };
      console.log(datat);
      try {
        createTransection(datat);
        alert("เพิ่ม :" + data.Product_Name + " ในตะกร้า");
        location.reload();
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    const DeleteCart = async (id) => {
      try {
        const response = await deleteTransection(id);
        if (response.status == 200) {
          alert("ลบสำเร็จ");
          location.reload();
        }
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };
    return {
      columns,
      AddCart,
      DeleteCart,
      rows,
      rowst,
      columnst,
      SaveCart,
      ClearCart,
    };
  },
};
</script>
