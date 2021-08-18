<template>
  <div class="vast-table">
    <div class="loading" v-if="loading">loading……</div>
    <el-table
      :data="resDataList"
      v-if="!loading"
      ref="tb"
      @selection-change="handleSelectionChange"
      :row-key="getRowKeys"
    >
      <!-- 实现多选 -->
      <el-table-column type="selection" width="55" :reserve-selection="true">
      </el-table-column>
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="first_name" label="姓名"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="avatar" label="头像"> </el-table-column>
    </el-table>
  </div>
  <div v-if="!loading">
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      :page-size="5"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios'
export default {
  name: 'VastTable',
  setup() {
    const resDataList = ref([])
    const loading = ref(false)
    const total = ref(0)
    const handleCurrentChange = (val) => {
      fetchData({ page: val, per_page: 5 })
    }
    const handleSelectionChange = (val) => {
      console.log(val)
    }
    const getRowKeys = (val) => {
      return val.id
    }
    const fetchData = (params = { page: 1, per_page: 5 }) => {
      loading.value = true
      axios('https://reqres.in/api/users', {
        params
      })
        .then((res) => {
          resDataList.value = res.data.data
          total.value = res.data.total
          loading.value = false
        })
        .catch((err) => {
          console.log(err)
          loading.value = false
        })
    }
    onMounted(() => {
      fetchData()
    })
    return {
      resDataList,
      total,
      handleCurrentChange,
      handleSelectionChange,
      getRowKeys
    }
  }
}
</script>

<style lang="scss" scoped></style>
