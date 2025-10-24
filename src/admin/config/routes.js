/*
 * @Author: 邹中兴
 * @Date: 2019-04-10 09:11:00
 * @LastEditors: 邹中兴
 * @LastEditTime: 2020-10-23 06:31:35
 * @Description:
 */
export default [
  {
    path: "/",
    name: "index",
    component: (r) =>
      require.ensure([], () => r(require("../pages/index/index.vue")), "index"),
    meta: {
      title: "后台首页",
      level: 0,
    },
    children: [
      //首页管理
      {
        path: "home",
        name: "home",
        // menuId: 1,
        meta: {
          title: "首页管理",
          linkName: "首页管理",
          menuId: "1",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/home/index.vue")),
            "home"
          ),
        children: [
          {
            path: "basic",
            name: "home_basic",
            // menuId: 1,
            meta: {
              title: "首页管理=>基础设置",
              linkName: "基本设置",
              menuId: "1",
              hiddenContent: true,
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/home/basic/basic.vue")),
                "home"
              ),
          },
          // 首页轮播图
          {
            path: "banner",
            name: "home_banner",
            // menuId: 1,
            meta: {
              title: "首页管理=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "1",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/home/banner/index.vue")),
                "home"
              ),
          },
          // 三大国家级重点平台
          {
            path: "special",
            name: "home_special",
            // menuId: 1,
            meta: {
              title: "首页管理=>三大国家级重点平台",
              linkName: "三大国家级重点平台",
              menuId: "1",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/home/special/index.vue")),
                "home"
              ),
            children: [
              {
                path: "special",
                name: "homeSpecialEdit",
                // menuId: 1,
                meta: {
                  title: "首页管理=>三大国家级重点平台=>编辑",
                  linkName: "三大国家级重点平台",
                  menuId: "1",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/home/special/edit.vue")),
                    "home"
                  ),
              },
            ],
          },
          // 产业布局
          {
            path: "industry",
            name: "home_industry",
            meta: {
              title: "首页管理=>产业布局",
              linkName: "产业布局",
              menuId: "11",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/home/industry/index.vue")),
                "home"
              ),
            children: [
              {
                path: "basic",
                name: "home_industry_basic",
                meta: {
                  title: "首页管理=>产业布局=>基本设置",
                  linkName: "基本设置",
                  menuId: "11",
                  hiddenContent: true,
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/home/industry/basic.vue")),
                    "home"
                  ),
              },
              {
                path: "edit",
                name: "homeIndustryEdit",
                meta: {
                  title: "首页管理=>产业布局=>编辑",
                  linkName: "产业布局",
                  menuId: "11",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/home/industry/edit.vue")),
                    "home"
                  ),
              },
            ],
          },
          // 产业新纪元
          {
            path: "era",
            name: "home_era",
            meta: {
              title: "首页管理=>产业新纪元",
              linkName: "产业新纪元",
              menuId: "12",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/home/era/index.vue")),
                "home"
              ),
            children: [
              {
                path: "basic",
                name: "home_era_basic",
                meta: {
                  title: "首页管理=>产业新纪元=>基本设置",
                  linkName: "基本设置",
                  menuId: "12",
                  hiddenContent: true,
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/home/era/basic.vue")),
                    "home"
                  ),
              },
              {
                path: "edit",
                name: "homeEraEdit",
                meta: {
                  title: "首页管理=>产业新纪元=>编辑",
                  linkName: "产业新纪元",
                  menuId: "12",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/home/era/edit.vue")),
                    "home"
                  ),
              },
            ],
          },
        ],
      },
      //关于我们
      {
        path: "about",
        name: "about",
        meta: {
          title: "关于我们",
          linkName: "关于我们",
          menuId: "2",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/about/index.vue")),
            "about"
          ),
        children: [
          //基础设置
          {
            path: "basic",
            name: "basic",
            meta: {
              title: "关于我们=>基础设置",
              linkName: "基本设置",
              menuId: "2",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/basic/index.vue")),
                "about-basic"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "banner",
            meta: {
              title: "关于我们=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "2",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/banner/index.vue")),
                "about"
              ),
          },
          // 企业简介
          {
            path: "introduce",
            name: "introduce",
            meta: {
              title: "关于我们=>企业简介",
              linkName: "企业简介",
              menuId: "21",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/introduction/index.vue")),
                "about"
              ),
          },
          //新闻
          {
            path: "news",
            name: "news",
            meta: {
              title: "关于我们=>新闻资讯",
              linkName: "新闻资讯",
              menuId: "9",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/news/index.vue")),
                "news"
              ),
            children: [
              {
                path: "basic",
                name: "news_basic",
                meta: {
                  title: "关于我们=>新闻资讯=>基础设置",
                  linkName: "基础设置",
                  menuId: "9",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/news/basic.vue")),
                    "news"
                  ),
              },
              {
                path: "menu",
                name: "news_menu",
                meta: {
                  title: "关于我们=>新闻资讯=>栏目设置",
                  linkName: "栏目设置",
                  menuId: "9",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/news/menu/index.vue")),
                    "news"
                  ),
                children: [
                  {
                    path: "edit",
                    name: "newsMenuEdit",
                    meta: {
                      title: "关于我们=>新闻资讯=>栏目编辑",
                      linkName: "编辑",
                      menuId: "9",
                    },
                    component: (r) =>
                      require.ensure(
                        [],
                        () => r(require("../pages/about/news/menu/edit.vue")),
                        "news"
                      ),
                  },
                ],
              },
              {
                path: "list",
                name: "news_list",
                meta: {
                  title: "关于我们=>新闻资讯=>新闻列表",
                  linkName: "新闻列表",
                  menuId: "9",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/news/list.vue")),
                    "news"
                  ),
                children: [
                  {
                    path: "add",
                    name: "news_add",
                    meta: {
                      title: "关于我们=>新闻资讯=>新增",
                      linkName: "新增",
                      menuId: "9",
                    },
                    component: (r) =>
                      require.ensure(
                        [],
                        () => r(require("../pages/about/news/add.vue")),
                        "news"
                      ),
                  },
                  {
                    path: "edit",
                    name: "aboutNewsEdit",
                    meta: {
                      title: "关于我们=>新闻资讯=>编辑",
                      linkName: "编辑",
                      menuId: "9",
                    },
                    component: (r) =>
                      require.ensure(
                        [],
                        () => r(require("../pages/about/news/edit.vue")),
                        "news"
                      ),
                  },
                ],
              },
            ],
          },
          // // 管理团队及专家介绍
          {
            path: "expert",
            name: "expert",
            meta: {
              title: "关于我们=>管理团队及专家介绍",
              linkName: "管理团队及专家介绍",
              menuId: "11",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/expert/index.vue")),
                "about"
              ),
            children: [
              {
                path: "basic",
                name: "export_basic",
                meta: {
                  title: "关于我们=>管理团队及专家介绍=>基础设置",
                  linkName: "基础设置",
                  menuId: "11",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/expert/basic.vue")),
                    "expert"
                  ),
              },
              {
                path: "add",
                name: "export_add",
                meta: {
                  title: "关于我们=>管理团队及专家介绍=>新增",
                  linkName: "新增",
                  menuId: "11",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/expert/add.vue")),
                    "expert"
                  ),
              },
              // 管理团队及专家介绍
              {
                path: "edit",
                name: "export_edit",
                meta: {
                  title: "关于我们=>管理团队及专家介绍=>编辑",
                  linkName: "编辑",
                  menuId: "11",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/expert/edit.vue")),
                    "expert"
                  ),
              },
            ],
          },
          // 荣誉资质
          {
            path: "honor",
            name: "honor",
            meta: {
              title: "关于我们=>荣誉资质",
              linkName: "荣誉资质",
              menuId: "22",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/honor/honor.vue")),
                "honor1"
              ),
            children: [
              {
                path: "basic",
                name: "honor_basic",
                meta: {
                  title: "关于我们=>荣誉资质=>基础设置",
                  linkName: "基础设置",
                  menuId: "22",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/honor/basic.vue")),
                    "honor1"
                  ),
              },
            ],
          },

          // 深潜
          {
            path: "deepfocus",
            name: "about_deepfocus",
            meta: {
              title: "关于我们=>深潜 Deep Focus",
              linkName: "深潜 Deep Focus",
              menuId: "36",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/deepfocus/index.vue")),
                "about"
              ),
            children: [
              {
                path: "basic",
                name: "deepfocus_basic",
                meta: {
                  title: "关于我们=>深潜 Deep Focus=>基础设置",
                  linkName: "深潜 Deep Focus",
                  menuId: "36",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/deepfocus/basic.vue")),
                    "about_deepfocus"
                  ),
              },
            ],
          },
          // 全球布局和合作联盟
          {
            path: "partner",
            name: "home_partner",
            menuId: 37,
            meta: {
              title: "首页管理=>全球布局和合作联盟",
              linkName: "全球布局和合作联盟",
              menuId: "37",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/partner/partner.vue")),
                "about_partner"
              ),
            children: [
              {
                path: "basic",
                name: "home_global_basic",
                meta: {
                  title: "首页管理=>全球布局和合作联盟=>基础设置",
                  linkName: "基础设置",
                  menuId: "37",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/partner/basic.vue")),
                    "about_partner"
                  ),
              },
            ],
          },
          // 企业责任
          {
            path: "responsibility",
            name: "about_responsibility",
            meta: {
              title: "关于我们=>企业责任",
              linkName: "企业责任",
              menuId: "23",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/about/responsibility/index.vue")),
                "about"
              ),
            children: [
              {
                path: "basic",
                name: "responsibility_basic",
                meta: {
                  title: "关于我们=>企业责任=>基础设置",
                  linkName: "基础设置",
                  menuId: "23",
                  hiddenContent: true,
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/responsibility/basic.vue")),
                    "about"
                  ),
              },
              {
                path: "edit",
                name: "aboutResponsibilityEdit",
                meta: {
                  title: "关于我们=>企业责任=>编辑",
                  linkName: "企业责任",
                  menuId: "23",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/about/responsibility/edit.vue")),
                    "about"
                  ),
              },
            ],
          },
          // //企业文化
          // {
          //   path: 'culture',
          //   name: 'culture',
          //   meta: {
          //     title: '关于我们=>企业文化',
          //     linkName: '企业文化',
          //     menuId: '8',
          //   },
          //   component: (r => require.ensure([], () => r(require('../pages/about/culture/index.vue')), 'culture')),
          //   children: [{
          //     path: 'basic',
          //     name: 'culture_basic',
          //     meta: {
          //       title: '关于我们=>企业文化=>基础设置',
          //       linkName: '基础设置',
          //       menuId: '8',
          //     },
          //     component: (r => require.ensure([], () => r(require('../pages/about/culture/basic.vue')), 'culture'))
          //   },
          //   {
          //     path: 'add',
          //     name: 'culture_add',
          //     meta: {
          //       title: '关于我们=>企业文化=>新增',
          //       linkName: '新增',
          //       menuId: '8',
          //     },
          //     component: (r => require.ensure([], () => r(require('../pages/about/culture/add.vue')), 'culture'))
          //   },
          //   {
          //     path: 'edit',
          //     name: 'culture_edit',
          //     meta: {
          //       title: '关于我们=>企业文化=>编辑',
          //       linkName: '新增',
          //       menuId: '8',
          //     },
          //     component: (r => require.ensure([], () => r(require('../pages/about/culture/edit.vue')), 'culture'))
          //   }
          //   ]
          // },

          // //论著
          // {
          //   path: 'book',
          //   name: 'book',
          //   meta: {
          //     title: '关于我们=>专业论著',
          //     linkName: '专业论著',
          //     menuId: '10',
          //   },
          //   component: (r => require.ensure([], () => r(require('../pages/about/book/index.vue')), 'book')),
          //   children: [
          //     {
          //       path: 'basic',
          //       name: 'book_basic',
          //       meta: {
          //         title: '关于我们=>专业论著=>基础设置',
          //         linkName: '基础设置',
          //         menuId: '10',
          //       },
          //       component: (r => require.ensure([], () => r(require('../pages/about/book/basic.vue')), 'book'))
          //     },
          //     {
          //       path: 'edit',
          //       name: 'book_edit',
          //       meta: {
          //         title: '关于我们=>专业论著=>新增',
          //         linkName: '新增',
          //         menuId: '10',
          //       },
          //       component: (r => require.ensure([], () => r(require('../pages/about/book/edit.vue')), 'book'))
          //     }
          //   ]
          // },
        ],
      },
      // 养殖模式
      {
        path: "breeding",
        name: "breeding",
        meta: {
          title: "养殖模式",
          linkName: "养殖模式",
          menuId: "3",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/breeding/index.vue")),
            "breeding"
          ),
        children: [
          {
            path: "basic",
            name: "breeding_basic",
            meta: {
              title: "养殖模式=>基础设置",
              linkName: "基础设置",
              menuId: "3",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/breeding/basic/basic.vue")),
                "breeding"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "breeding_banner",
            meta: {
              title: "养殖模式=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "3",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/breeding/banner/index.vue")),
                "breeding"
              ),
          },
          // 陆基苗种基地
          {
            path: "landbase",
            name: "breeding_landbase",
            meta: {
              title: "养殖模式=>陆基苗种基地",
              linkName: "陆基苗种基地",
              menuId: "31",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/breeding/landbase/basic.vue")),
                "breeding"
              ),
          },
          // 深远海养殖
          {
            path: "deepsea",
            name: "breeding_deepsea",
            meta: {
              title: "养殖模式=>深远海养殖",
              linkName: "深远海养殖",
              menuId: "32",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/breeding/deepsea/basic.vue")),
                "breeding"
              ),
          },
        ],
      },
      // 科研平台
      {
        path: "platform",
        name: "platform",
        meta: {
          title: "科研平台",
          linkName: "科研平台",
          menuId: "4",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/platform/index.vue")),
            "platform"
          ),
        children: [
          {
            path: "basic",
            name: "platform_basic",
            meta: {
              title: "科研平台=>基础设置",
              linkName: "基础设置",
              menuId: "4",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/platform/basic/basic.vue")),
                "platform"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "platform_banner",
            meta: {
              title: "科研平台=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "4",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/platform/banner/index.vue")),
                "platform"
              ),
          },
          // 成果列表
          {
            path: "achievement",
            name: "platform_achievement",
            meta: {
              title: "科研平台=>成果列表",
              linkName: "成果列表",
              menuId: "41",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/platform/achievement/index.vue")),
                "platform"
              ),
            children: [
              {
                path: "add",
                name: "platform_achievement_add",
                meta: {
                  title: "科研平台=>成果列表=>新增",
                  linkName: "成果列表_新增",
                  menuId: "41",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/platform/achievement/add.vue")),
                    "platform"
                  ),
              },
              {
                path: "edit",
                name: "platform_achievement_edit",
                meta: {
                  title: "科研平台=>成果列表=>编辑",
                  linkName: "成果列表_编辑",
                  menuId: "41",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/platform/achievement/edit.vue")),
                    "platform"
                  ),
              },
            ],
          },
        ],
      },
      // 产品中心
      {
        path: "product-center",
        name: "product-center",
        meta: {
          title: "产品中心",
          linkName: "产品中心",
          menuId: "5",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/product-center/index.vue")),
            "product-center"
          ),
        children: [
          {
            path: "basic",
            name: "product_center_basic",
            meta: {
              title: "产品中心=>基础设置",
              linkName: "基础设置",
              menuId: "5",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/product-center/basic/basic.vue")),
                "product-center"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "product_center_banner",
            meta: {
              title: "产品中心=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "5",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/product-center/banner/index.vue")),
                "product-center"
              ),
          },
          //网站首页轮播图设置
          {
            path: "homepage-banner",
            name: "product_center_homepage_banner",
            meta: {
              title: "产品中心=>网站首页轮播图设置",
              linkName: "网站首页轮播图设置",
              menuId: "51",
            },
            component: (r) =>
              require.ensure(
                [],
                () =>
                  r(
                    require("../pages/product-center/homepage-banner/index.vue")
                  ),
                "product-center"
              ),
          },
          //产品首页轮播图设置
          {
            path: "product-homepage-banner",
            name: "product_center_product_homepage_banner",
            meta: {
              title: "产品中心=>产品首页轮播图设置",
              linkName: "产品首页轮播图设置",
              menuId: "52",
            },
            component: (r) =>
              require.ensure(
                [],
                () =>
                  r(
                    require("../pages/product-center/product-homepage-banner/index.vue")
                  ),
                "product-center"
              ),
          },
          //海上加工中心
          {
            path: "processing-center",
            name: "product_center_processing_center",
            meta: {
              title: "产品中心=>海上加工中心",
              linkName: "海上加工中心",
              menuId: "53",
            },
            component: (r) =>
              require.ensure(
                [],
                () =>
                  r(
                    require("../pages/product-center/processing-center/basic.vue")
                  ),
                "product-center"
              ),
          },
          //营销布局
          {
            path: "marketing-layout",
            name: "product_center_marketing_layout",
            meta: {
              title: "产品中心=>营销布局",
              linkName: "营销布局",
              menuId: "54",
            },
            component: (r) =>
              require.ensure(
                [],
                () =>
                  r(
                    require("../pages/product-center/marketing-layout/basic.vue")
                  ),
                "product-center"
              ),
          },
        ],
      },
      // 新闻动态
      {
        path: "news-dynamic",
        name: "news-dynamic",
        meta: {
          title: "新闻动态",
          linkName: "新闻动态",
          menuId: "6",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/news-dynamic/index.vue")),
            "news-dynamic"
          ),
        children: [
          //基础设置
          {
            path: "basic",
            name: "news_dynamic_basic",
            meta: {
              title: "新闻动态=>基础设置",
              linkName: "基础设置",
              menuId: "6",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/news-dynamic/basic/index.vue")),
                "news-dynamic"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "news_dynamic_banner",
            meta: {
              title: "新闻动态=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "6",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/news-dynamic/banner/index.vue")),
                "news-dynamic"
              ),
          },
          //栏目设置
          {
            path: "menu",
            name: "news_dynamic_menu",
            meta: {
              title: "新闻动态=>栏目设置",
              linkName: "栏目设置",
              menuId: "61",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/news-dynamic/menu/index.vue")),
                "news-dynamic"
              ),
            children: [
              {
                path: "edit",
                name: "news_dynamic_menu_edit",
                meta: {
                  title: "新闻动态=>栏目设置=>编辑",
                  linkName: "编辑",
                  menuId: "61",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/news-dynamic/menu/edit.vue")),
                    "news-dynamic"
                  ),
              },
            ],
          },
          //新闻列表
          {
            path: "list",
            name: "news_dynamic_list",
            meta: {
              title: "新闻动态=>新闻列表",
              linkName: "新闻列表",
              menuId: "62",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/news-dynamic/list/index.vue")),
                "news-dynamic"
              ),
            children: [
              {
                path: "add",
                name: "news_dynamic_add",
                meta: {
                  title: "新闻动态=>新闻列表=>新增",
                  linkName: "新增",
                  menuId: "62",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/news-dynamic/list/add.vue")),
                    "news-dynamic"
                  ),
              },
              {
                path: "edit",
                name: "news_dynamic_edit",
                meta: {
                  title: "新闻动态=>新闻列表=>编辑",
                  linkName: "编辑",
                  menuId: "62",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/news-dynamic/list/edit.vue")),
                    "news-dynamic"
                  ),
              },
            ],
          },
        ],
      },
      // 联系我们
      {
        path: "contact",
        name: "contact",
        meta: {
          title: "联系我们",
          linkName: "联系我们",
          menuId: "7",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/contact/index.vue")),
            "contact"
          ),
        children: [
          {
            path: "basic",
            name: "contact_basic",
            meta: {
              title: "联系我们_基础设置",
              linkName: "基础设置",
              menuId: "7",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/contact/basic/basic.vue")),
                "contact"
              ),
          },
          {
            path: "banner",
            name: "contact_banner",
            meta: {
              title: "联系我们_轮播图设置",
              linkName: "轮播图设置",
              menuId: "7",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/contact/banner/index.vue")),
                "contact"
              ),
          },
        ],
      },
      // 科研优势
      {
        path: "advantage",
        name: "advantage",
        meta: {
          title: "科研优势",
          linkName: "科研优势",
          menuId: "3",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/advantage/index.vue")),
            "advantage"
          ),
        children: [
          {
            path: "basic",
            name: "advantage_basic",
            meta: {
              title: "核心优势=>基础设置",
              linkName: "基础设置",
              menuId: "3",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/advantage/basic/basic.vue")),
                "advantage"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "advantage_banner",
            meta: {
              title: "核心优势=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "3",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/advantage/banner/index.vue")),
                "profile"
              ),
          },
          // 组学研究
          {
            path: "ecological",
            name: "ecological",
            meta: {
              title: "核心优势领域=>生物信息分析",
              linkName: "生物信息分析",
              menuId: "13",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/advantage/ecological/index.vue")),
                "advantage"
              ),
            children: [
              {
                path: "add",
                name: "ecological_add",
                meta: {
                  title: "核心优势领域=>生物信息分析=>新增",
                  linkName: "生物信息分析_新增",
                  menuId: "13",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/ecological/add.vue")),
                    "advantage"
                  ),
              },
              {
                path: "edit",
                name: "ecological_edit",
                meta: {
                  title: "核心优势领域=>生物信息分析=>编辑",
                  linkName: "生物信息分析_编辑",
                  menuId: "13",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/ecological/edit.vue")),
                    "advantage"
                  ),
              },
              {
                path: "basic",
                name: "ecological_basic",
                meta: {
                  title: "核心优势领域=>生物信息分析=>基本设置",
                  linkName: "生物信息分析_立体循环",
                  menuId: "13",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/ecological/basic.vue")),
                    "advantage"
                  ),
              },
            ],
          },
          // 分子育种
          {
            path: "molecular",
            name: "molecular",
            meta: {
              title: "核心优势=>分子育种",
              linkName: "分子育种",
              menuId: "12",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/advantage/molecular/index.vue")),
                "advantage"
              ),
            children: [
              {
                path: "add",
                name: "molecular_add",
                meta: {
                  title: "核心优势=>分子育种=>新增",
                  linkName: "分子育种_新增",
                  menuId: "12",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/molecular/add.vue")),
                    "advantage"
                  ),
              },
              {
                path: "edit",
                name: "molecular_edit",
                meta: {
                  title: "核心优势=>分子育种=>编辑",
                  linkName: "分子育种_编辑",
                  menuId: "12",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/molecular/edit.vue")),
                    "advantage"
                  ),
              },
              {
                path: "basic",
                name: "molecular_basic",
                meta: {
                  title: "核心优势=>分子育种=>基本设置",
                  linkName: "分子育种_基本设置",
                  menuId: "12",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/molecular/basic.vue")),
                    "advantage"
                  ),
              },
            ],
          },
          // 科研服务
          {
            path: "deep",
            name: "deep",
            meta: {
              title: "核心优势领域=>科研服务",
              linkName: "科研服务",
              menuId: "14",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/advantage/deep/index.vue")),
                "advantage"
              ),
            children: [
              {
                path: "add",
                name: "deep_add",
                meta: {
                  title: "核心优势领域=>科研服务=>新增",
                  linkName: "科研服务_新增",
                  menuId: "14",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/deep/add.vue")),
                    "advantage"
                  ),
              },
              {
                path: "edit",
                name: "deep_edit",
                meta: {
                  title: "核心优势领域=>科研服务=>编辑",
                  linkName: "科研服务_编辑",
                  menuId: "14",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/deep/edit.vue")),
                    "advantage"
                  ),
              },
              {
                path: "basic",
                name: "deep_basic",
                meta: {
                  title: "核心优势领域=>科研服务=>基本设置",
                  linkName: "科研服务_立体循环",
                  menuId: "14",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/deep/basic.vue")),
                    "advantage"
                  ),
              },
            ],
          },
          // 专业论著
          //论著
          {
            path: "book",
            name: "book",
            meta: {
              title: "关于我们=>专业论著",
              linkName: "专业论著",
              menuId: "10",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/advantage/book/index.vue")),
                "book"
              ),
            children: [
              {
                path: "basic",
                name: "book_basic",
                meta: {
                  title: "关于我们=>专业论著=>基础设置",
                  linkName: "基础设置",
                  menuId: "10",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/book/basic.vue")),
                    "book"
                  ),
              },
              {
                path: "edit",
                name: "book_edit",
                meta: {
                  title: "关于我们=>专业论著=>新增",
                  linkName: "新增",
                  menuId: "10",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/book/edit.vue")),
                    "book"
                  ),
              },
            ],
          },
          // 水生生物生物制药
          {
            path: "data",
            name: "advantage_data",
            meta: {
              title: "核心优势=>水生生物生物制药",
              linkName: "水生生物生物制药",
              menuId: "38",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/advantage/data/index.vue")),
                "advantage"
              ),
            children: [
              {
                path: "basic",
                name: "advantage_data_basic",
                meta: {
                  title: "核心优势=>水生生物生物制药=>基础设置",
                  linkName: "基础设置",
                  menuId: "38",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/advantage/data/basic/basic.vue")),
                    "advantage"
                  ),
              },
              {
                path: "bigdata",
                name: "advantage_data_bigdata",
                meta: {
                  title: "核心优势=>水生生物生物制药=>大数据",
                  linkName: "大数据",
                  menuId: "40",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/advantage/data/bigdata/index.vue")),
                    "advantage"
                  ),
              },
              {
                path: "thousand_fish",
                name: "thousand_fish",
                meta: {
                  title: "核心优势=>水生生物生物制药=>千种鱼类转录组",
                  linkName: "千种鱼类转录组",
                  menuId: "41",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/commonModel/class/classContent.vue")),
                    "advantage"
                  ),
              },
              {
                path: "breeding_plan",
                name: "breeding_plan",
                meta: {
                  title: "核心优势=>水生生物生物制药=>十百千组学育种计划",
                  linkName: "十百千组学育种计划",
                  menuId: "42",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/advantage/data/bigdata/index.vue")),
                    "advantage"
                  ),
              },
              {
                path: "germplasm_bank",
                name: "germplasm_bank",
                meta: {
                  title: "核心优势=>水生生物生物制药=>长江流域种质资源库",
                  linkName: "长江流域种质资源库",
                  menuId: "43",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/advantage/data/bigdata/index.vue")),
                    "advantage"
                  ),
              },
              {
                path: "fish",
                name: "advantage_data_fish",
                meta: {
                  title: "核心优势=>水生生物生物制药=>鱼类抗菌肽数据库",
                  linkName: "鱼类抗菌肽数据库",
                  menuId: "39",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/advantage/data/bigdata/index.vue")),
                    "advantage"
                  ),
              },
              {
                path: "conotoxin",
                name: "advantage_data_conotoxin",
                meta: {
                  title: "核心优势=>水生生物生物制药=>芋螺毒素数据库",
                  linkName: "芋螺毒素数据库",
                  menuId: "48",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/advantage/data/bigdata/index.vue")),
                    "advantage"
                  ),
              },
              {
                path: "magdalena",
                name: "advantage_data_magdalena",
                meta: {
                  title: "核心优势=>水生生物生物制药=>马格达莱纳脂鲤数据库",
                  linkName: "马格达莱纳脂鲤数据库",
                  menuId: "49",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/advantage/data/bigdata/index.vue")),
                    "advantage"
                  ),
              },
            ],
          },
        ],
      },
      // 业务模块
      {
        path: "business",
        name: "business",
        meta: {
          title: "种源经济",
          linkName: "种源经济",
          menuId: "4",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/business/index.vue")),
            "advantage"
          ),
        children: [
          {
            path: "basic",
            name: "business_basic",
            meta: {
              title: "种源经济=>基础设置",
              linkName: "基础设置",
              menuId: "4",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/business/basic/basic.vue")),
                "business"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "business_banner",
            meta: {
              title: "种源经济=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "4",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/business/banner/index.vue")),
                "profile"
              ),
          },
          //分子育种成果
          {
            path: "molecularAchievement",
            name: "molecularAchievement",
            meta: {
              title: "种源经济=>分子育种成果",
              linkName: "分子育种成果",
              menuId: "31",
            },
            component: (r) =>
              require.ensure(
                [],
                () =>
                  r(
                    require("../pages/business/molecularAchievement/index.vue")
                  ),
                "business"
              ),
            children: [
              {
                path: "add",
                name: "molecularAchievement_add",
                meta: {
                  title: "种源经济=>分子育种成果=>新增",
                  linkName: "分子育种成果_新增",
                  menuId: "31",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(
                        require("../pages/business/molecularAchievement/add.vue")
                      ),
                    "business"
                  ),
              },
              {
                path: "edit",
                name: "molecularAchievement_edit",
                meta: {
                  title: "种源经济=>分子育种成果=>编辑",
                  linkName: "分子育种成果_编辑",
                  menuId: "31",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(
                        require("../pages/business/molecularAchievement/edit.vue")
                      ),
                    "business"
                  ),
              },
              {
                path: "basic",
                name: "molecularAchievement_basic",
                meta: {
                  title: "种源经济=>分子育种成果=>基本设置",
                  linkName: "分子育种成果_基本设置",
                  menuId: "31",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(
                        require("../pages/business/molecularAchievement/basic.vue")
                      ),
                    "business"
                  ),
              },
            ],
          },
          //生态养殖
          {
            path: "breed",
            name: "breed",
            meta: {
              title: "种源经济=>生态养殖",
              linkName: "生态养殖",
              menuId: "15",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/business/breed/index.vue")),
                "business"
              ),
            children: [
              {
                path: "add",
                name: "breed_add",
                meta: {
                  title: "种源经济=>生态养殖=>新增",
                  linkName: "生态养殖_新增",
                  menuId: "15",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/breed/add.vue")),
                    "business"
                  ),
              },
              {
                path: "edit",
                name: "breed_edit",
                meta: {
                  title: "种源经济=>生态养殖=>编辑",
                  linkName: "生态养殖_编辑",
                  menuId: "15",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/breed/edit.vue")),
                    "business"
                  ),
              },
              {
                path: "basic",
                name: "breed_basic",
                meta: {
                  title: "种源经济=>生态养殖=>基本设置",
                  linkName: "生态养殖_基本设置",
                  menuId: "15",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/breed/basic.vue")),
                    "business"
                  ),
              },
            ],
          },
          //水产品精深加工
          {
            path: "finished",
            name: "finished",
            meta: {
              title: "种源经济=>水产品精深加工",
              linkName: "水产品精深加工",
              menuId: "23",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/business/finished/index.vue")),
                "business"
              ),
            children: [
              {
                path: "add",
                name: "finished_add",
                meta: {
                  title: "种源经济=>食品精深加工=>新增",
                  linkName: "食品精深加工_新增",
                  menuId: "23",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/finished/add.vue")),
                    "business"
                  ),
              },
              {
                path: "edit",
                name: "finished_edit",
                meta: {
                  title: "种源经济=>食品精深加工=>编辑",
                  linkName: "食品精深加工_编辑",
                  menuId: "23",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/finished/edit.vue")),
                    "business"
                  ),
              },
              {
                path: "basic",
                name: "finished_basic",
                meta: {
                  title: "种源经济=>生态养殖=>基本设置",
                  linkName: "生态养殖_基本设置",
                  menuId: "23",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/finished/basic.vue")),
                    "business"
                  ),
              },
            ],
          },
          //质量安全质检
          {
            path: "quality",
            name: "quality",
            meta: {
              title: "种源经济=>质量安全质检",
              linkName: "质量安全质检",
              menuId: "24",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/business/quality/index.vue")),
                "business"
              ),
            children: [
              {
                path: "add",
                name: "quality_add",
                meta: {
                  title: "种源经济=>质量安全质检=>新增",
                  linkName: "质量安全质检_新增",
                  menuId: "24",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/quality/add.vue")),
                    "business"
                  ),
              },
              {
                path: "edit",
                name: "quality_edit",
                meta: {
                  title: "种源经济=>质量安全质检=>编辑",
                  linkName: "质量安全质检_编辑",
                  menuId: "24",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/quality/edit.vue")),
                    "business"
                  ),
              },
              {
                path: "basic",
                name: "quality_basic",
                meta: {
                  title: "种源经济=>质量安全质检=>基本设置",
                  linkName: "质量安全质检_基本设置",
                  menuId: "24",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/quality/basic.vue")),
                    "business"
                  ),
              },
            ],
          },
          //全球贸易
          {
            path: "trade",
            name: "trade",
            meta: {
              title: "种源经济=>全球贸易",
              linkName: "全球贸易",
              menuId: "16",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/business/trade/index.vue")),
                "business"
              ),
            children: [
              {
                path: "add",
                name: "trade_add",
                meta: {
                  title: "种源经济=>全球贸易=>新增",
                  linkName: "全球贸易_新增",
                  menuId: "16",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/trade/add.vue")),
                    "business"
                  ),
              },
              {
                path: "edit",
                name: "trade_edit",
                meta: {
                  title: "种源经济=>全球贸易=>编辑",
                  linkName: "全球贸易_编辑",
                  menuId: "16",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/trade/edit.vue")),
                    "business"
                  ),
              },
              {
                path: "basic",
                name: "trade_basic",
                meta: {
                  title: "种源经济=>全球贸易=>基本设置",
                  linkName: "全球贸易_基本设置",
                  menuId: "16",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/business/trade/basic.vue")),
                    "business"
                  ),
              },
            ],
          },
        ],
      },
      //生物制药
      {
        path: "pharmacy",
        name: "pharmacy",
        meta: {
          title: "生物制药",
          linkName: "生物制药",
          menuId: "6",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/pharmacy/index.vue")),
            "pharmacy"
          ),
        children: [
          // 基本设置
          {
            path: "basic",
            name: "pharmacy_basic",
            meta: {
              title: "生物制药_基础设置",
              linkName: "基础设置",
              menuId: "6",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/pharmacy/basic/basic.vue")),
                "pharmacy"
              ),
          },
          // 轮播图
          {
            path: "banner",
            name: "pharmacy_banner",
            meta: {
              title: "生物制药_轮播图设置",
              linkName: "轮播图设置",
              menuId: "6",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/pharmacy/banner/index.vue")),
                "pharmacy"
              ),
          },
          {
            path: "masterplan",
            name: "pharmacy_masterplan",
            meta: {
              title: "生物制药_总体规划",
              linkName: "总体规划",
              menuId: "44",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/commonModel/class/classContent.vue")),
                "pharmacy"
              ),
          },
          {
            path: "platform_construction",
            name: "pharmacy_platform_construction",
            meta: {
              title: "生物制药_平台建设",
              linkName: "平台建设",
              menuId: "45",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/commonModel/class/classContent.vue")),
                "pharmacy"
              ),
          },
          {
            path: "platform_project",
            name: "pharmacy_platform_project",
            meta: {
              title: "生物制药_平台项目",
              linkName: "平台项目",
              menuId: "46",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/commonModel/class/classContent.vue")),
                "pharmacy"
              ),
          },
          {
            path: "keyproducts",
            name: "pharmacy_keyproducts",
            meta: {
              title: "生物制药_重点产品",
              linkName: "重点产品",
              menuId: "47",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/commonModel/class/classContent.vue")),
                "pharmacy"
              ),
          },
        ],
      },
      //海洋工程
      {
        path: "oceaneering",
        name: "oceaneering",
        meta: {
          title: "海洋工程",
          linkName: "海洋工程",
          menuId: "32",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/oceaneering/index.vue")),
            "oceaneering"
          ),
        children: [
          {
            path: "basic",
            name: "oceaneering_basic",
            meta: {
              title: "海洋工程_基础设置",
              linkName: "基础设置",
              menuId: "32",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/oceaneering/basic/basic.vue")),
                "oceaneering"
              ),
          },
          // 海洋工程
          {
            path: "banner",
            name: "oceaneering_banner",
            meta: {
              title: "海洋工程_轮播图设置",
              linkName: "轮播图设置",
              menuId: "32",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/oceaneering/banner/index.vue")),
                "oceaneering"
              ),
          },
          {
            path: "facilityFishery",
            name: "oceaneering_facilityFishery",
            meta: {
              title: "海洋工程_设施渔业",
              linkName: "设施渔业",
              menuId: "33",
            },
            component: (r) =>
              require.ensure(
                [],
                () =>
                  r(require("../pages/oceaneering/facilityFishery/index.vue")),
                "oceaneering"
              ),
            children: [
              {
                path: "add",
                name: "facilityFishery_add",
                meta: {
                  title: "海洋工程=>设施渔业=>新增",
                  linkName: "设施渔业",
                  menuId: "33",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(
                        require("../pages/oceaneering/facilityFishery/add.vue")
                      ),
                    "business"
                  ),
              },
              {
                path: "edit",
                name: "facilityFishery_edit",
                meta: {
                  title: "海洋工程=>设施渔业=>编辑",
                  linkName: "设施渔业_编辑",
                  menuId: "33",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(
                        require("../pages/oceaneering/facilityFishery/edit.vue")
                      ),
                    "business"
                  ),
              },
              {
                path: "basic",
                name: "facilityFishery_basic",
                meta: {
                  title: "海洋工程=>设施渔业=>基本设置",
                  linkName: "设施渔业_基本设置",
                  menuId: "33",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(
                        require("../pages/oceaneering/facilityFishery/basic.vue")
                      ),
                    "business"
                  ),
              },
            ],
          },
          {
            path: "marineRanch",
            name: "oceaneering_marineRanch",
            meta: {
              title: "海洋工程_海洋牧场",
              linkName: "海洋牧场",
              menuId: "34",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/oceaneering/marineRanch/index.vue")),
                "oceaneering"
              ),
            children: [
              {
                path: "add",
                name: "marineRanch_add",
                meta: {
                  title: "海洋工程=>海洋牧场=>新增",
                  linkName: "海洋牧场",
                  menuId: "34",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/oceaneering/marineRanch/add.vue")),
                    "business"
                  ),
              },
              {
                path: "edit",
                name: "marineRanch_edit",
                meta: {
                  title: "海洋工程=>海洋牧场=>编辑",
                  linkName: "海洋牧场_编辑",
                  menuId: "34",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/oceaneering/marineRanch/edit.vue")),
                    "business"
                  ),
              },
              {
                path: "basic",
                name: "marineRanch_basic",
                meta: {
                  title: "海洋工程=>海洋牧场=>基本设置",
                  linkName: "海洋牧场_基本设置",
                  menuId: "34",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () =>
                      r(require("../pages/oceaneering/marineRanch/basic.vue")),
                    "business"
                  ),
              },
            ],
          },
        ],
      },
      // 优质产品
      //产品
      {
        path: "product",
        name: "product",
        meta: {
          title: "优质产品",
          linkName: "优质产品",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/product/index.vue")),
            "product"
          ),
        children: [
          //基础设置
          {
            path: "basic",
            name: "product_basic",
            meta: {
              title: "优质产品=>基础设置",
              linkName: "基础设置",
              menuId: "5",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/product/basic/basic.vue")),
                "product"
              ),
          },
          //轮播图设置
          {
            path: "banner",
            name: "product_banner",
            meta: {
              title: "优质产品=>轮播图设置",
              linkName: "轮播图设置",
              menuId: "5",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/product/banner/index.vue")),
                "product"
              ),
          },
          //栏目分类
          {
            path: "menu",
            name: "product_menu",
            meta: {
              title: "优质产品=>栏目分类",
              linkName: "栏目分类",
              menuId: "5",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/product/menu/index.vue")),
                "product"
              ),
            children: [
              //栏目编辑
              {
                path: "edit",
                name: "productMenuEdit",
                meta: {
                  title: "优质产品=>栏目编辑",
                  linkName: "栏目编辑",
                  menuId: "5",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/product/menu/edit.vue")),
                    "product"
                  ),
              },
              //栏目新增
              {
                path: "add",
                name: "productMenuAdd",
                meta: {
                  title: "优质产品=>新增栏目",
                  linkName: "新增栏目",
                  menuId: "5",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/product/menu/add.vue")),
                    "product"
                  ),
              },
            ],
          },
          //产品列表
          {
            path: "list",
            name: "product_list",
            meta: {
              title: "优质产品=>产品列表",
              linkName: "产品列表",
              menuId: "5",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/product/list/index.vue")),
                "product"
              ),
            children: [
              //栏目编辑
              {
                path: "edit",
                name: "productListEdit",
                meta: {
                  title: "优质产品=>编辑产品",
                  linkName: "编辑产品",
                  menuId: "5",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/product/list/edit.vue")),
                    "product"
                  ),
              },
              //栏目新增
              {
                path: "add",
                name: "productListAdd",
                meta: {
                  title: "优质产品=>新增产品",
                  linkName: "新增产品",
                  menuId: "5",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/product/list/add.vue")),
                    "product"
                  ),
              },
            ],
          },
        ],
      },
      //  加入我们
      {
        path: "joinus",
        name: "joinus",
        meta: {
          title: "加入我们",
          linkName: "加入我们",
          menuId: "21",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/joinus/index.vue")),
            "joinus"
          ),
        children: [
          {
            path: "basic",
            name: "joinus_basic",
            meta: {
              title: "加入我们_基础设置",
              linkName: "基础设置",
              menuId: "21",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/joinus/basic/basic.vue")),
                "data"
              ),
          },
          {
            path: "banner",
            name: "joinus_banner",
            meta: {
              title: "加入我们_轮播图设置",
              linkName: "轮播图设置",
              menuId: "21",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/joinus/banner/index.vue")),
                "joinus"
              ),
          },
        ],
      },
      // 工作
      {
        path: "job",
        name: "job",
        meta: {
          title: "工作招聘",
          linkName: "工作招聘",
          menuId: "22",
        },
        component: (r) =>
          require.ensure([], () => r(require("../pages/job/index.vue")), "job"),
        children: [
          // //轮播图设置
          // {
          //   path: 'banner',
          //   name: 'job_banner',
          //   // menuId: '22',
          //   meta: {
          //     title: '工作招聘=>轮播图设置',
          //     linkName: '轮播图设置',
          //     menuId: '22',
          //   },
          //   component: (r => require.ensure([], () => r(require('../pages/job/banner/index.vue')), 'job'))
          // },
          //社会招聘设置
          {
            path: "basic",
            name: "job_basic",
            meta: {
              title: "工作招聘=>基本设置",
              linkName: "基本设置",
              menuId: "22",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/basic/basic.vue")),
                "job"
              ),
          },
          {
            path: "basic-1",
            name: "job_basic-1",
            meta: {
              title: "工作招聘=>社会招聘设置",
              linkName: "社会招聘设置",
              menuId: "28",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/basic/basic-1.vue")),
                "job"
              ),
          },
          //校园招聘设置
          {
            path: "basic-2",
            name: "job_basic-2",
            meta: {
              title: "工作招聘=>校园招聘设置",
              linkName: "校园招聘设置",
              menuId: "29",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/basic/basic-1.vue")),
                "job"
              ),
          },
          //工作地点
          {
            path: "address",
            name: "job_address",
            meta: {
              title: "工作招聘=>工作地点",
              linkName: "工作地点",
              menuId: "22",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/address/index.vue")),
                "job"
              ),
          },
          //部门
          {
            path: "department",
            name: "job_department",
            meta: {
              title: "工作招聘=>部门",
              linkName: "部门",
              menuId: "22",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/department/index.vue")),
                "job"
              ),
          },
          //机构
          {
            path: "org",
            name: "job_org",
            meta: {
              title: "工作招聘=>所属机构",
              linkName: "所属机构",
              menuId: "22",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/org/index.vue")),
                "job"
              ),
          },
          //职位类别
          {
            path: "category",
            name: "job_category",
            meta: {
              title: "工作招聘=>职位类别",
              linkName: "职位类别",
              menuId: "22",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/category/index.vue")),
                "job"
              ),
          },
          //招聘列表
          {
            path: "list",
            name: "job_list",
            meta: {
              title: "工作招聘=>招聘列表",
              linkName: "招聘列表",
              menuId: "22",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/job/list/index.vue")),
                "job"
              ),
            children: [
              {
                path: "add",
                name: "job_list_add",
                meta: {
                  title: "工作招聘=>招聘列表",
                  linkName: "招聘列表",
                  menuId: "22",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/job/list/add.vue")),
                    "job"
                  ),
              },
              {
                path: "edit",
                name: "jobListEdit",
                meta: {
                  title: "工作招聘=>招聘列表",
                  linkName: "招聘列表",
                  menuId: "22",
                },
                component: (r) =>
                  require.ensure(
                    [],
                    () => r(require("../pages/job/list/edit.vue")),
                    "job"
                  ),
              },
            ],
          },
        ],
      },
      // 模板
      {
        path: "/templates/",
        name: "templates",
        menuId: "",
        meta: {
          title: "模板管理",
          linkName: "模板管理",
          menuId: "22",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/template/index.vue")),
            "templates"
          ),
        children: [
          {
            path: "detail/:id",
            name: "template_detail",
            meta: {
              title: "模板编辑",
              linkName: "模板编辑",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/template/detail.vue")),
                "templates"
              ),
          },
        ],
      }, // 内部链接
      {
        path: "/inlink/",
        name: "inlink",
        menuId: "",
        meta: {
          title: "内部链接",
          linkName: "内部链接",
          menuId: "22",
        },
        component: (r) =>
          require.ensure(
            [],
            () => r(require("../pages/inlink/index.vue")),
            "inlink"
          ),
        children: [
          {
            path: "edit",
            name: "inlink_edit",
            meta: {
              title: "内链编辑",
              linkName: "内链编辑",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/inlink/edit.vue")),
                "inlink"
              ),
          },
          {
            path: "add",
            name: "inlink_add",
            meta: {
              title: "内链编辑",
              linkName: "内链编辑",
            },
            component: (r) =>
              require.ensure(
                [],
                () => r(require("../pages/inlink/add.vue")),
                "inlink"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: (r) =>
      require.ensure([], () => r(require("../pages/login/login.vue")), "login"),
    meta: {
      title: "测试",
      noAuth: true,
      level: 1,
    },
  },
];
