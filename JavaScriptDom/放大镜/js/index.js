//获取需要操作的元素
//获取外层盒子
var box = document.getElementById('box');
//获取小盒子
var smallBox = box.children[0];
// 获取小盒子里的图片
var smallImg = smallBox.children[0];
// 获取遮罩
var mask = smallBox.children[1];
//获取大盒子
var bigBox = box.children[1];
// 获取大图
var bigImg = bigBox.children[0];

// 1 鼠标移动到小盒子上 显示遮罩 和 显示大图
smallBox.onmouseover = function () {
  mask.style.display = 'block';
  bigBox.style.display = 'block';
}
smallBox.onmouseout = function () {
  mask.style.display = 'none';
  bigBox.style.display = 'none';
}
// 2 鼠标在小盒子里移动时，遮盖层随着鼠标移动。
function onMouesemove(e) {
  var e = e || window.event;
  var x = e.clientX - box.offsetLeft - mask.offsetWidth / 2;
  var y = e.clientY - box.offsetTop - mask.offsetHeight / 2;
  console.log(smallBox.offsetWidth)
  // 2.1 当遮罩层移动到小盒子的四周，定位在小盒子的四周  
  if (x < 0) {
    mask.style.left = 0 + 'px';
  } else if (x + mask.offsetWidth > smallBox.offsetWidth) {
    mask.style.left = smallBox.offsetWidth - mask.offsetWidth + 'px';
  } else {
    mask.style.left = x + 'px';
  }
  if (y < 0) {
    mask.style.top = 0 + 'px';
  } else if (y + mask.offsetHeight > smallBox.offsetHeight) {
    mask.style.top = smallBox.offsetHeight - mask.offsetHeight + 'px';
  } else {
    mask.style.top = y + 'px';
  }
  // 3 显示对应的大图部分
  bigImg.style.left = -(parseInt(mask.style.left) * 2) + 'px';
  bigImg.style.top = -(parseInt(mask.style.top) * 2) + 'px';
}
smallBox.addEventListener('mousemove', onMouesemove, false);