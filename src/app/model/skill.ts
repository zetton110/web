export class Skill{

    constructor(
        rate:number,
        effect:string,
        message:string
    ){
        this.rate = rate;
        this.effect = effect;
        this.message = message;
    }

    // 比率
    rate:number;

    //　エフェクト名
    effect:string;

    // メッセージ
    message:string;
}