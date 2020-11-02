<template>
  <div>
    <div>
      <el-table :data="memberlist" stripe style="width: 100%">
        <el-table-column prop="date" label="头像" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名" width="50"></el-table-column>
        <el-table-column prop="address" label="电话"></el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      memberlist: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      // family_id: family_id,
    };
  },
  computed: {
    getToken() {
      return this.$store.state.token;
    },
  },
  methods: {
    async getMemberList() {
      try {
        const result = await getMemberInfor(this.getToken);
        if (result.data.code === 0) {
          //获取家庭成员信息
          this.memberlist = result.data.data;
          this.family_id = result.data.data[0].family_id;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>




<style lang="scss" scoped>
</style>