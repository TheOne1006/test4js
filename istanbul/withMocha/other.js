exports.foo = function () {
  console.log('foo');
  var count = 0;
  function add() {
    return ++count;
  }
  return add;
}

exports.bar = function () {
  return 'bar';
}
