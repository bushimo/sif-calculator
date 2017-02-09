const round = require('lodash/round');

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

/**
 * EXPについて
 * 
 * @param  int rank Rank
 * @return int
 */
function getExpByRank(rank) {
    switch (rank) {
        case 1:
            return 6;
        case 2:
            return 6;
        case 3:
            return 8;
        case 4:
            return 10;
        case 5:
            return 13;
        case 6:
            return 16;
        case 7:
            return 20;
        case 8:
            return 24;
        case 9:
            return 28;
        case 10:
            return 34;
        case 11:
            return 39;
        case 12:
            return 46;
        case 13:
            return 52;
        case 14:
            return 60;
        case 15:
            return 68;
        case 16:
            return 76;
        case 17:
            return 85;
        case 18:
            return 94;
        case 19:
            return 104;
        case 20:
            return 115;
        case 21:
            return 125;
        case 22:
            return 137;
        case 23:
            return 149;
        case 24:
            return 162;
        case 25:
            return 174;
        case 26:
            return 188;
        case 27:
            return 203;
        case 28:
            return 217;
        case 29:
            return 232;
        case 30:
            return 247;
        case 31:
            return 264;
        case 32:
            return 281;
        case 33:
            return 298;
        case 34:
            return 310;
    }
    if (rank > 35 && rank < 100) {
        return round(round(34.45 * rank - 551, 1) / 2);
    }
    if (rank >= 100) {
        return round(round(34.45 * rank - 551, 1));
    }
}

module.exports = {
    getLpByRank: getLpByRank,
    getFriendsByRank: getFriendsByRank,
    getExpByRank: getExpByRank
};
