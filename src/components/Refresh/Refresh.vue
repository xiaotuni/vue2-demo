<style lang="scss">
.refreshCss {
  border: 1px solid 1px;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
<template>
  <div class="refreshCss" v-on:touchstart="OnTouchStart" v-on:touchmove="OnTouchMove" v-on:touchend="OnTouchEnd">
    <slot></slot>
  </div>
</template>
<script>
import { Utility } from '@/components/core';
export default {
  data() {
    const __Content = {
      Touch: {
        Begin: {}, Move: {}, End: {},
        Direction: { Left: 'Left', Up: 'Up', Down: 'Down', Right: 'Right' },
        CurrentDirection: 'Left'
      }
    };
    return __Content;
  },
  mounted() {

  },
  methods: {
    GoToPage(item) {
      Utility.$toPage(item.Url);
    },
    OnTouchStart(event) {
      const { pageX, pageY } = event.changedTouches[0];
      this.Touch.Begin = { X: pageX, Y: pageY };
    },
    OnTouchMove(event) {
      const { pageX, pageY } = event.changedTouches[0];
      this.Touch.Move = { X: pageX, Y: pageY };

    },
    OnTouchEnd(event) {
      const { pageX, pageY } = event.changedTouches[0];
      this.Touch.End = { X: pageX, Y: pageY };
      this.__CalculationDirection();
    },
    __CalculationDirection() {
      const { Begin, End, Direction } = this.Touch;
      const xes = End.X - Begin.X;
      const yes = End.Y - Begin.Y;
      const absXes = Math.abs(xes);
      const absYes = Math.abs(yes);
      if (absXes < 5 && absYes < 5) {
        return;
      }
      if (xes > 0) {
        // 右
        if (yes > 0) {
          // 向下
          // 判断主向
          if (absXes > absYes) {
            // 向右。
            console.log('向右');
            this.Touch.CurrentDirection = Direction.Right;
          } else {
            // 向下。
            console.log('向下');
            this.Touch.CurrentDirection = Direction.Down;
          }
        } else {
          // 向上
          if (absXes > absYes) {
            // 向右。
            console.log('向右');
            this.Touch.CurrentDirection = Direction.Right;
          } else {
            // 向上。
            this.Touch.CurrentDirection = Direction.Up;
            console.log('向上');
          }
        }
      } else {
        // 左边
        if (yes > 0) {
          // 向下
          if (absXes > absYes) {
            // 向右。
            this.Touch.CurrentDirection = Direction.Right;
            console.log('向右。');
          } else {
            // 向下。
            this.Touch.CurrentDirection = Direction.Down;
            console.log('向下');
          }
        } else {
          // 向上
          if (absXes > absYes) {
            this.Touch.CurrentDirection = Direction.Left;
            console.log('向左-->向左');
          } else {
            console.log('向左-->向上');
            this.Touch.CurrentDirection = Direction.Up;
          }
        }
      }
    }
  }
};
</script>
