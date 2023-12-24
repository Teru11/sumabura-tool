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

-- データ挿入
INSERT INTO sumabura.myfighters VALUES ('7', 'カービィ', 'CB', '#ffff00', '1269', '1261', '1220');
INSERT INTO sumabura.myfighters VALUES ('86', 'ソラ', 'ソラ', '#0000ff', '1021', '1019', '900');
INSERT INTO sumabura.myfighters VALUES ('26', 'ガノンドルフ', 'ガノン', '#800080', '856', '524', '859');
INSERT INTO sumabura.myfighters VALUES ('57', 'パルテナ', 'パルテナ', '#ff0000', '835', '831', '801');
INSERT INTO sumabura.myfighters VALUES ('12', 'キャプテン・ファルコン', 'CF', '#696969', '860', '839', '381');
INSERT INTO sumabura.myfighters VALUES ('27', 'ミュウツー', 'M2', '#ffffff', '843', '839', '750');
INSERT INTO sumabura.myfighters VALUES ('16', 'クッパ', 'カメ', '#ffff00', '737', '610', '345');


