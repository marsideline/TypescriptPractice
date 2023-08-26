# TypeScriptアプリケーション開発環境

このプロジェクトは、Dockerを使用してTypeScriptで動作するWebアプリケーションの環境を構築するものです。
[Vite](https://ja.vitejs.dev/)による自動ビルドや自動ブラウザリフレッシュ機能も統合されています。

## 前提条件

- DockerとDocker Composeがインストールされていること
- Node.js (ローカルでのパッケージインストールのため)

## セットアップ方法

1. リポジトリをクローンまたはダウンロードします。

   ```bash
   git clone [リポジトリURL]
   ```

2. プロジェクトのルートディレクトリに移動します。

   ```bash
   cd [プロジェクト名]
   ```

3. 必要なnpmパッケージをインストールします。

   ```bash
   npm install
   ```

4. Dockerコンテナをビルドします。

   ```bash
   docker compose build
   ```

5. Dockerコンテナを起動します。

   ```bash
   docker compose up -d
   ```

6. ブラウザで`http://localhost:5173`にアクセスします。ロゴマークと「Vite + TypeScript」の画面が表示されれば成功です。

7. サービス起動時に`vite --host`が実行されるため、変更はリアルタイムで反映します。

8. コンテナを停止させる場合

   ```bash
   docker-compose stop
   ```

## 開発のヒント

- `src/`ディレクトリ内のTypeScriptファイルを編集すると、[Vite](https://ja.vitejs.dev/)の機能によってアプリケーションが自動で再起動されます。

## 参考記事
[DockerでReact + TypeScript + Viteの開発環境を構築し、プロジェクトを作成する手順](https://yurupro.cloud/3348/)