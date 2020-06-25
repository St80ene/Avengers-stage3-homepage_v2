window.onload = () => {
  document.getElementById('').style.display = 'none';
};
function toggleTab(tab, active) {
  document.getElementById('text1').style.display = 'none';
  document.getElementById('text2').style.display = 'none';
  document.getElementById('text3').style.display = 'none';
  document.getElementById(tab).style.display = 'block';
  document.getElementById('click1').style.backgroundColor = '';
  document.getElementById('click2').style.backgroundColor = '';
  document.getElementById('click3').style.backgroundColor = '';
  document.getElementById(active).style.backgroundColor = '#e4af26';
}
