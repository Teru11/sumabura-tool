SELECT 
	mynum, -- 自分番号
  myname, -- 自分名前	
  fnum, -- 相手番号	
  fname, -- 相手名前
  fryaku, -- 相手略称	
  win, -- 勝数
  loss, -- 負数	
  taisaku -- 対策	
FROM
  sumabura.win_loss_manager
WHERE
  myryaku = ?
ORDER BY
  win DESC,
  loss ASC,
  fnum ASC