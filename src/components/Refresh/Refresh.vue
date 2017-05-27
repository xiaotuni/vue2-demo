<style lang="scss">
.refreshCss {
  border: 1px solid #f5f5f5;
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
  props: {
    OnNextData: { type: Function },
    NextDataIsComplete: { type: Boolean },
    Percentage: { type: Number },
    OnRefresh: { type: Function },
    RefreshDataIsComplete: { type: Boolean },
    OnSlideLeft: { type: Function },
    OnSlideRight: { type: Function },
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
      this.__ProcessPropsEvent();
    },
    __CalculationDirection() {
      const { Begin, End, Direction } = this.Touch;
      const xes = End.X - Begin.X;
      const yes = End.Y - Begin.Y;
      const absXes = Math.abs(xes);
      const absYes = Math.abs(yes);
      if (absXes < 10 && absYes < 20) {
        return;
      }
      if (xes > 0) {
        if (yes > 0) {
          if (absXes > absYes) {
            this.Touch.CurrentDirection = Direction.Right;
          } else {
            this.Touch.CurrentDirection = Direction.Down;
          }
        } else {
          if (absXes > absYes) {
            this.Touch.CurrentDirection = Direction.Right;
          } else {
            this.Touch.CurrentDirection = Direction.Up;
          }
        }
      } else {
        if (yes > 0) {
          if (absXes > absYes) {
            this.Touch.CurrentDirection = Direction.Left;
          } else {
            this.Touch.CurrentDirection = Direction.Down;
          }
        } else {
          if (absXes > absYes) {
            this.Touch.CurrentDirection = Direction.Left;
          } else {
            this.Touch.CurrentDirection = Direction.Up;
          }
        }
      }
    },
    __ProcessPropsEvent() {
      const { Direction, CurrentDirection } = this.Touch;
      switch (CurrentDirection) {
        case Direction.Left:
          break;
        case Direction.Right:
          break;
        case Direction.Up:
          this.__ProcessDirectionUp();
          break;
        case Direction.Down:
          this.__ProcessDirectionDown();
          break;
        default:
          break;
      }
    },
    __ProcessDirectionUp() {
      const { OnNextData, NextDataIsComplete, Percentage } = this.$props;
      if (!Utility.isFunction(OnNextData) || NextDataIsComplete === false) {
        return;
      }
      const __Percentage = Number(Percentage) || 1;
      const __bodyScrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      const __bodyScrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      const __differValue = ((__bodyScrollHeight - __bodyScrollTop - screen.height) / __bodyScrollHeight) * 100;
      if (__differValue > (__Percentage < 2 ? 2 : __Percentage)) {
        return;
      }
      OnNextData();
    },
    __ProcessDirectionDown() {
      const { OnRefresh, RefreshDataIsComplete } = this.$props;
      if (!Utility.isFunction(OnRefresh) || RefreshDataIsComplete === false) {
        return;
      }
      OnRefresh();
    },
    __ProcessDirectionLeft() {
      const { OnSlideLeft } = this.$props;
      if (!Utility.isFunction(OnSlideLeft)) {
        return;
      }
      OnSlideLeft();
    },
    __ProcessDirectionRight() {
      const { OnSlideRight } = this.$props;
      if (!Utility.isFunction(OnSlideRight)) {
        return;
      }
      OnSlideRight();

    },
  }
};
</script>
