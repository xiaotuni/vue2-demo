<style lang="scss" >
.hello {
  font-size: 14px;
  h1 {
    color: red;
  }
  .inputInfo {
    margin: 5px 0px;
    border: 1px solid #f1f1f1;
    display: flex;
    >input[type='text'] {
      flex: 1;
      font-size: 16px;
      padding: 2px 5px;
      margin-right: 5px; // border-radius: 2px;
    }
    >button {
      padding: 5px 15px;
      border-radius: 5px;
    }
  }
  .list {
    .row {
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      margin-top: 5px;
      padding: 5px 10px;
      .topInfo {
        display: flex;
        align-items: center;
        .index {
          font-size: red;
          margin-right: 5px; // width: 40px;
          text-align: right;
        }
        .name {
          flex: 1;
        }
        .tel {
          margin-right: 5px;
        }
        .delete {
          padding: 5px 10px;
          border: 1px solid #999;
          background: #ddd;
          color: #000;
          border-radius: 5px;
          font-size: 12px;
        }
      }
      .bottomInfo {
        >div {
          margin-top: 5px;
        }
      }

      &:hover {
        background: #999;
        color: #fff;
      }
    }
  }
  .classDemo {
    .colorIsRed {
      color: red;
    }
    .colorIsBlue {
      color: blue;
    }
  }
}
</style>
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" />
    <div class="inputInfo">
      <input ref='txtNewValue' v-on:keyup.enter="Add(newValue)" type="text" v-model="newValue" />
      <button @click='Add(newValue)'>添加</button>
    </div>
    <div class="list">
      <div class="row" v-for="(item, index) in list">
        <div class="topInfo">
          <div class="index">{{index+1}}</div>
          <div class="name">
            {{'姓名：'+item.Name}}
          </div>
          <div class="tel">
            {{'电话：'+item.Tel}}
          </div>
          <div class="delete" @click="DeleteFunc(item,index)">删除</div>
        </div>
        <div class="bottomInfo">
          <div>{{'年龄：' + item.Age}}</div>
          <div>{{'地址：' + item.Address}}</div>
        </div>
      </div>
    </div>
  
    <div class="other">
      <button :title='msg'>显示title</button>
    </div>
    <div class="classDemo">
      <div @click="UpdateColor">
        <input type="checkbox" v-model="IsShowRed" @click="UpdateColor" />颜色变更
      </div>
      <div :class="{'colorIsRed': IsShowRed, 'colorIsBlue': !IsShowRed}">
        {{IsShowRed?'显示红色内容':'显示颜色内容'}}
      </div>
    </div>
    {{reverseContent}}
    <div>
      <task-list slot='bbbbbbbbb' name='bbc'>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </task-list>
    </div>
  
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue';
export default {
  data() {
    return {
      IsShowRed: true,
      msg: '大家好呀！！',
      list: [],
      newValue: ''
    };
  },
  mounted() {
    // console.log('mounted...');

    for (let i = 0; i < 2; i++) {
      const __AddressInfo = {
        Name: '张三_' + i,
        Tel: '1' + Math.round(Math.random() * 19) + '-' + Math.round(Math.random() * 1000 + 8888) + '-' + Math.round(Math.random() * 1000 + 8888),
        Age: Math.round(Math.random() * 50 + 10),
        Address: '你的门排号(' + Math.round(Math.random() * 1000 + 10000) + ')'
      };
      this.list.push(__AddressInfo);
    }
  },
  methods: {
    UpdateColor() {
      this.IsShowRed = !this.IsShowRed;
    },
    Add(value) {
      // console.log(value);
      this.list.push(value);
      this.newValue = '';
      this.$refs.txtNewValue.focus();
    },

    DeleteFunc(item, index) {
      console.log(item, index);
      this.list.splice(index, 1);
    }
  },
  computed: {
    reverseContent() {
      return this.msg.split('').reverse().join('');
    }
  },
  components: {
    'task-list': TaskList
  }
};

</script>