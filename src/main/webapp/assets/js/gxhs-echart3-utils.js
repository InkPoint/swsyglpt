;(function($, window, document, undefined){

    var Echart3Utils = function(ele, opt) {
        this.$element = ele,
            this.defaults = {
                type : 'pie',
                nullDataMsg: "<div style='width:100%;height:100%;display:table;' align='center'><div style='vertical-align:middle;display:table-cell;background-color:#FFF;'>暂无数据 </div></div>",
                ajax: {
                    url: '',
                    method: 'get',
                    params: {},
                    callback: function(json) {
                        console.log('成功时未定义回调函数!');
                    },
                    error: function(json) {
                        console.log('失败时未定义回调函数!');
                    }
                }
            },
            this.option = $.extend({}, this.defaults, opt);
    };

    Echart3Utils.prototype = {

        fetch: function() {
            var ajax = this.option.ajax;
            if (ajax) {
                $.ajax({
                    url: ajax.url,
                    data: ajax.params || { dv: new Date() },
                    dataType: ajax.dataType ? ajax.dataType : "json",
                    method: ajax.method ? ajax.method : 'get',
                    timeout: ajax.timeout || 5000,
                    success: ajax.callback && typeof(ajax.callback) == "function" ? ajax.callback.bind(this) : function(json) {
                        console.log(json);
                    }, error: ajax.error && typeof(ajax.error) == "function" ? ajax.error : function(xhr, textStatus, errorThrown) {
                        console.log("request exception: " + errorThrown);
                    }
                });
            }
        },

        line: function(opt) {
            this.lineDefaults = {
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: []
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: []
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%'],
                    splitLine: {
                        show: false
                    }
                },
                series: []
            };
            return $.extend(true, {}, this.lineDefaults, opt);
        },

        pie: function(opt) {
            this.pieDefaults = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: []
                },
                selectedMode: 'single',
                series: []
            };
            return $.extend(true, {}, this.pieDefaults, opt);
        },

        bar: function(opt) {
            this.pieDefaults = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c}"
                },
                xAxis : [{
                    type : 'category'
                }],
                yAxis : [{
                    type : 'value'
                }],
                legend: {
                    data: []
                },
                series: []
            };
            return $.extend(true, {}, this.pieDefaults, opt);
        },

        reader: function(opt) {

            this.ehcartEle = echarts.init(document.getElementById(this.$element.attr("id")), 'macarons');
            if (this.option && this.option.type) {
                if (this.option.type == 'line') {
                    return this.ehcartEle.setOption(this.line(opt), true);
                } else if (this.option.type == 'pie') {
                    return this.ehcartEle.setOption(this.pie(opt), true);
                } else if (this.option.type == 'bar') {
                    return this.ehcartEle.setOption(this.bar(opt), true);
                }
            }
            return {};
        },

        nullData: function(msg, selector) {
            selector ? selector.html(msg ? msg : this.option.nullDataMsg) : this.$element.html(msg ? msg : this.option.nullDataMsg);
        },

        reload: function(opt) {

            this.option = $.extend(true, {}, this.option, opt);
            if (this.option.ajax && this.option.ajax.url) {
                this.fetch();
            } else {
                this.reader(this.option);
            }
        }

    };

    $.fn.echart3Utils = function(options) {

        var echart3Utils = new Echart3Utils(this, options);
        if (options.ajax && options.ajax.url) {
            echart3Utils.fetch();
        } else if (options && $.isPlainObject(options)) {
            echart3Utils.reader(options);
        }
        return echart3Utils;

    };

})(jQuery, window, document);