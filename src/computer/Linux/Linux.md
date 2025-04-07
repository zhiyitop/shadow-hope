# 外核

## Linux目录
### / 根目录
```text
根目录是整个系统最重要的一个目录，因为不但所有的目录都是由根目录衍生出来的，
同时根目录也与开机、还原、系统修复等操作有关。
因此 FHS 标准建议：根目录（/）所在分区应该越小越好，
且应用程序所安装的软件最好不要与根目录放在同一个分区内，
保持根目录越小越好。如此不但性能较好，根目录所在的文件系统也比较不容易发生问题。
```

### /bin (执行文件目录)
```text
系统有很多放置执行文件的目录，但 /bin 比较特殊。
因为 /bin 放置的是在单用户维护模式下还能被操作的命令。
在 /bin 下面的命令可以被 root 与一般账号所使用，
主要有 cat，chmod，chown，date，mv，mkdir，cp，bash 等常用的命令。
```

### /boot（开机文件目录）
```text
这个目录主要放置开机会使用到的文件，包括 Linux 内核文件以及开机菜单与开机所需配置文件等。
```

### /dev（驱动设备目录）
```text
在 Linux 系统上，任何设备与接口设备都是以文件的形式存在于这个目录当中的。
你只要通过访问这个目录下面的某个文件，就等于访问某个设备。
比较重要的文件有 /dev/null，/dev/zero，/dev/tty 等
```

### /etc（配置文件目录）
```text
系统主要的配置文件几乎都放置在这个目录内，例如人员的账号密码文件、各种服务的起始文件等。
一般来说，这个目录下的各个文件属性是可以让一般用户查阅的，但只有 root 有权利修改。
比较重要的文件有 /etc/init.d，/etc/inittab，/etc/sysconfig 等
```

### /home（用户主文件夹）
```text
这是系统默认的用户主文件夹（home directory）。
在你创建一个一般用户账号时，默认的用户主文件夹都会规范到这里来。
~ 代表当前用户的主文件夹。
```

### /lib（系统函数库）
```text
系统的函数库非常多，而 /lib 放置的则是在开机时会用到的函数库，
以及在 /bin 或 /sbin 下面的命令会调用的函数库而已。
* 你可以把函数库想象成是“外挂”，某些命令必须要有这些“外挂”才能够顺利完成程序的执行之意
```

### /media（媒体设备暂挂区）
```text
media 是“媒体”的英文，顾名思义，这个 /media 下面放置的就是可删除的设备。
包括软盘、光盘、DVD等设备都暂时挂载于此。
常见的文件名有 /media/floppy，/media/cdrom 等
```

### /mnt（额外设备暂挂区）
```text
如果你想要暂时挂载某些额外的设备，一般建议你可以放置到这个目录中。
在比较早的时候，这个目录的用途与 /media 相同。
只是有了 /media 之后，这个目录就被用来暂时挂载用了。
```

### /opt (第三方软件安装目录)
```text
这个目录是用于安装第三方应用程序的，可以由用户自己指定安装位置。
当需要卸载第三方应用程序时，可以直接删除安装目录，而不影响系统其它任何设置
```

### /root（管理员主文件夹）
```text
系统管理员（root）的主文件夹。
之所以放在这里，是因为如果进入单用户维护模式而仅挂载根目录时，
该目录就能够拥有root的主文件夹，所以我们会希望root的主文件夹与根目录放置在同一个分区中
```

### /sbin（重要系统执行文件）
```text
Linux 有非常多的命令是来设置系统环境的，这些命令只有 root 才能够利用来“设置”系统，
其他用户最多只能用来“查询”而已。放在 /sbin 下面的为开机过程中所需的，
里面包括了开机、修复、还原系统所需要的命令。
```

### /srv（服务数据存放目录）
```text
srv 可以视为“service”的缩写，是一些网络服务启动之后，这些服务所需要取用的数据目录。
常见的服务例如 WWW、FTP 等。
举例来说，WWW 服务需要的网页数据就可以放置在 /srv/www/ 里
```

### /tmp（临时文件存放目录）
```text
这是让一般用户或者是正在执行的程序暂时放置文件的地方。
这个目录是任何人都能够访问，所以你需要定期清理一下。
当然，重要数据不可放置在此目录，因为系统会不定期将 /tmp 目录下的数据全部删除。
```

### /lost+found
```text
这个目录是使用标准的 ext2/ext3 文件系统格式才会产生的一个目录，
目的相当于文件系统发生错误时，将一些丢失的片段放置到这个目录下。
这个目录通常会在分区的最顶层存在。
```

### /proc（虚拟文件系统目录）
```text
这个目录本身是一个虚拟文件系统（virtual filesystem）。
它放置的数据都是在内存当中，例如系统内核、进程、外部设备以及网络状态等。
因为这个目录下的数据都是在内存当中的，所以本身并不占任何硬盘空间。
```

### /sys（虚拟文件系统目录）
```text
这个目录其实跟 /proc 非常类似，也是一个虚拟的文件系统，主要也是记录与内核相关的信息。
包括目前已加载的内核模块与内核检测到的硬件设备信息等。这个目录同样不占硬盘容量。
```

### /usr（系统软件资源目录）
```text
很多小白都会误以为 /usr 是 user 的缩写，其实 usr 是 Unix Software Resource 的缩写，
也就是 “UNIX 操作系统软件资源” 所放置的目录，而不是用户的数据，这点需要注意。
FHS 建议所有软件开发者应该将他们的数据合理地分别放置到这个目录下的子目录，
而不要自行新建该软件的独立目录
```

### /var（常态可变动文件目录）
```text
该目录主要针对常态性可变动文件，
包括缓存（cache）、登录文件（log file）以及某些软件运行所产生的文件，
包括程序文件（lock file、run file），或者例如MySQL数据库的文件等。

如果 /usr 是安装时会占用较大硬盘容量的目录，
那么 /var 就是在系统运行后才会渐渐占用硬盘容量的目录。
```

## Linux系统管理程序

> 系统管理演变之路 sysvinit -> upstart -> systemd

## Linux环境配置

### 网卡配置
```bash
cd /etc/sysconfig/network-scripts
vi ifcfg-ens33

网卡配置说明
TYPE=Ethernet #网络类型 Ethernet
PROXY_METHOD=none #
BROWSER_ONLY=no
BOOTPROTO=static #ip的配置方法 (none | static | bootp | dhcp)  不使用协议 | 静态分配IP | BOOTP协议 | DHCP协议
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=ens33 # 设备名称
UUID=ac9b66bf-74fb-4bda-b89f-c66ff84c9571 # 唯一标识
DEVICE=ens33 #接口(设备、网卡)
ONBOOT=yes #开机启动
BOOTPROTO=static #静态IP
IPADDR=192.168.58.100 #本机地址
NETMASK=255.255.255.0 #子网掩码
GATEWAY=192.168.58.2 #默认网关
DNS1=8.8.8.8
DNS2=114.114.114.114
```

### yum环境配置
```bash
# 备份原有的yum配置
mv CentOS-Base.repo CentOS-Base.repo.bak
# 下载阿里云的yum源配置
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
# 更新缓存
yum makecache
```



### 基础软件工具安装
```bash
## 基本工具
yum install vim 
yum install gcc
yum install git

## 网络工具包
yum install net-tools
yum install telnet
yum install wget
yum install nmap
```


### 配置ssh登录
```bash
## 修改root可以登录
vim /etc/ssh/sshd_config

PasswordAuthentication yes
PermitRootLogin yes

systemctl restart sshd
```

## Linux命令

### 网络管理


## shell脚本

> shell脚本本质上是一组命令，批处理

### shell脚本的解释器

- 配置解释器
```bash
/etc/shells
```

- 常见的解释器
```bash
/bin/sh
/bin/bahs
/bin/nologin
/usr/bin/sh
/usr/bin/bahs
/usr/sbin/nologin
/bin/tcsh
/bin/csh
```

- 查看当前解释器
```bash
echo $SHELL
```

### 脚本结构
```bash
脚本声明
注释信息
可执行语句

#!/bin/bash
##注释
...
...
```

### shell的预定义变量

### 文件测试
```bash
[ -d /etc/fstab ]		测试是否为目录
echo $?							输出上一个测试的结果


[ -f /etc/fstab ]
echo $?
```

### 逻辑测试
```bash
[ -e /dev/cdrom ] && echo "Exist"
```

### 整数值比较
```bash
[ 10 -gt 10 ]
```


### 字符串比较
```bash
[ -z $String ]
```

### if
```bash
#!/bin/bash
DIR="/media/cdrom"
if [ !-e $DIR ]
  then
  	mkdir -p $DIR
fi
```
```bash
#!/bin/bash
ping -c 3 -i 0.2 -W 3 $1 &> /dev/null
if [ $? -eq 0 ]
  then
  	echo "Host $1 is up"
  else
  	echo "Host $1 is down"
fi
```

### for
```bash
#!/bin/bash
read -p "Enter The Users Password:" PASSWD
for UNAME in "cat users.txt"
do
	id $UNAME &> /dev/null
  if [ $? -eq 0 ]
  	then
    	echo "Already exists"
    else
    	useradd $UNAME &> /dev/null
    echo "$PASSWD" | passwd -stdin $UNAME &> /dev/null
    if
      then
        echo "Create success"
      else
        echo "Create failure"
    fi
  fi
done
```

### while
```bash
#!/bin/bash
while true
do 
	echo "对"
done
```

### case
```bash
#!/bin/bash
case "$KEY" in [a-z][A-Z]
	echo "输入---"
esac
```

### 计划任务服务
```bash
at 22:30
```