# ekubo

# [サービス概要](https://ekubo.kibe.la/notes/70)

[ekuboの5つのバリュー](https://ekubo.kibe.la/notes/41)

# Web 環境構築

## Dockerの設定

### install Docker
参照　[Install Docker Desktop for Mac | Docker Documentation ](https://docs.docker.com/docker-for-mac/install/)

### Docker のユーザー設定
Docker > Preferences > Resources
Memory: 8.0 Gib (or 4.0 Gib?)

## ekuboのセットアップ

### Clone Repository
https://github.com/deBroglieeeen/ekubo

```shell:bash
git clone git@github.com:deBroglieeeen/ekubo.git
```

## Build & Run

### docker imageをBuildしてタグ付け

```shell:bash
docker build -t ekubo:dev .
```
### 作成したdocker imageからrun

```shell:bash
docker run \
    -itd \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    ekubo:dev
```

http://localhost:3001 を開いてekuboにアクセスできます。

### パッケージの導入
[Dockerfileを書き換えます。](https://github.com/deBroglieeeen/ekubo/pull/29)

### [さらに詳しく](https://ekubo.kibe.la/notes/2)

