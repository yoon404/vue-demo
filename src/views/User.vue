<template>
  <div style="width: 100%">
    <!--    功能区域-->
    <div style="margin: 10px 10px">
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <!--    搜索区域-->
    <div style="margin: 10px 10px">
      <el-input v-model="search" placeholder="请输入搜索内容" style="width: 20%"/>
      <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>
    </div>
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="userId" label="Id" width="180" sortable/>
      <el-table-column prop="name" label="姓名" width="180"/>
      <el-table-column prop="score" label="积分"/>
      <el-table-column prop="sex" label="性别"/>
      <el-table-column prop="nickName" label="昵称"/>
      <el-table-column prop="age" label="年龄"/>
      <el-table-column prop="address" label="地址"/>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button @click="handleEdit(scope.row)">编辑</el-button>
          <el-popconfirm title="确认删除吗？" @confirm="handleDelete(scope.row.userId)">
            <template #reference>
              <el-button type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 10px 0 16px;text-align: center">
      <el-pagination :page-sizes="[5, 10, 20]"
                     :current-page="currentPage"
                     :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"/>
      <el-dialog
          v-model="dialogVisible" title="提示" width="30%">
        <el-form :model="form" label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="form.name" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="积分">
            <el-input v-model="form.score" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男">男</el-radio>
              <el-radio label="女">女</el-radio>
              <el-radio label="未知">未知</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.nickName" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input type="textarea" v-model="form.address" style="width: 80%"></el-input>
          </el-form-item>

        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">
              确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: []
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      request.get("/user/findPage", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    add() {
      this.dialogVisible = true
      this.form = {}
    },
    save() {
      if (this.form.userId) {
        request.post("/user/updateUser", this.form).then(res => {
          console.log(res)
          if (res.code === 200) {
            this.$message({
              type: "success",
              message: "修改成功"
            })
          } else {
            this.$message({
              type: "error",
              message: "修改失败"
            })
          }
        })
      } else {
        request.post("/user/addUser", this.form).then(res => {
          console.log(res)
          if (res.code === 200) {
            this.$message({
              type: "success",
              message: "新增成功"
            })
          } else {
            this.$message({
              type: "error",
              message: "新增失败，网络问题或数据库问题"
            })
          }
        }).catch(error =>{
          this.$message({
            type: "error",
            message: "新增失败,该用户已存在"
          })
        })
      }
      this.load()
      this.dialogVisible = false
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true

    },
    handleDelete(id) {
      request.delete("/user/deleteUser/"+ id).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.$message({
            type: "success",
            message: "删除成功"
          })
        } else {
          this.$message({
            type: "error",
            message: "删除失败"
          })
        }
        this.load()
      })
    },
    handleSizeChange(pageSize) {  // 改变当前每页个数
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) { // 改变当前页码
      this.currentPage = pageNum
      this.load()
    }
  },
}
</script>

