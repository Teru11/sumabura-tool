SELECT 
  wt.mynum,    -- 自分番号 
  wt.fnum,    -- ファイター番号 
  wt.fname,   -- ファイター名 
  wt.win,     -- 勝数
  wt.loss,    -- 負数
  wt.taisaku, -- 対策
  ft.fact     -- 行動
FROM
  sumabura.win_loss_manager As wt
  INNER JOIN sumabura.fighter_list As ft 
  ON ( wt.fnum = ft.fnum )
WHERE
  wt.myryaku = ?
  AND wt.fryaku = ?
