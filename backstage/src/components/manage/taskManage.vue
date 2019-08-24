<template>
  <div id="taskManage">
    <div class="left-taskView">
      <div class="tip">
        <p>
          <i class="el-icon-info"></i>温馨提示：以下模块内容可拖动，您可以在这里管理任务
        </p>
      </div>
      <el-row :gutter="20">
        <el-col :span="7">
          <div class="grid-content bg-purple todoList">
            <h3>所有任务</h3>
            <draggable class="list-group" :list="list1" group="people" @change="log">
              <div class="list-group-item" v-for="(element, index) in list1" :key="element.name">
                {{ element.name }} {{ index }}
                <i class="el-icon-close" @click="remove(index)"></i>
              </div>
              <div class="addTask">
                <el-button type="success" @click="add">添加</el-button>
                <el-input v-model="inputAdd" placeholder="请输入内容"></el-input>
              </div>
            </draggable>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple workingList">
            <h3>正在进行</h3>
            <draggable class="list-group" :list="list2" group="people" @change="log">
              <div
                class="list-group-item"
                v-for="(element, index) in list2"
                :key="element.name"
              >{{ element.name }} {{ index }}</div>
            </draggable>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple doneList">
            <h3>已完成</h3>
            <draggable class="list-group" :list="list2" group="people" @change="log">
              <div
                class="list-group-item"
                v-for="(element, index) in list2"
                :key="element.name"
              >{{ element.name }} {{ index }}</div>
            </draggable>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
//let id = 4;
export default {
  name: "taskManage",
  display: "Two Lists",
  order: 1,
  data: function() {
    return {
      inputAdd: "",
      list1: [
        { name: "上传课程1", id: 1 },
        { name: "上传课程2", id: 2 },
        { name: "发布通知1", id: 3 },
        { name: "发布通知4", id: 4 }
      ],
      list2: [
        { name: "上传课程通知1", id: 5 },
        { name: "课前通知1", id: 6 },
        { name: "课前通知2", id: 7 }
      ]
    };
  },
  methods: {
    add: function() {
      let id = 4;
      id++;
      this.list1.push({ name: this.inputAdd, id, text: "" });
      this.inputAdd = "";
    },
    remove(idx) {
      this.list1.splice(idx, 1);
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    }
  },
  components: {
    draggable
  }
};
</script>
<style lang="scss">
@import "../../css/taskManage.scss";
</style>