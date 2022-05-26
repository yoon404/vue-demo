<template>
  <div>
    <el-menu
        style="width: 200px;min-height: calc(100vh - 50px)"
        default-active="user"
        router
        class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>系统管理</template>
        <el-menu-item index="user">用户管理</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="item">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>商品管理</span>
      </el-menu-item>
      <el-menu-item index="order">
        <el-icon>
          <setting/>
        </el-icon>
        <span>订单管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside"
}
</script>
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>

<style scoped>

</style>