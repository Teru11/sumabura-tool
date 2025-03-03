import { getWinLossFighter } from '../repositories/winLossManagerRepository';

export async function fetchWinLossFighter(useid, fid) {
    return await getWinLossFighter(useid, fid);
}