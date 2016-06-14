var wechat = angular.module('wechat',['ngAnimate','ngRoute','ngTouch']);

  wechat.controller('indexCtrl',['$scope',function($scope){
    $scope.title="微信";
    $scope.show=false;
  }])

  // 开服务
wechat.factory('$chat',[function(){
  // 聊天信息
var chatlist = [
  {
  image:'image/header/1.jpg',
  name:'zhangsan',
  message:'在吗',
  time:'12:35',
  liaotianjilu:[
    {xinxi:'在不？',isMe:false},
    {xinxi:'~~',isMe:true},
    {xinxi:'kaka',isMe:false},
    {xinxi:'hehe',isMe:true},
    {xinxi:'good',isMe:false},
    {xinxi:'演唱会',isMe:true},
    {xinxi:'...',isMe:false},
    {xinxi:'happy',isMe:true}
  ]
 },
  {
  image:'image/header/2.png',
  name:'zhangsi',
  message:'就这么说定了',
  time:'10:35',
  liaotianjilu:[
    {xinxi:'在不？',isMe:false},
    {xinxi:'给你说个事',isMe:false},
    {xinxi:'好啊',isMe:true},
    {xinxi:'我有免费演唱会',isMe:false},
    {xinxi:'。。。',isMe:true},
    {xinxi:'欢迎你来',isMe:false},
    {xinxi:'好开心',isMe:true},
  ]
 },
 {
  image:'image/header/3.jpg',
  name:'zhangwu',
  message:'就这么说定了',
  time:'6:35',
  liaotianjilu:[
    {xinxi:'在不？',isMe:false},
    {xinxi:'给你说个事',isMe:false},
    {xinxi:'端午约起',isMe:false},
    {xinxi:'好啊，去哪？',isMe:true},
    {xinxi:'你想去哪？',isMe:false},
    {xinxi:'厦门',isMe:true},
    {xinxi:'行啊',isMe:false},
    {xinxi:'就这么说定了',isMe:true}
  ]
 },
 {image:'image/header/4.jpg',name:'Amy',message:'在吗',time:'12:08'},
 {image:'image/header/5.jpg',name:'Lucy',message:'在吗',time:'5:08'},
 {image:'image/header/6.jpg',name:'Mary',message:'在吗',time:'4:08'},
 {image:'image/header/7.jpg',name:'Bob',message:'在吗',time:'9:08'},
];
  var chat = {
    getAllChat:function(){
      return chatlist;
    }
  }
  return chat;
}]);
  wechat.controller('weixinCtrl',['$scope','$chat',function($scope,$chat){
    $scope.chatList = $chat.getAllChat();
    $scope.deleteList = function(id){
      $scope.chatList = $scope.chatList.filter(function(v,i){
        return i !== id;
      });
    }
  }]);
  wechat.controller('liaotianCtrl',['$scope','$routeParams','$chat',function($scope,$routeParams,$chat){
  var chatlist=$chat.getAllChat();
  var id = $routeParams.id;
  $scope.duifang = chatlist[id].image;
  $scope.ziji = 'image/header/c.jpg';
  $scope.ll = chatlist[id].liaotianjilu;
}])
  // 开服务
wechat.factory('$y',[function(){
  // 联系人信息
  var contactsList = [
      {
        key:'A',
        people:[
            {pic:'image/header/1.jpg',name:'Amy',weixinhao:'asan'},
            {pic:'image/header/3.jpg',name:'Andy',weixinhao:'asan'},
            {pic:'image/header/4.jpg',name:'Alen',weixinhao:'asan'},
        ]
      },
      {
        key:'B',
        people:[
            {pic:'image/header/5.jpg',name:'Bob',weixinhao:'asan'},
            {pic:'image/header/6.jpg',name:'Body',weixinhao:'asan'},
            {pic:'image/header/7.jpg',name:'Bettery',weixinhao:'asan'},
        ]
      },
      {
        key:'C',
        people:[
            {pic:'image/header/a.jpg',name:'Cmy',weixinhao:'asan'},
            {pic:'image/header/b.jpg',name:'Candy',weixinhao:'asan'},
            {pic:'image/header/c.jpg',name:'Calen',weixinhao:'asan'},
        ]
      },
      {
        key:'D',
        people:[
            {pic:'image/header/1.jpg',name:'Dmy',weixinhao:'asan'},
            {pic:'image/header/3.jpg',name:'Dndy',weixinhao:'asan'},
            {pic:'image/header/4.jpg',name:'Dlen',weixinhao:'asan'},
        ]
      },
      {
        key:'E',
        people:[
            {pic:'image/header/5.jpg',name:'Ella',weixinhao:'asan'},
            {pic:'image/header/6.jpg',name:'Endy',weixinhao:'asan'},
            {pic:'image/header/7.jpg',name:'Elen',weixinhao:'asan'},
        ]
      },
      {
        key:'F',
        people:[
            {pic:'image/header/a.jpg',name:'Bob',weixinhao:'asan'},
            {pic:'image/header/b.jpg',name:'Body',weixinhao:'asan'},
            {pic:'image/header/c.jpg',name:'Bettery',weixinhao:'asan'},
        ]
      },
       {
        key:'G',
        people:[
            {pic:'image/header/a.jpg',name:'Bob',weixinhao:'asan'},
            {pic:'image/header/b.jpg',name:'Body',weixinhao:'asan'},
            {pic:'image/header/c.jpg',name:'Bettery',weixinhao:'asan'},
        ]
      },
       {
        key:'H',
        people:[
            {pic:'image/header/a.jpg',name:'Bob',weixinhao:'asan'},
            {pic:'image/header/b.jpg',name:'Body',weixinhao:'asan'},
            {pic:'image/header/c.jpg',name:'Bettery',weixinhao:'asan'},
        ]
      },
    ];
  var y = {
    getAllContacts:function(){
      return contactsList;
    }
  }
  return y;
}])

  wechat.controller('lianxirenCtrl',['$scope','$y',function($scope,$y){
    $scope.lianxiren = $y.getAllContacts();
  }]);

  wechat.controller('contactsCtrl',['$scope','$routeParams','$y',function($scope,$routeParams,$y){
  var contactsList=$y.getAllContacts();
  var id = $routeParams.id;
  $scope.person = contactsList[id].people;
  $scope.name =person.name;
  $scope.image= person.pic;
  $scope.weixinhao = person.weixinhao;
  }])

  wechat.controller('frendCtrl',['$scope',function($scope){

  }]);
  wechat.controller('faxianCtrl',['$scope',function($scope){

  }]);

  wechat.controller('meCtrl',['$scope',function($scope){

  }]);

  
  wechat.directive('uqTitle',[function(){
    return {
      replace:true,
      restrict:'EAC',//E A C M
      templateUrl:'views/uq-title.html',
      link:function($scope,elem){
        $('.drop').addClass('ng-hide');
        $('.add').on('click',function(){
          $('.drop').toggleClass('ng-hide');
          return false;
        })
        $(document).on('click',function(){
          $('.drop').addClass('ng-hide');
        })
      }
    }
  }])
  wechat.directive('uqTabBar',[function(){
    return {
      replace:true,
      restrict:'E',
      templateUrl:'views/uq-tab-bar.html'
    }
  }]);

 wechat.directive('uqList',[function(){
    return {
        restrict:'E',
        replace:true,
        templateUrl:'views/uq-list.html',
        link:function($scope,el){
          if(localStorage.scroll){
            setTimeout(function(){
              $('.content').scrollTop(localStorage.scroll);
            },0)
          }
          var pos = {};
          $('#lianxiren .chat-item').each(function(){
            pos[$(this).attr('data-key')] = $(this).position().top;
            // console.log(pos)
          })
          el.on('click','.uq-list-item',function(){
            // console.log(1)
            var top = pos[$.trim($(this).text())];
            $('.content').animate({scrollTop:top});
            localStorage.scroll = top;
          })
        }
      }
}])


  wechat.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
      controller:'weixinCtrl',
      templateUrl:'views/weixin.html'
    }).when('/weixin',{
      controller:'weixinCtrl',
      templateUrl:'views/weixin.html'
    }).when('/weixin/:id',{
        controller:'liaotianCtrl',
        templateUrl:'views/liaotian.html'
      }).when('/lianxiren',{
      controller:'lianxirenCtrl',
      templateUrl:'views/lianxiren.html'
    }).when('/lianxiren/:id',{
        controller:'contactsCtrl',
        templateUrl:'views/contacts.html'
      }).when('/faxian',{
      controller:'faxianCtrl',
      templateUrl:'views/faxian.html'
    }).when('/faxian/:id',{
        controller:'frendCtrl',
        templateUrl:'views/frend.html'
      }).when('/me',{
      controller:'meCtrl',
      templateUrl:'views/me.html'
    }).otherwise({
      redirectTo:'/'
    });
  }])
