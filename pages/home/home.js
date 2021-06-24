Page({
  data: {
    array: [{
      message: '证件照换底色',
    }, {
      message: '自定义尺寸'
    }]
  },
  itemClic: function (item) {

    var id = parseInt(item.currentTarget.id);
    console.log(id);
  }
})