-- 勝率表
select
    um.useid
    , fm.fname
    , sum(wm.win_cnt) as win_cnt
    , sum(wm.loss_cnt) as loss_cnt
    , um.current_rate
    , hrs.history_rate1
    , hrs.history_rate2 
from
    dev.used_fighters_manager as um 
    inner join dev.fighter_master as fm 
        on fm.id = um.useid 
    inner join dev.win_loss_manager as wm 
        on wm.useid = um.useid 
    left join ( 
        select
            hr.useid
            , (array_agg(hr.rate order by hr.history_rate_date desc)) [1] as history_rate1
            , (array_agg(hr.rate order by hr.history_rate_date desc)) [2] as history_rate2 
        from
            dev.history_rate as hr 
        group by
            hr.useid
    ) hrs 
        on um.useid = hrs.useid 
where
    um.del_flg = false 
group by
    um.useid
    , um.current_rate
    , hrs.history_rate1
    , hrs.history_rate2
    , fm.fname 
order by
    um.current_rate;
