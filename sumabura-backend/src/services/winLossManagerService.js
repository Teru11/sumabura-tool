import { getWinLossFighter } from '../repositories/winLossManagerRepository.js';

export async function fetchWinLossFighter(useid, fid) {
    return await getWinLossFighter(useid, fid);
}