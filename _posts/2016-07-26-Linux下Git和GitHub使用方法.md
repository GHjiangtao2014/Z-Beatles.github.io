---
layout: post
title: Linux下Git和GitHub使用方法
category: git & github
tags: [git & github]
---

## Linux下Git和GitHub环境的搭建

### 安装前的准备

* 检查是否安装ssh,如果没有则安装
* 检查是否存在ssh公钥

```
cd ~/.ssh
```

### 安装Git

```
sudo apt-get install git
```

### 生成ssh公钥

```linux
ssh-keygen -t rsa -C "your_email@youremail.com"
```

### 将公钥添加到github

打开github，找到账户里面添加SSH，把~/.ssh/idrsa.pub的内容复制到key里面。

### 测试是否生效

```
ssh -T git@github.com
balabala...
//输入yes
Hi username! 
You've successfully authenticated, but GitHub does not provide shell access.
//连接成功
```

### 配置Git的配置文件

```
//配置用户名
git config --global user.name "your name" 
//配置email
git config --global user.email "your email" 
```

## github的使用

### 利用Git从本地上传到GitHub

```
cd your-repo
//生成.git文件
git init
//创建一个本地仓库origin
git remote add origin git@github.com:yourName/yourRepo.git
//添加xxx到本地仓库，也可使用 'git add .' 来自动判断要添加那些文件
git add xxx 
//添加到本地仓库
git commit -m "提交说明"
//提交到远程仓库
git push origin master 
```

### 从GitHub克隆项目到本地

```
//先clone url
git "git clone https://github.com/xxx/xxx.git"
//更新本地仓库
git fetch origin
//更新的内容合并到本地分支
git merge origin/master
//如果不想手动去合并，这个命令可以拉取最新版本并自动合并
git pull <本地仓库> master
```

### GitHub的分支管理

```
//创建一个本地分支
git branch newbranch
//将本地分支同步到GitHub上面 （origin 是默认的远程版本库名称）
git push origin master=git push origin master:master=$ git push git@github.com:Z-Beatles/Z-Beatles.github.io.git master
//切换到新建立的分支
git checkout <新分支名>
//为你的分支加入一个新的远程端
git remote add <远程端名字> <地址>
//查看当前仓库有几个分支
git branch
//从本地删除一个分支
git branch -d <分支名称>
//同步到GitHub上面删除这个分支
git push <本地仓库名>:<分支名>

```
### 远程推送
git push origin master
origin指定了你要push到哪个remote
master其实是一个“refspec”，正常的“refspec”的形式为”+<src>:<dst>”，冒号前表示local branch的名字，冒号后表示remote repository下 branch的名字。注意，如果你省略了<dst>，git就认为你想push到remote repository下和local branch相同名字的branch。听起来有点拗口，再解释下，push是怎么个push法，就是把本地branch指向的commit push到remote repository下的branch
