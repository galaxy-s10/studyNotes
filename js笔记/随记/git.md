## 分支操作

- 新建分支

  > git branch 新分支名
  >
  > 如果当前是在master分支，执行git branch 新分支名，就是在master分支下新建分支；如果当前是在dev分支，执行git branch 新分支名，就是在dev分支下新建分支
  >
  
- 切换分支

  > git checkout 分支名

- 重命名分支

  > git branch -m 旧分支名 新分支名

- 删除分支

  > git branch -d 分支名

- 查看远程分支

  > git branch -a

- 查看所有远程分支

  > git branch -r

- 创建并切换分支

  > git checkout -b 新分支名

- 创建并切换远程分支

  > git checkout -b 新分支名 远程分支名
  >
  > 如git checkout -b dev origin/develop

- 查看每一个分支的最后一次提交

  > git branch -v

- 查看本地分支和远程分支的跟踪关系

  > git branch -vv

- 查看点线图

  > git log --graph

## 跟踪远程分支

克隆时自动将创建好的`master`分支追踪`origin/master`分支

```bash
git clone 服务器地址
```

在远程分支的基础上建立`develop`分支，并且让`develop`分支追踪`origin/develop`远程分支。

```bash
git checkout -b develop origin/develop
```

## 日志