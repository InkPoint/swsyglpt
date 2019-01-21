!function (win) {
    var htlui = function () {
        this.version = "1.0.1";
    };
    getLayer = function () {
        if (parent.layer) {
            return parent.layer;
        } else {
            return layer;
        }
    };
    htlui.prototype.nullToEmpty = function (obj) {
        return obj == null || obj == undefined ? "" : obj;
    }
    htlui.prototype.msg = function (obj) {
        if (parent.layer) {
            parent.layer.msg(obj);
        } else {
            layer.msg(obj);
        }
    }

    htlui.prototype.getAmapSearchLocation = function (obj) {
        var map, geocoder, auto, marker, regeocode;

        function mySearch(str) {
            auto.search(str, function (status, info) {
                console.log(JSON.stringify(info));
                if(status=="complete"){
                $.each(info.tips, function (i, v) {
                    if (i == 0) {
                        if (v.location.lng != null) {
                            addMarker({"location": {"lng": v.location.lng, "lat": v.location.lat}});
                            map.setZoomAndCenter(12, [v.location.lng, v.location.lat]);
                            return;
                        }
                    }
                })
                }else{
                    console.log("地图默认搜索出错，请检查搜索参数！");
                };
            });
        }

        // 实例化点标记
        addMarker = function (obj) {
            marker = new AMap.Marker({
                icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                position: [obj.location.lng, obj.location.lat],
                offset: new AMap.Pixel(-13, -30)
            });
            marker.setMap(map);
            geocoder.getAddress([obj.location.lng, obj.location.lat], function (status, result) {
                if (status === 'complete' && result.regeocode) {
                    regeocode = {
                        "adcode": result.regeocode.addressComponent.adcode,
                        "lng": obj.location.lng,
                        "lat": obj.location.lat,
                        "formattedAddress": result.regeocode.formattedAddress
                    }
                } else {
                    JSON.stringify(result)
                }
            });
        }

        // 清除 marker
        function clearMarker() {
            if (marker) {
                marker.setMap(null);
                marker = null;
            }
        }

        var html =
            '<div style="width: 100%;height: 100%;">' +
            '     <div id="htlui-amap-container" style="width: 100%;height: 100%;">' +
            '</div>\n' +
            '     <input id="htlui-amap-address" placeholder="请输入搜索地址" style="text-align: center;position:absolute;right: 10px;top:10px;width: 200px;;height: 35px;"/>\n' +
            '</div>';
        layer.open({
            type: 1,
            title: "高德地图",
            content: html,
            btn: ['确认', '关闭'],
            area: ['800px', '550px'],
            success: function (layero, index) {
                map = new AMap.Map("htlui-amap-container", {
                    resizeEnable: true
                });
                map.plugin(["AMap.Autocomplete", "AMap.Geocoder"], function () {
                    //加载逆向编码
                    geocoder = new AMap.Geocoder({
                        city: '全国'
                    });
                    //加载自动搜索
                    auto = new AMap.Autocomplete({input: "htlui-amap-address", city: '全国'});
                });
                $("#htlui-amap-address").keyup(function (e) {
                    if (e.keyCode == "13") {
                        mySearch($(this).val());
                    }
                })
                map.on('click', function (e) {
                    clearMarker();
                    addMarker({"location": {"lng": e.lnglat.getLng(), "lat": e.lnglat.getLat()}});
                });

                AMap.event.addListener(auto, "select", function (e) {
                    clearMarker();
                    addMarker({"location": {"lng": e.poi.location.lng, "lat": e.poi.location.lat}});
                    map.setZoomAndCenter(12, [e.poi.location.lng, e.poi.location.lat]);
                    return false;
                });

                if (obj.searchAddress != null || obj.searchAddress != "") {
                    $("#htlui-amap-address").val(obj.searchAddress);
                    mySearch(obj.searchAddress);
                }
            },
            yes: function (index, layero) {
                if (regeocode != null) {
                    layer.confirm(regeocode.formattedAddress + "?", {title: '确认地址'}, function (confirmIndex) {
                        if (obj != null && obj.callback != null) {
                            obj.callback(regeocode);
                        }
                        layer.close(confirmIndex);
                        layer.close(index);
                    });
                }
            }
        });
    },
        win.htlui = new htlui();
}(window)