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
    display: none; // width: 100%;
    background: #fff;
    transform: translate3d(0px, 0px, 0px);
    transition: 0.2s;

    &.display {
      display: inherit;
    }
  }

  .bottom {
    display: none;
    padding: 5px;
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    &.display {
      display: inherit;
    }
  }
}
</style>
<template>
  <div class="refreshCss" v-on:touchstart="OnTouchStart" v-on:touchmove="OnTouchMove" v-on:touchend="OnTouchEnd">
    <div class="top" :class="{'display': TopInfo.IsDisplayTop }" :style="GetTopStyle">
      {{TopInfo.TopTitle}}
    </div>
    <div :style="GetContent">
      <slot></slot>
    </div>
    <div class="bottom" :class="{'display': BottomInfo.IsDisplay}">
      {{BottomInfo.Title}}
    </div>
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
      absXes: 10,
      absYes: 20,
      TopInfo: {
        IsDisplayTop: false,
        TopTitle: '下拉刷新',
      },
      BottomInfo: {
        IsDisplay: false,
        Title: '上拉获取更多',
      },
      GetTopStyle: {
        transition: '.2s',
        transform: 'translate3d(0px, 0px, 0px)'
      },
      IsDisplayBottom: false,
      GetContent: {},
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
    __JudgeTopInfoByMove() {
      const { Begin, Move } = this.Touch;
      const absYes = Move.Y - Begin.Y;

      if (absYes > 0) {
        // --------------------------TOP---BEGIN-----------------------------------
        this.TopInfo.IsCallAPI = false;
        this.TopInfo.TopTitle = '下拉刷新';
        if (absYes > 60) {
          this.TopInfo.TopTitle = '释放更新';
          this.TopInfo.IsCallAPI = true;
        }
        if (absYes < 120) {
          // console.log(absYes);
          this.TopInfo.IsDisplayTop = true;
          this.GetTopStyle.transform = 'translate3d(0px, ' + absYes + 'px, 0px)';
          this.GetContent.marginTop = absYes + 'px';
        }
        // --------------------------TOP---END-------------------------------------
      }
    },
    __JudgeTopInfoByEnd() {
      this.GetTopStyle.transform = 'translate3d(0px, 0px, 0px)';
      this.GetContent.marginTop = '0px';
      this.TopInfo.IsDisplayTop = false;
      this.TopInfo.IsCallAPI = false;
      this.TopInfo.TopTitle = '下拉刷新';
    },
    OnTouchStart(event) {
      const { pageX, pageY } = event.changedTouches[0];
      this.Touch.Begin = { X: pageX, Y: pageY };
    },
    OnTouchMove(event) {
      const { pageX, pageY } = event.changedTouches[0];
      this.Touch.Move = { X: pageX, Y: pageY };
      this.__JudgeTopInfoByMove();
    },
    OnTouchEnd(event) {
      const { pageX, pageY } = event.changedTouches[0];
      this.Touch.End = { X: pageX, Y: pageY };
      this.__CalculationDirection();
      this.__ProcessPropsEvent();
      this.__JudgeTopInfoByEnd();
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
      this.BottomInfo.IsDisplay = true;
      OnNextData();
    },
    __ProcessDirectionDown() {
      if (!this.TopInfo.IsCallAPI) {
        return;
      }
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
    __JudeNextDataIsComplete() {
      const __self = this;
      setTimeout(() => {
        const { NextDataIsComplete } = __self.$props;
        const { Direction, CurrentDirection } = __self.Touch;
        if (!!__self.BottomInfo.IsDisplay && !!NextDataIsComplete && CurrentDirection === Direction.Up) {
          console.log('refresh 实例更新啦');
          __self.BottomInfo.IsDisplay = false;
        }
      }, 1000 * 5);
    },
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated: function () {
    this.__JudeNextDataIsComplete();
  },

};
</script>
