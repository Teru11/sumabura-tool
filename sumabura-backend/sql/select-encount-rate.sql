SELECT 
  wt.fnum,
  wt.fname,
  wt.fryaku,
  SUM(wt.win + wt.loss) As encount
FROM
  sumabura.win_loss_manager As wt 
GROUP BY
 wt.fnum,
 wt.fname,
 wt.fryaku
ORDER BY
  wt.fnum ASC