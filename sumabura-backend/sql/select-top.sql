SELECT 
  mt.fnum,               -- ファイター番号 
  mt.fname,              -- ファイター名 
  mt.fryaku,             -- ファイター略称
  mt.fcolor,             -- ファイター色
  SUM(wt.win) AS win,    -- 勝数
  SUM(wt.loss) AS loss,  -- 負数
  mt.current_rate,       -- 現レート
  mt.history_rate1,      -- 前回レート
  mt.history_rate2       -- 前々回レート
FROM
  sumabura.myfighters As mt
  INNER JOIN sumabura.win_loss_manager As wt 
  ON (mt.fnum = wt.mynum)
GROUP BY
  mt.fnum                -- ファイター番号
ORDER BY
  mt.current_rate DESC;   -- 現レート