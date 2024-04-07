---------------------------------------------------------------------------------
-- ファイターリストテーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS sumabura.fighter_list;

-- テーブル作成
CREATE TABLE sumabura.fighter_list(
    -- 番号
    fnum INTEGER NOT NULL
    -- 名前
    , fname VARCHAR(30) NOT NULL
    -- 略称
    , fryaku VARCHAR(20) NOT NULL
    -- 行動
    , fact VARCHAR(1000)

    , PRIMARY KEY(fnum)
);

-- 論理名付与
COMMENT ON TABLE sumabura.fighter_list IS 'ファイターリスト';
COMMENT ON COLUMN sumabura.fighter_list.fnum IS '番号';
COMMENT ON COLUMN sumabura.fighter_list.fname IS '名前';
COMMENT ON COLUMN sumabura.fighter_list.fryaku IS '略称';
COMMENT ON COLUMN sumabura.fighter_list.fact IS '行動';


--INDEX追加
CREATE INDEX Index_fighter_list ON sumabura.fighter_list (fryaku);

---------------------------------------------------------------------------------
-- プレイヤー管理テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS sumabura.myfighters;

-- テーブル作成
CREATE TABLE sumabura.myfighters(
    -- 番号
    fnum INTEGER NOT NULL
    -- 名前
    , fname VARCHAR(30) NOT NULL
    -- 略称
    , fryaku VARCHAR(20) NOT NULL
    -- 色
    , fColor VARCHAR(8)
    -- 現レート
    , current_rate INTEGER
    -- 前回レート
    , history_rate1 INTEGER
    -- 前々回レート
    , history_rate2 INTEGER

    , PRIMARY KEY(fnum)
);

-- 論理名付与
COMMENT ON TABLE sumabura.myfighters IS 'プレイヤー管理';
COMMENT ON COLUMN sumabura.myfighters.fnum IS '番号';
COMMENT ON COLUMN sumabura.myfighters.fname IS '名前';
COMMENT ON COLUMN sumabura.myfighters.fryaku IS '略称';
COMMENT ON COLUMN sumabura.myfighters.fColor IS '色';
COMMENT ON COLUMN sumabura.myfighters.current_rate IS '現レート';
COMMENT ON COLUMN sumabura.myfighters.history_rate1 IS '前回レート';
COMMENT ON COLUMN sumabura.myfighters.history_rate2 IS '前々回レート';

--INDEX追加
CREATE INDEX Index_myfighters ON sumabura.myfighters (fryaku);

---------------------------------------------------------------------------------
-- 勝率管理テーブル
---------------------------------------------------------------------------------
-- 存在する場合、テーブル削除
DROP TABLE IF EXISTS sumabura.win_loss_manager;

-- テーブル作成
CREATE TABLE sumabura.win_loss_manager(
    -- 自分番号
    mynum INTEGER NOT NULL
    -- 自分名前
    , myname VARCHAR(30) NOT NULL
    -- 自分略称
    , myryaku VARCHAR(20) NOT NULL
    -- 相手番号
    , fnum INTEGER NOT NULL
    -- 相手名前
    , fname VARCHAR(30) NOT NULL
    -- 相手略称
    , fryaku VARCHAR(20) NOT NULL
    -- 勝数
    , win INTEGER
    -- 負数
    , loss INTEGER

    -- 対策
    , taisaku VARCHAR(1000)

    , PRIMARY KEY(mynum,fnum)
);

-- 論理名付与
COMMENT ON TABLE sumabura.win_loss_manager IS '勝率管理';
COMMENT ON COLUMN sumabura.win_loss_manager.mynum IS '自分番号';
COMMENT ON COLUMN sumabura.win_loss_manager.myname IS '自分名前';
COMMENT ON COLUMN sumabura.win_loss_manager.myryaku IS '自分略称';
COMMENT ON COLUMN sumabura.win_loss_manager.fnum IS '相手番号';
COMMENT ON COLUMN sumabura.win_loss_manager.fname IS '相手名前';
COMMENT ON COLUMN sumabura.win_loss_manager.fryaku IS '相手略称';
COMMENT ON COLUMN sumabura.win_loss_manager.win IS '勝数';
COMMENT ON COLUMN sumabura.win_loss_manager.loss IS '負数';
COMMENT ON COLUMN sumabura.win_loss_manager.taisaku IS '対策';

--INDEX追加
CREATE INDEX Index_win_loss_manager ON sumabura.win_loss_manager (myryaku,fryaku);