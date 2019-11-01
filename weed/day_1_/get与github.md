# get 与github

### 命令
    git bash here 打开控制台
    输入 git init
    git commit -a -m '注释'  直接提交到历史区 得先提交一次之后才能用

·    各个区的区别
    git rm -r --cached 暂存区和历史区的区别

    git  diff工作区和暂存区的区别
    
    git  diff   master//查看 工作区和历史区的区别
    撤销回滚：
    git reflog
    git reset --hard 版本id、


    1创建一个项目
    2git clone  项目地址
    3git add .  git commit -m ''
    4git push origin master




    绑定秘钥
        ssh-keygen -t rsa -C  '邮箱名'

        下载完安装git之后
        git config --global user.name  用户名
        git config --global user.email  邮箱
        //初始化个人信息  一个电脑 初始化一次即可

        git config --list  查看个人信息 推出按Q退出查看
        
        git init    把本地文件夹初始化成 git仓库
        //工作区  缓存区  历史区、
        //平时写代码都是在工作区
        git status  查看本地仓库的状态
                红色 工作区有修改没提交到缓存区
                绿色 工作区的修改提交到缓存区 但是缓存区的内容没提交到历史区
        git add .   把所有文件的修改都提交到缓存区
        git commit -m '备注'    把 缓存区 的内容都提交到 历史区

        //把本地历史区的代码提交到  远程仓库 (gitH   gitLab 码云)
        //首先得有远程仓库
        //把本地仓库和远程仓库建立起链接  git remote add   桥梁名 （origin） 远程仓库地址
        //git push  把本地代码提交到远程  首次push 时 需按照提示进行提交

        //提交代码流程    git add .   ----git  commit -m'备注' ---- git push

        //若多人合作  那么 提交git push 之前 一般都会要求先 git pull  下拉一下
        //git pull 是把远程的代码 下拉到本地

        //第二种建仓库套路 
        //现在远程创建一个仓库 然后通过 git clone  远程仓库 地址  的方式把远程仓库克隆到本地
        //然后再去进行代码开发 ·1


# node 
    NPM 跟着node一起安装下来的模块

    NPM 是目前世界上最大的资源管理平台

    创建项目：
        npm init -y 会生成一个packge.json的文件，这个文件中放的是所有项目配置依赖

    如何下载资源?
        npm install 资源名
            -g 全局安装
            -S 项目依赖
    下载下来自动生成node_modules 的文件 文件夹中放的就是你需要的资源

    Yarn 的安装 
        Yarn add安装程序 
        Yarn remove 要删除的程序<!--  -->