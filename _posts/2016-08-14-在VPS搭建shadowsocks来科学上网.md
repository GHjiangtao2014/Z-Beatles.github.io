---
layout: post
title: ��VPS�shadowsocks����ѧ����
category: Python
tags: [Python]
---


֮ǰһֱ��ʹ����ѵ�ss�����Ƿ����������ٶ�ʵ���ǲ��ɹ�ά�����Ծ����Լ��VPS����ǽ������׼����[���߹�](https://bandwagonhost.com/)���򣬲����������ҲҪ$19.9/Y���������ⷢ�� GitHub Education ������ѧ���ĸ�����һ���ɹ����뵽Github Student pack���Ϳ��Ի��$50�����ϳ�ֵ��$5��ע��������$10,��ʱ�˻�һ����$65������������õ�VPS $5һ���£�����ʹ��һ�갡����ֱ����ҵ֮ǰ��һֱ��Promo Code���͡��Ǿ�ԶԶ��ֹ���һ���ˣ��Ƽ��������������ڣ��п�ѧ������Ҫ��С���ʳ�ô˽̡̳�
���ǵõ�Student Developer PackʱGit�������ʼ��Ĳ������ݣ�

> Spread the word: we love giving educational discounts to students, teachers, administrators, and researchers! Please send them to: 
https://education.github.com 

����ů�İ�~~~ҵ�����ģ�����
������̲ο��������ݣ�

## Student Developer Pack

�������ѧ���Ļ�������ǰ�� [GitHub](https://education.github.com/)�������û��GitHub�ʺţ���ע��GitHub��ע����ɺ���I am a student��дѧ����֤��Ϣ��Verify academic statusһ��ѡ��
I don't have a school-issued email����һ����ʹ��edu�����ύ���뵱��ͱ��ܾ��ˣ�ò�ƹ���edu����û�й���������Ȼ���ϴ����ѧ��֤��Ƭ������֤������ѧ�����ɡ�ʣ�µľ��������ĵȴ��ˣ����˵��˽ӽ�2�������յ�ȷ������~~

##  Digital Ocean

### ע��DO�ʺ�

����ע��Digital Ocean�˺š����Ե���ҵ�[��������](https://m.do.co/c/6d3c33c4b39e)ע�ᣬ�����ͻ��յ�$10�Ľ��������ǽ������������޷���Digital Ocean�ϴ�����������������Ҫ�����ÿ�����ʹ��PayPal������п���PayPal��Ҫ֧��$5�������ע�����̡�������paypal�˺��ϰ���һ�������Ŀ�������ģ�$5�����ʴ�ţ�33��һ��ɡ�
������Ѿ�������˵�һ����Student Developer Pack����ô������ע��ɹ�����Settings->Billing���ҵ�Promo Code����������Student Developer Pack��õ�ѧ���Ż��룬��ֵ50��������ڌ�˿ѧ����˵���Ǳʲ�С����Ŀ��

### ����VPS

Ȼ����Ϳ��Դ������VPS�ˣ��SS������ѡ�� $5/mon ������Ͷ˵����ã��������н�վ������������Ļ�����ѡ�񡣾�������San Francisco�Ļ����ӳ���ͣ�ƽ����230ms���ҡ���Singapore�Ļ����ӳ���280ms������5%���ҵĶ����ʡ����Ծ������δ��������������´����ص��ڣ��������ѡ����ʹ��San Francisco�Ľڵ㡣�������ϵͳ�Ļ�����ѡ�����ubuntu�ģ�������ϲ��ѡ��ɡ�

## ShadowSocks

### SS����
[ShadowSocks](https://github.com/shadowsocks)�ǿ�ѧ��������������Github�Ͻӽ�1.4W��Star��ʹ�õ��˼��ࡢӰ�켫��������Ը���ƽ̨��֧��Ҳ�ǳ��ã�Ŀǰ����Windows/Androidƽ̨�϶�����˿�ѧ���������Ĵ��

### ����shadowsocks�����

�����droplet�Ŀ�������ϣ����acces���ٵ��console access����Զ���ն˵����ӡ�  
���ν�����Ҫ����ԭʼ���˺����룬�˺���root���������ע���������ҵ����ڴ�����droplet���������䣩��������ԭʼ���˺������ϵͳ�������ٴ�����ԭʼ���������ı����룬������Ҫ�ٴ������������룬��һ����ԭʼ���룬�ڶ����������޸ĺ����롣

Tips:������ķ�����IP��ַ�����ÿͻ��˻��õ���

### ��VPS�ϰ�װshadowsocks

�ڷ������������ָ�װpip���ߣ�Ȼ��ʹ��pip��װshadowsocks��

```
apt-get install python-pip
pip install shadowsocks

```

### ����shadowsocks����

��װ���֮����Ҫ����json�ļ������÷������Ĳ������������£�
 
```
vi  /etc/shadowsocks.json
```
�༭���ļ�,�������£�

```
{
    "server":"0.0.0.0",
    "server_port":9898,   #����˿ںżǺã����ÿͻ��˻��õ�
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"password",  #�����ס�����ÿͻ��˻��õ�
    "timeout":300,
    "method":"aes-256-cfb"  #���ܷ�ʽ
}
```

Tips:��� i ����༭ģʽ,�༭��ɺ�Esc�˳��༭������:wq!�˳����档


### ��������˵�SS����


```
ssserver -c /etc/shadowsocks.json 
```

###  SS�ͻ�������

ǰ��GitHub�йܵ�[ShadowSocks](https://github.com/shadowsocks)��Ŀ������Ӧ�ͻ��ˡ�
���������windows�汾��[���ص�ַ](https://github.com/shadowsocks/shadowsocks-csharp/releases/download/2.5.6/Shadowsocks-win-2.5.6.zip)

###  �ͻ�������

�༭������->��ӷ�����->�޸�������:

```
��������ַ����ķ�������ַ
�������˿ڣ�"server_port"
���룺 "yourpassword"
���ܣ� "aes-256-cfb"
```

������ɺ�ѡ���������Ϳ��Է�����������ȡ������Ҫ����Դ�ˡ�

> �������������Ի��߸������š����Ź�������Դ��Ч���õ�ԭ����ҪSS�ʺŷ���Ŀ��Է����ʼ�������Ҫ��ʱ�ʺš�

----------------Emailto: waynechu@waynechu.cn----------------
