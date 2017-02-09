# SIF Calculator
[![npm version](https://badge.fury.io/js/sif-calculator.svg)](https://badge.fury.io/js/sif-calculator)

ラブライブ！スクールアイドルフェスティバルのjavascriptヘルパー

### インストール
`npm install sif-calculator`

### 使用法

```javascript
const sifCalculator = require('sif-calculator');
```

#### LPについて
LPはRank 1で25から始まり、2の倍数で1ずつ増加していく。(例:Rank 2=26、Rank 4=27…)   
ただしRank 300を超えるとRankが3上がるごとに1ずつ増加していく。(例:Rank 300=175、Rank 303=176…)   
現在、1000を超えてもそちらの変化はない模様。
```javascript
const lp = sifCalculator.getLpByRank(101);
```

#### 友達の上限について
友達の上限はRank 1で10人から始まり、5の倍数で1ずつ増加していく。(例:Rank 5=11、Rank 10=12…)   
Rank 50以降はRankが10上がるごとに1ずつ増加していく。(例:Rank 50=20、Rank 60=21…)   
上限はRank 840での99人。
```javascript
const lp = sifCalculator.getFriendsByRank(101);
```

#### テストを実行する
```bash
npm install
npm test
```

### ライセンス
[MIT license](http://opensource.org/licenses/mit-license.php)