import * as fighterMasterService from '../../src/services/fighterMasterService.js';
import * as updateService from '../../src/services/updateService.js';
import pool from '../../src/utils/db.js';

afterAll(async () => {
    // データベース接続のクリーンアップ
    await pool.end();
});

describe('fighterMasterService 更新テスト', () => {
    const testUseid = 90;        // テスト用のuseid
    const testFid = 12;          // テスト用のfid
    const testNickname = 'CF';   // テスト用のfid

    // テスト用のデータを削除
    afterAll(async () => {
        await pool.query(`
            delete from ${pool.options.schema}.used_fighters_manager 
            where useid = ${testUseid};
        `);
        await pool.query(`
            delete from ${pool.options.schema}.win_loss_manager 
            where useid = ${testUseid};
        `);
        await pool.query(`
            delete from ${pool.options.schema}.history_rate 
            where useid = ${testUseid};
        `);
        await pool.query(`
            delete from ${pool.options.schema}.history_match 
            where useid = ${testUseid};
        `);
        await pool.query(`
            update ${pool.options.schema}.fighter_master set nickname = '${testNickname}' 
            where id = ${testFid};
        `);
    });

    /** テスト */
    test('使用ファイター追加 正常系', async () => {
        await fighterMasterService.insertFighter(testUseid);
        // 更新後のデータをチェック
        const res1 = await pool.query(`
                select * from ${pool.options.schema}.used_fighters_manager 
                where useid = ${testUseid};
            `);
        // データあり
        expect(res1).toBeDefined();

        // 更新後のデータをチェック
        const res2 = await pool.query(`
                select * from ${pool.options.schema}.win_loss_manager 
                where useid = ${testUseid};
            `);
        // データあり
        expect(res2).toBeDefined();
    });

    test('現在レートを更新 正常系', async () => {
        const updateCurrentRate = 1400; // 更新レート
        await updateService.updateCurrentRate(testUseid, updateCurrentRate);
        // 更新後のデータをチェック
        const res = await pool.query(`
                select current_rate from ${pool.options.schema}.used_fighters_manager 
                where useid = ${testUseid};
            `);
        expect(res.rows[0].current_rate).toBe(updateCurrentRate);
    });

    test('レートを保存 正常系', async () => {
        await updateService.saveRate(testUseid);
        // 更新後のデータをチェック
        const res = await pool.query(`
                select * from ${pool.options.schema}.history_rate 
                where useid = ${testUseid} 
                order by history_rate_date desc 
                limit 1;
            `);
        // データあり
        expect(res).toBeDefined();
    });

    test('メモを更新 正常系', async () => {
        const updateMemo = '更新テスト';
        await updateService.updateMemo(testUseid, testFid, updateMemo);
        // 更新後のデータをチェック
        const res = await pool.query(`
                select memo 
                from ${pool.options.schema}.win_loss_manager 
                where useid = ${testUseid} and fid = ${testFid};
            `);
        expect(res.rows[0].memo).toBe(updateMemo);
    });

    test('勝敗を更新 勝利 正常系', async () => {
        // 勝利
        const updateResult = 'win';
        const checkSql = `
                        select win_cnt 
                        from ${pool.options.schema}.win_loss_manager 
                        where useid = ${testUseid} and fid = ${testFid};
                        `;

        // 更新後のデータをチェック
        const resBefore = await pool.query(checkSql);
        await updateService.updateWinLossResult(testUseid, testFid, updateResult);
        // 更新後のデータをチェック
        const resAfter = await pool.query(checkSql);
        expect(resBefore.rows[0].win_cnt).not.toBe(resAfter.rows[0].win_cnt);
        // マッチング履歴テーブルをチェック
        const res = await pool.query(`
                select result 
                from ${pool.options.schema}.history_match 
                where useid = ${testUseid} and fid = ${testFid} 
                order by history_match_date desc 
                limit 1;
            `);
        expect(res.rows[0].result).toBe(updateResult);
    });

    test('勝敗を更新 敗北 正常系', async () => {
        // 敗北
        const updateResult = 'loss';
        const checkSql = `
                        select loss_cnt 
                        from ${pool.options.schema}.win_loss_manager 
                        where useid = ${testUseid} and fid = ${testFid};
                        `;

        // 更新後のデータをチェック
        const resBefore = await pool.query(checkSql);
        await updateService.updateWinLossResult(testUseid, testFid, updateResult);
        // 更新後のデータをチェック
        const resAfter = await pool.query(checkSql);
        expect(resBefore.rows[0].loss_cnt).not.toBe(resAfter.rows[0].loss_cnt);
        // マッチング履歴テーブルをチェック
        const res = await pool.query(`
                select result 
                from ${pool.options.schema}.history_match 
                where useid = ${testUseid} and fid = ${testFid} 
                order by history_match_date desc 
                limit 1;
            `);
        expect(res.rows[0].result).toBe(updateResult);
    });

    test('略称名を変更 正常系', async () => {
        const updateNickname = 'CFCF';
        await updateService.updateNickname(testFid, updateNickname);
        // 更新後のデータをチェック
        const res = await pool.query(`
                select nickname 
                from ${pool.options.schema}.fighter_master 
                where id = ${testFid};
            `);
        expect(res.rows[0].nickname).toBe(updateNickname);
    });

    test('使用ファイター削除 正常系', async () => {
        await fighterMasterService.deleteFighter(testUseid);
        // 更新後のデータをチェック
        const res = await pool.query(`
                select del_flg 
                from ${pool.options.schema}.used_fighters_manager 
                where useid = ${testUseid};
            `);
        expect(res.rows[0].del_flg).toBe(true);
    });
});