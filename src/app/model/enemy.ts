export class Enemy{

    constructor(
        name:string,
        iconUrl:string,
        hp:number,
        skills:Array<any>){
        this.name = name;
        this.iconUrl = iconUrl;
        this.hitPoint = hp
        this.skills = skills
    }
    
    // アイコン
    iconUrl:string;
    
    // 名前
    name:string;
    
    // コメント
    comment:string;
    
    // 技
    skills:Array<any>;

    // 攻撃力
    offensivePower:number;

    // 防御力
    defensivePower:number;

    // 体力
    hitPoint:number;
}