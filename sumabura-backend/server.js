// サーバー起動：node server.js

const express = require('express');         // Express.jsモジュールをインポート
const cors = require('cors');               // corsモジュールをインポート
const bodyParser = require('body-parser');  // body-parserモジュールをインポート
const dbAccess = require('./dbAccess');     // dbAccess.jsファイルをインポート
const logger = require('./logger');         // logger.jsファイルをインポート

/** Expressアプリケーションのインスタンスを作成 */
const app = express();
/** 任意のポート番号 */
const port = 3000;
/** ドメイン */
const rootpath = '/sumabura';

// CORSを有効にする
app.use(cors());

// body-parserを使用してリクエストのボディをパース
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ■■■■■■■■■■■■■■■ ルーティングの設定 ■■■■■■■■■■■■■■■
/** [ トップ画面 ][ 初期表示 ][ http://localhost:3000/sumabura/top ] */
app.get(rootpath + '/top', async (req, res) => {
    logger.info('[ トップ画面 ][ 初期表示 ][ 開始 ]');
    try {
        // データ取得
        const data = await dbAccess.getSelectDataList('top', req);

        if (Array.isArray(data)) {
            logger.info('データ取得件数: ' + data.length + ' 件');
        } else {
            logger.info('データが取得できませんでした。');
        }

        // レスポンス設定
        res.status(200).json(data);
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ 初期表示 ][ 終了 ]');
    }
});

/** [ トップ画面 ][ マイファイター検索表示 ][ http://localhost:3000/sumabura/top-myInfo ] */
app.post(rootpath + '/top-myInfo', async (req, res) => {
    logger.info('[ トップ画面 ][ マイファイター検索表示 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.fryaku];
        // データ取得
        const data = await dbAccess.getSelectDataList('top-myInfo', parms);

        if (Array.isArray(data)) {
            logger.info('データ取得件数: ' + data.length + ' 件');
        } else {
            logger.info('データが取得できませんでした。');
        }

        // レスポンス設定
        res.status(200).json(data);

    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ マイファイター検索表示 ][ 終了 ]');
    }
});

/** [ トップ画面 ][ レート更新 ][ http://localhost:3000/sumabura/update-currentRate ] */
app.post(rootpath + '/update-currentRate', async (req, res) => {
    logger.info('[ トップ画面 ][ レート更新 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.currentRate, req.body.fryaku];

        logger.info('【更新データ】');
        logger.info('自分:' + req.body.fryaku + '  レート:' + req.body.currentRate);

        // 更新処理
        await dbAccess.UpdateQuery('currentRate', parms);

        // レスポンス設定
        res.status(200).send('Update Successful');
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ レート更新 ][ 終了 ]');
    }
});

/** [ トップ画面 ][ レート更新 ][ http://localhost:3000/sumabura/save-currentRate ] */
app.post(rootpath + '/save-currentRate', async (req, res) => {
    logger.info('[ トップ画面 ][ レート保存 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.fryaku, req.body.fryaku];

        // 更新処理
        await dbAccess.UpdateQuery('save-currentRate', parms);

        // レスポンス設定
        res.status(200).send('Update Successful');
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ レート保存 ][ 終了 ]');
    }
});

/** [ トップ画面 ][ 相手情報検索 ][ http://localhost:3000/sumabura/top-enemy-info ] */
app.post(rootpath + '/top-enemy-info', async (req, res) => {
    logger.info('[ トップ画面 ][ 相手情報検索 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.myryaku, req.body.fryaku];
        // データ取得
        const data = await dbAccess.getSelectDataList('top-enemy-info', parms);

        if (Array.isArray(data)) {
            logger.info('データ取得件数: ' + data.length + ' 件');
        } else {
            logger.info('データが取得できませんでした。');
        }

        // レスポンス設定
        res.status(200).json(data);
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ 相手情報検索 ][ 終了 ]');
    }
});

/** [ トップ画面 ][ 相手情報検更新 ][ http://localhost:3000/sumabura/top-enemy-info ] */
app.post(rootpath + '/top-enemy-info-update', async (req, res) => {
    logger.info('[ トップ画面 ][ 相手情報更新 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.win,
        req.body.loss,
        req.body.myryaku,
        req.body.fryaku,];

        logger.info('【更新データ】');
        logger.info('自分:' + req.body.myryaku + '  相手:' + req.body.fryaku);
        logger.info('勝数:' + req.body.win + '  負数:' + req.body.loss);

        // 更新処理
        await dbAccess.UpdateQuery('top-enemy-info', parms);

        // レスポンス設定
        res.status(200).send('Update Successful');
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ 相手情報更新 ][ 終了 ]');
    }
});

/** [ トップ画面 ][ ファイターメモ更新 ][ http://localhost:3000/sumabura/top-updateMemo ] */
app.post(rootpath + '/top-updateMemo', async (req, res) => {
    logger.info('[ トップ画面 ][ ファイターメモ更新 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.fact, req.body.fnum];

        // 更新処理
        await dbAccess.UpdateQuery('top-updateMemo', parms);

        // レスポンス設定
        res.status(200).send('Update Successful');
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ ファイターメモ更新 ][ 終了 ]');
    }
});

/** [ トップ画面 ][ 対策更新 ][ http://localhost:3000/sumabura/top-updateTaisaku ] */
app.post(rootpath + '/top-updateTaisaku', async (req, res) => {
    logger.info('[ トップ画面 ][ 対策更新 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.taisaku,
        req.body.mynum,
        req.body.fnum];

        // 更新処理
        await dbAccess.UpdateQuery('top-updateTaisaku', parms);

        // レスポンス設定
        res.status(200).send('Update Successful');
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ トップ画面 ][ 対策更新 ][ 終了 ]');
    }
});

/** [ 勝率表画面 ][ 略称検索 ][ http://localhost:3000/sumabura/winloss-myInfo ] */
app.post(rootpath + '/winloss-myInfo', async (req, res) => {
    logger.info('[ 勝率表画面 ][ 略称検索 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.fryaku];
        // データ取得
        const data = await dbAccess.getSelectDataList('winloss-myInfo', parms);

        if (Array.isArray(data)) {
            logger.info('データ取得件数: ' + data.length + ' 件');
        } else {
            logger.info('データが取得できませんでした。');
        }

        // レスポンス設定
        res.status(200).json(data);
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ 勝率表画面 ][ 略称検索 ][ 終了 ]');
    }
});

/** [ ファイター一覧画面 ][ 初期表示 ][ http://localhost:3000/sumabura/fighter-list ] */
app.post(rootpath + '/fighter-list', async (req, res) => {
    logger.info('[ ファイター一覧画面 ][ 初期表示 ][ 開始 ]');
    try {
        let sqlFileName;

        // 条件パラメータ設定
        if (req.body.sort == "fnum") {
            sqlFileName = 'fighter-list-fnum';
        } else {
            sqlFileName = 'fighter-list-total';
        }

        // データ取得
        const data = await dbAccess.getSelectDataList(sqlFileName);

        if (Array.isArray(data)) {
            logger.info('データ取得件数: ' + data.length + ' 件');
        } else {
            logger.info('データが取得できませんでした。');
        }

        // レスポンス設定
        res.status(200).json(data);
    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ ファイター一覧画面 ][ 初期表示 ][ 終了 ]');
    }
});

/** [ 汎用 ][ 出現率取得 ][ http://localhost:3000/sumabura/encount-rate ] */
app.post(rootpath + '/encount-rate', async (req, res) => {
    logger.info('[ 汎用 ][ 略称検索 ][ 開始 ]');
    try {
        // 条件パラメータ設定
        const parms = [req.body.fryaku];
        // データ取得
        const data = await dbAccess.getSelectDataList('encount-rate', parms);

        let totalEncount = 0;
        let fEncount = 0;
        if (Array.isArray(data)) {
            logger.info('データ取得件数: ' + data.length + ' 件');

            data.forEach(item => {
                // 全エンカウント算出
                totalEncount += Number(item.encount);

                if (item.fryaku == req.body.fryaku) {
                    // 対象のエンカウント算出
                    fEncount = item.encount;
                }
            });

        } else {
            logger.info('データが取得できませんでした。');
        }

        // 出現率　計算
        const resultEncount = Math.round((fEncount / totalEncount) * 1000);
        logger.info('出現率: ' + resultEncount + ' %');

        // レスポンス設定
        res.status(200).json({ resultEncount });

    } catch (error) {
        logger.error('Error:' + error);
        res.status(500).send('Internal Server Error');
    } finally {
        logger.info('[ 汎用 ][ 出現率取得 ][ 終了 ]');
    }
});

// サーバーの起動（アプリケーションを指定のポートでリッスン）
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});