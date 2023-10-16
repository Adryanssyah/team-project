export default {
     mounted(el) {
          let isCursorLocked = false;
          const cursor = document.getElementById('cursor'),
               cursorContentWrap = document.querySelector('.cursor-content-wrap'),
               cursorContent = document.querySelector('.cursor-content'),
               cursorHighlight = document.querySelector('.cursor-highlight');
          if (window.innerWidth >= 991) {
               function cursorMove(t) {
                    isCursorLocked || ((cursor.style.top = t.clientY + 'px'), (cursor.style.left = t.clientX + 'px')),
                         (cursorHighlight.style.top = t.clientY + 'px'),
                         (cursorHighlight.style.left = t.clientX + 'px'),
                         (cursorContent.style.opacity = '50%');
               }
               document.addEventListener('mousemove', cursorMove),
                    document.addEventListener('mousedown', () => {
                         isCursorLocked || ((cursorContentWrap.style.webkitTransform = 'scale(0.9, 0.9)'), (cursorContentWrap.style.transform = 'scale(0.9, 0.9)'), (cursorContent.style.opacity = '80%'));
                    }),
                    document.addEventListener('mouseup', () => {
                         isCursorLocked || ((cursorContentWrap.style.webkitTransform = 'scale(1, 1)'), (cursorContentWrap.style.transform = 'scale(1, 1)'), (cursorContent.style.opacity = '50%'));
                    }),
                    document.querySelectorAll('[cursor-ix=true]').forEach((t) => {
                         let e = null;

                         t.addEventListener(
                              'mouseenter',
                              ({ currentTarget: t }) => {
                                   e = t.getBoundingClientRect();
                                   const r = window.getComputedStyle(t),
                                        o = r.getPropertyValue('z-index');
                                   t.classList.contains('lift') &&
                                        ((cursorContentWrap.style.opacity = '0%'),
                                        (cursorHighlight.style.opacity = '30%'),
                                        (cursorHighlight.style.width = e.height / 2 + 'px'),
                                        (cursorHighlight.style.height = e.height / 2 + 'px'),
                                        (cursorHighlight.style.webkitFilter = 'blur(' + e.height / 4 + 'px)'),
                                        (cursorHighlight.style.filter = 'blur(' + e.height / 4 + 'px)')),
                                        t.classList.contains('form-input')
                                             ? ((cursor.style.width = '2px'), (cursor.style.height = '24px'))
                                             : ((isCursorLocked = !0),
                                               cursor.classList.add('is-locked'),
                                               (cursor.style.top = e.top + e.height / 2 + 'px'),
                                               (cursor.style.left = e.left + e.width / 2 + 'px'),
                                               (cursor.style.width = e.width + 'px'),
                                               (cursor.style.height = e.height + 'px'),
                                               (cursor.style.zIndex = o - 1));
                              },

                              { passive: !0 }
                         ),
                              t.addEventListener(
                                   'mousemove',
                                   ({ currentTarget: t }) => {
                                        if (!t.classList.contains('form-input')) {
                                             const r = e.height / 2,
                                                  o = (event.y - e.top - r) / r,
                                                  s = e.width / 2,
                                                  c = (event.x - e.left - s) / s;
                                             (cursor.style.webkitTransform = 'translate(' + 8 * c + 'px, ' + 6 * o + 'px)'),
                                                  (cursor.style.transform = 'translate(' + 8 * c + 'px, ' + 6 * o + 'px)'),
                                                  t.classList.contains('lift') ||
                                                       ((t.style.webkitTransform = 'translate(' + 3 * c + 'px, ' + 2 * o + 'px) scale(1.025, 1.025)'), (t.style.transform = 'translate(' + 3 * c + 'px, ' + 2 * o + 'px) scale(1.025, 1.025)'));
                                        }
                                   },

                                   { passive: !0 }
                              ),
                              t.addEventListener(
                                   'mouseleave',
                                   ({ currentTarget: t }) => {
                                        (isCursorLocked = !1),
                                             t.classList.contains('lift') &&
                                                  ((cursorContentWrap.style.opacity = '100%'),
                                                  (cursorHighlight.style.opacity = '0%'),
                                                  (cursorHighlight.style.width = '0px'),
                                                  (cursorHighlight.style.height = '0px'),
                                                  (cursorHighlight.style.webkitFilter = 'blur(0px)'),
                                                  (cursorHighlight.style.filter = 'blur(0px)')),
                                             (cursor.style.transitionDuration = '150ms'),
                                             (cursor.style.width = '20px'),
                                             (cursor.style.height = '20px'),
                                             (cursor.style.webkitTransform = 'translate(0px, 0px)'),
                                             (cursor.style.transform = 'translate(0px, 0px)'),
                                             (t.style.webkitTransform = 'translate(0px, 0px) scale(1, 1)'),
                                             (t.style.transform = 'translate(0px, 0px) scale(1, 1)'),
                                             cursor.classList.remove('is-locked'),
                                             setTimeout(() => {
                                                  isCursorLocked || (cursor.style.zIndex = 1e3);
                                             }, 250);
                                   },
                                   { passive: !0 }
                              ),
                              t.addEventListener(
                                   'mousedown',
                                   ({ currentTarget: t }) => {
                                        cursorContent.style.opacity = '80%';
                                   },
                                   { passive: !0 }
                              ),
                              t.addEventListener(
                                   'mouseup',
                                   ({ currentTarget: t }) => {
                                        cursorContent.style.opacity = '30%';
                                   },
                                   { passive: !0 }
                              );
                    });
          }
     },
};
