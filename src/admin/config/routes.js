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
                  title: "首页管理=>产业布局=>基础设置",
                  linkName: "基础设置",
                  menuId: "11",
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
                () => r(require("../pages/home/era/basic.vue")),
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
