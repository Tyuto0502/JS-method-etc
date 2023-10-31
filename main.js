//課題1

/*
プロパティは、オブジェクト内でkeyとvalueが組み合わさりそのオブジェクト固有のデータ。
メソッドは、オブジェクトのプロパティとしてある関数でそのオブジェクトに対する操作。
*/

const practice = {
  methodA: function () {
    console.log("method practice");
  },
  methodB: function () {
    console.log("sample text");
  },
  methodC: function () {
    console.log("test");
  },
}
practice.methodA();
console.log(practice);


//課題2
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
  };
console.log(fruit("リンゴ", 100));


//課題3
function addTax(price, func) {
  const name = {name1:"トマト", name2:"玉ねぎ"};
  const taxPrice = Math.round(price * 1.10);
  func(name, taxPrice);
}

const tomato = function price(name, taxPrice) {
  console.log(name.name1 + "の税込価格は" + taxPrice + "円です。");
};

const onion = function price(name, taxPrice) {
  console.log(name.name2 + "の税込価格は" + taxPrice + "円です。");
};

addTax(100, tomato);
addTax(150, onion);

