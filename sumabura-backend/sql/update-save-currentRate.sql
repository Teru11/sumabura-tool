UPDATE 
  sumabura.myfighters
SET 
  history_rate2 = history_rate1    -- 前回レート
WHERE
 fryaku = ?;

UPDATE 
  sumabura.myfighters
SET 
  history_rate1 = current_rate    -- 現レート
WHERE
 fryaku = ?;
