/**
 * Created by Administrator on 2017/11/17.
 */
export default [
  {
    path: '/',
    name: 'index',
    component: (r => require.ensure([], () => r(require('../pages/index/index.vue')), 'index')),
    meta: {
      title: '后台首页',
      level: 0,
    },
    children: [
      //首页管理
      {
        path: 'home',
        name: 'home',
        // menuId: 1,
        meta: {
          title: '首页管理',
          linkName: '首页管理',
          menuId: '1',
        },
        component: (r => require.ensure([], () => r(require('../pages/home/index.vue')), 'home')),
        children: [
          {
            path: 'basic',
            name: 'home_basic',
            // menuId: 1,
            meta: {
              title: '首页管理=>基础设置',
              linkName: '基本设置',
              menuId: '1',
              hiddenContent: true
            },
            component: (r => require.ensure([], () => r(require('../pages/home/basic/basic.vue')), 'home')),
          },
          {
            path: 'banner',
            name: 'home_banner',
            // menuId: 1,
            meta: {
              title: '首页管理=>轮播图设置',
              linkName: '轮播图设置',
              menuId: '1',
            },
            component: (r => require.ensure([], () => r(require('../pages/home/banner/index.vue')), 'home')),
          },
          {
            path: 'partner',
            name: 'home_partner',
            // menuId: 1,
            meta: {
              title: '首页管理=>合作伙伴设置',
              linkName: '合作伙伴设置',
              menuId: '1',
            },
            component: (r => require.ensure([], () => r(require('../pages/home/partner/partner.vue')), 'home')),
          },
          {
            path: 'global',
            name: 'home_global',
            // menuId: 1,
            meta: {
              title: '首页管理=>全球布局设置',
              linkName: '全球布局设置',
              menuId: 30,
            },
            component: (r => require.ensure([], () => r(require('../pages/home/global/global.vue')), 'home')),
          },
          {
            path: 'honor',
            name: 'home_honor',
            // menuId: 1,
            meta: {
              title: '首页管理=>荣誉资质',
              linkName: '荣誉资质',
              menuId: '1',
            },
            component: (r => require.ensure([], () => r(require('../pages/home/honor/honor.vue')), 'home')),
          },
          {
            path: 'special',
            name: 'home_special',
            // menuId: 1,
            meta: {
              title: '首页管理=>三大国家级重点平台',
              linkName: '三大国家级重点平台',
              menuId: '1',
            },
            component: (r => require.ensure([], () => r(require('../pages/home/special/index.vue')), 'home')),
            children: [
              {
                path: 'special',
                name: 'homeSpecialEdit',
                // menuId: 1,
                meta: {
                  title: '首页管理=>三大国家级重点平台=>编辑',
                  linkName: '三大国家级重点平台',
                  menuId: '1',
                },
                component: (r => require.ensure([], () => r(require('../pages/home/special/edit.vue')), 'home')),
              }
            ]
          },
          {
            path: 'industry',
            name: 'home_industry',
            meta: {
              title: '首页管理=>产业布局',
              linkName: '产业布局',
              menuId: '1',
            },
            component: (r => require.ensure([], () => r(require('../pages/home/industry/index.vue')), 'home')),
            children: [
              {
                path: 'basic',
                name: 'home_industry_basic',
                meta: {
                  title: '首页管理=>产业布局=>基本设置',
                  linkName: '基本设置',
                  menuId: '1',
                  hiddenContent: true
                },
                component: (r => require.ensure([], () => r(require('../pages/home/industry/basic.vue')), 'home')),
              },
              {
                path: 'edit',
                name: 'homeIndustryEdit',
                meta: {
                  title: '首页管理=>产业布局=>编辑',
                  linkName: '产业布局',
                  menuId: '1',
                },
                component: (r => require.ensure([], () => r(require('../pages/home/industry/edit.vue')), 'home')),
              }
            ]
          },
          {
            path: 'era',
            name: 'home_era',
            meta: {
              title: '首页管理=>产业新纪元',
              linkName: '产业新纪元',
              menuId: '1',
            },
            component: (r => require.ensure([], () => r(require('../pages/home/era/index.vue')), 'home')),
            children: [
              {
                path: 'basic',
                name: 'home_era_basic',
                meta: {
                  title: '首页管理=>产业新纪元=>基本设置',
                  linkName: '基本设置',
                  menuId: '1',
                  hiddenContent: true
                },
                component: (r => require.ensure([], () => r(require('../pages/home/era/basic.vue')), 'home')),
              },
              {
                path: 'edit',
                name: 'homeEraEdit',
                meta: {
                  title: '首页管理=>产业新纪元=>编辑',
                  linkName: '产业新纪元',
                  menuId: '1',
                },
                component: (r => require.ensure([], () => r(require('../pages/home/era/edit.vue')), 'home')),
              }
            ]
          }
        ]
      },
      //关于我们
      {
        path: 'profile',
        name: 'profile',
        meta: {
          title: '关于我们',
          linkName: '关于我们',
          menuId: '2',
        },
        component: (r => require.ensure([], () => r(require('../pages/profile/index.vue')), 'profile')),
        children: [
          //基础设置
          {
            path: 'basic',
            name: 'basic',
            meta: {
              title: '关于我们=>基础设置',
              linkName: '基本设置',
              menuId: '2',
            },
            component: (r => require.ensure([], () => r(require('../pages/profile/basic/index.vue')), 'profile')),
          },
          //轮播图设置
          {
            path: 'banner',
            name: 'banner',
            meta: {
              title: '关于我们=>轮播图设置',
              linkName: '轮播图设置',
              menuId: '2',
            },
            component: (r => require.ensure([], () => r(require('../pages/profile/banner/index.vue')), 'profile')),
          },
          // 简介
          {
            path: 'introduce',
            name: 'introduce',
            meta: {
              title: '关于我们=>企业简介',
              linkName: '企业简介',
              menuId: '7',
            },
            component: (r => require.ensure([], () => r(require('../pages/profile/introduction/index.vue')), 'profile')),
          },
          //企业文化
          {
            path: 'culture',
            name: 'culture',
            meta: {
              title: '关于我们=>企业文化',
              linkName: '企业文化',
              menuId: '8',
            },
            component: (r => require.ensure([], () => r(require('../pages/profile/culture/index.vue')), 'culture')),
            children: [{
              path: 'basic',
              name: 'culture_basic',
              meta: {
                title: '关于我们=>企业文化=>基础设置',
                linkName: '基础设置',
                menuId: '8',
              },
              component: (r => require.ensure([], () => r(require('../pages/profile/culture/basic.vue')), 'culture'))
            },
              {
                path: 'add',
                name: 'culture_add',
                meta: {
                  title: '关于我们=>企业文化=>新增',
                  linkName: '新增',
                  menuId: '8',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/culture/add.vue')), 'culture'))
              },
              {
                path: 'edit',
                name: 'culture_edit',
                meta: {
                  title: '关于我们=>企业文化=>编辑',
                  linkName: '新增',
                  menuId: '8',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/culture/edit.vue')), 'culture'))
              }
            ]
          },
          //新闻
          {
            path: 'news',
            name: 'news',
            meta: {
              title: '关于我们=>新闻资讯',
              linkName: '新闻资讯',
              menuId: '9',
            },
            component: (r => require.ensure([], () => r(require('../pages/profile/news/index.vue')), 'news')),
            children: [
              {
                path: 'basic',
                name: 'news_basic',
                meta: {
                  title: '关于我们=>新闻资讯=>基础设置',
                  linkName: '基础设置',
                  menuId: '9',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/news/basic.vue')), 'news'))
              },
              {
                path: 'menu',
                name: 'news_menu',
                meta: {
                  title: '关于我们=>新闻资讯=>栏目设置',
                  linkName: '栏目设置',
                  menuId: '9',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/news/menu/index.vue')), 'news')),
                children: [
                  //   {
                  //     path: 'add',
                  //     name: 'news_add',
                  //     // menuId: '9',
                  //     meta: {
                  //       title: '关于我们=>新闻资讯=>新增',
                  //       linkName: '新增',
                  //       menuId: '9',
                  //     },
                  //     component: (r => require.ensure([], () => r(require('../pages/profile/news/menu/add.vue')), 'news'))
                  //   }
                  //   ,
                  {
                    path: 'edit',
                    name: 'newsMenuEdit',
                    meta: {
                      title: '关于我们=>新闻资讯=>栏目编辑',
                      linkName: '编辑',
                      menuId: '9',
                    },
                    component: (r => require.ensure([], () => r(require('../pages/profile/news/menu/edit.vue')), 'news'))
                  }
                ]
              },
              {
                path: 'list',
                name: 'news_list',
                meta: {
                  title: '关于我们=>新闻资讯=>新闻列表',
                  linkName: '新闻列表',
                  menuId: '9',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/news/list.vue')), 'news')),
                children: [
                  {
                    path: 'add',
                    name: 'news_add',
                    meta: {
                      title: '关于我们=>新闻资讯=>新增',
                      linkName: '新增',
                      menuId: '9',
                    },
                    component: (r => require.ensure([], () => r(require('../pages/profile/news/add.vue')), 'news'))
                  }
                  ,
                  {
                    path: 'edit',
                    name: 'aboutNewsEdit',
                    meta: {
                      title: '关于我们=>新闻资讯=>编辑',
                      linkName: '编辑',
                      menuId: '9',
                    },
                    component: (r => require.ensure([], () => r(require('../pages/profile/news/edit.vue')), 'news'))
                  }
                ]
              },
            ]
          },
          //论著
          {
            path: 'book',
            name: 'book',
            meta: {
              title: '关于我们=>专业论著',
              linkName: '专业论著',
              menuId: '10',
            },
            component: (r => require.ensure([], () => r(require('../pages/profile/book/index.vue')), 'book')),
            children: [
              {
                path: 'basic',
                name: 'book_basic',
                meta: {
                  title: '关于我们=>专业论著=>基础设置',
                  linkName: '基础设置',
                  menuId: '10',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/book/basic.vue')), 'book'))
              },
              {
                path: 'edit',
                name: 'book_edit',
                meta: {
                  title: '关于我们=>专业论著=>新增',
                  linkName: '新增',
                  menuId: '10',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/book/edit.vue')), 'book'))
              }
            ]
          },
          // 专家
          {
            path: 'expert',
            name: 'expert',
            meta: {
              title: '关于我们=>管理团队及专家介绍',
              linkName: '管理团队及专家介绍',
              menuId: '11',
            },
            component: (r => require.ensure([], () => r(require('../pages/profile/expert/index.vue')), 'profile')),
            children: [
              {
                path: 'basic',
                name: 'export_basic',
                meta: {
                  title: '关于我们=>管理团队及专家介绍=>基础设置',
                  linkName: '基础设置',
                  menuId: '11',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/expert/basic.vue')), 'expert'))
              },
              {
                path: 'add',
                name: 'export_add',
                meta: {
                  title: '关于我们=>管理团队及专家介绍=>新增',
                  linkName: '新增',
                  menuId: '11',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/expert/add.vue')), 'expert'))
              },
              {
                path: 'edit',
                name: 'export_edit',
                meta: {
                  title: '关于我们=>管理团队及专家介绍=>编辑',
                  linkName: '编辑',
                  menuId: '11',
                },
                component: (r => require.ensure([], () => r(require('../pages/profile/expert/edit.vue')), 'expert'))
              }
            ]
          }
        ]
      },
      // 核心优势领域
      {
        path: 'advantage',
        name: 'advantage',
        meta: {
          title: '核心优势',
          linkName: '核心优势',
          menuId: '3',
        },
        component: (r => require.ensure([], () => r(require('../pages/advantage/index.vue')), 'advantage')),
        children: [
          {
            path: 'basic',
            name: 'advantage_basic',
            meta: {
              title: '核心优势=>基础设置',
              linkName: '基础设置',
              menuId: '3',
            },
            component: (r => require.ensure([], () => r(require('../pages/advantage/basic/basic.vue')), 'advantage')),
          },
          //轮播图设置
          {
            path: 'banner',
            name: 'advantage_banner',
            meta: {
              title: '核心优势=>轮播图设置',
              linkName: '轮播图设置',
              menuId: '3',
            },
            component: (r => require.ensure([], () => r(require('../pages/advantage/banner/index.vue')), 'profile')),
          },
          {
            path: 'molecular',
            name: 'molecular',
            meta: {
              title: '核心优势=>分子育种',
              linkName: '分子育种',
              menuId: '12',
            },
            component: (r => require.ensure([], () => r(require('../pages/advantage/molecular/index.vue')), 'advantage')),
            children: [{
              path: 'add',
              name: 'molecular_add',
              meta: {
                title: '核心优势=>分子育种=>新增',
                linkName: '分子育种_新增',
                menuId: '12',
              },
              component: (r => require.ensure([], () => r(require('../pages/advantage/molecular/add.vue')), 'advantage')),

            },
              {
                path: 'edit',
                name: 'molecular_edit',
                meta: {
                  title: '核心优势=>分子育种=>编辑',
                  linkName: '分子育种_编辑',
                  menuId: '12',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/molecular/edit.vue')), 'advantage')),

              },
              {
                path: 'basic',
                name: 'molecular_basic',
                meta: {
                  title: '核心优势=>分子育种=>基本设置',
                  linkName: '分子育种_基本设置',
                  menuId: '12',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/molecular/basic.vue')), 'advantage')),

              }


            ]
          },
          {
            path: 'ecological',
            name: 'ecological',
            meta: {
              title: '核心优势领域=>组学研究',
              linkName: '组学研究',
              menuId: '13',
            },
            component: (r => require.ensure([], () => r(require('../pages/advantage/ecological/index.vue')), 'advantage')),
            children: [
              {
                path: 'add',
                name: 'ecological_add',
                meta: {
                  title: '核心优势领域=>组学研究=>新增',
                  linkName: '组学研究_新增',
                  menuId: '13',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/ecological/add.vue')), 'advantage'))
              },
              {
                path: 'edit',
                name: 'ecological_edit',
                meta: {
                  title: '核心优势领域=>组学研究=>编辑',
                  linkName: '组学研究_编辑',
                  menuId: '13',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/ecological/edit.vue')), 'advantage')),

              },
              {
                path: 'basic',
                name: 'ecological_basic',
                meta: {
                  title: '核心优势领域=>组学研究=>基本设置',
                  linkName: '组学研究_立体循环',
                  menuId: '13',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/ecological/basic.vue')), 'advantage'))
              }
            ]
          },
          {
            path: 'deep',
            name: 'deep',
            meta: {
              title: '核心优势领域=>海洋药物研发',
              linkName: '海洋药物研发',
              menuId: '14',
            },
            component: (r => require.ensure([], () => r(require('../pages/advantage/deep/index.vue')), 'advantage')),
            children: [
              {
                path: 'add',
                name: 'deep_add',
                meta: {
                  title: '核心优势领域=>海洋药物研发=>新增',
                  linkName: '海洋药物研发_新增',
                  menuId: '14',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/deep/add.vue')), 'advantage'))
              },
              {
                path: 'edit',
                name: 'deep_edit',
                meta: {
                  title: '核心优势领域=>海洋药物研发=>编辑',
                  linkName: '海洋药物研发_编辑',
                  menuId: '14',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/deep/edit.vue')), 'advantage')),

              },
              {
                path: 'basic',
                name: 'deep_basic',
                meta: {
                  title: '核心优势领域=>海洋药物研发=>基本设置',
                  linkName: '海洋药物研发_立体循环',
                  menuId: '14',
                },
                component: (r => require.ensure([], () => r(require('../pages/advantage/deep/basic.vue')), 'advantage'))
              }
            ]
          }
        ]
      },
      // 业务模块
      {
        path: 'business',
        name: 'business',
        meta: {
          title: '业务模块',
          linkName: '业务模块',
          menuId: '4',
        },
        component: (r => require.ensure([], () => r(require('../pages/business/index.vue')), 'advantage')),
        children: [
          {
            path: 'basic',
            name: 'business_basic',
            meta: {
              title: '业务模块=>基础设置',
              linkName: '基础设置',
              menuId: '4',
            },
            component: (r => require.ensure([], () => r(require('../pages/business/basic/basic.vue')), 'business')),
          },
          //轮播图设置
          {
            path: 'banner',
            name: 'business_banner',
            meta: {
              title: '业务模块=>轮播图设置',
              linkName: '轮播图设置',
              menuId: '4',
            },
            component: (r => require.ensure([], () => r(require('../pages/business/banner/index.vue')), 'profile')),
          },
          //分子育种成果
          {
            path: 'molecularAchievement',
            name: 'molecularAchievement',
            meta: {
              title: '业务模块=>分子育种成果',
              linkName: '分子育种成果',
              menuId: '31',
            },
            component: (r => require.ensure([], () => r(require('../pages/business/molecularAchievement/index.vue')), 'business')),
            children: [
              {
                path: 'add',
                name: 'molecularAchievement_add',
                meta: {
                  title: '业务模块=>分子育种成果=>新增',
                  linkName: '分子育种成果_新增',
                  menuId: '31',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/molecularAchievement/add.vue')), 'business')),
              },
              {
                path: 'edit',
                name: 'molecularAchievement_edit',
                meta: {
                  title: '业务模块=>分子育种成果=>编辑',
                  linkName: '分子育种成果_编辑',
                  menuId: '31',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/molecularAchievement/edit.vue')), 'business')),

              },
              {
                path: 'basic',
                name: 'molecularAchievement_basic',
                meta: {
                  title: '业务模块=>分子育种成果=>基本设置',
                  linkName: '分子育种成果_基本设置',
                  menuId: '31',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/molecularAchievement/basic.vue')), 'business'))
              }
            ]
          },
          //生态养殖
          {
            path: 'breed',
            name: 'breed',
            meta: {
              title: '业务模块=>生态养殖',
              linkName: '生态养殖',
              menuId: '15',
            },
            component: (r => require.ensure([], () => r(require('../pages/business/breed/index.vue')), 'business')),
            children: [
              {
                path: 'add',
                name: 'breed_add',
                meta: {
                  title: '业务模块=>生态养殖=>新增',
                  linkName: '生态养殖_新增',
                  menuId: '15',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/breed/add.vue')), 'business')),
              },
              {
                path: 'edit',
                name: 'breed_edit',
                meta: {
                  title: '业务模块=>生态养殖=>编辑',
                  linkName: '生态养殖_编辑',
                  menuId: '15',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/breed/edit.vue')), 'business')),

              },
              {
                path: 'basic',
                name: 'breed_basic',
                meta: {
                  title: '业务模块=>生态养殖=>基本设置',
                  linkName: '生态养殖_基本设置',
                  menuId: '15',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/breed/basic.vue')), 'business'))
              }
            ]

          },
          //食品精深加工
          {
            path: 'finished',
            name: 'finished',
            meta: {
              title: '业务模块=>食品精深加工',
              linkName: '食品精深加工',
              menuId: '23',
            },
            component: (r => require.ensure([], () => r(require('../pages/business/finished/index.vue')), 'business')),
            children: [
              {
                path: 'add',
                name: 'finished_add',
                meta: {
                  title: '业务模块=>食品精深加工=>新增',
                  linkName: '食品精深加工_新增',
                  menuId: '23',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/finished/add.vue')), 'business')),
              },
              {
                path: 'edit',
                name: 'finished_edit',
                meta: {
                  title: '业务模块=>食品精深加工=>编辑',
                  linkName: '食品精深加工_编辑',
                  menuId: '23',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/finished/edit.vue')), 'business')),

              },
              {
                path: 'basic',
                name: 'finished_basic',
                meta: {
                  title: '业务模块=>生态养殖=>基本设置',
                  linkName: '生态养殖_基本设置',
                  menuId: '23',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/finished/basic.vue')), 'business'))
              }
            ]
          },
          //质量安全质检
          {
            path: 'quality',
            name: 'quality',
            meta: {
              title: '业务模块=>质量安全质检',
              linkName: '质量安全质检',
              menuId: '24',
            },
            component: (r => require.ensure([], () => r(require('../pages/business/quality/index.vue')), 'business')),
            children: [
              {
                path: 'add',
                name: 'quality_add',
                meta: {
                  title: '业务模块=>质量安全质检=>新增',
                  linkName: '质量安全质检_新增',
                  menuId: '24',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/quality/add.vue')), 'business')),
              },
              {
                path: 'edit',
                name: 'quality_edit',
                meta: {
                  title: '业务模块=>质量安全质检=>编辑',
                  linkName: '质量安全质检_编辑',
                  menuId: '24',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/quality/edit.vue')), 'business')),

              },
              {
                path: 'basic',
                name: 'quality_basic',
                meta: {
                  title: '业务模块=>质量安全质检=>基本设置',
                  linkName: '质量安全质检_基本设置',
                  menuId: '24',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/quality/basic.vue')), 'business'))
              }
            ]
          },
          //全球贸易
          {
            path: 'trade',
            name: 'trade',
            meta: {
              title: '业务模块=>全球贸易',
              linkName: '全球贸易',
              menuId: '16',
            },
            component: (r => require.ensure([], () => r(require('../pages/business/trade/index.vue')), 'business')),
            children: [
              {
                path: 'add',
                name: 'trade_add',
                meta: {
                  title: '业务模块=>全球贸易=>新增',
                  linkName: '全球贸易_新增',
                  menuId: '16',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/trade/add.vue')), 'business')),
              },
              {
                path: 'edit',
                name: 'trade_edit',
                meta: {
                  title: '业务模块=>全球贸易=>编辑',
                  linkName: '全球贸易_编辑',
                  menuId: '16',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/trade/edit.vue')), 'business')),

              },
              {
                path: 'basic',
                name: 'trade_basic',
                meta: {
                  title: '业务模块=>全球贸易=>基本设置',
                  linkName: '全球贸易_基本设置',
                  menuId: '16',
                },
                component: (r => require.ensure([], () => r(require('../pages/business/trade/basic.vue')), 'business'))
              }
            ]
          }
        ]
      },
      //产品
      {
        path: 'product',
        name: 'product',
        meta: {
          title: '优质产品',
          linkName: '优质产品'
        },
        component: (r => require.ensure([], () => r(require('../pages/product/index.vue')), 'product')),
        children: [
          //基础设置
          {
            path: 'basic',
            name: 'product_basic',
            meta: {
              title: '优质产品=>基础设置',
              linkName: '基础设置',
              menuId: '5',
            },
            component: (r => require.ensure([], () => r(require('../pages/product/basic/basic.vue')), 'product')),
          },
          //轮播图设置
          {
            path: 'banner',
            name: 'product_banner',
            meta: {
              title: '优质产品=>轮播图设置',
              linkName: '轮播图设置',
              menuId: '5',
            },
            component: (r => require.ensure([], () => r(require('../pages/product/banner/index.vue')), 'product')),
          },
          //栏目分类
          {
            path: 'menu',
            name: 'product_menu',
            meta: {
              title: '优质产品=>栏目分类',
              linkName: '栏目分类',
              menuId: '5',
            },
            component: (r => require.ensure([], () => r(require('../pages/product/menu/index.vue')), 'product')),
            children: [
              //栏目编辑
              {
                path: 'edit',
                name: 'productMenuEdit',
                meta: {
                  title: '优质产品=>栏目编辑',
                  linkName: '栏目编辑',
                  menuId: '5',
                },
                component: (r => require.ensure([], () => r(require('../pages/product/menu/edit.vue')), 'product')),
              },
              //栏目新增
              {
                path: 'add',
                name: 'productMenuAdd',
                meta: {
                  title: '优质产品=>新增栏目',
                  linkName: '新增栏目',
                  menuId: '5',
                },
                component: (r => require.ensure([], () => r(require('../pages/product/menu/add.vue')), 'product')),
              },
            ]
          },
          //产品列表
          {
            path: 'list',
            name: 'product_list',
            meta: {
              title: '优质产品=>产品列表',
              linkName: '产品列表',
              menuId: '5',
            },
            component: (r => require.ensure([], () => r(require('../pages/product/list/index.vue')), 'product')),
            children: [
              //栏目编辑
              {
                path: 'edit',
                name: 'productListEdit',
                meta: {
                  title: '优质产品=>编辑产品',
                  linkName: '编辑产品',
                  menuId: '5',
                },
                component: (r => require.ensure([], () => r(require('../pages/product/list/edit.vue')), 'product')),
              },
              //栏目新增
              {
                path: 'add',
                name: 'productListAdd',
                meta: {
                  title: '优质产品=>新增产品',
                  linkName: '新增产品',
                  menuId: '5',
                },
                component: (r => require.ensure([], () => r(require('../pages/product/list/add.vue')), 'product')),
              },
            ]
          }
        ]
      },
      //大数据
      {
        path: 'data',
        name: 'data',
        meta: {
          title: '大数据',
          linkName: '大数据',
          menuId: '6',
        },
        component: (r => require.ensure([], () => r(require('../pages/data/index.vue')), 'data')),
        children: [
          {
            path: 'basic',
            name: 'data_basic',
            meta: {
              title: '大数据_基础设置',
              linkName: '基础设置',
              menuId: '6',
            },
            component: (r => require.ensure([], () => r(require('../pages/data/basic/basic.vue')), 'data')),
          },
          {
            path: 'banner',
            name: 'data_banner',
            meta: {
              title: '大数据_轮播图设置',
              linkName: '轮播图设置',
              menuId: '6',
            },
            component: (r => require.ensure([], () => r(require('../pages/data/banner/index.vue')), 'data')),
          },
          //大数据
          // {
          //   path: 'content',
          //   name: 'data_content',
          //   menuId: '6',
          //   meta: {
          //     title: '大数据',
          //     linkName: '大数据',
          //     menuId: '6',
          //   },
          //   component: (r => require.ensure([], () => r(require('../pages/data/content/index.vue')), 'data')),
          // },
        ]
      },
      //海洋工程
      {
        path: 'oceaneering',
        name: 'oceaneering',
        meta: {
          title: '海洋工程',
          linkName: '海洋工程',
          menuId: '32',
        },
        component: (r => require.ensure([], () => r(require('../pages/oceaneering/index.vue')), 'oceaneering')),
        children: [
          {
            path: 'basic',
            name: 'oceaneering_basic',
            meta: {
              title: '海洋工程_基础设置',
              linkName: '基础设置',
              menuId: '32',
            },
            component: (r => require.ensure([], () => r(require('../pages/oceaneering/basic/basic.vue')), 'oceaneering')),
          },
          {
            path: 'banner',
            name: 'oceaneering_banner',
            meta: {
              title: '海洋工程_轮播图设置',
              linkName: '轮播图设置',
              menuId: '32',
            },
            component: (r => require.ensure([], () => r(require('../pages/oceaneering/banner/index.vue')), 'oceaneering')),
          },
          {
            path: 'facilityFishery',
            name: 'oceaneering_facilityFishery',
            meta: {
              title: '海洋工程_设施渔业',
              linkName: '设施渔业',
              menuId: '33',
            },
            component: (r => require.ensure([], () => r(require('../pages/oceaneering/facilityFishery/index.vue')), 'oceaneering')),
            children: [
              {
                path: 'add',
                name: 'facilityFishery_add',
                meta: {
                  title: '海洋工程=>设施渔业=>新增',
                  linkName: '设施渔业',
                  menuId: '33',
                },
                component: (r => require.ensure([], () => r(require('../pages/oceaneering/facilityFishery/add.vue')), 'business')),
              },
              {
                path: 'edit',
                name: 'facilityFishery_edit',
                meta: {
                  title: '海洋工程=>设施渔业=>编辑',
                  linkName: '设施渔业_编辑',
                  menuId: '33',
                },
                component: (r => require.ensure([], () => r(require('../pages/oceaneering/facilityFishery/edit.vue')), 'business')),

              },
              {
                path: 'basic',
                name: 'facilityFishery_basic',
                meta: {
                  title: '海洋工程=>设施渔业=>基本设置',
                  linkName: '设施渔业_基本设置',
                  menuId: '33',
                },
                component: (r => require.ensure([], () => r(require('../pages/oceaneering/facilityFishery/basic.vue')), 'business'))
              }
            ]
          },{
            path: 'marineRanch',
            name: 'oceaneering_marineRanch',
            meta: {
              title: '海洋工程_海洋牧场',
              linkName: '海洋牧场',
              menuId: '34',
            },
            component: (r => require.ensure([], () => r(require('../pages/oceaneering/marineRanch/index.vue')), 'oceaneering')),
            children: [
              {
                path: 'add',
                name: 'marineRanch_add',
                meta: {
                  title: '海洋工程=>海洋牧场=>新增',
                  linkName: '海洋牧场',
                  menuId: '34',
                },
                component: (r => require.ensure([], () => r(require('../pages/oceaneering/marineRanch/add.vue')), 'business')),
              },
              {
                path: 'edit',
                name: 'marineRanch_edit',
                meta: {
                  title: '海洋工程=>海洋牧场=>编辑',
                  linkName: '海洋牧场_编辑',
                  menuId: '34',
                },
                component: (r => require.ensure([], () => r(require('../pages/oceaneering/marineRanch/edit.vue')), 'business')),

              },
              {
                path: 'basic',
                name: 'marineRanch_basic',
                meta: {
                  title: '海洋工程=>海洋牧场=>基本设置',
                  linkName: '海洋牧场_基本设置',
                  menuId: '34',
                },
                component: (r => require.ensure([], () => r(require('../pages/oceaneering/marineRanch/basic.vue')), 'business'))
              }
            ]
          },
        ]
      },
      //  加入我们
      {
        path: 'about',
        name: 'about',
        meta: {
          title: '加入我们',
          linkName: '加入我们',
          menuId: '21',
        },
        component: (r => require.ensure([], () => r(require('../pages/aboutus/index.vue')), 'about')),
        children: [
          {
            path: 'basic',
            name: 'about_basic',
            meta: {
              title: '加入我们_基础设置',
              linkName: '基础设置',
              menuId: '21',
            },
            component: (r => require.ensure([], () => r(require('../pages/aboutus/basic/basic.vue')), 'data')),
          },
          {
            path: 'banner',
            name: 'about_banner',
            meta: {
              title: '加入我们_轮播图设置',
              linkName: '轮播图设置',
              menuId: '21',
            },
            component: (r => require.ensure([], () => r(require('../pages/aboutus/banner/index.vue')), 'data')),
          },
          //基础设置
          {
            path: 'basic_basic',
            name: 'job_basic',
            meta: {
              title: '加入我们=>加入我们',
              linkName: '加入我们',
              menuId: '22',
            },
            component: (r => require.ensure([], () => r(require('../pages/aboutus/basic/basic.vue')), 'job'))
          },
        ]
      },
      // 工作
      {
        path: 'job',
        name: 'job',
        meta: {
          title: '工作招聘',
          linkName: '工作招聘',
          menuId: '22',
        },
        component: (r => require.ensure([], () => r(require('../pages/job/index.vue')), 'job')),
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
            path: 'basic-1',
            name: 'job_basic-1',
            meta: {
              title: '工作招聘=>社会招聘设置',
              linkName: '社会招聘设置',
              menuId: '28',
            },
            component: (r => require.ensure([], () => r(require('../pages/job/basic/basic-1.vue')), 'job'))
          },
          //校园招聘设置
          {
            path: 'basic-2',
            name: 'job_basic-2',
            meta: {
              title: '工作招聘=>校园招聘设置',
              linkName: '校园招聘设置',
              menuId: '29',
            },
            component: (r => require.ensure([], () => r(require('../pages/job/basic/basic-1.vue')), 'job'))
          },
          //工作地点
          {
            path: 'address',
            name: 'job_address',
            meta: {
              title: '工作招聘=>工作地点',
              linkName: '工作地点',
              menuId: '22',
            },
            component: (r => require.ensure([], () => r(require('../pages/job/address/index.vue')), 'job'))
          },
          //部门
          {
            path: 'department',
            name: 'job_department',
            meta: {
              title: '工作招聘=>部门',
              linkName: '部门',
              menuId: '22',
            },
            component: (r => require.ensure([], () => r(require('../pages/job/department/index.vue')), 'job'))
          },
          //机构
          {
            path: 'org',
            name: 'job_org',
            meta: {
              title: '工作招聘=>所属机构',
              linkName: '所属机构',
              menuId: '22',
            },
            component: (r => require.ensure([], () => r(require('../pages/job/org/index.vue')), 'job'))
          },
          //职位类别
          {
            path: 'category',
            name: 'job_category',
            meta: {
              title: '工作招聘=>职位类别',
              linkName: '职位类别',
              menuId: '22',
            },
            component: (r => require.ensure([], () => r(require('../pages/job/category/index.vue')), 'job'))
          },
          //招聘列表
          {
            path: 'list',
            name: 'job_list',
            meta: {
              title: '工作招聘=>招聘列表',
              linkName: '招聘列表',
              menuId: '22',
            },
            component: (r => require.ensure([], () => r(require('../pages/job/list/index.vue')), 'job')),
            children: [
              {
                path: 'add',
                name: 'job_list_add',
                meta: {
                  title: '工作招聘=>招聘列表',
                  linkName: '招聘列表',
                  menuId: '22',
                },
                component: (r => require.ensure([], () => r(require('../pages/job/list/add.vue')), 'job')),
              }, {
                path: 'edit',
                name: 'jobListEdit',
                meta: {
                  title: '工作招聘=>招聘列表',
                  linkName: '招聘列表',
                  menuId: '22',
                },
                component: (r => require.ensure([], () => r(require('../pages/job/list/edit.vue')), 'job')),
              },
            ]
          }
        ]
      },
      // 模板
      {
        path: '/templates/',
        name: 'templates',
        menuId: '',
        meta: {
          title: '模板管理',
          linkName: '模板管理',
          menuId: '22',
        },
        component: (r => require.ensure([], () => r(require('../pages/template/index.vue')), 'templates')),
        children: [
          {
            path: 'detail/:id',
            name: 'template_detail',
            meta: {
              title: '模板编辑',
              linkName: '模板编辑',
            },
            component: (r => require.ensure([], () => r(require('../pages/template/detail.vue')), 'templates')),
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: (r => require.ensure([], () => r(require('../pages/login/login.vue')), 'login')),
    meta: {
      title: '测试',
      noAuth: true,
      level: 1
    }
    ,
  }

]
;
