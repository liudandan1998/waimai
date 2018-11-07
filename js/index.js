$(function(){
    // body...

$.ajax({
            // 请求地址
            url:'data.json',
            // 请求方式,
            type:'GET',
            // 请求的数据
            // data:{
            // },c
            success:function(msg){
                console.log(msg);
                // 定义空变量
                var oLi = "";
                // header开始
                oLi += "<header>";
                // 头部最上部分name开始
                oLi += "<div class='name'>";
                // 头部左边logo
                oLi += "<img class='logo' src='"+ msg.seller.avatar +"' />";
                // 头部右边大div txt开始
                oLi += "<div class='txt'>";
                // 头部右边大div内的 店铺名
                oLi += "<h3><span><img src='img/brand@2x.png'></span>"+ msg.seller.name +"</h3>";
                // 头部右边大div内的 蜂鸟专送
                oLi += "<p class='p1'>"+ msg.seller.description +"</p>";
                // 头部右边大div内的 活动列表
                oLi += "<p class='p2'><span><img src='img/decrease_2@2x.png'></span>"+ msg.seller.supports[0].description+"</p>";
                // 头部右边大div txt结束
                oLi += "</div>";
                // 头部右边小圆块 活动条数
                oLi += "<div class='activity'>"+ msg.seller.supports.length +"个<i>&gt;</i></div>";
                // 头部最上部分name结束
                oLi += "</div>";
                // 公告div开始
                oLi += "<div class='notic'>";
                // 公告图片
                oLi += "<img src='img/bulletin@2x.png'/>";
                // 套公告文字 div 开始
                oLi += "<div class='text'>";
                // 放公告的 p标签 和小尖括号 “ > ”
                oLi += "<p>"+ msg.seller.bulletin +"<i>&gt;</i></p>";
                // 套公告文字 div 结束
                oLi += "</div>";
                // 公告div结束
                oLi += "</div>";
                // 头部结束header
                oLi += "</header>";
                // 商品 评价 商家 的大div
                oLi += "<div class='tab'>";
                // 套商品的p标签
                oLi += "<p class='on'>商品</p>";
                // 套评价的p标签
                oLi += "<p>评价</p>";
                // 套商家的p标签
                oLi += "<p>商家</p>";
                // 商品 评价 商家 的大div 结束
                oLi += "</div>";

                // 点击商家显示的 包商家最大的div 开始
                oLi += "<div class='content'>";
                // 商家内 左边套 类型名 最大div 外加swiper插件 第一层div
                oLi += "<div class='foods_menu swiper-containe gallery-top'>";
                // 商家内 swiper 左边 插件第二层div
                oLi += "<div class='swiper-wrapper'>";
                // for循环 循环类型名称
                for(var i = 0; i < msg.goods.length; i++){
                    // if判断
                    if(i==1){
                    // 如果 i==1 时加默认背景为白色的默认样式  外加swiper插件 第三层
                    oLi += "<h3 class='bjcolor swiper-slide'>"+msg.goods[1].name+"</h3> ";
                    // 并且结束当前for循环默认输出的 无样式背景
                    continue;
                    }else{
                        // for 默认输出的类型名称  外加swiper插件 第三层
                        oLi += "<h3 class='swiper-slide'>"+msg.goods[i].name+"</h3>";
                    }
                }
                // 商家内 swiper 左边 插件第二层  结束div
                oLi += "</div>";
                // 商家内 左边套 类型名 最大div 外加swiper插件 第一层  结束div
                oLi += "</div>";
                // 商家内 右 最大div 外加swiper插件 第一层div 结束
                oLi+= "<div class='foods_list swiper-containe gallery-thumbs'>";
                // 商家内 swiper 右 插件第二层div 开始
                oLi += "<div class='swiper-wrapper'>";
                // 右边 双层循环的第一层循环 循环右边商品标题
                for(var i = 0; i < msg.goods.length; i++){
                    // swiper 右边 插件第三层div 开始
                    oLi += "<div class=' swiper-slide'>";
                    // 右边标题部分
                    oLi += "<p class='price'>"+msg.goods[i].name+"</p>";
                    // 右边 一个标题下面对应的菜品循环
                    for (var j = 0; j <msg.goods[i].foods.length; j++) {
                        // 包右边单个菜品的大div 开始
                        oLi += "<div class='commodity'>";
                        // 单个菜品图片
                        oLi += "<img src='"+ msg.goods[i].foods[j].icon +"'/>";
                        // 单个菜品图片右边的大div 开始
                        oLi += "<div class='combo'>";
                        // 点个菜品的菜名
                        oLi += "<h2>"+ msg.goods[i].foods[j].name +"</h2>";
                        // 菜品备注
                        oLi += "<h3>"+ msg.goods[i].foods[j].description +"</h3>";
                        // 单个菜品评价
                        oLi += "<h3>月售"+ msg.goods[i].foods[j].sellCount +"份<i>好评率"+ msg.goods[i].foods[j].rating +"%</i></h3>";
                        if(msg.goods[i].foods[j].oldPrice == ""){
                            // 单个菜品 价格 如果不打折没有原价就不显示折扣前价格
                            oLi += "<p><i>￥</i>"+ msg.goods[i].foods[j].price +"</p>";
                        }else{
                            // 如果有折扣 就原价 和 折扣后价格一起显示
                            oLi += "<p><i>￥</i>"+ msg.goods[i].foods[j].price +"<s>￥"+ msg.goods[i].foods[j].oldPrice +"</s></p>";
                        }
                        // 右边的加减号图片
                        oLi += "<img src='img/jh.png' class='jian'><img src='img/ja.png' class='jia'>";
                        // 单个菜品图片右边的大div 结束
                        oLi += "</div>";
                        // 包右边单个菜品的大div 结束
                        oLi += "</div>";
                    };
                    // swiper 右边 插件第三层div 结束
                    oLi += "</div>";
                }
                // 商家内 swiper 右 插件第二层div 结束
                oLi += "</div>";
                // 商家内 右 最大div 外加swiper插件 第一层div 结束
                oLi += "</div>";
                // 点击商家显示的 包商家最大的div 结束
                oLi += "</div>";

                oLi += "<div class='evaluate'>";
                oLi += "<div class='appraise'>";
                oLi += "<div class='grade'>";
                oLi += "<b>"+ msg.seller.score +"</b>";
                oLi += "<i>综合评分</i>";
                oLi += "<span>高于周围商家"+ msg.seller.rankRate +"%</span>";
                oLi += "</div>";
                oLi += "<div class='star'>";
                oLi += "<b>服务态度<span><img src='img/star24_off@2x.png'></span><i>"+ msg.seller.score +"</i></b>";
                oLi += "<b>服务态度<span><img src='img/star24_off@2x.png'></span><i>"+ msg.seller.score +"</i></b>";
                oLi += "<b>送达时间<i>"+ msg.seller.deliveryTime +"分钟</i></b>";
                oLi += "</div>";
                oLi += "</div>";
                oLi += "<p class='empty'></p>";
                oLi += "<div class='appraisal-area'>";
                oLi += "<div>全部"+ msg.ratings.length +"</div>";
                oLi += "<div>满意"+ msg.ratings.length +"</div>";
                oLi += "<div>不满意"+ msg.ratings.length +"</div>";
                oLi += "</div>";
                oLi += "<p class='select-evaluation'><i class='iconfont icon-duihao2'></i>只看有内容评价</p>";
                for (var i=0; i<msg.ratings.length; i++) {
                    oLi += "<div class='user-evaluation'>";
                    oLi += "<img src='"+ msg.ratings[i].avatar +"'>";
                    oLi += "<div class='user'>";
                    oLi += "<h3>"+ msg.ratings[i].username +"</h3>";
                    oLi += "<p><span><img src='img/star24_on@2x.png'></span><i>"+ msg.ratings[i].deliveryTime +"分钟送达</i></p>";
                    oLi += "<h2>"+ msg.ratings[i].text +"</h2>";
                    oLi += "</div>";
                    oLi += "</div>";  
                }
                oLi += "</div>";



                // oLi += "<div class='evaluate'>";
                // oLi += "<div class='appraise'>";
                // oLi += "<div class='grade'>";
                // oLi += "<b>3.9</b>";
                // oLi += "<i>综合评分</i>";
                // oLi += "<span>高于周围商家69.2%</span>";
                // oLi += "</div>";
                // oLi += "<div class='star'>";
                // oLi += "<b>服务态度<span><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_off@2x.png'></span><i>3.9</i></b>";
                // oLi += "<b>服务态度<span><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_off@2x.png'></span><i>4.0</i></b>";
                // oLi += "<b>送达时间<i>44分钟</i></b>";
                // oLi += "</div>";
                // oLi += "</div>";
                // oLi += "<p class='empty'></p>";
                // oLi += "<div class='appraisal-area'>";
                // oLi += "<div>全部57</div>";
                // oLi += "<div>满意47</div>";
                // oLi += "<div>不满意10</div>";
                // oLi += "</div>";
                // oLi += "<p class='select-evaluation'><i class='iconfont icon-duihao2'></i>只看有内容评价</p>";
                // oLi += "<div class='user-evaluation'>";
                // oLi += "<img src='img/8.png'>";
                // oLi += "<div class='user'>";
                // oLi += "<h3>疯子最帅</h3>";
                // oLi += "<p><span><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_on@2x.png'><img src='img/star24_off@2x.png'></span><i>80分钟送达</i></p>";
                // oLi += "<h2>油条有点凉，而且没有酱。75分钟才到。很慢。送餐员态度不错毕竟毕竟好晚了啊。</h2>";
                // oLi += "</div>";
                // oLi += "</div>";
                // oLi += "</div>";

                // 底部最大div 开始
                oLi += "<div class='balance'>";
                // 底部包购物车图标的 div 开始
                oLi += "<div class='cargo'>";
                // 底部购物车图标
                oLi += "<i class='iconfont icon-gouwuche cor'></i>";
                // 底部包购物车图标的 div 结束
                oLi += "</div>";
                // 底部总价格
                oLi += "<b class='total'>￥0</b>";
                // 底部配送费部分
                oLi += "<b>另需配送费￥"+ msg.seller.deliveryPrice +"元</b>";
                // 底部起送价格大div 开始
                oLi += "<div class='money'>";
                // 底部起送价格
                oLi += "<b class='send'>￥20起送</b>";
                // 底部起送价格大div 结束
                oLi += "</div>";
                // 底部最大div 结束
                oLi += "</div>";
                // 把ajax 导出到网页
                $("body").append(oLi);
                // 点击 商品 评价 商家 单个变红
                $(".tab>p").click(function(){
                    $(this).addClass("on").siblings().removeClass("on");
                    // 点击商品 隐藏显示
                    if($(this).index()==0){
                       $(".content ").css("display","");
                       $(".evaluate ").css("display","none");
                       $(".b ").css("display","none");
                    }
                    // 点击 评价 隐藏显示
                    if($(this).index()==1){
                       $(".content ").css("display","none");
                       $(".evaluate").css("display","block");
                       $(".b ").css("display","none");
                    }
                    // 点击商家 隐藏显示
                    if($(this).index()==2){
                       $(".content ").css("display","none");
                       $(".evaluate").css("display","none");
                       $(".b ").css("display","block");
                    }
                })
              // swiper 插件左边样式部分
                var galleryLeft = new Swiper('.foods_menu', {
                /*垂直方向*/
                direction: "vertical",
                //默认可见多少
                slidesPerView:"auto",
               //是否贴合
                freeMode:true,
                // 设置为true则点击slide 会过度这个slide
                slideToClickedSlide:true,
                //使你的活动快不指示最上边的那个slide
                normalizeSlideIndex:false,
              });
              // swiper 插件右边样式部分
              var galleryRight = new Swiper('.foods_list', {
                direction: "vertical",/*垂直方向*/
                slidesPerView:"auto",
                freeMode:true,
                autoHeight:true,

                on:{
                  slideChange:function(){
                  //右边切换左边对应商品
                    $(".foods_menu").find(".swiper-slide").eq(this.activeIndex).addClass('bjcolor').siblings().removeClass("bjcolor");
                    galleryLeft.slideTo(this.activeIndex);
                  },
                },
              });
              //左边标题点击切换右边菜品
              galleryLeft.on('click',function(){
                $(".foods_menu").find(".swiper-slide").eq(this.activeIndex).addClass('bjcolor').siblings().removeClass("bjcolor");
                var i=this.activeIndex;
                galleryRight.slideTo(i);
              })
            }


        })


})