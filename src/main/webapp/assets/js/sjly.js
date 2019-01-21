$(function() {

	var json = [{
		"name": "数据来源",
		"code": "sjly",
		"icon": "icon-th",
		"child": [{
				"name": "内部",
				"icon": "icon-minus-sign",
				"code": "nb",
				"parentCode": "sjly",
				"child": [{
					"name": "市局自主采集",
					"code": "sjzzcj",
					"icon": "",
					"parentCode": "nb",
					"child": []
				}, {
					"name": "秦税系统",
					"code": "qsxt",
					"icon": "",
					"parentCode": "nb",
					"child": []
				}, {
					"name": "金三系统",
					"code": "jsxt",
					"icon": "",
					"parentCode": "nb",
					"child": []
				}, {
					"name": "综合治税平台",
					"code": "zhzspy",
					"icon": "",
					"parentCode": "nb",
					"child": []
				}]
			},
			{
				"name": "外部",
				"icon": "",
				"code": "wb",
				"parentCode": "sjly",
				"child": [{
					"name": "网票",
					"code": "wp",
					"icon": "",
					"parentCode": "wb",
					"child": []
				}, {
					"name": "等等",
					"code": "dd",
					"icon": "",
					"parentCode": "wb",
					"child": []
				}]
			}
		]
	}];

	function tree(data) {
		for(var i = 0; i < data.length; i++) {
			var data2 = data[i];
			if(data[i].icon == "icon-th") {
				$("#rootUL").append("<li data-name='" + data[i].code + "'><span><i class='" + data[i].icon + "'></i> " + data[i].name + "</span></li>");
			} else {
				var children = $("li[data-name='" + data[i].parentCode + "']").children("ul");
				if(children.length == 0) {
					$("li[data-name='" + data[i].parentCode + "']").append("<ul></ul>")
				}
				$("li[data-name='" + data[i].parentCode + "'] > ul").append(
					"<li data-name='" + data[i].code + "'>" +
					"<span>" +
					"<i class='" + data[i].icon + "'></i> " +
					data[i].name +
					"</span>" +
					"</li>")
			}
			for(var j = 0; j < data[i].child.length; j++) {
				var child = data[i].child[j];
				var children = $("li[data-name='" + child.parentCode + "']").children("ul");
				if(children.length == 0) {
					$("li[data-name='" + child.parentCode + "']").append("<ul></ul>")
				}
				$("li[data-name='" + child.parentCode + "'] > ul").append(
					"<li data-name='" + child.code + "'>" +
					"<span>" +
					"<i class='" + child.icon + "'></i> " +
					child.name +
					"</span>" +
					"</li>")
				var child2 = data[i].child[j].child;
				tree(child2)
			}
			tree(data[i]);
		}

	}

	tree(json)

});