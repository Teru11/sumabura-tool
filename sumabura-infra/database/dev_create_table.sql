---------------------------------------------------------------------------------
-- ファイターマスタテーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS dev.fighter_master;
-- テーブル作成
CREATE TABLE dev.fighter_master(
    id          INTEGER     NOT NULL,   -- ファイターID
    fname       VARCHAR(30) NOT NULL,   -- ファイター名
    nickname    VARCHAR(20) NOT NULL,   -- 略称
    PRIMARY KEY(id)
);
-- 論理名付与
COMMENT ON TABLE dev.fighter_master IS 'ファイターマスタ';
COMMENT ON COLUMN dev.fighter_master.id IS 'ファイターID';
COMMENT ON COLUMN dev.fighter_master.fname IS 'ファイター名';
COMMENT ON COLUMN dev.fighter_master.nickname IS '略称';
-- INDEX追加
CREATE INDEX index_fighter_master ON dev.fighter_master(nickname);

---------------------------------------------------------------------------------
-- プレイヤー管理テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS dev.used_fighters_manager;
-- テーブル作成
CREATE TABLE dev.used_fighters_manager(
    useid           INTEGER     NOT NULL,                -- ファイターID
    current_rate    INTEGER     NOT NULL,                -- 現レート
    del_flg         BOOLEAN     NOT NULL DEFAULT FALSE,  -- 削除フラグ
    PRIMARY KEY(useid)
);
-- 論理名付与
COMMENT ON TABLE dev.used_fighters_manager IS 'プレイヤー管理';
COMMENT ON COLUMN dev.used_fighters_manager.useid IS 'ファイターID';
COMMENT ON COLUMN dev.used_fighters_manager.current_rate IS '現レート';
COMMENT ON COLUMN dev.used_fighters_manager.del_flg IS '削除フラグ';

---------------------------------------------------------------------------------
-- 勝率管理テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS dev.win_loss_manager;
-- テーブル作成
CREATE TABLE dev.win_loss_manager(
    useid       INTEGER NOT NULL,   -- 自分ファイターID
    fid         INTEGER NOT NULL,   -- 相手ファイターID
    win_cnt     INTEGER NOT NULL,   -- 勝数
    loss_cnt    INTEGER NOT NULL,   -- 負数
    memo        VARCHAR(100),       -- メモ
    PRIMARY KEY(useid, fid)
);
-- 論理名付与
COMMENT ON TABLE dev.win_loss_manager IS '勝率管理';
COMMENT ON COLUMN dev.win_loss_manager.useid IS '自分ファイターID';
COMMENT ON COLUMN dev.win_loss_manager.fid IS '相手ファイターID';
COMMENT ON COLUMN dev.win_loss_manager.win_cnt IS '勝数';
COMMENT ON COLUMN dev.win_loss_manager.loss_cnt IS '負数';
COMMENT ON COLUMN dev.win_loss_manager.memo IS 'メモ';

---------------------------------------------------------------------------------
-- マッチング履歴テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS dev.history_match;
-- テーブル作成
CREATE TABLE dev.history_match(
    history_match_date  TIMESTAMP   NOT NULL,   -- マッチング履歴日時
    useid               INTEGER     NOT NULL,   -- 自分ファイターID
    fid                 INTEGER     NOT NULL,   -- 相手ファイターID
    result              VARCHAR(2)  NOT NULL,   -- 結果
    PRIMARY KEY(history_match_date, useid)
);
-- 論理名付与
COMMENT ON TABLE dev.history_match IS 'マッチング履歴テーブル';
COMMENT ON COLUMN dev.history_match.history_match_date IS 'マッチング履歴日時';
COMMENT ON COLUMN dev.history_match.useid IS '自分ファイターID';
COMMENT ON COLUMN dev.history_match.fid IS '相手ファイターID';
COMMENT ON COLUMN dev.history_match.result IS '結果';

---------------------------------------------------------------------------------
-- レート履歴テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS dev.history_rate;
-- テーブル作成
CREATE TABLE dev.history_rate(
    history_rate_date   TIMESTAMP   NOT NULL,   -- レート履歴日時
    useid               INTEGER     NOT NULL,   -- 自分ファイターID
    rate                INTEGER     NOT NULL,   -- レート
    PRIMARY KEY(history_rate_date, useid)
);
-- 論理名付与
COMMENT ON TABLE dev.history_rate IS 'レート履歴テーブル';
COMMENT ON COLUMN dev.history_rate.history_rate_date IS 'レート履歴日時';
COMMENT ON COLUMN dev.history_rate.useid IS '自分ファイターID';
COMMENT ON COLUMN dev.history_rate.rate IS 'レート';