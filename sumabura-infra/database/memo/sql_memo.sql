-- 勝率表
select
    um.useid as useid
    , fm.fname as fname
    , sum(wm.win_cnt) as win_cnt
    , sum(wm.loss_cnt) as loss_cnt
    , um.current_rate as current_rate
    , um.update_date as current_rate_date
    , hrs.history_rate1 as history_rate1
    , hrs.history_rate1_date as history_rate1_date
    , hrs.history_rate2  as history_rate2
    , hrs.history_rate2_date  as history_rate2_date
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
            , (array_agg(hr.history_rate_date order by hr.history_rate_date desc)) [1] as history_rate1_date
            , (array_agg(hr.rate order by hr.history_rate_date desc)) [2] as history_rate2 
            , (array_agg(hr.history_rate_date order by hr.history_rate_date desc)) [2] as history_rate2_date
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
    , fm.fname 
    , um.current_rate
    , hrs.history_rate1
    , hrs.history_rate1_date
    , hrs.history_rate2
    , hrs.history_rate2_date
order by
    um.current_rate;