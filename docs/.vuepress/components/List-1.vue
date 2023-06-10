<template>
  <div class="list-container">
    <div class="item-container">
      <h2>程序员在线工具</h2>
      <div class="item-wrap">
        <a class="item" href="https://www.baidu.com">
          <div class="item__title-logo">
            <!-- <img
        class="item__logo lazyload"
      > -->
            <span class="item__title">123</span>
          </div>

          <div class="item__desc">4566</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const value = ref("hello"); // 声明 value，初始值为 'hello'
    return {
      value,
    };
  },
});
</script>

<style lang="less" scoped>
body {
  background: #f3f6f8;
  font-family: 'PingFangSC-Regular', 'Helvetica Neue', 'Microsoft Yahei';
}

a,
a:link,
a:visited,
a:hover {
  text-decoration: none; /*超链接无下划线*/
}

.margin-top--20 {
  margin-top: 20px;
}

.list-containe {
  // width: 1200px;
  // margin: 0 auto;
  // padding-top: 20px;
}
.item-container {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  h2 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .item-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* 指定行列间距 */
    row-gap: 14px;
    column-gap: 14px;
  }
}

.item {
  display: block;
  border-radius: 6px;
  background: #ffffff;
  padding: 10px;
  border: 1px solid #e4ecf3;
  box-shadow: 1px 2px 3px #f2f6f8;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:hover {
    // transform: scale(1.02);
    border: 1px solid #adb4bb;
    box-shadow: 1px 5px 3px #f2f6f8;
  }

  &__logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    object-fit: contain;
  }

  &__title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: #3273dc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 10px;
  }

  &__desc {
    color: gray;
    font-size: 12px;
    padding-top: 10px;
    height: 35px;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__child {
    font-size: 13px;
    color: #636e72;
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }

    &::after {
      content: "|";
      padding-left: 5px;
      padding-right: 5px;
    }

    &:last-child::after {
      content: "";
    }
  }
}
</style>
