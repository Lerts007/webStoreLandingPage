<template>
  <div class='map' ref='container'></div>
</template>

<script>
import mapConfig from '@/components/UI/mapJSON.json'

export default {

  async mounted() {
    await ymaps3.ready;

    const {YMap, YMapMarker, YMapDefaultSchemeLayer, YMapFeatureDataSource, YMapLayer} = ymaps3;

    this.mapInstance = new YMap(
        this.$refs.container,
        
        {
          location: {
            center: [37.6522845, 55.726829],
            zoom: 16
          },
          behaviors: ['drag'],
        }
    );
    
    const layer = new YMapDefaultSchemeLayer({
      customization: mapConfig,
    });

    
    this.mapInstance.addChild(layer);

    const markerEl = document.createElement('img')
    markerEl.src = 'img/marker.png'


    this.mapInstance.addChild(
        new YMapFeatureDataSource({
          id: 'markerSource'
        })
    );
    this.mapInstance.addChild(
        new YMapLayer({
          source: 'markerSource',
          type: 'markers',
        })
    );
    const marker = new YMapMarker(
        {
          source: 'markerSource',
          coordinates: [37.6522845, 55.726829],
        },
        markerEl
    );

    this.mapInstance.addChild(marker);
  },

  beforeUnmount() {
    this.mapInstance.destroy()
  },

  data() {
    return {
      mapInstance: null,
    }
  },
};
</script>

<style>
.map{
  background-color: blue;
  width: 100%;
  height: 100%;
}
</style>