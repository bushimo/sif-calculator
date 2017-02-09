/**
 * LPについて
 * 
 * @param  int rank Rank
 * @return int
 */
function getLpByRank(rank) {
    if (rank === 1) {
        return 25;
    }
    if (rank > 1 && rank <= 300) {
        if (rank % 2 === 0) {
            return getLpByRank(1) + rank / 2;
        }
        return getLpByRank(rank - 1);
    }
    if (rank > 300 && rank <= 800) {
        if ((rank - 300) % 3 === 0) {
            return getLpByRank(300) + (rank - 300) / 3;
        }
        return getLpByRank(rank - 1);
    }
    if (rank > 800) {
        return getLpByRank(800);
    }
}

/**
 * 友達の上限について
 * 
 * @param  int rank Rank
 * @return int
 */
function getFriendsByRank(rank) {
    if (rank === 1) {
        return 10;
    }
    if (rank > 1 && rank <= 50) {
        if (rank % 5 === 0) {
            return getFriendsByRank(1) + rank / 5;
        }
        return getFriendsByRank(rank - 1);
    }
    if (rank > 50 && rank <= 840) {
        if ((rank - 50) % 10 === 0) {
            return getFriendsByRank(50) + (rank - 50) / 10;
        }
        return getFriendsByRank(rank - 1);
    }
    if (rank > 840) {
        return getFriendsByRank(840);
    }
}

module.exports = {
    getLpByRank: getLpByRank,
    getFriendsByRank: getFriendsByRank
};
