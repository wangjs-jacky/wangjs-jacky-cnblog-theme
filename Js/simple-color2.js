"use strict";
var _createClass = function() {
    function o(e, t) {
        for (var a = 0; a < t.length; a++) {
            var o = t[a];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
    }
    return function(e, t, a) {
        return t && o(e.prototype, t),
        a && o(e, a),
        e
    }
} ();
function _classCallCheck(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
} !
function(p) {
    p.extend({
        silence: function(e) {
            var t = new a;
            t.init(e)
        }
    });
    var a = function() {
        function e() {
            _classCallCheck(this, e),
            this.defaluts = {
                profile: {
                    enable: !1,
                    avatar: null,
                    favicon: null
                },
                catalog: {
                    enable: !1,
                    move: !0,
                    index: !0,
                    level1: "h2",
                    level2: "h3",
                    level3: "h4"
                },
                signature: {
                    author: null,
                    enable: !1,
                    home: "https://www.cnblogs.com",
                    license: "CC BY 4.0",
                    link: "https://creativecommons.org/licenses/by/4.0"
                },
                reward: {
                    enable: !1,
                    title: "我是猴子派来收钱的",
                    wechat: null,
                    alipay: null
                },
                github: {
                    enable: !1,
                    color: "#fff",
                    fill: null,
                    link: null
                }
            },
            this.version = "1.0.0"
        }
        return _createClass(e, [{
            key: "init",
            value: function(e) {
                e && p.extend(!0, this.defaluts, e),
                this.buildCustomElements(),
                this.buildGithubCorner(),
                this.buildCopyright(),
                this.buildBloggerProfile(),
                this.isPostPage ? (this.goIntoReadingMode(), this.buildPostCatalog(), this.buildPostCodeCopyBtns(), this.buildPostSignature(), this.buildPostFavoriteBtn(), this.buildPostRewardBtn(), this.buildToolbar(), this.buildPostCommentAvatars()) : this.goIntoNormalMode()
            }
        },
        {
            key: "showMessage",
            value: function(e) {
                p("body").prepend('<div class="esa-layer"><span class="esa-layer-content">' + e + "</span></div>");
                var t = p(".esa-layer");
                t.fadeIn(200),
                setTimeout(function() {
                    t.remove()
                },
                2e3)
            }
        },
        {
            key: "goIntoReadingMode",
            value: function() {
                var t = this,
                a = 0,
                e = p(window);
                767 < e.width() && e.scroll(function() {
                    var e = this.scrollY;
                    a < e ? p(t.cnblogs.header).slideUp("fast") : p(t.cnblogs.header).slideDown("fast"),
                    a = this.scrollY
                })
            }
        },
        {
            key: "goIntoNormalMode",
            value: function() {
                767 < p(window).width() && (p(this.cnblogs.forFlow).css({
                    marginLeft: "22em"
                }), p(this.cnblogs.sideBar).fadeIn(500))
            }
        },
        {
            key: "buildCustomElements",
            value: function() {
                var e = this,
                t = p(this.cnblogs.blogTitle).find("h1 a").html(),
                a = p(this.cnblogs.publicProfile).find("a:eq(0)").html(),
                o = p("head").find("title");
                //o.html(o.html().replace(a + " - 博客园", "" + t));
                var n = p(this.cnblogs.navList);
				n.find("li").eq(1).after('<li><a id="blog_nav_tags" class="menu" href="https://www.cnblogs.com/' + currentBlogApp + '/tag">标签</a></li>'),
				// n.find("li").eq(2).after('<li><a id="blog_nav_tags" class="menu" href="https://www.cnblogs.com/yjlaugus/p/7705340.html ">关于</a></li>'),
				// n.find("li").eq(3).after('<li><a id="blog_nav_tags" class="menu" href="https://www.cnblogs.com/yjlaugus/articles/weibo.html">微语</a></li>'),
				// n.find("li").eq(4).after('<li><a id="blog_nav_tags" class="menu" href="https://www.cnblogs.com/yjlaugus/p/7857317.html ">投喂</a></li>'),
				// n.find("li").eq(5).after('<li><a id="blog_nav_tags" class="menu" href="https://www.cnblogs.com/yjlaugus/p/8724650.html">友链</a></li>'),
                p.each(n.find("li"),
                function(e, t) {
                    p(t).append("<i></i>")
                }),
                p("body").prepend('<div class="esa-mobile-menu"></div>'),
                p(".esa-mobile-menu").on("click",
                function() {
                    p(e.cnblogs.navigator).fadeToggle(200)
                })
            }
        },
        {
            key: "buildCopyright",
            value: function() {
                var e = '<div> Powered By <a href="https://www.cnblogs.com" target="_blank">Cnblogs</a> |\n            Theme <a href="https://github.com/YJLAugus/cnblogs-theme-simple-color" target="_blank">simple-color' + this.version + "</a></div>";
                p(this.cnblogs.footer).append(e)
            }
        },
        {
            key: "buildPostSignature",
            value: function() {
                var e = this.defaluts.signature;
                if (e.enable) {
                    var t = p(this.cnblogs.postTitle).attr("href"),
                    a = e.author || p(this.cnblogs.publicProfile).find("a:eq(0)").html(),
                    o = '<div class="esa-post-signature"> \n                    <p>作者：<a href="' + e.home + '">' + a + '</a></p> \n                    <p>出处：<a href="' + t + '">' + t + '</a></p> \n                    <p>本站使用「<a href="' + e.link + '"  target="_blank">' + e.license + "</a>」创作共享协议，转载请在文章明显位置注明作者及出处。</p> \n                </div>";
                    p(this.cnblogs.postSignature).html(o).show()
                }
            }
        },
        {
            key: "buildPostCommentAvatars",
            value: function() {
                var s = this,
                e = function() {
                    p(s.cnblogs.postCommentBody).before("<div class='esa-comment-avatar'><a target='_blank'><img /></a></div>");
                    for (var e = p(s.cnblogs.feedbackContent), t = 0; t < e.length; t++) {
                        var a = "https://pic.cnblogs.com/face/sample_face.gif",
                        o = p(e[t]).find("span:last")[0];
                        o && (a = p(o).html().replace("http://", "//")),
                        p(e[t]).find(".esa-comment-avatar img").attr("src", a);
                        var n = p(e[t]).parent().find(".comment_date").next().attr("href");
                        p(e[t]).find(".esa-comment-avatar a").attr("href", n)
                    }
                };
                if (p(this.cnblogs.postCommentBody).length) e();
                else var t = 1,
                a = setInterval(function() {
                    p(s.cnblogs.postCommentBody).length && (clearInterval(a), e()),
                    10 == t && clearInterval(a),
                    t++
                },
                500)
            }
        },
        {
            key: "buildPostRewardBtn",
            value: function() {
                var e = this,
                t = this.defaluts.reward;
                if (t.enable) {
                    if (!t.wechat && !t.alipay) return void this.showMessage("Error：微信或支付宝赞赏二维码请至少配置一个");
                    var a = '<div class="esa-reward">\n                <div class="esa-reward-close">✕</div>\n                <h2>"' + t.title + '"</h2>\n                <div class="esa-reward-container">';
                    t.wechat && (a += '<div class="wechat"><img src="' + t.wechat + '"></div>'),
                    t.alipay && (a += '<div class="alipay"><img src="' + t.alipay + '"></div>'),
                    a += "</div></div>",
                    p("body").append(a),
                    p(".esa-reward-close").on("click",
                    function() {
                        p(".esa-reward").fadeOut()
                    });
                    var o = function() {
                        p(e.cnblogs.postDigg).prepend('<div class="reward"><span class="rewardnum" id="reward_count"></span></div>'),
                        p(e.cnblogs.postDigg).find(".reward").on("click",
                        function() {
                            p(".esa-reward").fadeIn()
                        })
                    };
                    if (p(this.cnblogs.postDigg).length) o();
                    else var n = setInterval(function() {
                        p(e.cnblogs.postDigg).length && (clearInterval(n), o())
                    },
                    200)
                } else p(this.cnblogs.postDigg).width(300)
            }
        },
        {
            key: "buildPostFavoriteBtn",
            value: function() {
                var e = this,
                t = function() {
                    p(e.cnblogs.postDigg).prepend('<div class="favorite" onclick="AddToWz(cb_entryId);return false;"><span class="favoritenum" id="favorite_count"></span></div>')
                };
                if (p(this.cnblogs.postDigg).length) t();
                else var a = setInterval(function() {
                    p(e.cnblogs.postDigg).length && (clearInterval(a), t())
                },
                200)
            }
        },
        {
            key: "buildPostCatalog",
            value: function() {
                var l = this.defaluts.catalog;
                if (l.enable) {
                    var e = [l.level1, l.level2, l.level3],
                    t = p(this.cnblogs.postBody).find(e.join(","));
                    if (!t.length) return ! 1;
                    var a = p('<div class="esa-catalog">\n                        <div class="esa-catalog-contents">\n                            <div class="esa-catalog-title">CONTENTS</div>\n                            <a class="esa-catalog-close">✕</a>\n                        </div>\n                    </div>'),
                    r = 0,
                    c = 0,
                    d = 0,
                    u = "<ul>",
                    f = (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(t.length));
                    p.each(t,
                    function(e, t) {
                        var a = p(t)[0].tagName.toLowerCase(),
                        o = "",
                        n = p(t).html(),
                        s = n;
                        if (l.index) a === l.level1 ? (d = c = 0, o = '<span class="level1">' + ++r + ". </span>") : a === l.level2 ? (d = 0, o = '<span class="level2">' + r + "." + ++c + ". </span>") : a === l.level3 && (o = '<span class="level3">' + r + "." + c + "." + ++d + ". </span>");
                        else switch (a) {
                        case l.level1:
                            n = '<span class="level1">' + n + "</span>";
                            break;
                        case l.level2:
                            n = '<span class="level2">' + n + "</span>";
                            break;
                        case l.level3:
                            n = '<span class="level3">' + n + "</span>"
                        }
                        var i = f[e];
                        u += '<li class="li_' + a + '" title="' + s + '">\n                            <i class="' + i + '" ></i><a class="esa-anchor-link">' + (o + n) + "</a>\n                        </li>",
                        p(t).attr("id", "" + i).html("<span>" + n + '</span><a href="#' + i + '" class="esa-anchor">#</a>').hover(function() {
                            p(t).find(".esa-anchor").css("opacity", 1)
                        },
                        function() {
                            p(t).find(".esa-anchor").css("opacity", 0)
                        })
                    }),
                    u += "</ul>",
                    a.find(".esa-catalog-contents").append(u),
                    a.appendTo("body");
                    var o = p(".esa-catalog-contents");
                    if (o.fadeIn(), p(".esa-anchor-link").on("click",
                    function() {
                        var e = p("#" + p(this).prev("i").attr("class")).offset().top;
                        p("html, body").animate({
                            scrollTop: e
                        },
                        300)
                    }), p(".esa-catalog-close").on("click",
                    function() {
                        o.hide()
                    }), l.move) {
                        var i = {
                            start: !1,
                            pois: [0, 0]
                        };
                        p(".esa-catalog-title").on("mousedown",
                        function(e) {
                            e.preventDefault(),
                            i.start = !0;
                            var t = p(".esa-catalog").position(),
                            a = e.clientX - parseFloat(t.left),
                            o = e.clientY - parseFloat(t.top);
                            i.pois = [a, o]
                        }),
                        p(document).on("mousemove",
                        function(e) {
                            if (i.start) {
                                var t = e.clientX - i.pois[0],
                                a = e.clientY - i.pois[1],
                                o = "fixed" === p(".esa-catalog").css("position");
                                e.preventDefault(),
                                i.stX = o ? 0 : p(window).scrollLeft(),
                                i.stY = o ? 0 : p(window).scrollTop();
                                var n = p(window).width() - p(".esa-catalog").outerWidth() + i.stX,
                                s = p(window).height() - p(".esa-catalog").outerHeight() + i.stY;
                                t < i.stX && (t = i.stX),
                                n < t && (t = n),
                                a < i.stY && (a = i.stY),
                                s < a && (a = s),
                                p(".esa-catalog").css({
                                    left: t,
                                    top: a,
                                    right: "auto"
                                })
                            }
                        }).on("mouseup",
                        function(e) {
                            i.start && (i.start = !1)
                        })
                    }
                }
            }
        },
        {
            key: "buildGithubCorner",
            value: function() {
                var e = this.defaluts.github;
                if (e.enable) {
                    var t = e.fill ? "fill:" + e.fill + ";": "";
                    p("body").append('<a href="' + e.link + '" class="github-corner" title="Fork me on GitHub">\n                        <svg width="60" height="60" viewBox="0 0 250 250" style="' + t + " color:" + e.color + '; z-index: 999999; position: fixed; top: 0; border: 0; left: 0; transform: scale(-1, 1);" aria-hidden="true">\n                            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n                            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>\n                            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n                        </svg>\n                    </a>')
                }
            }
        },
        {
            key: "buildPostCodeCopyBtns",
            value: function() {
                var t = this,
                e = p(".postBody .cnblogs-markdown").find("pre");
                if (!e.length) return ! 1;
                p.each(e,
                function(e, t) {
                    p(t).find("code").attr("id", "copy_target_" + e),
                    p(t).prepend('<div class="esa-clipboard-button" data-clipboard-target="#copy_target_' + e + '" title="复制代码">Copy</div>')
                }),
                p.getScript("https://unpkg.com/clipboard@2.0.0/dist/clipboard.min.js",
                function() {
                    var e = new ClipboardJS(".esa-clipboard-button");
                    e.on("success",
                    function(e) {
                        t.showMessage("代码已复制到粘贴板中"),
                        e.clearSelection()
                    }),
                    e.on("error",
                    function(e) {
                        t.showMessage("代码复制失败")
                    })
                })
            }
        },
        {
            key: "buildToolbar",
            value: function() {
                var a = this,
                e = this.defaluts.catalog;
                p("body").append('<div class="esa-toolbar">\n                <button class="esa-toolbar-gotop"><div class="tips">返回顶部</div></button>\n                <button class="esa-toolbar-contents"><div class="tips">阅读目录</div></button>\n                <button class="esa-toolbar-follow"><div class="tips">关注博主</div></button>\n            </div>');
                var t = p(".esa-toolbar-gotop"),
                o = p(".esa-toolbar-contents"),
                n = p(".esa-toolbar-follow");
                e.enable ? o.on("click",
                function() {
                    var e = p(".esa-catalog-contents");
                    "none" == e.css("display") ? e.fadeIn() : e.hide()
                }).hover(function() {
                    o.find(".tips").show()
                },
                function() {
                    o.find(".tips").hide()
                }) : o.remove(),
                t.on("click",
                function() {
                    p(window).scrollTop(0)
                }).hover(function() {
                    t.find(".tips").show()
                },
                function() {
                    t.find(".tips").hide()
                }),
                p(window).scroll(function() {
                    200 < this.scrollY ? t.fadeIn() : t.fadeOut()
                }),
                n.on("click",
                function() {
                    loadLink(location.protocol + "//common.cnblogs.com/scripts/artDialog/ui-dialog.css",
                    function() {
                        loadScript(location.protocol + "//common.cnblogs.com/scripts/artDialog/dialog-min.js",
                        function() {
                            if (!isLogined) return login();
                            if (c_has_follwed) return a.showMessage("您已经关注过该博主");
                            var t = cb_blogUserGuid;
                            p.ajax({
                                url: "/mvc/Follow/FollowBlogger.aspx",
                                data: '{"blogUserGuid":"' + t + '"}',
                                dataType: "text",
                                type: "post",
                                contentType: "application/json; charset=utf-8",
                                success: function(e) {
                                    "未登录" == e ? login() : "关注成功" == e && followByGroup(t, !0),
                                    a.showMessage(e)
                                }
                            })
                        })
                    })
                }).hover(function() {
                    n.find(".tips").show()
                },
                function() {
                    n.find(".tips").hide()
                })
            }
        },
        {
            key: "buildBloggerProfile",
            value: function() {
                var e = this.defaluts.profile;
                e.enable && (!this.isPostPage && e.avatar && p(this.cnblogs.sideBarMain).prepend('<img class="esa-profile-avatar" src="' + e.avatar + '" />'), e.favicon && p("head").append('<link rel="shortcut icon" href="' + e.favicon + '" type="image/x-icon" />'))
            }
        },
        {
            key: "cnblogs",
            get: function() {
                return {
                    header: "#header",
                    blogTitle: "#blogTitle",
                    publicProfile: "#profile_block",
                    navigator: "#navigator",
                    navList: "#navList",
                    sideBar: "#sideBar",
                    sideBarMain: "#sideBarMain",
                    forFlow: ".forFlow",
                    postTitle: "#cb_post_title_url",
                    postDetail: "#post_detail",
                    postBody: "#cnblogs_post_body",
                    postDigg: "#div_digg",
                    postCommentBody: ".blog_comment_body",
                    feedbackContent: ".feedbackCon",
                    postSignature: "#MySignature",
                    footer: "#footer"
                }
            }
        },
        {
            key: "isPostPage",
            get: function() {
                return 0 < p(this.cnblogs.postDetail).length
            }
        }]),
        e
    } ()
} (jQuery);
