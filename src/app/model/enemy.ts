export class Enemy{

    constructor(
        name:string,
        iconUrl:string,
        hp:number){
        this.name = name;
        this.iconUrl = iconUrl;
        this.hitPoint = hp
    }
    
    // アイコン
    iconUrl:string;
    
    // 名前
    name:string;
    
    // コメント
    comment:string;
    
    // 必殺技
    deathblow:string;

    // 攻撃力
    offensivePower:number;

    // 防御力
    defensivePower:number;

    // 体力
    hitPoint:number;
}