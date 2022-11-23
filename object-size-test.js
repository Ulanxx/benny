const sizeof = require('object-sizeof')

var param = new Array(10000).fill({
  // 地图宽度
  width: 255.0,
  // 地图高度
  height: 255.0,
  // 地图像素点,2 个十六进制数表示 1 个像素点
  data: 'f3f3f3f3f3f3f3f3f3f0f0f0f0f0......f3f3f3f3',
  // 地图原点坐标
  origin: {
    x: 0,
    y: 0,
  },
  // 分区颜色信息,类型为 json 字符串
  roomIdColorMap: "{f3:'#88001122',f0:'#88334455'}",
  // 分区详细信息,存储了每种像素点的详细信息
  roomInfo: {
    // key与data中的像素点对应
    f3: {
      // 清扫顺序
      defaultOrder: 0,
      // 详细信息,类型为 json 字符串
      extend:
        "{roomId:3,normalColor:'#FF218BFC',highlightColor:'#FF007AFC',name:'room1',fan:'0',order:'0',water_level:'0',sweep_count:'1',mop_count:'0',sweep_forbiden:'0',mop_forbidden:'0',y_mode:'255',vertexData:[]}",
      // 分区高亮时的颜色,主要用于分区合并、分区分割和设置清扫顺序时高亮选中的分区
      highlightColor: '#ff007afc',
      // 是否折叠分区属性标签 - 可选,用于可折叠标签
      isFoldable: false,
      // 分区名 - 可选,用于可折叠标签
      name: 'room1',
      // 分区颜色
      normalColor: '#ff218bfc',
      // 分区名称文本颜色 - 可选,用于可折叠标签
      roomNameTextColor: '#ff000000',
      // 分区属性,其中包括水量图标、吸力图标和清扫次数文本
      roomProperty: [
        {
          0: {
            propertyType: 'uri',
            value: 'https://images.tuyacn.com/app/robot/png/Water_close.png',
          },
          1: {
            propertyType: 'uri',
            value: 'https://images.tuyacn.com/app/robot/png/Fan_1.png',
          },
          2: {
            propertyType: 'text',
            value: '×1',
          },
        },
      ],
      // 分区属性标签背景颜色 - 可选,用于可折叠标签
      roomPropertyBgColor: '#80225344',
      // 分区属性标签是否可折叠 - 可选,用于可折叠标签
      roomPropertyStyle: 'foldable',
      // 分区属性标签文本颜色 - 可选,用于可折叠标签
      roomPropertyTextColor: '#FFFFFFFF',
    },
  },
  // 虚拟物体详细信息,类型为 json 字符串
  materialObject: '{}',
  // 总像素点,width * height
  pointCount: 65025,
  // 地毯详细信息
  textureObject:
    "[{url:'https://images.tuyacn.com/app/robot/png/carpet1.png',pointList:[],width:255,height:255}]",
})
// 4 one two-bytes char strings and 3 eighth-bytes numbers => 32B
console.log(sizeof(param))
