<template>
  <div id="all-map"></div>
</template>

<script>
import BMap from "BMap";
export default {
  mounted() {
    const map = new BMap.Map("all-map");          // 创建地图实例  
    const point = new BMap.Point(116.413477,40.007957);  // 创建点坐标
    const pointCamera = new BMap.Point(116.415051,40.007882) //创建相机位置
    const marker = new BMap.Marker(point);  // 创建标注
    const opts = {
      width : 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title : "华夏永乐科技有限公司" , // 信息窗口标题
    }
    const infoWindow = new BMap.InfoWindow("地址：北京市朝阳区安立路洛克时代C座7层北京华夏永乐科技有限公司", opts)
    map.addOverlay(marker);              // 将公司位置标注添加到地图中
    map.centerAndZoom(pointCamera, 18);  // 初始化地图，设置中心点坐标和地图级别      
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.setCurrentCity("北京");
    map.openInfoWindow(infoWindow,point);
    // map.setMapStyle({style:'midnight'});//地图风格
  }
}
</script>

<style scoped>
#all-map{
  transition: none;
  height: 100%;
  min-height: 400px;
  font-size: 14px;
}
</style>
