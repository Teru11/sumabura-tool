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

-- データ挿入
INSERT INTO sumabura.fighter_list VALUES ('1', 'マリオ', 'マリオ', E'');
INSERT INTO sumabura.fighter_list VALUES ('2', 'ドンキーコング', 'DK', E'');
INSERT INTO sumabura.fighter_list VALUES ('3', 'リンク', 'リンク', E'');
INSERT INTO sumabura.fighter_list VALUES ('4', 'サムス・ダークサムス', 'ダムス', E'');
INSERT INTO sumabura.fighter_list VALUES ('6', 'ヨッシー', 'ヨッシー', E'');
INSERT INTO sumabura.fighter_list VALUES ('7', 'カービィ', 'CB', E'');
INSERT INTO sumabura.fighter_list VALUES ('8', 'フォックス', 'FX', E'急降下回避\r\n弱、横強、DA,、降り空前、空後\r\n崖狩り空前、空上\r\n\r\n復帰阻止：NB\r\n下強＋空前\r\n空N＋上スマ（100%) 　※横スマ（85%)');
INSERT INTO sumabura.fighter_list VALUES ('9', 'ピカチュウ', 'ピカ', E'');
INSERT INTO sumabura.fighter_list VALUES ('10', 'ルイージ', 'L', E'');
INSERT INTO sumabura.fighter_list VALUES ('11', 'ネス', 'ネス', E'');
INSERT INTO sumabura.fighter_list VALUES ('12', 'キャプテン・ファルコン', 'CF', E'');
INSERT INTO sumabura.fighter_list VALUES ('13', 'プリン', 'プリン', E'');
INSERT INTO sumabura.fighter_list VALUES ('14', 'ピーチ・デイジー', 'ピチデ', E'');
INSERT INTO sumabura.fighter_list VALUES ('16', 'クッパ', 'カメ', E'');
INSERT INTO sumabura.fighter_list VALUES ('17', 'アイスクライマー', 'アイクラ', E'');
INSERT INTO sumabura.fighter_list VALUES ('18', 'シーク', 'シーク', E'');
INSERT INTO sumabura.fighter_list VALUES ('19', 'ゼルダ', 'ゼルダ', E'');
INSERT INTO sumabura.fighter_list VALUES ('20', 'ドクターマリオ', 'ドクマリ', E'');
INSERT INTO sumabura.fighter_list VALUES ('21', 'ピチュー', 'ピチュー', E'');
INSERT INTO sumabura.fighter_list VALUES ('22', 'ファルコ', 'ファルコ', E'');
INSERT INTO sumabura.fighter_list VALUES ('23', 'マルス', 'マルス', E'');
INSERT INTO sumabura.fighter_list VALUES ('24', 'ルキナ', 'ルキナ', E'');
INSERT INTO sumabura.fighter_list VALUES ('25', 'こどもリンク', 'ヤンリン', E'');
INSERT INTO sumabura.fighter_list VALUES ('26', 'ガノンドルフ', 'ガノン', E'');
INSERT INTO sumabura.fighter_list VALUES ('27', 'ミュウツー', 'M2', E'');
INSERT INTO sumabura.fighter_list VALUES ('28', 'ロイ', 'ロイ', E'');
INSERT INTO sumabura.fighter_list VALUES ('29', 'クロム', 'クロム', E'');
INSERT INTO sumabura.fighter_list VALUES ('30', 'Mr.ゲーム&ウォッチ', 'ゲッチ', E'');
INSERT INTO sumabura.fighter_list VALUES ('31', 'メタナイト', 'メタ', E'');
INSERT INTO sumabura.fighter_list VALUES ('32', 'ピット・ブラックピット', 'ブラピ', E'');
INSERT INTO sumabura.fighter_list VALUES ('34', 'ゼロスーツサムス', 'ゼロサム', E'');
INSERT INTO sumabura.fighter_list VALUES ('35', 'ワリオ', 'ワリオ', E'');
INSERT INTO sumabura.fighter_list VALUES ('36', 'スネーク', 'スネーク', E'');
INSERT INTO sumabura.fighter_list VALUES ('37', 'アイク', 'アイクラ', E'');
INSERT INTO sumabura.fighter_list VALUES ('38', 'ポケモントレーナー', 'ポケトレ', E'');
INSERT INTO sumabura.fighter_list VALUES ('39', 'ディディーコング', 'DD', E'');
INSERT INTO sumabura.fighter_list VALUES ('40', 'リュカ', 'リュカ', E'中距離時：PKF、空前、横強（基本、前に飛ばないように）\r\n密着時：下強、空N、弱\r\n\r\n撃墜：PKS、投げ、PKF（基本、復帰阻止）\r\n※スマッシュは当たらないので基本使わない。');
INSERT INTO sumabura.fighter_list VALUES ('41', 'ソニック', 'ソニック', E'');
INSERT INTO sumabura.fighter_list VALUES ('42', 'デデデ', 'DDD', E'');
INSERT INTO sumabura.fighter_list VALUES ('43', 'ピクミン＆オリマー', 'ピクオリ', E'');
INSERT INTO sumabura.fighter_list VALUES ('44', 'ルカリオ', 'ルカリオ', E'');
INSERT INTO sumabura.fighter_list VALUES ('45', 'ロボット', 'ロボット', E'中距離を保ち続ける。（地上戦が多い）\r\nコマのタイミング（焦らし）\r\n地上：前ステ下強、前ステ掴み、DA、横強\r\n空中：空N＋空前\r\n\r\n頻繁：コマ、下強、空前\r\n空N、空後は置き技\r\n横Bはあんまり降らない。\r\n');
INSERT INTO sumabura.fighter_list VALUES ('46', 'トゥーンリンク', 'トリン', E'');
INSERT INTO sumabura.fighter_list VALUES ('47', 'ウルフ', 'ウルフ', E'');
INSERT INTO sumabura.fighter_list VALUES ('48', 'むらびと', 'むらびと', E'');
INSERT INTO sumabura.fighter_list VALUES ('49', 'ロックマン', '岩', E'');
INSERT INTO sumabura.fighter_list VALUES ('50', 'Wii Fit トレーナー', 'フィットレ', E'');
INSERT INTO sumabura.fighter_list VALUES ('51', 'ロゼッタ＆チコ', 'ロゼチコ', E'');
INSERT INTO sumabura.fighter_list VALUES ('52', 'リトルマック', 'リトマ', E'');
INSERT INTO sumabura.fighter_list VALUES ('53', 'ゲッコウガ', 'ゲコ', E'');
INSERT INTO sumabura.fighter_list VALUES ('54', '格闘Mii', 'カクミ', E'');
INSERT INTO sumabura.fighter_list VALUES ('55', '剣術Mii', 'ケンミ', E'');
INSERT INTO sumabura.fighter_list VALUES ('56', '射撃Mii', 'シャゲミ', E'');
INSERT INTO sumabura.fighter_list VALUES ('57', 'パルテナ', 'パルテナ', E'');
INSERT INTO sumabura.fighter_list VALUES ('58', 'パックマン', '金玉', E'');
INSERT INTO sumabura.fighter_list VALUES ('59', 'ルフレ', 'ルフレ', E'');
INSERT INTO sumabura.fighter_list VALUES ('60', 'シュルク', '手越', E'');
INSERT INTO sumabura.fighter_list VALUES ('61', 'クッパJr.', 'パジュニ', E'');
INSERT INTO sumabura.fighter_list VALUES ('62', 'ダックハント', '犬', E'');
INSERT INTO sumabura.fighter_list VALUES ('63', 'リュウ', 'リュウ', E'小足＋中足\r\n\r\n＜遠距離＞\r\n波動拳：反対方向から下回りで打ちたい方向向ける\r\n竜巻旋風脚：逆方向に下から向ける。\r\n\r\n＜撃墜＞\r\n空後\r\n昇竜拳：最風と一緒');
INSERT INTO sumabura.fighter_list VALUES ('64', 'ケン', '剣', E'');
INSERT INTO sumabura.fighter_list VALUES ('65', 'クラウド', 'クラウド', E'');
INSERT INTO sumabura.fighter_list VALUES ('66', 'カムイ', 'カムイ', E'');
INSERT INTO sumabura.fighter_list VALUES ('67', 'ベヨネッタ', 'ベヨネッタ', E'');
INSERT INTO sumabura.fighter_list VALUES ('68', 'インクリング', 'イカ', E'');
INSERT INTO sumabura.fighter_list VALUES ('69', 'リドリー', 'リドリー', E'密着を避ける。\r\n相手の方向に体を向け続ける。（撃墜時は背中を向ける）\r\n下強or横強\r\n下投げ＋空前　or　D\r\n下投げ + 空N　＋弱（高パーセントを狙えるが難しい）\r\n\r\n＜小技＞\r\n空前崖上がりがファイターの中で強い。\r\n大ジャンプ空前急降下　＋　弱が通る。（難）\r\n横B　＋　横B　＋空N　＋ジャンプ２回で戻る。\r\n\r\n＜弱点＞\r\n軽い\r\n密着に弱い\r\nコンボ耐性ない\r\n復帰阻止に弱い');
INSERT INTO sumabura.fighter_list VALUES ('70', 'シモン・リヒター', 'シモリヒ', E'');
INSERT INTO sumabura.fighter_list VALUES ('72', 'キングクルール', 'キンクル', E'');
INSERT INTO sumabura.fighter_list VALUES ('73', 'しずえ', 'しずえ', E'');
INSERT INTO sumabura.fighter_list VALUES ('74', 'ガオガエン', 'ガエン', E'');
INSERT INTO sumabura.fighter_list VALUES ('75', 'パックンフラワー', '草', E'');
INSERT INTO sumabura.fighter_list VALUES ('76', 'ジョーカー', 'J', E'');
INSERT INTO sumabura.fighter_list VALUES ('77', '勇者', '勇者', E'');
INSERT INTO sumabura.fighter_list VALUES ('78', 'バンジョー＆カズーイ', 'バンカズ', E'');
INSERT INTO sumabura.fighter_list VALUES ('79', 'テリー', 'テリー', E'');
INSERT INTO sumabura.fighter_list VALUES ('80', 'ベレトス', 'ベレトス', E'');
INSERT INTO sumabura.fighter_list VALUES ('81', 'ミェンミェン', 'メン', E'');
INSERT INTO sumabura.fighter_list VALUES ('82', 'スティーブ', 'スティーブ', E'下投げ＋横スマ\r\nクラフトボックスの移動：ガード＋B');
INSERT INTO sumabura.fighter_list VALUES ('83', 'セフィロス', 'セフィロス', E'');
INSERT INTO sumabura.fighter_list VALUES ('84', 'ホムヒカ', 'ホムヒカ', E'');
INSERT INTO sumabura.fighter_list VALUES ('85', 'カズヤ', 'カズヤ', E'');
INSERT INTO sumabura.fighter_list VALUES ('86', 'ソラ', 'ソラ', E'');


