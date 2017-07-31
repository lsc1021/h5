<template>
  <div id="navbar">
<nav class="navbar navbar-default">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <!--当你切换到移动端或屏幕比较小的时候显示的logo-->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
                <!--显示在页面的logo-->
                <router-link class="navbar-brand" to="/" tag="a"> AMZ </router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <router-link to="/home" tag="li"> <a> 注册 </a> </router-link>
                    <router-link to="/special" tag="li"> <a> 登录 </a> </router-link>
                    <router-link to="/special" tag="li"> <a> 演讲集 </a> </router-link>
                    <router-link to="/special" tag="li"> <a> 活动 </a> </router-link>
                    <router-link to="/special" tag="li"> <a> 关于 </a> </router-link>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">用户信息 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">用户资料</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">登出</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
  </div>
</template>
<script>

    export default {
  name: 'navbar'
}
</script>

<style>
</style>
