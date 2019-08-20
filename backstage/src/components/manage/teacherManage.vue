<template>
  <div id="teacherManage">
    <div class="info-top">
      <p>
        <i class="el-icon-info"></i>温馨提示：您可以在这里操作用户数据
      </p>
    </div>
    <div class="table-wrapper">
      <div class="table-top">
        <el-input v-model="inputName" placeholder="请输入姓名"></el-input>
        <el-select v-model="valueSex" placeholder="请选择性别">
          <el-option
            v-for="item in optionsSex"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="search" plain>搜索</el-button>
        <el-button type="primary" icon="el-icon-edit" @click="addInfo()" plain>添加</el-button>
        <el-button type="primary" icon="el-icon-download" plain @click="export2Excel">导出</el-button>
      </div>
      <div class="table-main">
        <el-table
        v-loading="loading"
          border
          highlight-current-row
          @current-change="handleCurrentChange"
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column align="center" type="index" label="序号" sortable width="80px;"></el-table-column>
          <el-table-column align="center" prop="date" label="注册日期" sortable width="147"></el-table-column>
          <el-table-column align="center" prop="name" label="姓名" width="130"></el-table-column>
          <el-table-column align="center" prop="nickname" label="昵称" width="130"></el-table-column>
          <el-table-column align="center" prop="sex" label="性别" width="100"></el-table-column>
          <el-table-column align="center" prop="avatar" label="头像" width="80">
            <template slot-scope="scope">
              <img :src="scope.row.avatar" alt style="width:60px;height:60px;" />
            </template>
          </el-table-column>
          <el-table-column
            align="left"
            prop="introduction"
            label="介绍"
            :width="this.$store.getters.introductionWidth"
          ></el-table-column>
          <el-table-column align="left" prop="email" label="邮箱" width="180"></el-table-column>
          <el-table-column align="center" prop="phone" label="手机" width="130"></el-table-column>
          <el-table-column align="center" prop="qq" label="QQ" width="130"></el-table-column>
          <el-table-column align="center" prop="status" label="状态" width="100">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status == '草稿'" effect="dark" type="info">草稿</el-tag>
              <el-tag v-else-if="scope.row.status == '已保存'" effect="dark" type="success">已保存</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="220">
            <template slot-scope="scope">
              <el-button type="primary" plain size="mini" @click="edit(scope.row.id)">编辑</el-button>
              <el-button type="success" plain size="mini" @click="save(scope.row.id)">保存</el-button>
              <el-button type="danger" plain size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog class="dialog" title="编辑信息" :visible.sync="dialogFormVisible1">
          <el-form :model="tableData[activeId]" :rules="userInfoRules" ref="tableData[activeId]">
            <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
              <el-input v-model="tableData[activeId].name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
              <el-input v-model="tableData[activeId].nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
              <el-select v-model="tableData[activeId].sex" placeholder="请选择性别">
                <el-option
                  v-for="item in optionsSex"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="介绍" :label-width="formLabelWidth">
              <el-input v-model="tableData[activeId].introduction"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
              <el-input v-model="tableData[activeId].email"></el-input>
            </el-form-item>
            <el-form-item label="手机" :label-width="formLabelWidth" prop="phone">
              <el-input v-model="tableData[activeId].phone"></el-input>
            </el-form-item>
            <el-form-item label="QQ" :label-width="formLabelWidth" prop="qq">
              <el-input v-model="tableData[activeId].qq"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="editSure('tableData[activeId]')">确 定</el-button>
          </div>
        </el-dialog>
        <!--添加-->
        <el-dialog class="dialog" title="编辑信息" :visible.sync="dialogFormVisible2">
          <el-form :model="addData" :rules="userInfoRules" ref="addData">
            <el-form-item label="注册日期" :label-width="formLabelWidth" prop="date">
              <el-date-picker
                v-model="addData.date"
                type="datetime"
                placeholder="选择日期时间"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                default-time="12:00:00"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
              <el-input v-model="addData.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="昵称" :label-width="formLabelWidth" prop="nickname">
              <el-input v-model="addData.nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
              <el-select v-model="addData.sex" placeholder="请选择性别">
                <el-option
                  v-for="item in optionsSex"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="介绍" :label-width="formLabelWidth">
              <el-input v-model="addData.introduction"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
              <el-input v-model="addData.email"></el-input>
            </el-form-item>
            <el-form-item label="手机" :label-width="formLabelWidth" prop="phone">
              <el-input v-model="addData.phone"></el-input>
            </el-form-item>
            <el-form-item label="QQ" :label-width="formLabelWidth" prop="qq">
              <el-input v-model="addData.qq"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="addSure">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="table-footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="currentPage"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  name: "teacherManage",
  data: function() {
    return {
      inputName: "",
      optionsSex: [
        {
          value: "保密",
          label: "保密"
        },
        {
          value: "男",
          label: "男"
        },
        {
          value: "女",
          label: "女"
        }
      ],
      valueSex: "",
      valueKind: "",
      addData: {
        id: "",
        date: "",
        name: "",
        nickname: "",
        sex: "",
        avatar: "",
        introduction: "",
        email: "",
        phone: "",
        qq: "",
        userKind: "",
        grade: "",
        status: ""
      },
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          nickname: "二狗子",
          sex: "男",
          avatar: require("../../assets/user.gif"),
          introduction: "这个家伙很懒，啥都没说",
          email: "2045657832@qq.com",
          phone: "17862176379",
          qq: "2045657832",
          userKind: "普通",
          grade: "L4",
          status: "草稿"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "赵四",
          avatar: require("../../assets/user.gif"),
          userKind: "会员"
        },
        {
          id: 3,
          date: "2016-05-01",
          avatar: require("../../assets/user.gif"),
          name: "王小虎"
        },
        {
          id: 4,
          date: "2016-05-03",
          avatar: require("../../assets/user.gif"),
          name: "王小虎"
        }
      ],
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      activeId: 0,
      currentRow: null,
      userInfo: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      userInfoRules: {
        date: [
          {
            type: "string",
            required: true,
            message: "请输入日期",
            trigger: "blur"
          }
        ],
        name: [
          {
            type: "string",
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          }
        ],
        nickname: [
          {
            type: "string",
            required: true,
            message: "请输入昵称",
            trigger: "blur"
          }
        ],
        email: [
          {
            type: "string",
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        phone: [
          {
            type: "string",
            required: true,
            message: "请输入手机",
            trigger: "blur"
          }
        ],
        qq: [
          {
            type: "string",
            required: true,
            message: "请输入QQ",
            trigger: "blur"
          }
        ],
        sex: [
          {
            type: "string",
            required: true,
            message: "请输入QQ",
            trigger: "blur"
          }
        ]
      },
      isSave: false,
      currentPage3: 5,
      loading: false
    };
  },
  methods: {
    formatter(row) {
      return row.address;
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    //获取当前行的id,即可实现点击相应的行，弹出相应行的对话框
    edit: function(id) {
      this.activeId = id - 1;
      this.dialogFormVisible1 = true;
      console.log(this.activeId);
    },
    save: function(id) {
      this.isSave = !this.isSave;
      if (this.isSave == true) {
        this.tableData[id - 1].status = "已保存";
        Message.success("操作成功！");
        console.log(this.tableData[id - 1].status);
      } else {
        this.tableData[id - 1].status = "草稿";
        Message.success("操作成功！");
        console.log(this.tableData[id - 1].status);
      }
    },
    editSure(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Message.success("操作成功！");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    currentPage(val) {
      console.log(`当前页: ${val}`);
    },
    //导出为Excel
    export2Excel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("../../excel/Export2Excel");
        const tHeader = [
          "序号",
          "注册日期",
          "姓名",
          "昵称",
          "性别",
          "头像",
          "介绍",
          "邮箱",
          "手机",
          "QQ",
          "用户类型",
          "等级",
          "状态"
        ]; // 上面设置Excel的表格第一行的标题
        const filterVal = [
          "id",
          "date",
          "name",
          "nickname",
          "sex",
          "avatar",
          "introduction",
          "email",
          "phone",
          "qq",
          "userkind",
          "grade",
          "status"
        ]; // 上面的index、phone_Num、school_Name是tableData里对象的属性
        const list = this.tableData; //把data里的tableData存到list
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "用户数据");
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    //添加信息
    addInfo: function() {
      
      this.dialogFormVisible2 = true;
    },
    addSure: function() {
      this.addData.id = this.tableData.length;
      this.tableData.unshift(this.addData);
      console.log(this.tableData, this.addData.id);
      this.dialogFormVisible2 = false;
    },
    search: function() {
      console.log(this.inputName)
    }
  }
};
</script>
<style lang="scss">
@import "../../css/teacherManage.scss";
</style>