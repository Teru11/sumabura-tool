UPDATE 
  sumabura.win_loss_manager 
SET 
  win = ?   -- 勝数
  , loss = ?    -- 負数
WHERE
 myryaku = ? AND fryaku = ?
