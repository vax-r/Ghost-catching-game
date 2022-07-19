# 網頁鬼抓人遊戲

參與者
---
鄭以新
楊薇蓉
王冠程

流程
---
首先將此專案資料夾clone下來
之後安裝nginx做為http server並做以下改動
要改動的檔案如下

```
$ vim /etc/nginx/sites-available/dafault
```

將nginx的default路徑導向此專案資料夾的絕對路逕

```
root \<the path of your directory\>
index html/index.html
```

之後測試nginx是否正常運作
如果是的話就重啟它

```
$ sudo nginx -t
$ sudo systemctl restart nginx
```

如此一來就完成了此網頁鬼抓人的部署