-- 本番からデータコピー

-- ファイターリストテーブル
TRUNCATE TABLE dev.fighter_master;
INSERT INTO dev.fighter_master SELECT * FROM public.fighter_master;

-- マッチング履歴テーブル
TRUNCATE TABLE dev.history_match;
INSERT INTO dev.history_match SELECT * FROM public.history_match;

-- レート履歴テーブル
TRUNCATE TABLE dev.history_rate;
INSERT INTO dev.history_rate SELECT * FROM public.history_rate;

-- プレイヤー管理テーブル
TRUNCATE TABLE dev.used_fighters_manager;
INSERT INTO dev.used_fighters_manager SELECT * FROM public.used_fighters_manager;

-- 勝率管理テーブル
TRUNCATE TABLE dev.win_loss_manager;
INSERT INTO dev.win_loss_manager SELECT * FROM public.win_loss_manager;