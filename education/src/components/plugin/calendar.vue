<template>
  <div id="calendar">
    <div class="calendar-wrapper">
      <el-dialog title="签到" @closed="closeDialog" width="30%" :visible.sync="isDialog">
        <el-calendar v-model="checkInDate">
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template slot="dateCell" slot-scope="{date, data}">
            <p
              @click.capture="checkIn"
              :class="data.isSelected ? 'is-selected' : ''"
            >{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
          </template>
        </el-calendar>
        {{checkInDate}}
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { Message } from "element-ui";
export default {
  name: "calendar",
  data: function() {
    return {
      isDialog: this.dialogCalendar,
      checkInDate: new Date()
    };
  },
  props: {
    dialogCalendar: {
      type: Boolean,
      default: false
    }
  },
  //监听从父组件传递给子组件的dialogCalendar的值，以便更新isDialog,解决props单向数据流报错的问题
  watch: {
    dialogCalendar: function(newVal) {
      this.isDialog = newVal;
    }
  },
  created: function() {},
  methods: {
    closeDialog: function() {
      //通过调用内建的$emit方法，传入事件名称和数据来改变父组件数据
      this.$emit("listenDialog", false);
    },
    checkIn: function() {
      let day1 = new Date();
      console.log(day1.getDate(),this.checkInDate.getDate())
      if (this.checkInDate.getDate() == day1.getDate()) {
        Message.success({ message: "签到成功！", offset: 90 });
      } else {
        Message.warning({ message: "签到失败！", offset: 90 });
      }
    }
  }
};
</script>
<style lang="scss">
.is-selected {
  color: #1989fa;
}
</style>