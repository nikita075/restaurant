function myImg() {
  let elem = document.getElementById('header-main');
  let style = getComputedStyle(elem);
  if (style.display === 'none') {
    document.getElementById('header-main').style.display = 'block';
  } else if (style.display !== 'none') {
    document.getElementById('header-main').style.display = 'none';
  }
}