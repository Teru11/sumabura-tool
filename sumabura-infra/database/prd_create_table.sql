---------------------------------------------------------------------------------
-- ファイターマスタテーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS public.fighter_master;
-- テーブル作成
CREATE TABLE public.fighter_master(
    id          INTEGER     NOT NULL,
    fname       VARCHAR(30) NOT NULL,
    nickname    VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
);
-- 論理名付与
COMMENT ON TABLE public.fighter_master IS 'ファイターマスタ';
COMMENT ON COLUMN public.fighter_master.id IS 'ファイターID';
COMMENT ON COLUMN public.fighter_master.fname IS 'ファイター名';
COMMENT ON COLUMN public.fighter_master.nickname IS '略称';
-- INDEX追加
CREATE INDEX index_fighter_master ON public.fighter_master(nickname);

---------------------------------------------------------------------------------
-- プレイヤー管理テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS public.used_fighters_manager;
-- テーブル作成
CREATE TABLE public.used_fighters_manager(
    useid           INTEGER     NOT NULL,
    current_rate    INTEGER     NOT NULL DEFAULT 0,
    del_flg         BOOLEAN     NOT NULL DEFAULT FALSE,
    update_date     TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(useid)
);
-- 論理名付与
COMMENT ON TABLE public.used_fighters_manager IS 'プレイヤー管理';
COMMENT ON COLUMN public.used_fighters_manager.useid IS 'ファイターID';
COMMENT ON COLUMN public.used_fighters_manager.current_rate IS '現レート';
COMMENT ON COLUMN public.used_fighters_manager.del_flg IS '削除フラグ';
COMMENT ON COLUMN public.used_fighters_manager.update_date IS '更新日時';

---------------------------------------------------------------------------------
-- 勝率管理テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS public.win_loss_manager;
-- テーブル作成
CREATE TABLE public.win_loss_manager(
    useid       INTEGER NOT NULL,
    fid         INTEGER NOT NULL,
    win_cnt     INTEGER NOT NULL DEFAULT 0,
    loss_cnt    INTEGER NOT NULL DEFAULT 0,
    memo        VARCHAR(100),
    PRIMARY KEY(useid, fid)
);
-- 論理名付与
COMMENT ON TABLE public.win_loss_manager IS '勝率管理';
COMMENT ON COLUMN public.win_loss_manager.useid IS '自分ファイターID';
COMMENT ON COLUMN public.win_loss_manager.fid IS '相手ファイターID';
COMMENT ON COLUMN public.win_loss_manager.win_cnt IS '勝数';
COMMENT ON COLUMN public.win_loss_manager.loss_cnt IS '負数';
COMMENT ON COLUMN public.win_loss_manager.memo IS 'メモ';

---------------------------------------------------------------------------------
-- マッチング履歴テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS public.history_match;
-- テーブル作成
CREATE TABLE public.history_match(
    history_match_date  TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    useid               INTEGER     NOT NULL,
    fid                 INTEGER     NOT NULL,
    result              VARCHAR(4)  NOT NULL,
    PRIMARY KEY(history_match_date, useid)
);
-- 論理名付与
COMMENT ON TABLE public.history_match IS 'マッチング履歴テーブル';
COMMENT ON COLUMN public.history_match.history_match_date IS 'マッチング履歴日時';
COMMENT ON COLUMN public.history_match.useid IS '自分ファイターID';
COMMENT ON COLUMN public.history_match.fid IS '相手ファイターID';
COMMENT ON COLUMN public.history_match.result IS '結果';

---------------------------------------------------------------------------------
-- レート履歴テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS public.history_rate;
-- テーブル作成
CREATE TABLE public.history_rate(
    history_rate_date   TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    useid               INTEGER     NOT NULL,
    rate                INTEGER     NOT NULL,
    PRIMARY KEY(history_rate_date, useid)
);
-- 論理名付与
COMMENT ON TABLE public.history_rate IS 'レート履歴テーブル';
COMMENT ON COLUMN public.history_rate.history_rate_date IS 'レート履歴日時';
COMMENT ON COLUMN public.history_rate.useid IS '自分ファイターID';
COMMENT ON COLUMN public.history_rate.rate IS 'レート';