window.lightningjs || function(a) {
    function b(b, d) {
        return d && (d += (/\?/.test(d) ? "&" : "?") + "lv=1"), a[b] || function() {
            var e = window,
                f = document,
                g = b,
                h = f.location.protocol,
                i = "load",
                j = 0;
            ! function() {
                function b() { k.P(i), k.w = 1, a[g]("_load") }
                a[g] = function() {
                    function b() { return b.id = d, a[g].apply(b, arguments) }
                    var c, d = ++j;
                    return c = this && this != e ? this.id || 0 : 0, (k.s = k.s || []).push([d, c, arguments]), b.then = function(a, c, e) {
                        var f = k.fh[d] = k.fh[d] || [],
                            g = k.eh[d] = k.eh[d] || [],
                            h = k.ph[d] = k.ph[d] || [];
                        return a && f.push(a), c && g.push(c), e && h.push(e), b
                    }, b
                };
                var k = a[g]._ = {};
                k.fh = {}, k.eh = {}, k.ph = {}, k.l = d ? d.replace(/^\/\//, ("https:" == h ? h : "http:") + "//") : d, k.p = { 0: +new Date }, k.P = function(a) { k.p[a] = new Date - k.p[0] }, k.w && b(), e.addEventListener ? e.addEventListener(i, b, !1) : e.attachEvent("on" + i, b);
                var l = function() {
                    function a() { return ["<head></head><", b, ' onload="var d=', p, ";d.getElementsByTagName('head')[0].", h, "(d.", i, "('script')).", j, "='", k.l, "'\"></", b, ">"].join("") }
                    var b = "body",
                        d = f[b];
                    if (!d) return setTimeout(l, 100);
                    k.P(1);
                    var e, h = "appendChild",
                        i = "createElement",
                        j = "src",
                        m = f[i]("div"),
                        n = m[h](f[i]("div")),
                        o = f[i]("iframe"),
                        p = "document";
                    m.style.display = "none", d.insertBefore(m, d.firstChild).id = c + "-" + g, o.frameBorder = "0", o.id = c + "-frame-" + g, /MSIE[ ]+6/.test(navigator.userAgent) && (o[j] = "javascript:false"), o.allowTransparency = "true", n[h](o);
                    try { o.contentWindow[p].open() } catch (q) { k.domain = f.domain, e = "javascript:var d=" + p + ".open();d.domain='" + f.domain + "';", o[j] = e + "void(0);" }
                    try {
                        var r = o.contentWindow[p];
                        r.write(a()), r.close()
                    } catch (s) { o[j] = e + 'd.write("' + a().replace(/"/g, String.fromCharCode(92) + '"') + '");d.close();' }
                    k.P(2)
                };
                k.l && l()
            }()
        }(), a[b].lv = "1", a[b]
    }
    var c = "lightningjs",
        d = window[c] = b(c);
    d.require = b, d.modules = a
}({});
var mainurl = "https://cdn.ghostmonitor.com/main.js?" + Date.now();
lightningjs.require("ghostmonitor", mainurl);