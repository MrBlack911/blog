var $ = mdui.$;
var inst = new mdui.Fab('#fab');

// method
$('#open').on('click', function () {
  inst.open();
});

$('#close').on('click', function () {
  inst.close();
});

$('#hide').on('click', function () {
  inst.hide();
});

$('#show').on('click', function () {
  inst.show();
});

$('#getState').on('click', function () {
  mdui.alert(inst.getState());
});

// event
$('#fab').on('open.mdui.fab', function () {
  console.log('open');
});

$('#fab').on('opened.mdui.fab', function () {
  console.log('opened');
});

$('#fab').on('close.mdui.fab', function () {
  console.log('close');
});

$('#fab').on('closed.mdui.fab', function () {
  console.log('closed');
});