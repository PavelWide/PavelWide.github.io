var wms_layers = [];

        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gisMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });var format_targeting_report_pharmacy_shirokaya_201807081_1 = new ol.format.GeoJSON();
var features_targeting_report_pharmacy_shirokaya_201807081_1 = format_targeting_report_pharmacy_shirokaya_201807081_1.readFeatures(json_targeting_report_pharmacy_shirokaya_201807081_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_targeting_report_pharmacy_shirokaya_201807081_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_targeting_report_pharmacy_shirokaya_201807081_1.addFeatures(features_targeting_report_pharmacy_shirokaya_201807081_1);var lyr_targeting_report_pharmacy_shirokaya_201807081_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_targeting_report_pharmacy_shirokaya_201807081_1, 
                style: style_targeting_report_pharmacy_shirokaya_201807081_1,
    title: 'targeting_report_pharmacy_shirokaya_2018-07-08 (1)<br />\
    <img src="styles/legend/targeting_report_pharmacy_shirokaya_201807081_1_0.png" /> A<br />\
    <img src="styles/legend/targeting_report_pharmacy_shirokaya_201807081_1_1.png" /> B<br />'
        });

lyr_2gisMap_0.setVisible(true);lyr_targeting_report_pharmacy_shirokaya_201807081_1.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_targeting_report_pharmacy_shirokaya_201807081_1];
lyr_targeting_report_pharmacy_shirokaya_201807081_1.set('fieldAliases', {'x': 'x', 'y': 'y', 'Статус расч': 'Статус расч', 'Статус утв': 'Статус утв', 'Изм': 'Изм', 'Название учреждения': 'Название учреждения', 'Город': 'Город', 'Адрес': 'Адрес', 'Кат. Расч.': 'Кат. Расч.', 'Кат. Утв.': 'Кат. Утв.', 'Товарооборот': 'Товарооборот', 'Продажи/товарооборот, %': 'Продажи/товарооборот, %', 'Сегмент': 'Сегмент', 'Визитов по стратегии за месяц': 'Визитов по стратегии за месяц', 'Визитов за July 2018': 'Визитов за July 2018', });
lyr_targeting_report_pharmacy_shirokaya_201807081_1.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'Статус расч': 'TextEdit', 'Статус утв': 'TextEdit', 'Изм': 'TextEdit', 'Название учреждения': 'TextEdit', 'Город': 'TextEdit', 'Адрес': 'TextEdit', 'Кат. Расч.': 'TextEdit', 'Кат. Утв.': 'TextEdit', 'Товарооборот': 'TextEdit', 'Продажи/товарооборот, %': 'TextEdit', 'Сегмент': 'TextEdit', 'Визитов по стратегии за месяц': 'TextEdit', 'Визитов за July 2018': 'TextEdit', });
lyr_targeting_report_pharmacy_shirokaya_201807081_1.set('fieldLabels', {'x': 'no label', 'y': 'no label', 'Статус расч': 'no label', 'Статус утв': 'no label', 'Изм': 'no label', 'Название учреждения': 'no label', 'Город': 'no label', 'Адрес': 'no label', 'Кат. Расч.': 'no label', 'Кат. Утв.': 'no label', 'Товарооборот': 'no label', 'Продажи/товарооборот, %': 'no label', 'Сегмент': 'no label', 'Визитов по стратегии за месяц': 'no label', 'Визитов за July 2018': 'header label', });
lyr_targeting_report_pharmacy_shirokaya_201807081_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});