/*!
 * JZ Publish/Subscribe
 * Version: 1.4
 * License: http://www.opensource.org/licenses/gpl-3.0.html
 * Docs: http://www.joezimjs.com/projects/publish-subscribe-jquery-plugin/
 * Repo: https://github.com/joezimjs/JZ-Publish-Subscribe-jQuery-Plugin
 */
(function (b) {
    var e = {}, i = {};
    b.subscribe = function (a, d, c) {
        var g, j = {}, c = c || i;
        if ("string" !== b.type(a) || !b.isFunction(d))return null;
        g = a.split(" ");
        b.each(g, function (a, b) {
            if ("" === b || j[b])return!0;
            j[b] = !0;
            e[b] || (e[b] = []);
            e[b].push([d, c])
        });
        return{topics: a, callback: d, context: c}
    };
    b.unsubscribe = function (a, d, c) {
        var g = {};
        if (!a || "string" !== b.type(a) && (!a.topics || "string" !== b.type(a.topics)))return b;
        a.topics && (d = d || a.callback, c = c || a.context, a = a.topics);
        c = c || i;
        a = a.split(" ");
        b.each(a, function (a, f) {
            var h = e[f];
            if (f ===
                "" || !h || g[f])return true;
            g[f] = true;
            !d || !b.isFunction(d) ? delete e[f] : b.each(h, function (b, a) {
                if (a[0] === d && a[1] === c) {
                    h.splice(b, 1);
                    return false
                }
            })
        });
        return b
    };
    b.publish = function (a, d) {
        if (!a || "string" !== b.type(a))return b;
        var c = a.split(" ");
        b.each(c, function (a, c) {
            if ("" === c)return!0;
            if (e[c]) {
                var f = e[c].slice(0);
                b.each(f, function (b, a) {
                    a[0].call(a[1], c, d)
                })
            }
        });
        return b
    }
})(jQuery);