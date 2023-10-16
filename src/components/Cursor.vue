<template>
     <div class="custom-cursor">
          <div id="cursor" class="cursor">
               <div class="cursor-content-wrap"><div class="cursor-content"></div></div>
          </div>
          <div class="cursor-highlight"></div>
     </div>
</template>

<script>
export default {
     name: 'CustomCursor',
     // mounted() {
     //      if (window.innerWidth >= 991) {
     //           this.setupCursorEventListeners();
     //      }
     // },

     // updated() {
     //      if (window.innerWidth >= 991) {
     //           this.setupCursorEventListeners();
     //      }
     // },

     methods: {
          // setupCursorEventListeners(e) {
          //      let isCursorLocked = !1;
          //      const cursor = document.getElementById('cursor'),
          //           cursorContentWrap = document.querySelector('.cursor-content-wrap'),
          //           cursorContent = document.querySelector('.cursor-content'),
          //           cursorHighlight = document.querySelector('.cursor-highlight');
          //      const hoveredElements = this.$refs.hoveredElements;
          //      if (window.innerWidth >= 991) {
          //           function cursorMove(t) {
          //                isCursorLocked || ((cursor.style.top = t.clientY + 'px'), (cursor.style.left = t.clientX + 'px')),
          //                     (cursorHighlight.style.top = t.clientY + 'px'),
          //                     (cursorHighlight.style.left = t.clientX + 'px'),
          //                     (cursorContent.style.opacity = '50%');
          //           }
          //           document.addEventListener('mousemove', cursorMove),
          //                document.addEventListener('mousedown', () => {
          //                     isCursorLocked || ((cursorContentWrap.style.webkitTransform = 'scale(0.9, 0.9)'), (cursorContentWrap.style.transform = 'scale(0.9, 0.9)'), (cursorContent.style.opacity = '80%'));
          //                }),
          //                document.addEventListener('mouseup', () => {
          //                     isCursorLocked || ((cursorContentWrap.style.webkitTransform = 'scale(1, 1)'), (cursorContentWrap.style.transform = 'scale(1, 1)'), (cursorContent.style.opacity = '50%'));
          //                }),
          //                document.querySelectorAll('[cursor-ix=true]').forEach((t) => {
          //                     let e = null;
          //                     t.addEventListener(
          //                          'mouseenter',
          //                          ({ currentTarget: t }) => {
          //                               e = t.getBoundingClientRect();
          //                               const r = window.getComputedStyle(t),
          //                                    o = r.getPropertyValue('z-index');
          //                               t.classList.contains('lift') &&
          //                                    ((cursorContentWrap.style.opacity = '0%'),
          //                                    (cursorHighlight.style.opacity = '30%'),
          //                                    (cursorHighlight.style.width = e.height / 2 + 'px'),
          //                                    (cursorHighlight.style.height = e.height / 2 + 'px'),
          //                                    (cursorHighlight.style.webkitFilter = 'blur(' + e.height / 4 + 'px)'),
          //                                    (cursorHighlight.style.filter = 'blur(' + e.height / 4 + 'px)')),
          //                                    t.classList.contains('form-input')
          //                                         ? ((cursor.style.width = '2px'), (cursor.style.height = '24px'))
          //                                         : ((isCursorLocked = !0),
          //                                           cursor.classList.add('is-locked'),
          //                                           (cursor.style.top = e.top + e.height / 2 + 'px'),
          //                                           (cursor.style.left = e.left + e.width / 2 + 'px'),
          //                                           (cursor.style.width = e.width + 'px'),
          //                                           (cursor.style.height = e.height + 'px'),
          //                                           (cursor.style.zIndex = o - 1));
          //                          },
          //                          { passive: !0 }
          //                     ),
          //                          t.addEventListener(
          //                               'mousemove',
          //                               ({ currentTarget: t }) => {
          //                                    if (!t.classList.contains('form-input')) {
          //                                         const r = e.height / 2,
          //                                              o = (event.y - e.top - r) / r,
          //                                              s = e.width / 2,
          //                                              c = (event.x - e.left - s) / s;
          //                                         (cursor.style.webkitTransform = 'translate(' + 8 * c + 'px, ' + 6 * o + 'px)'),
          //                                              (cursor.style.transform = 'translate(' + 8 * c + 'px, ' + 6 * o + 'px)'),
          //                                              t.classList.contains('lift') ||
          //                                                   ((t.style.webkitTransform = 'translate(' + 3 * c + 'px, ' + 2 * o + 'px) scale(1.025, 1.025)'),
          //                                                   (t.style.transform = 'translate(' + 3 * c + 'px, ' + 2 * o + 'px) scale(1.025, 1.025)'));
          //                                    }
          //                               },
          //                               { passive: !0 }
          //                          ),
          //                          t.addEventListener(
          //                               'mouseleave',
          //                               ({ currentTarget: t }) => {
          //                                    (isCursorLocked = !1),
          //                                         t.classList.contains('lift') &&
          //                                              ((cursorContentWrap.style.opacity = '100%'),
          //                                              (cursorHighlight.style.opacity = '0%'),
          //                                              (cursorHighlight.style.width = '0px'),
          //                                              (cursorHighlight.style.height = '0px'),
          //                                              (cursorHighlight.style.webkitFilter = 'blur(0px)'),
          //                                              (cursorHighlight.style.filter = 'blur(0px)')),
          //                                         (cursor.style.transitionDuration = '150ms'),
          //                                         (cursor.style.width = '20px'),
          //                                         (cursor.style.height = '20px'),
          //                                         (cursor.style.webkitTransform = 'translate(0px, 0px)'),
          //                                         (cursor.style.transform = 'translate(0px, 0px)'),
          //                                         (t.style.webkitTransform = 'translate(0px, 0px) scale(1, 1)'),
          //                                         (t.style.transform = 'translate(0px, 0px) scale(1, 1)'),
          //                                         cursor.classList.remove('is-locked'),
          //                                         setTimeout(() => {
          //                                              isCursorLocked || (cursor.style.zIndex = 1e3);
          //                                         }, 250);
          //                               },
          //                               { passive: !0 }
          //                          ),
          //                          t.addEventListener(
          //                               'mousedown',
          //                               ({ currentTarget: t }) => {
          //                                    cursorContent.style.opacity = '80%';
          //                               },
          //                               { passive: !0 }
          //                          ),
          //                          t.addEventListener(
          //                               'mouseup',
          //                               ({ currentTarget: t }) => {
          //                                    cursorContent.style.opacity = '30%';
          //                               },
          //                               { passive: !0 }
          //                          );
          //                });
          //      }
          // },
     },
};
</script>

<style>
.cursor {
     position: fixed;
     z-index: 1000000;
     width: 20px;
     height: 20px;
     opacity: 0;
     -webkit-backface-visibility: hidden;
     backface-visibility: hidden;
     transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.cursor-content-wrap {
     width: 100%;
     height: 100%;
     transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.cursor-content {
     width: 100%;
     height: 100%;
     border-radius: 10px;
     background-color: #989898;
     opacity: 0.5;
     transform: translate(-50%, -50%);
     transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), height 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.cursor-highlight {
     position: fixed;
     z-index: 1001;
     border-radius: 50%;
     background-color: #fff;
     opacity: 0;
     transform: translate3d(-50%, -50%, 1px);
     transform-style: preserve-3d;
}

html,
body {
     cursor: none;
}
body:hover .cursor {
     opacity: 100%;
}
a {
     cursor: none;
     z-index: 2;
}
.cursor,
.cursor-highlight {
     pointer-events: none;
}
.is-locked {
     transition-property: width, height, top, left, opacity;
     transition-duration: 200ms;
     transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
     opacity: 30% !important;
}
.lift {
     transition-property: box-shadow, transform;
     transition-duration: 100ms;
     transition-timing-function: linear;
}
</style>
