import { selectFighterId } from '../repositories/fighterMasterRepo.js';
import { selectWinLossTable } from '../repositories/winLossTableRepo.js';

/** 勝率表を取得 */
export async function fetchWinLossTable(nickname) {
    /** useid取得 */
    let useid = null;
    if ( nickname ) {
        useid = await selectFighterId(nickname);
    }

    /** 勝率表取得 */
    return await selectWinLossTable(useid);
}