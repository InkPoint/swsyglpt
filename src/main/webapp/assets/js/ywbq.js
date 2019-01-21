$(function() {

	var json = [{
		"name": "业务标签",
		"code": "ywbq",
		"icon": "icon-th",
		"child": [{
				"name": "人",
				"icon": "icon-minus-sign",
				"code": "ren",
				"parentCode": "ywbq",
				"child": [{
					"name": "税务管理人员",
					"code": "swglry",
					"icon": "",
					"parentCode": "ren",
					"child": []
				}, {
					"name": "纳税人",
					"code": "nsr",
					"icon": "",
					"parentCode": "ren",
					"child": [{
						"name": "纳税主体",
						"code": "nszt",
						"icon": "",
						"parentCode": "nsr",
						"child": []
					}, {
						"name": "协税主体",
						"code": "xszt",
						"icon": "",
						"parentCode": "nsr",
						"child": []
					}]
				}]
			},
			{
				"name": "物",
				"icon": "icon-minus-sign",
				"code": "wu",
				"parentCode": "ywbq",
				"child": [{
					"name": "房产",
					"code": "fc",
					"icon": "",
					"parentCode": "wu",
					"child": []
				}, {
					"name": "土地",
					"code": "td",
					"icon": "",
					"parentCode": "wu",
					"child": []
				}, {
					"name": "车船",
					"code": "cc",
					"icon": "",
					"parentCode": "wu",
					"child": []
				}]
			},
			{
				"name": "事",
				"icon": "icon-minus-sign",
				"code": "shi",
				"parentCode": "ywbq",
				"child": [{
					"name": "房产出租",
					"code": "fwcz",
					"icon": "",
					"parentCode": "shi",
					"child": []
				}, {
					"name": "房产自用",
					"code": "fwzy",
					"icon": "",
					"parentCode": "shi",
					"child": []
				}, {
					"name": "土地使用",
					"code": "tdsy",
					"icon": "",
					"parentCode": "shi",
					"child": []
				}, {
					"name": "土地租赁",
					"code": "tdzp",
					"icon": "",
					"parentCode": "shi",
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