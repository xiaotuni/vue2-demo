<style lang="scss">
.refreshCss {
  border: 1px solid #f5f5f5;
  width: 100%;
  height: 100%;
  position: relative;
  .top {
    padding: 5px;
    text-align: center;
    color: red;
    display: none;
    width: 100%;
    background: #fff;
    transform: translate3d(0px, 0px, 0px);
    transition: 0.2s;

    &.display {
      display: inherit;
    }
  }

  .bottom {
    display: none;
    &.display {}
  }
}
</style>
<template>
  <div class="refreshCss" v-on:touchstart="OnTouchStart" v-on:touchmove="OnTouchMove" v-on:touchend="OnTouchEnd">
    <div class="top" :class="{'display': IsDisplayTop }" :style="GetTopStyle">
      {{TopTitle}}
    </div>
    <div :style="GetContent">
      <slot></slot>
    </div>
    <div class="bottom" :class="{'display': IsDisplayBottom}"></div>
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
      },
      IsDisplayTop: false,
      absXes: 10,
      absYes: 500,
      TopTitle: '下拉刷新',
      GetTopStyle: {
        transition: '.2s',
        transform: 'translate3d(0px, 0px, 0px)'
      },
      GetContent: {

      },
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
      // 
      const { Begin, Move } = this.Touch;
      const absYes = Move.Y - Begin.Y;
      if (absYes > 0 && absYes < 120) {
        console.log(absYes);
        if (absYes > 60) {
          this.TopTitle = '释放更新';
        }

        this.IsDisplayTop = true;
        this.GetTopStyle.transform = 'translate3d(0px, ' + absYes + 'px, 0px)';
        this.GetContent.marginTop = absYes + 'px';
      }
    },
    OnTouchEnd(event) {
      const { pageX, pageY } = event.changedTouches[0];
      this.Touch.End = { X: pageX, Y: pageY };
      this.__CalculationDirection();
      this.__ProcessPropsEvent();
      this.GetTopStyle.transform = 'translate3d(0px, 0px, 0px)';
      this.GetContent.marginTop = '0px';
      this.IsDisplayTop = false;
      this.TopTitle = '下拉刷新';
    },
    __CalculationDirection() {
      const { Begin, End, Direction } = this.Touch;
      const xes = End.X - Begin.X;
      const yes = End.Y - Begin.Y;
      const absXes = Math.abs(xes);
      const absYes = Math.abs(yes);
      if (absXes < this.absXes && absYes < this.absYes) {
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
      console.log(!Utility.isFunction(OnNextData));

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
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated: function () {
    // console.log('实例更新啦');
  },
};
</script>
