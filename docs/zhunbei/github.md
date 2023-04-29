# 准备

1. 注册 GitHub 账号
   xn--github-oy7ry56d.com,点击"Sign up"注册按钮。
   选择用户名、输入 email、密码并验证,点击"Create an account"。
   验证邮箱地址,完成注册。
2. 创建 SSH 密钥
   打开 Git Bash,输入:
   bash
   ssh-keygen -t rsa -C "your_email@example.com"
   连续 3 次回车。这会在用户.ssh 目录下生成 id_rsa 和 id_rsa.pub 两个 SSH 密钥文件。
   SSH 密钥用于连接 GitHub 而不需要在每次推送时输入用户名和密码。
3. 登录 GitHub 并添加 SSH 密钥
   打开 GitHub,点击头像下拉菜单,选择"Settings"。
   选择"SSH and GPG keys",点击"New SSH key"按钮。
   在"Title"字段输入标题,打开 id_rsa.pub 文件,复制内容并粘贴到"Key"字段。
   点击"Add SSH key"以添加密钥。
4. 创建仓库(Repository)
   登陆 GitHub 后,点击右上角的"+"号,选择"New repository"。
   输入仓库名称,选择节点初始化状态(空仓库或带有 README)。
   选择仓库可见性(公开 or 私有),clicked"Create repository"。
   仓库创建成功,显示仓库主页。
5. 关联本地仓库与 GitHub 仓库
   在 Git Bash 中,输入:

```markdown
bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
为当前用户设置用户名和邮箱。
然后输入:
bash
git init
git add .
git commit -m "Initial commit"
初始化本地仓库,并提交第一个版本。
最后输入:
bash
git remote add origin git@github.com:username/repository_name.git
git push -u origin master
```

关联本地仓库与 GitHub 仓库,并推送本地 master 分支。
至此,GitHub 上的仓库和本地仓库就关联起来了,以后可以直接使用 git push 和 git pull 与 GitHub 仓库同步!
通过以上流程,我们完成了 GitHub 注册、创建项目、添加 SSH 密钥和关联本地仓库等操作。理解了 GitHub 的基本使用流程和 Git 命令,这为我们后续的项目开发制定了基础。
