const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto', // 自动计算显示几张图片
  spaceBetween: 10, // 图片间距
  loop: true, // 无限循环
  autoplay: {
    delay: 2, // 2秒切换一次
    disableOnInteraction: false, // 用户操作后仍自动播放
  },
});
